export type Locale = "es" | "en";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    brand: string;
    work: string;
    services: string;
    servicesHref: string;
    method: string;
    contact: string;
    language: string;
    languageHref: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
    availability: string;
    graphLabel: string;
    nodes: string[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    intro: string;
    product: string;
    caseStudy: string;
    sourceAvailable: string;
    anonymized: string;
    openCase: string;
    liveDemo: string;
  };
  detail: {
    back: string;
    problem: string;
    system: string;
    evidence: string;
    impact: string;
    limitations: string;
    demo: string;
    repository: string;
    nextCase: string;
  };
  method: {
    eyebrow: string;
    title: string;
    intro: string;
    stages: Array<{ code: string; title: string; text: string }>;
    link: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    availability: string;
    rights: string;
  };
};
