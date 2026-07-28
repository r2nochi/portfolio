import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";

const contentUrl = new URL("../content/portfolio.json", import.meta.url);

async function loadItems() {
  return JSON.parse(await readFile(contentUrl, "utf8"));
}

test("el portafolio conserva el alcance aprobado de 6 productos y 2 casos", async () => {
  const items = await loadItems();

  assert.equal(items.filter((item) => item.kind === "product").length, 6);
  assert.equal(items.filter((item) => item.kind === "case-study").length, 2);
});

test("la ficha de proyecto renderiza demoUrl y repoUrl si existen", async () => {
  // Regresion: demoUrl estaba en el tipo y en los datos, pero CasePage solo
  // pintaba repoUrl. El enlace a la demo quedaba invisible en la web.
  const casePage = await readFile(
    new URL("../components/CasePage.tsx", import.meta.url),
    "utf8",
  );

  assert.match(casePage, /item\.demoUrl/, "CasePage no usa item.demoUrl");
  assert.match(casePage, /href=\{item\.demoUrl\}/, "demoUrl no se enlaza");
  assert.match(casePage, /href=\{item\.repoUrl\}/, "repoUrl no se enlaza");

  for (const locale of ["es", "en"]) {
    const dict = await readFile(
      new URL(`../lib/i18n/${locale}.ts`, import.meta.url),
      "utf8",
    );
    assert.match(dict, /demo:\s*"/, `falta la etiqueta demo en ${locale}`);
  }
});

test("cada pieza publicada declara evidencia verificable y sus limites", async () => {
  const items = await loadItems();

  for (const item of items.filter((candidate) => candidate.published)) {
    assert.ok(item.limitations.es.trim(), `${item.code} sin limites en ES`);
    assert.ok(item.limitations.en.trim(), `${item.code} sin limites en EN`);
    // Un producto publicado sin repo ni demo no es evidencia, es una promesa.
    if (item.kind === "product") {
      assert.ok(
        item.repoUrl || item.demoUrl,
        `${item.code} publicado sin repoUrl ni demoUrl`,
      );
    }
  }
});

test("cada pieza publicada tiene una ruta, evidencia y contenido bilingue", async () => {
  const items = await loadItems();
  const published = items.filter((item) => item.published);

  assert.ok(published.length >= 3);
  assert.equal(new Set(published.map((item) => item.slug)).size, published.length);

  for (const item of published) {
    assert.match(item.slug, /^[a-z0-9-]+$/);
    assert.ok(item.evidence.length > 0);
    assert.ok(item.title.es && item.title.en);
    assert.ok(item.problem.es && item.problem.en);
    assert.notEqual(item.status, "building");
  }
});

test("los casos profesionales no exponen empresas ni datos privados", async () => {
  const items = await loadItems();
  const serializedCases = JSON.stringify(
    items.filter((item) => item.kind === "case-study"),
  ).toLowerCase();

  for (const forbidden of ["onnesta", "cliente real", "arturonochi"]) {
    assert.equal(serializedCases.includes(forbidden), false);
  }
});

test("PR-02 conserva la evidencia real del MVP sin publicarlo", async () => {
  const items = await loadItems();
  const item = items.find((candidate) => candidate.code === "PR-02");

  assert.ok(item);
  assert.equal(item.status, "planned");
  assert.equal(item.published, false);
  assert.equal("demoUrl" in item, false);
  assert.equal("repoUrl" in item, false);

  for (const field of ["title", "kicker", "problem", "solution", "impact", "limitations"]) {
    assert.ok(item[field].es.trim());
    assert.ok(item[field].en.trim());
  }

  assert.match(item.problem.es, /búsqueda manual/i);
  assert.match(item.problem.es, /normativa laboral/i);
  assert.match(item.problem.en, /manual searching/i);
  assert.match(item.problem.en, /labor regulations/i);

  for (const expected of [
    /recuperación local con BM25/i,
    /MTPE/i,
    /respuesta extractiva/i,
    /página/i,
    /enlace/i,
  ]) {
    assert.match(item.solution.es, expected);
  }
  for (const expected of [
    /local BM25 retrieval/i,
    /MTPE sources/i,
    /extractive answer/i,
    /page number/i,
    /source link/i,
  ]) {
    assert.match(item.solution.en, expected);
  }

  assert.match(item.impact.es, /sin afirmar tiempos no medidos/i);
  assert.match(item.impact.en, /without claiming unmeasured time savings/i);

  assert.match(item.limitations.es, /dos publicaciones/i);
  assert.match(item.limitations.es, /benchmark/i);
  assert.match(item.limitations.es, /no es asesoría legal/i);
  assert.match(item.limitations.es, /0\.80/);
  assert.match(item.limitations.en, /two official publications/i);
  assert.match(item.limitations.en, /benchmark/i);
  assert.match(item.limitations.en, /not legal advice/i);
  assert.match(item.limitations.en, /0\.80/);
  assert.match(item.limitations.es, /source_id/i);
  assert.match(item.limitations.es, /relevancia semántica de página o fragmento/i);
  assert.match(item.limitations.en, /source_id/i);
  assert.match(item.limitations.en, /semantic relevance of a page or excerpt/i);

  assert.deepEqual(item.capabilities, [
    "Evaluation",
    "PDF ingestion",
    "Accessible interface",
    "Citations",
  ]);
  assert.deepEqual(item.stack, [
    "Python",
    "FastAPI",
    "BM25",
    "Pydantic",
    "pypdfium2",
    "Vanilla JS",
  ]);

  const evidenceValues = item.evidence.map((entry) => entry.value);
  for (const expected of [
    "20 preguntas",
    "document-level citation match 100% / coincidencia de cita a nivel de documento 100%",
    "rejection accuracy 80%",
  ]) {
    assert.ok(evidenceValues.includes(expected));
  }

  const serializedItem = JSON.stringify(item);
  assert.equal(/Embeddings|Vector search/i.test(serializedItem), false);
});

test("las siete entradas fuera de PR-02 permanecen idénticas", async () => {
  const items = await loadItems();
  const snapshot = items.filter((item) => item.code !== "PR-02");

  assert.deepEqual(
    snapshot.map((item) => item.code),
    ["PR-01", "PR-03", "PR-04", "PR-05", "PR-06", "CS-01", "CS-02"],
  );

  const digest = createHash("sha256")
    .update(JSON.stringify(snapshot))
    .digest("hex");

  // 27-jul-2026: se incorpora PR-05 (sunat-mcp).
  // 28-jul-2026: PR-01 estrena demoUrl (DocuExtract desplegado en Render).
  // 28-jul-2026: se incorpora PR-06 (anatomia-factura).
  assert.equal(digest, "3c17e7209bc30e2329f3f8ebd429813a8e2f5ef70509422f710ed30f30340124");
});
