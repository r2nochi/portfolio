# Registro de decisiones

## 2026-07-16 — Grafo de evidencia

El portafolio se organiza como `problema → sistema → evidencia → impacto`.
La interfaz evita una grilla genérica de proyectos y usa un grafo como pieza
visual principal.

## 2026-07-16 — Publicación progresiva

El contenido conserva el alcance de cuatro productos y dos casos, pero la UI
solo renderiza piezas verificables. No existen tarjetas “próximamente”.

## 2026-07-16 — CSS existente, sin migración a Tailwind

No se migra todo el repositorio a Tailwind o shadcn. El costo y el diff no
aportan valor a un sitio editorial pequeño. Motion se usa únicamente para la
interacción central.

## 2026-07-16 — Casos profesionales anonimizados

No se publican nombres de empresa, métricas privadas, capturas internas,
reglas comerciales ni datos de clientes. La limitación se presenta como parte
de la evidencia, no se oculta.

## 2026-07-16 — Costos y despliegue

Vercel, Azure y Supabase se configuran solo después de una aprobación humana.
No se publica una URL ni se incorpora un claim de nube hasta verificarlo.
