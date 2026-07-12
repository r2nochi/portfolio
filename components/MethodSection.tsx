import type { Dictionary } from "@/lib/i18n/types";
import styles from "./MethodSection.module.css";

export default function MethodSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="metodo" className={styles.section} aria-labelledby="method-title">
      <div className="container">
        <p className={`eyebrow ${styles.eyebrow}`}>{dict.method.eyebrow}</p>
        <h2 id="method-title" className={styles.title}>
          {dict.method.title}
        </h2>

        <ul className={styles.items}>
          {dict.method.items.map((item) => (
            <li key={item.label} className={styles.item}>
              <span className={`mono ${styles.itemLabel}`}>{item.label}</span>
              <span className={styles.itemText}>{item.text}</span>
            </li>
          ))}
        </ul>

        <p className={`mono ${styles.closing}`}>{dict.method.closing}</p>
      </div>
    </section>
  );
}
