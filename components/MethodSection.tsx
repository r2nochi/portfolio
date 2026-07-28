import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export default function MethodSection({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const href =
    locale === "en" ? "/en/method/agentic-loop" : "/metodo/agentic-loop";

  return (
    <section id="metodo" className="method-section section">
      <div className="container method-grid">
        <div className="section-heading">
          <p className="eyebrow">{dict.method.eyebrow}</p>
          <h2>{dict.method.title}</h2>
          <p>{dict.method.intro}</p>
          <Link className="text-link" href={href}>
            {dict.method.link} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ol className="method-stages">
          {dict.method.stages.map((stage) => (
            <li key={stage.code}>
              <span className="mono">{stage.code}</span>
              <div>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
