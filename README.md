# Portafolio de David Nochi

Portafolio bilingüe de ingeniería de IA aplicada, automatización documental,
RAG y desarrollo full stack. La narrativa visual sigue un grafo de evidencia:
problema, sistema, evidencia e impacto.

## Stack

- Next.js 16 App Router y React 19.
- TypeScript.
- Motion para la interacción principal.
- CSS con tokens propios, sin migración global a Tailwind.
- `node:test` para validar el contrato editorial.

## Desarrollo

```powershell
npm install
npm run dev
```

Abre `http://localhost:3000`. Rutas principales:

- `/` y `/en`
- `/proyectos/[slug]` y `/en/projects/[slug]`
- `/metodo/agentic-loop` y `/en/method/agentic-loop`
- `/showcase`

## Verificación

```powershell
npm run check
```

El comando valida el modelo 4+2, la privacidad editorial y el build de
producción.

## Publicación

El frontend está preparado para Vercel, pero un despliegue requiere aprobación
humana y una cuenta enlazada:

```powershell
npx vercel
```

Configura `NEXT_PUBLIC_SITE_URL` con el dominio canónico. En Vercel se usa
automáticamente `VERCEL_PROJECT_PRODUCTION_URL` cuando la primera variable no
está definida.

No añadir URLs de demo a `content/portfolio.json` hasta verificar el flujo
completo. Consulta [STATUS.md](./STATUS.md) y [DECISIONS.md](./DECISIONS.md).

## Loop de agentes

`AGENTS.md` y `.codex/` configuran un orquestador con tres ejecutores
especializados. Los modelos económicos exploran, implementan y verifican; el
revisor fuerte permanece en solo lectura.
