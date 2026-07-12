import type { Dictionary } from "./types";

export const es: Dictionary = {
  meta: {
    title: "David Nochi — Ingeniero de IA aplicada",
    description:
      "Automatización documental (OCR), arquitecturas RAG y desarrollo acelerado con agentes de código. Ingeniero de IA aplicada en Lima, Perú.",
  },
  nav: {
    brand: "DAVID NOCHI",
    projects: "Proyectos",
    method: "Método",
    contact: "Contacto",
    langName: "ES",
    otherLangName: "EN",
    otherLangHref: "/en",
  },
  hero: {
    eyebrow: "INGENIERO DE IA APLICADA — LIMA, PERÚ",
    title: "Convierto documentos desordenados en datos confiables.",
    subtitle:
      "Automatización documental (OCR), arquitecturas RAG y desarrollo acelerado con agentes de código. Entrego en días lo que tradicionalmente toma meses.",
    ctaProjects: "Ver proyectos",
    ctaWhatsapp: "Escribirme por WhatsApp",
    docLabel: "ENTRADA — DOCUMENTO CRUDO",
    docRawLines: [
      "R.U.C. 20601234567  FACTURA ELECTRÓNICA F001-0004521",
      "CLIENTE: ......... CORP SAC   FEC.EMI: 04/07/2026",
      "IGV (18%)................. S/ 739.83",
      "TOTAL A PAGAR ............ S/ 4,850.00",
      "cond. pago: contado // moneda: PEN",
    ],
    structuredLabel: "SALIDA — DATOS ESTRUCTURADOS",
    fields: [
      { label: "ruc", value: "20601234567" },
      { label: "serie", value: "F001-0004521" },
      { label: "fecha", value: "2026-07-04" },
      { label: "total", value: "S/ 4,850.00" },
      { label: "estado", value: "✓ validado", verified: true },
    ],
    sealText: "VERIFICADO",
  },
  projects: {
    eyebrow: "PROYECTOS",
    title: "Seis expedientes en curso.",
    statusProduction: "EN PRODUCCIÓN",
    statusBuilding: "EN CONSTRUCCIÓN",
    demoLabel: "Demo",
    repoLabel: "Repositorio",
  },
  method: {
    eyebrow: "MÉTODO",
    title: "Desarrollo aumentado con agentes, con calidad verificable.",
    items: [
      { label: "TDD", text: "Los tests se escriben primero." },
      { label: "CI/CD", text: "Cada cambio pasa revisión automática." },
      {
        label: "AGENTES DE CÓDIGO",
        text: "Claude Code y Codex bajo guardrails propios.",
      },
    ],
    closing: "Metodología propia: Flujo Agentes.",
  },
  contact: {
    eyebrow: "CONTACTO",
    title: "Hablemos de tu proyecto.",
    links: {
      whatsapp: "WhatsApp",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    availability: "Lima, Perú — disponible para trabajo remoto",
    rights: "© 2026 David Nochi.",
  },
};
