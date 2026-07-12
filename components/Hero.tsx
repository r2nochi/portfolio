import type { Dictionary } from "@/lib/i18n/types";
import styles from "./Hero.module.css";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`eyebrow ${styles.eyebrow}`}>{dict.hero.eyebrow}</p>
          <h1 id="hero-title" className={styles.title}>
            {dict.hero.title}
          </h1>
          <p className={styles.subtitle}>{dict.hero.subtitle}</p>
          <div className={styles.ctas}>
            <a className={styles.ctaPrimary} href="#proyectos">
              {dict.hero.ctaProjects}
            </a>
            <a
              className={styles.ctaSecondary}
              href="https://wa.me/51997378847"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.hero.ctaWhatsapp}
            </a>
          </div>
        </div>

        <div className={styles.demo}>
          <div className={styles.rawCard}>
            <p className={styles.cardLabel}>{dict.hero.docLabel}</p>
            <div className={styles.rawLines}>
              {dict.hero.docRawLines.map((line, i) => (
                <p key={i} className={styles.rawLine}>
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className={styles.structuredCard}>
            <p className={styles.cardLabel}>{dict.hero.structuredLabel}</p>
            <dl className={styles.fields}>
              {dict.hero.fields.map((field) => (
                <div key={field.label} className={styles.fieldRow}>
                  <dt className={styles.fieldKey}>{field.label}</dt>
                  <dd
                    className={`${styles.fieldValue} ${
                      field.verified ? styles.verifiedValue : ""
                    }`}
                  >
                    {field.value}
                  </dd>
                </div>
              ))}
            </dl>
            <span className={styles.seal}>{dict.hero.sealText}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
