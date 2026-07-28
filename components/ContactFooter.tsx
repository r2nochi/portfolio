import type { Dictionary } from "@/lib/i18n/types";

const links = [
  ["EMAIL", "mailto:arturonochi@gmail.com"],
  ["GITHUB", "https://github.com/r2nochi"],
  ["LINKEDIN", "https://www.linkedin.com/in/r2nochi/"],
  ["WHATSAPP", "https://wa.me/51997378847"],
];

export default function ContactFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer id="contacto" className="contact-footer">
      <div className="container">
        <p className="eyebrow">{dict.contact.eyebrow}</p>
        <h2>{dict.contact.title}</h2>
        <p className="contact-copy">{dict.contact.text}</p>
        <div className="contact-links">
          {links.map(([label, href]) => (
            <a key={label} className="mono" href={href}>
              {label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <div className="footer-meta mono">
          <span>{dict.contact.availability}</span>
          <span>{dict.contact.rights}</span>
        </div>
      </div>
    </footer>
  );
}
