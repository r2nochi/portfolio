import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "David Nochi — Applied AI Engineering",
    description:
      "A verifiable portfolio of document automation, RAG, agents, and full-stack development.",
  },
  nav: {
    brand: "DN / APPLIED AI",
    work: "Evidence",
    method: "Method",
    contact: "Contact",
    language: "ES",
    languageHref: "/",
  },
  hero: {
    eyebrow: "APPLIED AI ENGINEER · LIMA, PERU",
    title: "I build systems that turn manual work into useful evidence.",
    subtitle:
      "Document OCR, citation-grounded RAG, automations, and full-stack products. Every case explains the problem, system, tests, and limitations.",
    primary: "Explore evidence",
    secondary: "See the agentic loop",
    availability: "Available for remote work and projects",
    graphLabel: "Interactive graph of the delivery process",
    nodes: ["Problem", "System", "Evidence", "Impact"],
  },
  portfolio: {
    eyebrow: "SELECTED WORK / 03",
    title: "Fewer promises. More traceability.",
    intro:
      "I only publish work backed by code, tests, or a clearly anonymized professional case.",
    product: "PRODUCT",
    caseStudy: "CASE",
    sourceAvailable: "SOURCE AVAILABLE",
    anonymized: "ANONYMIZED",
    openCase: "Open case file",
  },
  detail: {
    back: "Back to evidence",
    problem: "Problem",
    system: "System",
    evidence: "Evidence",
    impact: "Impact",
    limitations: "Honest limitations",
    demo: "Try the demo",
    repository: "View repository",
    nextCase: "Next case file",
  },
  method: {
    eyebrow: "AGENTIC LOOP / CONTROLLED COST",
    title: "The strong model decides. Economical models execute.",
    intro:
      "The orchestrator splits work, limits concurrency, and requires evidence before integration.",
    stages: [
      { code: "01", title: "Explore", text: "Context and risks, read-only." },
      { code: "02", title: "Execute", text: "Small unit, test first." },
      { code: "03", title: "Verify", text: "Tests, build, UI, and links." },
      { code: "04", title: "Review", text: "Architecture and claims with a strong model." },
    ],
    link: "View the loop architecture",
  },
  contact: {
    eyebrow: "NEXT STEP",
    title: "Do you have a process that still depends on copying, searching, or chasing data?",
    text: "I can turn it into a verifiable prototype and explain what is worth automating —and what is not.",
    availability: "Lima, Peru · remote",
    rights: "© 2026 David Nochi",
  },
};
