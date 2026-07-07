# ggdisenio.es — GG Diseño

Sitio web de GG Diseño, agencia de desarrollo web, IA y automatización en Madrid.
Producción: [https://ggdisenio.es](https://ggdisenio.es) (deploy automático en Vercel al pushear a la rama principal).

## Stack

- **Vite + React 18 + TypeScript**
- **Tailwind CSS + shadcn/ui** (componentes en `src/components/ui`)
- **react-router-dom** (SPA multi-página; rewrites en `vercel.json`)
- **framer-motion** (animaciones, respeta `prefers-reduced-motion`)
- **Supabase**: tabla `leads` (formulario de contacto, RLS activo) + edge functions `notify-lead` (emails vía Resend, rate limit por IP/email) y `chat` (chatbot)
- **i18n propio** (`src/i18n`): español, inglés, portugués y chino, con detección por geolocalización cacheada

## Desarrollo

```sh
npm install
npm run dev        # servidor local en :8080
npm run build      # build de producción
npm run lint       # eslint
npm run preview    # servir el build localmente
```

## Estructura

- `src/pages/` — una página por ruta (`/`, `/servicios`, `/proyectos`, `/nosotros`, `/contacto`, `/legal`, `/privacidad`, `/cookies`, 404)
- `src/components/Seo.tsx` — título, description, canonical y metadatos sociales por ruta
- `src/hooks/useContactInfo.ts` — datos de contacto según región (España por defecto, Argentina con datos locales)
- `public/` — `sitemap.xml`, `robots.txt`, `og-image.png`, favicon
- `supabase/` — migraciones y edge functions

## SEO y calidad

- Metadata por página + Open Graph/Twitter con imagen propia (`public/og-image.png`)
- JSON-LD `ProfessionalService` en `index.html`
- `sitemap.xml` referenciado desde `robots.txt`
- Cabeceras de seguridad y caché de assets en `vercel.json`
- Banner de cookies con consentimiento granular (RGPD)

## Variables de entorno

`.env` contiene únicamente las claves **públicas** de Supabase (URL y anon key), que viajan al navegador por diseño. Los secretos (`RESEND_API_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `LOVABLE_API_KEY`) viven solo en la configuración de las edge functions de Supabase — nunca en este repo.
