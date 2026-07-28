import Link from "next/link";
import { notFound } from "next/navigation";
import type { Dictionary, Locale } from "@/lib/i18n/types";
import {
  getPublishedItem,
  getPublishedItems,
  itemHref,
} from "@/lib/portfolio";
import ContactFooter from "./ContactFooter";
import Header from "./Header";

export default function CasePage({
  slug,
  locale,
  dict,
}: {
  slug: string;
  locale: Locale;
  dict: Dictionary;
}) {
  const item = getPublishedItem(slug);

  if (!item) {
    notFound();
  }

  const items = getPublishedItems();
  const currentIndex = items.findIndex((candidate) => candidate.slug === slug);
  const next = items[(currentIndex + 1) % items.length];
  const home = locale === "en" ? "/en#evidencia" : "/#evidencia";

  return (
    <>
      <Header dict={dict} locale={locale} />
      <main className="case-page">
        <header className="case-hero">
          <div className="container">
            <Link className="back-link" href={home}>
              ← {dict.detail.back}
            </Link>
            <p className="eyebrow">
              {item.code} / {item.kicker[locale]}
            </p>
            <h1>{item.title[locale]}</h1>
            <p className="case-kicker">{item.solution[locale]}</p>
            <ul className="tag-list" aria-label="Stack">
              {item.stack.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </header>

        <div className="case-body container">
          <section className="case-block">
            <h2>01 / {dict.detail.problem}</h2>
            <p>{item.problem[locale]}</p>
          </section>
          <section className="case-block">
            <h2>02 / {dict.detail.system}</h2>
            <p>{item.solution[locale]}</p>
          </section>
          <section className="case-block">
            <h2>03 / {dict.detail.evidence}</h2>
            <ul className="evidence-list">
              {item.evidence.map((entry) => (
                <li key={entry.label}>
                  <span>{entry.label}</span>
                  <strong>{entry.value}</strong>
                </li>
              ))}
            </ul>
            <div className="case-actions">
              {item.demoUrl && (
                <a
                  className="button button-primary case-repo"
                  href={item.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {dict.detail.demo} ↗
                </a>
              )}
              {item.repoUrl && (
                <a
                  className={`button case-repo ${
                    item.demoUrl ? "button-ghost" : "button-primary"
                  }`}
                  href={item.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {dict.detail.repository} ↗
                </a>
              )}
            </div>
          </section>
          <section className="case-block">
            <h2>04 / {dict.detail.impact}</h2>
            <p>{item.impact[locale]}</p>
          </section>
          <section className="case-block">
            <h2>05 / {dict.detail.limitations}</h2>
            <p>{item.limitations[locale]}</p>
          </section>
          <section className="case-block">
            <h2>06 / {dict.detail.nextCase}</h2>
            <p>
              <Link className="text-link" href={itemHref(next, locale)}>
                {next.title[locale]} →
              </Link>
            </p>
          </section>
        </div>
      </main>
      <ContactFooter dict={dict} />
    </>
  );
}
