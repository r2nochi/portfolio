import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n/types";
import ContactFooter from "./ContactFooter";
import Header from "./Header";

export default function AgenticLoopPage({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const home = locale === "en" ? "/en" : "/";
  const notes =
    locale === "en"
      ? [
          "Maximum 3 concurrent threads",
          "Depth limited to 1",
          "Human gate for secrets, cost, deploys, and destructive changes",
          "Every integration requires fresh verification",
        ]
      : [
          "Máximo 3 hilos concurrentes",
          "Profundidad limitada a 1",
          "Puerta humana para secretos, costos, despliegues y cambios destructivos",
          "Toda integración exige verificación fresca",
        ];

  return (
    <>
      <Header dict={dict} locale={locale} />
      <main className="method-page">
        <section className="method-page-hero">
          <div className="container">
            <Link className="back-link" href={home}>
              ← {dict.detail.back}
            </Link>
            <p className="eyebrow">{dict.method.eyebrow}</p>
            <h1>{dict.method.title}</h1>
            <p className="case-kicker">{dict.method.intro}</p>
            <div className="loop-diagram">
              {dict.method.stages.map((stage) => (
                <article className="loop-step" key={stage.code}>
                  <span className="mono">{stage.code}</span>
                  <h2>{stage.title}</h2>
                  <p>{stage.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container case-body">
            <div className="case-block">
              <h2>CONFIG / EXECUTORS</h2>
              <p>
                explorer · executor · qa
                <br />
                <span className="mono">gpt-5.6-terra</span>
              </p>
            </div>
            <div className="case-block">
              <h2>CONFIG / REVIEW</h2>
              <p>
                reviewer
                <br />
                <span className="mono">high reasoning · read-only</span>
              </p>
            </div>
            <div className="case-block">
              <h2>GUARDRAILS</h2>
              <ul className="evidence-list">
                {notes.map((note) => (
                  <li key={note}>
                    <span>✓</span>
                    <strong>{note}</strong>
                  </li>
                ))}
              </ul>
            </div>
            <div className="case-block">
              <h2>PRINCIPLE</h2>
              <p>
                {locale === "en"
                  ? "Spend reasoning where decisions are expensive; use economical execution where acceptance criteria are explicit."
                  : "Gastar razonamiento donde las decisiones son costosas; usar ejecución económica cuando el criterio es explícito."}
              </p>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter dict={dict} />
    </>
  );
}
