export type Locale = "es" | "en";

export type DocField = {
  label: string;
  value: string;
  verified?: boolean;
};

export type MethodItem = {
  label: string;
  text: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    brand: string;
    projects: string;
    method: string;
    contact: string;
    langName: string;
    otherLangName: string;
    otherLangHref: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaProjects: string;
    ctaWhatsapp: string;
    docLabel: string;
    docRawLines: string[];
    structuredLabel: string;
    fields: DocField[];
    sealText: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    statusProduction: string;
    statusBuilding: string;
    demoLabel: string;
    repoLabel: string;
  };
  method: {
    eyebrow: string;
    title: string;
    items: MethodItem[];
    closing: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    links: {
      whatsapp: string;
      email: string;
      github: string;
      linkedin: string;
    };
    availability: string;
    rights: string;
  };
};
