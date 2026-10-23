# Handoff: FieldOps — Caso técnico (Engineering case study)

## Overview
Public technical page for FieldOps that explains how the product was built: the challenge, layered architecture, tech stack, spec-driven process, key technical decisions, quality/CI, and the author's contribution, ending with links to the demo and the repository. Spanish copy (some technical labels in English, keep verbatim). Sibling of the **Landing** page (separate handoff `design_handoff_fieldops_landing`); both share the same nav and footer.

## About the Design Files
`design/FieldOps Case Study.dc.html` is a **design reference built in HTML** (open in a browser; `support.js` must sit next to it). It is not production code. Recreate it in the Angular app at `juandavid3196/fieldops` (`frontend/`) using its patterns: **Angular 22 standalone components + signals, PrimeNG, PrimeIcons, SCSS with tokens from `frontend/src/styles/_tokens.scss`**, following `docs/frontend/styling-architecture.md`.

Suggested structure (shared pieces with the landing):
```
frontend/src/app/marketing/
  case-study/case-study.page.ts|html|scss   ← route 'caso-tecnico' (public, no app shell)
  case-study/sections/                      ← one standalone component per section
  case-study/case-study.data.ts             ← typed const arrays (below)
  shared/marketing-nav/                     ← same as landing; active = "Caso técnico"
  shared/marketing-footer/
```

## Fidelity
**High-fidelity.** Final colors, type, spacing and copy. Recreate pixel-accurately; copy is final.

## Global layout
- Container: `max-width: 1200px; margin: 0 auto;` horizontal padding `padX`.
- Breakpoints: **mobile < 760px**, **tablet 760–1099px**, **desktop ≥ 1100px**.
  | token | mobile | tablet | desktop |
  |---|---|---|---|
  | padX | 20px | 36px | 40px |
  | h1 | 36px | 44px | 44px |
  | h2 | 26px | 24px | 24px |
  | section padding-y | 48px | 36px | 36px |
  | hero padding-top | 40px | 36px | 36px (bottom 32px) |
  | spec band padding-y | 48px | 28px | 28px |
- All multi-column grids collapse to one column below 1100px (`minmax(0,1fr)`); exceptions noted per section.
- Font **Inter** 400/500/600/700 (in `frontend/public/fonts/inter`). Headings 700, letter-spacing −0.03em (h1 −0.04em). Icons: **PrimeIcons**.
- Logo: teal leaf + "FieldOps" (same SVG as landing):
  ```svg
  <svg viewBox="0 0 24 24"><path d="M3 21C3 11 9 3 21 3c0 11-7 18-18 18z" fill="#0f9d9a"/><path d="M5.5 18.5L15 9" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>
  ```

## Design Tokens
Colors
| name | hex | use |
|---|---|---|
| ink-900 | #0b1730 | h1 |
| ink-800 | #0b1d45 | headings, card titles |
| ink-700 | #1c2b55 | nav/footer links, tag text |
| slate-600 | #46557a | body text |
| eyebrow teal | #2b7b8c | eyebrows on light bg |
| teal-600 | #0f8c89 | primary button, icons, check circles |
| teal-700 | #0b7471 | primary hover |
| teal-500 | #0f9d9a | highlighted headline words, logo, active nav underline |
| teal-300 | #2cc2bd | accents on navy (step icons, step-number ring) |
| blue-700 / 600 | #1d4ed8 / #2563eb | secondary button, architecture labels, spec icons |
| blue-tint | bg #e9f1fc / border #c9daf4 (inner cards #dfe8f5) | architecture boxes |
| lavender | bg #e7e8fc / border #c9ccf5 | .NET API bar |
| tag bg | #e6edf7 | hero tags |
| card border | #e3e9f2 | all light cards |
| row divider | #f1f4f8 | lists inside cards |
| navy gradient | linear-gradient(135deg,#0a1f3d 0%,#0c2a4f 60%,#0a223f 100%) | spec band, CTA |
| hero diagram | linear-gradient(160deg,#0d2440 0%,#0a1c33 100%) | |
| on-navy text | #d5deea (paragraphs), #bfcadb / #9fb0c8 (secondary) | |
| diagram borders on navy | rgba(95,211,207,.35) solid, rgba(159,176,200,.5) dashed | |
| success | bg #e7f6ee, border #b8e5cd, fg #136f4a; check dot #16a34a | CI |
| info bar | bg #e3ebf6, icon circle #46557a | |
| brand: Angular | #dd0031 | |
| brand: .NET | #5b3fd4 | |
| brand: PostgreSQL | #336791 | |

Light section backgrounds: Hero `linear-gradient(180deg,#f3f7fb,#f7fafd)`; Arquitectura and Calidad `linear-gradient(180deg,#eef4fb,#f2f7fc / #f3f8fc)`; the rest `#fff`.
Radius: buttons 4–5px · cards 6px · diagram boxes 4–6px · tags 999px.
Shadows: hero diagram `0 24px 60px rgba(11,29,69,.28)` · spec card `0 24px 50px rgba(0,0,0,.28)` · CI card `0 8px 24px rgba(11,29,69,.06)` · light cards `0 2px 8px rgba(11,29,69,.03)` · primary hero button `0 6px 16px rgba(15,140,137,.22)`.
Eyebrows: 11.5–12px, 500, letter-spacing 0.14em, uppercase.
Check circle: teal #0f8c89 circle (24px; 18px in Calidad) with white `pi-check`.

## Sections (top → bottom)

### 1. Nav
Identical to landing: white, 1px bottom border #edf1f6, padding 14px padX, gap 56px. Logo 28px + 22px wordmark → links to landing.
Links (hidden < 760px): **Producto** → landing route; **Caso técnico** (active: #0b1d45 600, 2px bottom border #0f9d9a). 14px, gap 30px.
Right: "Ver repositorio" outline (1px #0f8c89, `pi-github` 16px, 14px/500, padding 10px 18px; hidden < 1100px) → https://github.com/juandavid3196/fieldops; primary "Explorar demo →" → landing `#demo`. Buttons `white-space: nowrap`.

### 2. Hero
Grid `minmax(0,.78fr) minmax(0,1fr)`, gap 44px.
Left (gap 18px):
- Eyebrow "ENGINEERING CASE STUDY"
- H1 (line-height 1.08): "Cómo construí FieldOps: del problema a una <span teal-500>plataforma completa.</span>"
- P 17px/1.5: "Un proyecto Full Stack diseñado para demostrar arquitectura, producto, calidad y decisiones técnicas en un sistema de operaciones reales."
- Tags (12.5px #1c2b55 on #e6edf7, padding 7px 14px, gap 10): Full Stack · Product design · System design · Spec-driven development
- Buttons (mt 10): Primary "Explorar la arquitectura →" → `#arquitectura`; Secondary (1px #2563eb, text #1d4ed8, 18px blue play circle) "Ver la aplicación" → landing.

Right: **architecture diagram** card (navy gradient, radius 8, padding 18 16 16).
- 3 columns (1 on mobile), gap 30px (12 mobile); each column bordered (1px rgba(95,211,207,.35), radius 6, padding 12 10). `pi-arrow-right` 13px #9fb0c8 between columns (absolute right −22px, 46%).
- Column header 13.5px/500 white with 22px badge: Angular "A" red square r4; .NET "•NET" purple circle; Data has no badge.
- Items (box: 1px rgba(95,211,207,.3), radius 4, padding 10, bg rgba(255,255,255,.035); icon #e8f1fb; title 11.5px/500 white; desc 9.5px #9fb0c8):
  - Angular applications: pi-desktop Staff portal / Gestión completa · pi-wrench Technician experience / Trabajo en campo · pi-user Customer portal / Consulta y pagos
  - .NET 10 API (with `pi-arrow-down` between items): pi-verified Application / CQRS (Use cases) · pi-database Domain / DDD (Entities) · pi-server Infrastructure / EF Core (Repositories)
  - Data & storage (icons 22px): pi-database PostgreSQL / Datos de la aplicación · pi-file File storage / Archivos y evidencias
- Dashed bracket (14px tall, 1px dashed rgba(159,176,200,.45), no bottom, inset 8%) connecting to an ops row: grid `auto-fit minmax(110px,1fr)` gap 10, dashed boxes: pi-cog CI/CD / GitHub Actions · pi-box Docker / Entornos de desarrollo · pi-file-check Audit / Trazabilidad · pi-shield RBAC / Permisos por rol.

### 3. Stack strip
White, top + bottom 1px #edf1f6, padding 18px padX. Grid 5 cols (3 tablet, 1 mobile). Each item padding 4px 18px, 1px left divider #e3e9f2 (none on first / mobile). 34px mark + title 14px/600 + desc 11.5px:
- Angular badge (red, r6, "A") · Angular 22.1 · Frontend moderno y reactivo
- .NET badge (purple circle) · .NET 10 · API robusta y escalable
- pi-database #336791 · PostgreSQL · Datos relacionales confiables
- pi-database #0f8c89 · 50 domain entities · Modelo de dominio completo
- pi-users #0f8c89 · 3 user experiences · Equipo, técnicos y clientes

### 4. El reto (`#reto`)
Grid `minmax(0,1.9fr) repeat(3,minmax(0,1fr))`, gap 28. Intro: eyebrow "EL RETO"; H2 "Modelar una operación completa, no solo una interfaz."; P 15px/1.55 "Gestionar solicitudes, cotizaciones, órdenes de trabajo, visitas, técnicos, facturas y pagos en un mismo sistema, manteniendo aislamiento por organización (tenant) y control de permisos por rol."
Cards (1px #e3e9f2, r6, padding 22 18; icon 26px teal; title 15.5px/600 mt 10; desc 13.5px):
- pi-desktop Producto — Flujos completos de principio a fin.
- pi-box Arquitectura — Separación clara entre dominio, aplicación e infraestructura.
- pi-users Experiencia — Portales adaptados al equipo, técnicos y clientes.

### 5. Arquitectura (`#arquitectura`)
Grid `minmax(0,.85fr) minmax(0,1.25fr) minmax(0,.75fr)`, gap 32, align center.
- Col 1: eyebrow "ARQUITECTURA"; H2 "Una base preparada para crecer."; P "Una arquitectura en capas que separa claramente las responsabilidades, facilita el mantenimiento y permite evolucionar el sistema sin afectar el núcleo del negocio."
- Col 2 — layered diagram (vertical, gap 4; blue `pi-arrow-down` 10px between tiers):
  1. Blue box: header `pi-desktop` "Angular applications (Angular 22.1)"; 3 white sub-cards (title 10.5px/600 #1d4ed8, desc 8.5px): Staff portal / Gestión y administración · Technician experience / Trabajo en campo · Customer portal / Consulta y pagos.
  2. Lavender bar: .NET badge + ".NET 10 Web API" 11.5px/600. Then 3 arrows.
  3. 3 blue boxes (teal icon 18px): pi-list Application · CQRS · Casos de uso y orquestación | pi-box Domain · DDD · Entidades y reglas de negocio | pi-database Infrastructure · EF Core · Repositorios y persistencia. Then 2 arrows.
  4. 2 blue boxes: pi-database (#336791) PostgreSQL / Datos de la aplicación | pi-folder (#2563eb) File storage / Archivos y evidencias.
- Col 3 — checklist (gap 20; title 13px/600; desc 11px): Clean Architecture — Capas bien definidas y bajo acoplamiento. · Tenant isolation — Datos aislados por organización. · Role-based access — Control de acceso por rol y sucursal. · Auditable actions — Registro de eventos importantes. · Versioned database migrations — Migraciones versionadas y revisadas.

### 6. Tecnologías
Grid `minmax(0,1fr) repeat(4,minmax(0,1fr))`, gap 18. Intro: eyebrow "TECNOLOGÍAS"; H2 "Elegidas por su capacidad, no por moda."
Cards (1px #e3e9f2, r6, padding 14 16 16; header icon 20px + 13px/600; list 12.5px #46557a, gap 8, each with a 16px colored brand chip — **replace chips with official SVG logos**):
- pi-desktop (teal) **Frontend**: Angular 22.1 (#dd0031) · TypeScript (#3178c6) · Signals (#7c3aed) · RxJS (#d6247f) · PrimeNG (#dd0031) · SCSS (#cd6799)
- pi-cog (navy) **Backend**: .NET 10 (#5b3fd4) · C# (#68217a) · CQRS · DDD (teal) · EF Core (#1e3a8a) · REST APIs
- pi-database (teal) **Data & infrastructure** (22px chips): PostgreSQL (#336791) · Docker Compose (#2496ed) · GitHub Actions
- pi-shield (teal) **Quality**: ESLint (#4b32c3) · Prettier (#f7b93e) · Tests (unitarios e integración) · Code review · Audit trail

### 7. Spec-driven (`#proceso`) — navy band
Grid `minmax(0,.8fr) minmax(0,1.3fr) minmax(0,.65fr)`, gap 28, align center. Section has `position: relative; z-index: 1` so the spec card can overlap the next section.
- Col 1: eyebrow (#d5deea) "SPEC-DRIVEN DEVELOPMENT"; H2 white "Cada feature comenzó con decisiones explícitas."; P 15px #d5deea "Diseño, reglas de negocio y criterios de aceptación antes de escribir código."
- Col 2: 5 step cards (grid 5 cols; 2 on mobile; gap 22/12; padding-top 14). Card: 1px rgba(95,211,207,.35), r6, padding 24 8 12, centered. Number badge 24px circle (bg #0a223f, 1.5px ring #2cc2bd) sitting on the top edge (top −13px). Icon 20px #2cc2bd; title 12.5px/600 white; desc 11px #bfcadb. Small `pi-arrow-right` 8px between cards (desktop).
  1 pi-pencil Diseño — Mockups y estados · 2 pi-file SPEC — Reglas y alcance · 3 pi-box Arquitectura — Contratos y datos · 4 pi-code Implementación — Frontend y backend · 5 pi-file-check Auditoría — QA, seguridad y accesibilidad
- Col 3: white SPEC card (r6), desktop `margin-bottom: -70px` so it hangs below the band. Header (9px 12px, divider): small doc icon, "Solicitud de servicio – SPEC" 10.5px/600, "‹ ›" right. Rows (icon 14px #1d4ed8; title 10px/600; desc 8.5px): pi-list Business rules — Reglas de negocio y validaciones · pi-code API contract — Endpoints, payloads y respuestas · pi-database Data impact — Entidades y cambios en la base de datos · pi-check-square Acceptance criteria — Criterios de aceptación y casos de prueba.

### 8. Decisiones
Grid `minmax(0,1.05fr) repeat(4,minmax(0,1fr))`, gap 18. Intro: eyebrow "DECISIONES TÉCNICAS"; H2 "Los retos que definieron el proyecto."
Cards (r6, padding 16, equal height): icon 20px teal + title 12.5px/600; desc 12px/1.45; footer divider + 10.5px "Problema → decisión → resultado" (pi-arrow-right 8px).
- pi-building Multi-tenancy — Evitar cruces de información entre organizaciones.
- pi-arrow-right-arrow-left Estados y transiciones — Mantener consistencia entre solicitudes, cotizaciones, trabajos y visitas.
- pi-shield Permisos por rol y sucursal — Autorizar tanto la interfaz como cada operación del servidor.
- pi-file-check Trazabilidad — Registrar cambios importantes sin exponer información sensible.

### 9. Calidad (`#calidad`)
Grid `minmax(0,.85fr) minmax(0,1.05fr) minmax(0,1.05fr)`, gap 28. Intro: eyebrow "CALIDAD Y ENTREGA"; H2 "Construido como si fuera a producción."
- CI card (white, 1px #e3e9f2, r6): header `pi-github` "GitHub Actions" 11.5px/600 + right "Success" badge (green bg/border, `pi-check-circle`). Rows (16px green check dot #16a34a; title 11px/600; desc 9.5px; time right 10px): Format — Check code formatting — 12s · Lint — Run linters — 38s · Tests — Execute unit and integration tests — 2m 14s · Build — Build application — 1m 27s.
- Checklist (18px circles, 12.5px, gap 9): CI para frontend y backend · Migraciones revisadas y no aplicadas automáticamente · Validación de aislamiento por organización · Pruebas de permisos y flujos críticos · Revisión visual, responsive y accesibilidad. Then info bar (bg #e3ebf6, r5, padding 11 14, "i" circle #46557a): "Las decisiones y limitaciones también quedan documentadas."

### 10. Mi contribución (`#contribucion`)
Grid `minmax(0,1.05fr) repeat(3,minmax(0,.68fr))`, gap 20; bottom padding 28px. Intro: eyebrow "MI CONTRIBUCIÓN"; H2 "Diseñé el producto y también construí sus cimientos."; P 13px "Definí los flujos, diseñé la experiencia, modelé el dominio y desarrollé la arquitectura Full Stack apoyándome en un proceso iterativo asistido por IA y validado mediante revisiones técnicas."
Link cards (`<a>`, r6, padding 20 16; icon 26px teal; title 13.5px/600; desc 11.5px; trailing `pi-arrow-right` teal; hover border #0f9d9a):
- pi-file Explorar los SPECs — Requisitos, reglas de negocio y criterios de aceptación. → repo `/specs`
- pi-box Revisar la arquitectura — Diagramas, estructura del proyecto y decisiones técnicas. → repo `/docs`
- pi-book Leer la guía de uso — Recorrido paso a paso por la aplicación. → guide (TBD)
(Prototype links all point to the repo root; set real targets.)

### 11. CTA bar
Wrapper padding 0 20px 18px (12px mobile). Bar max-width 1240px, navy gradient, r6, padding 16px 28px, flex wrap, gap 16/40. Decorative teal mountain shapes on the right 360px (clip-path polygons, #14b8b0 at .85, #0d8f8a, #2dd4cc at .5) — export as an SVG/PNG.
- Text (padding-left 100px desktop): "¿Quieres ver el resultado funcionando?" 18px/600 white; "Explora FieldOps en acción o revisa el código fuente." 11.5px #d5deea.
- Buttons (gap 40): Primary "Abrir demo →" (13px, padding 11px 30px, hover #13a29e) → landing `#demo`; Outline white "Ver repositorio" with `pi-github` (padding 10px 40px) → repo.
- Right note 10.5px white: "Proyecto demostrativo<br>con datos ficticios."

### 12. Footer
Padding 6px padX 18px. Logo 20px + 16px wordmark; links 11.5px #1c2b55 gap 32: Producto (landing) · Case study (#reto) · Documentación (#proceso) · Demo (landing #demo); right 11px #46557a "Diseñado y desarrollado por Juan David Ríos · 2026".

## Interactions & Behavior
- Static page; no data fetching or forms.
- Anchors: `#reto`, `#arquitectura`, `#proceso`, `#calidad`, `#contribucion` — enable router `anchorScrolling` + `scroll-behavior: smooth`.
- External links (`github.com`) open in a new tab with `rel="noopener"`.
- Hover: primary darkens; outline buttons get a light tint; link cards change border to #0f9d9a.
- Responsive via SCSS media queries (`max-width: 1099.98px`, `759.98px`). The prototype's ResizeObserver is a prototyping artifact; don't port it.
- Below 1100px: the spec card's negative margin is removed; all grids stack.
- No animations specified. Optional subtle reveal on scroll (respect `prefers-reduced-motion`).

## State Management
- Only the shared nav's mobile drawer (`signal<boolean>`). Everything else is static data in `case-study.data.ts`.

## Accessibility
- One `<h1>`; section titles `<h2>`. Diagrams: wrap in `<figure>` with a visually hidden `<figcaption>` describing the architecture (Angular apps → .NET 10 API [Application/CQRS, Domain/DDD, Infrastructure/EF Core] → PostgreSQL + file storage).
- Colored brand chips and decorative shapes: `aria-hidden="true"`.

## Assets
- Inter woff2: `frontend/public/fonts/inter/` (in repo).
- PrimeIcons: existing dependency.
- **Needed:** official SVG logos for Angular, .NET, TypeScript, RxJS, PrimeNG, Sass, C#, PostgreSQL, Docker, GitHub, ESLint, Prettier (the prototype uses colored letter chips as placeholders).
- CTA mountain decoration: export from the prototype or redraw as SVG.
- Reference image the design was matched to: `references/case-study-ref.png`.

## Files
- `design/FieldOps Case Study.dc.html`: the design. Open it in a browser; it needs `design/support.js`. Inline styles are the source of truth for any value not listed above. Data arrays are in the logic class at the bottom of the file.
- `design/support.js`: prototype runtime only. Don't port.
- `design/frontend/public/fonts/inter/*`: fonts.
- `references/case-study-ref.png`: original visual reference.
