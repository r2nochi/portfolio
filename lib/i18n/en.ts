import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "David Nochi — Applied AI Engineer",
    description:
      "Document automation (OCR), RAG architectures, and code-agent-accelerated development. Applied AI engineer based in Lima, Peru.",
  },
  nav: {
    brand: "DAVID NOCHI",
    projects: "Projects",
    method: "Method",
    contact: "Contact",
    langName: "EN",
    otherLangName: "ES",
    otherLangHref: "/",
  },
  hero: {
    eyebrow: "APPLIED AI ENGINEER — LIMA, PERU",
    title: "I turn messy documents into reliable data.",
    subtitle:
      "Document automation (OCR), RAG architectures, and code-agent-accelerated development. I deliver in days what traditionally takes months.",
    ctaProjects: "See projects",
    ctaWhatsapp: "Message me on WhatsApp",
    docLabel: "INPUT — RAW DOCUMENT",
    docRawLines: [
      "R.U.C. 20601234567  ELECTRONIC INVOICE F001-0004521",
      "CLIENT: ......... CORP SAC   ISSUE DATE: 07/04/2026",
      "VAT (18%).................. S/ 739.83",
      "TOTAL DUE ................. S/ 4,850.00",
      "payment: cash // currency: PEN",
    ],
    structuredLabel: "OUTPUT — STRUCTURED DATA",
    fields: [
      { label: "ruc", value: "20601234567" },
      { label: "series", value: "F001-0004521" },
      { label: "date", value: "2026-07-04" },
      { label: "total", value: "S/ 4,850.00" },
      { label: "status", value: "✓ validated", verified: true },
    ],
    sealText: "VERIFIED",
  },
  projects: {
    eyebrow: "PROJECTS",
    title: "Six files in progress.",
    statusProduction: "IN PRODUCTION",
    statusBuilding: "IN PROGRESS",
    demoLabel: "Demo",
    repoLabel: "Repo",
  },
  method: {
    eyebrow: "METHOD",
    title: "Agent-augmented development, with verifiable quality.",
    items: [
      { label: "TDD", text: "Tests are written first." },
      { label: "CI/CD", text: "Every change passes automated review." },
      {
        label: "CODE AGENTS",
        text: "Claude Code and Codex under custom guardrails.",
      },
    ],
    closing: "Own methodology: Flujo Agentes.",
  },
  contact: {
    eyebrow: "CONTACT",
    title: "Let's talk about your project.",
    links: {
      whatsapp: "WhatsApp",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    availability: "Lima, Peru — available for remote work",
    rights: "© 2026 David Nochi.",
  },
};
