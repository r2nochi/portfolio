# Herramientas de interfaz y grafo

## Motion

El grafo de evidencia usa `motion/react` para animar rutas SVG y nodos. Es la
única isla cliente de la portada. `prefers-reduced-motion` desactiva entradas y
microinteracciones.

## Referencias de comunidad

- Magic UI: patrones visuales MIT consultados como referencia, sin copiar un
  registro completo ni introducir Tailwind.
- Graphify: herramienta local-first para explorar relaciones del código.

Graphify no se instaló automáticamente porque `uv` no está disponible en este
entorno. Cuando esté instalado, la integración recomendada es:

```powershell
uvx --from graphifyy graphify install --project --platform codex
```

Después de instalarlo, revisar el diff antes de conservar archivos generados:

```powershell
git status --short
git diff
```
