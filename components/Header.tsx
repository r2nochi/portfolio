import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export default function Header({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const home = locale === "en" ? "/en" : "/";

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand mono" href={home} aria-label={dict.nav.brand}>
          <span className="brand-dot" aria-hidden="true" />
          {dict.nav.brand}
        </Link>
        <nav className="header-nav" aria-label="Principal">
          <a href={`${home}#evidencia`}>{dict.nav.work}</a>
          <a href={`${home}#metodo`}>{dict.nav.method}</a>
          <a href={`${home}#contacto`}>{dict.nav.contact}</a>
          <Link className="language-link mono" href={dict.nav.languageHref}>
            {dict.nav.language}
          </Link>
        </nav>
      </div>
    </header>
  );
}
