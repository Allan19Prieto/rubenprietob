# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

---

## Proyecto

Portafolio profesional y plataforma de marca personal de Rubén Prieto Badilla — desarrollador, emprendedor y consultor en automatización agro-tecnológica, Costa Rica.

**Visión:** Plataforma premium que integra tecnología, agricultura e innovación. Referentes visuales: Vercel, Stripe, Linear, Raycast, Apple.

**Objetivos de negocio:** conseguir clientes, mostrar servicios de automatización/digitalización, escalar hacia productos SaaS.

---

## Comandos

### Frontend (Next.js)
```bash
cd frontend
npm install          # instalar dependencias
npm run dev          # servidor de desarrollo → localhost:3000
npm run build        # build de producción
npm run lint         # eslint (flat config, eslint 9)
```

### Backend (ASP.NET Core)
```bash
cd backend/RubenPrietoB.Api
dotnet run           # servidor → localhost:5116 (HTTP), 7122 (HTTPS)
```
Swagger UI disponible en `/swagger` en desarrollo.

### Base de datos
```bash
docker compose -f docker/compose.yml up -d   # PostgreSQL 16 en puerto 5432
```
Credenciales: `admin` / `admin123`, base de datos `rubenprietob_db`. Mover a variables de entorno antes de cualquier deploy.

---

## Arquitectura técnica

Stack: Next.js 16 App Router + React 19 / ASP.NET Core .NET 8 / PostgreSQL 16 vía Docker.

```
rubenprietob/
├── frontend/       # Next.js app
├── backend/        # .NET Minimal API
└── docker/         # Docker Compose (PostgreSQL)
```

### Arquitectura de estilos — CSS-class-first

`frontend/src/app/globals.css` es la **única fuente de verdad** para todos los estilos. Contiene:

- **`:root`** — tokens de diseño: escala de verdes (`--g50`…`--g900`), `--cream`, `--ink`, `--gold`
- **`@keyframes`** — `float` (orbs hero), `fadeUp` (entrada hero), `ticker` (marquee)
- **`.reveal` / `.reveal.visible`** — patrón de scroll-reveal vía `IntersectionObserver`
- **Clases de componentes** — `.hero`, `.service-card`, `.industry-item`, `.contact-form`, etc.
- **Breakpoint mobile** — `@media (max-width: 900px)`

Los componentes usan los class names directamente: `className="hero"`, `className="service-card"`. **No mezclar Tailwind utilities y class names de globals.css dentro de una misma sección.** Tailwind se mantiene solo en `Projects.tsx` (legado) y para el CSS reset que provee.

### Tipografía

Dos Google Fonts cargadas vía `next/font` en `layout.tsx`:
- **Cormorant Garamond** → `--font-cormorant` → usar en titulares display, números grandes, hero headline
- **Syne** → `--font-syne` → fuente base del cuerpo (declarada en `body {}` de globals.css)

### Estructura de página (`src/app/page.tsx`)

```
CustomCursor     → Client Component — cursor rAF con efecto elástico
RevealObserver   → Client Component — activa .reveal al hacer scroll
Navbar           → nav fijo (Nosotros / Servicios / Sectores / Contactar)
Hero             → sección full-viewport oscura, animaciones fadeUp en carga
Ticker           → franja marquee g700
About            → grid 2 col: nombre+pillars / bio
Services         → sección oscura, 3 tarjetas con hover underline
Industries       → sección cream, grid 2×3 de sectores
Projects         → sección cream (estilos Tailwind), tarjetas de proyectos
Contact          → sección oscura, formulario con estado de éxito (useState)
Footer           → nav links + copyright
```

### Patrón scroll-reveal

Todo elemento con `className="reveal"` arranca invisible (opacity 0, translateY 35px). `RevealObserver` ejecuta `IntersectionObserver` con `threshold: 0.08` y agrega `visible` vía `useRevealOnScroll` (`src/hooks/useRevealOnScroll.ts`). Elementos que entran juntos al viewport se escalonan 100ms entre sí. Una vez visibles, se desobservan (one-shot).

### Datos estáticos

El contenido de cada sección vive como const array al inicio de su archivo de componente. Cuando venga del backend, extraer a `src/data/`.

### Backend

`backend/RubenPrietoB.Api/Program.cs` solo tiene el placeholder `/weatherforecast`. Sin CORS configurado — agregar antes de cualquier integración frontend ↔ backend. Connection string en texto plano en `appsettings.json` (solo desarrollo).

---

## Estructura deseada a futuro

```
frontend/src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css          ← fuente de verdad de estilos
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/              ← Navbar, Footer
│   └── sections/            ← Hero, About, Services, Industries, Projects, Contact
├── data/                    ← datos estáticos cuando salgan del componente
├── hooks/                   ← useRevealOnScroll
├── lib/                     ← cliente API hacia el backend
└── types/                   ← Project, Service, Industry, etc.

backend/RubenPrietoB.Api/
├── Endpoints/               ← un archivo por dominio
├── Models/
├── Data/                    ← DbContext + migraciones
└── Program.cs               ← solo wiring

docker/
├── compose.yml              ← PostgreSQL (ampliar con nginx, backend)
```

---

## Stack tecnológico completo

| Capa | Stack actual | Stack futuro |
|---|---|---|
| Frontend | Next.js 16, React 19, Tailwind v4, TS | SEO (robots/sitemap), OG images |
| Backend | .NET 8 Minimal API | Entity Framework, endpoints por dominio |
| DB | PostgreSQL 16 (Docker) | Migraciones, env vars para credenciales |
| Infra | Docker Compose local | Linux VPS, nginx, CI/CD, GitHub Actions |
| Extras | — | Redis, RabbitMQ, Azure/AWS |
