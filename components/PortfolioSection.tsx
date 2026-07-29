import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n/types";
import { getPublishedItems, itemHref } from "@/lib/portfolio";

export default function PortfolioSection({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section id="evidencia" className="portfolio-section section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{dict.portfolio.eyebrow}</p>
          <h2>{dict.portfolio.title}</h2>
          <p>{dict.portfolio.intro}</p>
        </div>

        <ol className="case-list">
          {getPublishedItems().map((item, index) => (
            <li className="case-row" key={item.slug}>
              <Link className="case-link" href={itemHref(item, locale)}>
                <div className="case-index mono">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="case-main">
                  <div className="case-meta mono">
                    <span>
                      {item.kind === "product"
                        ? dict.portfolio.product
                        : dict.portfolio.caseStudy}
                    </span>
                    <span>·</span>
                    <span>
                      {item.status === "source-available"
                        ? dict.portfolio.sourceAvailable
                        : dict.portfolio.anonymized}
                    </span>
                  </div>
                  <h3>{item.title[locale]}</h3>
                  <p>{item.problem[locale]}</p>
                  <ul className="tag-list" aria-label="Capacidades">
                    {item.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                </div>
                <span className="case-open">
                  {dict.portfolio.openCase} <span aria-hidden="true">↗</span>
                </span>
              </Link>

              {/* Acceso directo a la app desplegada. Va FUERA del <Link> del
                  caso: anidar enlaces es HTML invalido y el navegador los
                  desanida de formas impredecibles. */}
              {item.demoUrl && (
                <a
                  className="case-demo"
                  href={item.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="case-demo-dot" aria-hidden="true" />
                  {dict.portfolio.liveDemo}
                  <span aria-hidden="true"> ↗</span>
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
