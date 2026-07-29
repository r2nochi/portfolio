import Link from "next/link";

import ContactFooter from "./ContactFooter";
import Header from "./Header";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export type Service = {
  code: string;
  title: string;
  description: string;
  deliverables: string[];
  price: string;
};

/**
 * Página de servicios con precios visibles.
 *
 * Los precios están a propósito: sin ellos, quien llega trata la conversación
 * como una entrevista de trabajo; con ellos, como una cotización. Cada paquete
 * enlaza a una pieza publicada que demuestra que ese trabajo ya se hizo.
 */
export default function ServicesPage({
  dict,
  locale,
  services,
}: {
  dict: Dictionary;
  locale: Locale;
  services: Service[];
}) {
  const isEnglish = locale === "en";
  const evidencia = isEnglish ? "/en#evidencia" : "/#evidencia";

  const consulta =
    "https://wa.me/51997378847?text=" +
    encodeURIComponent(
      isEnglish
        ? "Hi David, I would like to evaluate a process for automation."
        : "Hola David, quisiera evaluar un proceso para automatizarlo.",
    );

  return (
    <>
      <Header dict={dict} locale={locale} />
      <main className="inner-page">
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <p className="eyebrow">
                {isEnglish ? "SERVICES / APPLIED AI" : "SERVICIOS / IA APLICADA"}
              </p>
              <h1>
                {isEnglish
                  ? "Turn a manual process into a controlled system."
                  : "Convierte un proceso manual en un sistema controlado."}
              </h1>
            </div>
            <div className="page-hero-aside">
              <p>
                {isEnglish
                  ? "Small, measurable engagements for companies that need to prove value before scaling. Every package ends with something you can run, not a slide deck."
                  : "Intervenciones pequeñas y medibles para empresas que necesitan probar el valor antes de escalar. Cada paquete termina con algo que puedes ejecutar, no con una presentación."}
              </p>
              <Link className="text-link" href={evidencia}>
                {isEnglish
                  ? "See what has already shipped →"
                  : "Ver lo que ya está entregado →"}
              </Link>
            </div>
          </div>
        </section>

        <section
          className="container service-grid"
          aria-label={isEnglish ? "Services" : "Servicios"}
        >
          {services.map((service) => (
            <article className="service-card" key={service.code}>
              <div className="service-card-head">
                <span className="mono">{service.code}</span>
                <strong className="service-price">{service.price}</strong>
              </div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul>
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="container engagement-note">
          <p className="eyebrow">
            {isEnglish ? "WORKING PRINCIPLE" : "PRINCIPIO DE TRABAJO"}
          </p>
          <h2>
            {isEnglish
              ? "No opaque demos: scope, assumptions, evidence, and a handoff."
              : "Sin demos opacas: alcance, supuestos, evidencia y transferencia."}
          </h2>
          <p className="engagement-detail">
            {isEnglish
              ? "Every delivery states what it does not prove. You get the source, the tests, and the limits in writing — so you know where to trust it and where to check."
              : "Cada entrega declara lo que NO prueba. Recibes el código, las pruebas y los límites por escrito, para saber dónde confiar y dónde revisar."}
          </p>
          <a className="button button-primary" href={consulta}>
            {isEnglish ? "Discuss a process" : "Cuéntame tu proceso"}
          </a>
        </section>
      </main>
      <ContactFooter dict={dict} />
    </>
  );
}
