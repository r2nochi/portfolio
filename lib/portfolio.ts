import rawItems from "@/content/portfolio.json";
import type { Locale } from "@/lib/i18n/types";

export type LocalizedText = Record<Locale, string>;
export type PortfolioKind = "product" | "case-study";
export type PortfolioStatus = "source-available" | "anonymized" | "planned";

export type Evidence = {
  label: string;
  value: string;
};

export type PortfolioItem = {
  code: string;
  slug: string;
  kind: PortfolioKind;
  status: PortfolioStatus;
  published: boolean;
  title: LocalizedText;
  kicker: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  impact: LocalizedText;
  limitations: LocalizedText;
  capabilities: string[];
  stack: string[];
  evidence: Evidence[];
  demoUrl?: string;
  repoUrl?: string;
};

export const portfolioItems = rawItems as PortfolioItem[];

export function getPublishedItems(): PortfolioItem[] {
  return portfolioItems.filter((item) => item.published);
}

export function getPublishedItem(slug: string): PortfolioItem | undefined {
  return getPublishedItems().find((item) => item.slug === slug);
}

export function itemHref(item: PortfolioItem, locale: Locale): string {
  const prefix = locale === "en" ? "/en/projects" : "/proyectos";
  return `${prefix}/${item.slug}`;
}
