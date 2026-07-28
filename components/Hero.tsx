import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n/types";
import EvidenceGraph from "./EvidenceGraph";

export default function Hero({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const methodHref =
    locale === "en" ? "/en/method/agentic-loop" : "/metodo/agentic-loop";

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="eyebrow">{dict.hero.eyebrow}</p>
          <h1 id="hero-title">{dict.hero.title}</h1>
          <p className="hero-subtitle">{dict.hero.subtitle}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#evidencia">
              {dict.hero.primary}
            </a>
            <Link className="button button-ghost" href={methodHref}>
              {dict.hero.secondary}
            </Link>
          </div>
          <p className="availability mono">
            <span aria-hidden="true" />
            {dict.hero.availability}
          </p>
        </div>
        <EvidenceGraph label={dict.hero.graphLabel} nodes={dict.hero.nodes} />
      </div>
    </section>
  );
}
