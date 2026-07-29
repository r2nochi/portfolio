import type { Service } from "@/components/ServicesPage";

/**
 * La escalera de servicios.
 *
 * Sube de precio con el riesgo que asume el cliente, no con las horas: el
 * primer paquete existe para que alguien que no me conoce pueda probarme
 * barato, y termina siempre en una propuesta del segundo.
 *
 * Los entregables se describen en términos de lo que el cliente recibe, no de
 * lo que yo hago.
 */
export const SERVICIOS_ES: Service[] = [
  {
    code: "00 / WEB",
    title: "Tu web en una semana",
    description:
      "Diseño propio, textos con tus palabras, formulario que te llega al WhatsApp y desplegada en tu dominio. Siete días, sin plantillas.",
    deliverables: [
      "Diseño a medida, no una plantilla de catálogo",
      "Textos escritos con tus precios y tu voz",
      "Formulario o catálogo conectado a lo que ya usas",
      "Rápida en celular y legible por Google",
      "El código es tuyo, sin permanencia",
    ],
    price: "Desde S/ 1,800",
    demoUrl: "https://webs-en-una-semana.vercel.app",
    demoLabel: "Ver cómo se construye, día por día",
  },
  {
    code: "01 / DIAGNÓSTICO",
    title: "Mapa de automatización",
    description:
      "Reviso un proceso que hoy se hace a mano y te digo qué se puede automatizar, cuánto tiempo cuesta hoy y por dónde empezar. Sin construir nada todavía.",
    deliverables: [
      "Sesión de descubrimiento sobre tu proceso real",
      "Informe con los 3 puntos más automatizables",
      "Estimación de horas que se recuperan al mes",
      "Plan de ataque priorizado",
    ],
    price: "Desde S/ 900",
  },
  {
    code: "02 / PROTOTIPO",
    title: "Sprint de solución",
    description:
      "Construyo una aplicación funcional que resuelve el caso con tus datos reales, para que puedas probarla antes de comprometerte con una implantación completa.",
    deliverables: [
      "Aplicación navegable y desplegada",
      "Un caso de prueba con tus propios documentos",
      "Pruebas automatizadas del núcleo",
      "Documento de decisiones y límites conocidos",
    ],
    price: "Desde S/ 2,500",
  },
  {
    code: "03 / IMPLEMENTACIÓN",
    title: "Automatización a medida",
    description:
      "Integro el flujo con tus sistemas, con puntos de control humano donde el error sale caro, trazabilidad de cada dato y transferencia técnica a tu equipo.",
    deliverables: [
      "Integración con tus APIs, base de datos o Excel",
      "Puertas de revisión humana donde importa",
      "Observabilidad y registro de ejecuciones",
      "Código, documentación y capacitación",
    ],
    price: "Cotización por alcance",
  },
];

export const SERVICIOS_EN: Service[] = [
  {
    code: "00 / WEB",
    title: "Your site in a week",
    description:
      "Custom design, copy in your own words, a form that reaches your WhatsApp, and deployed on your domain. Seven days, no templates.",
    deliverables: [
      "A design made for you, not a catalogue template",
      "Copy written with your prices and your voice",
      "Form or catalogue wired to what you already use",
      "Fast on phones and readable by Google",
      "The code is yours, no lock-in",
    ],
    price: "From S/ 1,800",
    demoUrl: "https://webs-en-una-semana.vercel.app",
    demoLabel: "Watch it get built, day by day",
  },
  {
    code: "01 / DISCOVERY",
    title: "Automation map",
    description:
      "I review a process you run by hand and tell you what can be automated, what it costs you today, and where to start. Nothing gets built yet.",
    deliverables: [
      "Discovery session on your actual process",
      "Report on the 3 most automatable steps",
      "Estimate of hours recovered per month",
      "Prioritised plan of attack",
    ],
    price: "From S/ 900",
  },
  {
    code: "02 / PROTOTYPE",
    title: "Solution sprint",
    description:
      "I build a working application that solves the case with your real data, so you can try it before committing to a full rollout.",
    deliverables: [
      "A deployed, navigable application",
      "One test case using your own documents",
      "Automated tests on the core logic",
      "A written record of decisions and known limits",
    ],
    price: "From S/ 2,500",
  },
  {
    code: "03 / IMPLEMENTATION",
    title: "Custom automation",
    description:
      "I integrate the flow with your systems, with human checkpoints where mistakes are expensive, traceability for every field, and a handoff to your team.",
    deliverables: [
      "Integration with your APIs, database or spreadsheets",
      "Human review gates where they matter",
      "Observability and run logs",
      "Source code, documentation and training",
    ],
    price: "Scoped proposal",
  },
];
