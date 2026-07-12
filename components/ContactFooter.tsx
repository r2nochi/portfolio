import type { Dictionary } from "@/lib/i18n/types";
import styles from "./ContactFooter.module.css";

export default function ContactFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer id="contacto" className={styles.footer} aria-labelledby="contact-title">
      <div className="container">
        <p className={`eyebrow ${styles.eyebrow}`}>{dict.contact.eyebrow}</p>
        <h2 id="contact-title" className={styles.title}>
          {dict.contact.title}
        </h2>

        <ul className={styles.links}>
          <li className={styles.linkItem}>
            <a
              className={`mono ${styles.link}`}
              href="https://wa.me/51997378847"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.contact.links.whatsapp}
            </a>
          </li>
          <li className={styles.linkItem}>
            <a className={`mono ${styles.link}`} href="mailto:arturonochi@gmail.com">
              {dict.contact.links.email}
            </a>
          </li>
          <li className={styles.linkItem}>
            <a
              className={`mono ${styles.link}`}
              href="https://github.com/r2nochi"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.contact.links.github}
            </a>
          </li>
          <li className={styles.linkItem}>
            <a
              className={`mono ${styles.link}`}
              href="https://www.linkedin.com/in/r2nochi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.contact.links.linkedin}
            </a>
          </li>
        </ul>

        <div className={styles.bottom}>
          <p className={`mono ${styles.availability}`}>{dict.contact.availability}</p>
          <p className={`mono ${styles.rights}`}>{dict.contact.rights}</p>
        </div>
      </div>
    </footer>
  );
}
