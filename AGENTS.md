# Instrucciones de trabajo

Este repositorio es un portafolio público. Toda afirmación debe estar respaldada
por código, una prueba, una demo o una limitación explícita.

## Loop agentic

1. El orquestador define el objetivo, el criterio de aceptación y el presupuesto.
2. `explorer` localiza archivos, patrones y riesgos; no modifica nada.
3. `executor` implementa una unidad pequeña siguiendo TDD.
4. `qa` ejecuta pruebas y revisa accesibilidad, responsive y enlaces.
5. `reviewer` inspecciona el diff y busca claims sin evidencia, regresiones y deuda.
6. El orquestador integra únicamente con evidencia fresca.

Máximo tres agentes en paralelo y profundidad uno. No crear agentes anidados.

## Puertas humanas

Detenerse antes de:

- añadir o revelar secretos;
- habilitar un servicio de pago o aumentar límites de gasto;
- desplegar a producción o cambiar un dominio;
- hacer una migración destructiva;
- publicar nombres, datos o métricas de clientes;
- cambiar una decisión arquitectónica difícil de revertir.

## Calidad

- Server Components por defecto; `"use client"` solo para interacción real.
- Contenido bilingüe y accesible por teclado.
- Respetar `prefers-reduced-motion`.
- No publicar tarjetas “en construcción”.
- No inventar métricas, URLs de demo ni experiencia.
- Ejecutar `npm run check` antes de afirmar que el sitio está listo.
