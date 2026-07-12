export type ProjectStatus = "production" | "building";

export type Project = {
  code: string;
  name: string;
  description: {
    es: string;
    en: string;
  };
  stack: string[];
  status: ProjectStatus;
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    code: "P-01",
    name: "DocuExtract",
    description: {
      es: "Extracción de datos de facturas y recibos peruanos (PDF digital y escaneado) a Excel auditable.",
      en: "Extracts data from Peruvian invoices and receipts (digital and scanned PDF) into auditable Excel.",
    },
    stack: ["Python", "FastAPI", "Tesseract", "Docker", "Azure"],
    status: "building",
    repoUrl: "https://github.com/r2nochi/docuextract",
  },
  {
    code: "P-02",
    name: "Asistente RAG normativo",
    description: {
      es: "Respuestas con citas a la fuente sobre normativa real; dice \"no lo sé\" cuando no hay evidencia.",
      en: "Answers with source citations on real regulations; says \"I don't know\" when there's no evidence.",
    },
    stack: ["Python", "Claude API", "FAISS", "ChromaDB"],
    status: "building",
  },
  {
    code: "P-03",
    name: "Radar n8n",
    description: {
      es: "Automatización que monitorea fuentes, clasifica con LLM y envía un digest diario.",
      en: "Automation that monitors sources, classifies with an LLM, and sends a daily digest.",
    },
    stack: ["n8n", "Docker", "PostgreSQL", "Claude"],
    status: "building",
  },
  {
    code: "P-04",
    name: "Suite QA Automation",
    description: {
      es: "E2E con Playwright + visual regression corriendo en CI sobre estas mismas demos.",
      en: "E2E with Playwright + visual regression running in CI against these same demos.",
    },
    stack: ["Playwright", "pytest", "GitHub Actions"],
    status: "building",
  },
  {
    code: "P-05",
    name: "Dashboard cripto en tiempo real",
    description: {
      es: "Precios en vivo por WebSockets, señales y backtesting honesto.",
      en: "Live prices over WebSockets, signals, and honest backtesting.",
    },
    stack: ["Python", "FastAPI", "WebSockets"],
    status: "building",
  },
  {
    code: "P-06",
    name: "TurnoFácil",
    description: {
      es: "Reservas online para negocios locales con recordatorios automáticos.",
      en: "Online booking for local businesses with automatic reminders.",
    },
    stack: ["Node", "Express", "PostgreSQL", "Supabase"],
    status: "building",
  },
];
