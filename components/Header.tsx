import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";
import styles from "./Header.module.css";

export default function Header({ dict }: { dict: Dictionary }) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <span className={`mono ${styles.brand}`}>{dict.nav.brand}</span>
        <nav className={styles.nav}>
          <a className={styles.link} href="#proyectos">
            {dict.nav.projects}
          </a>
          <a className={styles.link} href="#metodo">
            {dict.nav.method}
          </a>
          <a className={styles.link} href="#contacto">
            {dict.nav.contact}
          </a>
          <span className={styles.divider} aria-hidden="true" />
          <span className={styles.langGroup}>
            <span className={styles.langCurrent} aria-current="page">
              {dict.nav.langName}
            </span>
            <span aria-hidden="true">/</span>
            <Link className={styles.langLink} href={dict.nav.otherLangHref}>
              {dict.nav.otherLangName}
            </Link>
          </span>
        </nav>
      </div>
    </header>
  );
}
