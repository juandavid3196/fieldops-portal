# Handoff: FieldOps — Landing page (marketing)

## Overview
Public presentation page for FieldOps, a field-service management app (plumbing, painting, carpentry, HVAC…) used by four roles: Owner, Coordinator, Technician and Customer. The page explains the request → payment flow, scheduling, role experiences, desktop/mobile/portal surfaces, reporting/audit, the user guide, and drives visitors to the demo. Language: **Spanish** copy; product UI mockups inside the page use English (hero, schedule) or Spanish (rest), as listed below.

A sibling page, **Caso técnico** (`FieldOps Case Study`), exists in the design project and is linked from the nav; it is not part of this handoff.

## About the Design Files
`design/FieldOps Landing.dc.html` is a **design reference built in HTML** (open it in a browser; `support.js` must sit next to it). It is not production code. Recreate it inside the existing Angular app in `juandavid3196/fieldops` (`frontend/`) using its established patterns: **Angular 22 standalone components + signals, PrimeNG, PrimeIcons, SCSS with the tokens in `frontend/src/styles/_tokens.scss`**, and the conventions in `docs/frontend/styling-architecture.md`.

Recommended structure:
```
frontend/src/app/marketing/
  landing/landing.page.ts|html|scss          ← route '' (public, no auth, no app shell)
  landing/sections/                          ← one standalone component per section below
  shared/marketing-nav/                      ← shared with the Case Study page
  shared/marketing-footer/
  shared/mock-frames/                        ← static product-UI mock pieces (sidebar, table, phone frame)
```
The in-page "product screenshots" are **built in HTML as static mocks**. Either rebuild them as static presentational components (data arrays below) or replace them with real PNG/WebP screenshots of the app at the same sizes — the latter is simpler and recommended if screenshots exist.

## Fidelity
**High-fidelity.** Final colors, type, spacing and copy. Recreate pixel-accurately. Copy is final (Spanish) — keep verbatim.

## Global layout
- Content container: `max-width: 1200px; margin: 0 auto;` horizontal padding `padX`.
- Breakpoints (page width): **mobile < 760px**, **tablet 760–1099px**, **desktop ≥ 1100px**.
  | token | mobile | tablet | desktop |
  |---|---|---|---|
  | padX | 20px | 40px | 48px |
  | h1 | 44px | 56px | 60px |
  | h2 (centered section titles) | 28px | 32px | 34px |
  | h2b (split section titles) | 32px | 38px | 42px |
  | section padding-y | 56px | 72px | 72px |
  | hero padding top / bottom | 44 / 56px | 56 / 64px | 56 / 64px |
- Two-column sections collapse to one column below 1100px (`grid-template-columns: minmax(0,1fr)`). Product mocks with a dark sidebar hide the sidebar below 760px.
- Font: **Inter** 400/500/600/700 (already in `frontend/public/fonts/inter`). Headings: weight 700, letter-spacing −0.03em to −0.04em. Body antialiased.
- Icons: **PrimeIcons** (`pi pi-*`) everywhere.
- Logo: teal leaf mark (SVG below) + wordmark "FieldOps" 700, −0.03em.
  ```svg
  <svg viewBox="0 0 24 24"><path d="M3 21C3 11 9 3 21 3c0 11-7 18-18 18z" fill="#0f9d9a"/><path d="M5.5 18.5L15 9" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>
  ```
  On dark backgrounds the leaf fill is `#2cc2bd` without the white stroke. If the repo has an official logo, use that instead.

## Design Tokens
Colors
| name | hex | use |
|---|---|---|
| ink-900 | #0b1730 | h1 |
| ink-800 | #0b1d45 | headings, strong text |
| ink-700 | #1c2b55 | nav links, footer links |
| slate-600 | #46557a | body text, eyebrows |
| slate-400 | #7b88a3 | captions / meta |
| slate-300 | #9aa5b8 | placeholder text in mocks |
| line | #edf1f6 / #e6ebf2 / #dfe5ee | header border / table borders / input borders |
| teal-600 (primary btn) | #0f8c89 | primary buttons, check circles |
| teal-700 (hover) | #0b7471 | primary hover |
| teal-500 (accent text) | #0f9d9a | highlighted headline words, logo |
| teal-300 (on dark) | #2cc2bd | accent text on navy |
| teal-50 | #e6f6f5 / #e8f6f5 | icon circles |
| blue-600 | #2563eb | secondary button outline, mock links, active sidebar item |
| blue-50 | #e8f0fd / #eaf1fd | blue icon circles, "Sent/Programado" chips |
| navy (dark sections) | linear-gradient(135deg,#0a1f3d 0%,#0c2a4f 55–60%,#0a223f 100%) | Roles, CTA |
| sidebar navy | #0b1d33 | mock app sidebars |
| on-dark text | #d5deea | paragraphs on navy |
| success | bg #e7f6ee / fg #136f4a | Paid, Completado |
| warning | bg #fff1e0 / fg #b45309 (#c2410c for En proceso/Overdue text) | |
| danger | bg #fdecec / fg #c2410c, dot #e5484d | Overdue, notif dot |
| neutral chip | bg #eef2f6 / fg #46557a | Draft |

Section backgrounds
- Hero: `linear-gradient(180deg,#eef3f8 0%,#f5f8fb 70%,#fff 100%)`
- Agenda: `linear-gradient(180deg,#f3f7fc 0%,#edf3fa 100%)`
- Datos: `linear-gradient(180deg,#eef5fc 0%,#e8f1fb 100%)`
- Guía: `linear-gradient(180deg,#fff 0%,#f6f9fc 100%)`
- Flujo, Conectado, Footer: `#fff`

Radius: buttons 5–6px · cards/mocks 6–8px · chips 999px · phone frame 30px outer / 25px inner.
Shadows
- Mock window: `0 22px 50px rgba(11,29,69,.12), 0 0 0 1px rgba(11,29,69,.06)` (hero: `0 30px 70px rgba(11,29,69,.18)`)
- Phone: `0 30px 60px rgba(11,29,69,.3)`
- Toast: `0 14px 34px rgba(11,29,69,.16)`
- Primary button (hero): `0 6px 16px rgba(15,140,137,.25)`
- Role cards: `0 10px 30px rgba(0,0,0,.18)`

Eyebrows: 12px, weight 500, letter-spacing 0.14–0.16em, uppercase, `#46557a` (on navy `#d5deea`).

Buttons
- Primary: bg #0f8c89, text #fff 15px/600, padding 15px 22px (nav: 11px 18px, 14px), radius 5px, trailing `pi-arrow-right` 13px, gap 12px. Hover bg #0b7471.
- Secondary (light): bg #fff, 1px border #2563eb, text #0b1d45 15px/500, leading 18px blue circle with `pi-play` 8px white. Hover bg #f1f6ff.
- Outline dark (guide): 1px #1c2b55 border, `pi-file` icon.
- On navy: primary same teal; secondary = 1px #fff border, white text, 20px white circle with navy play icon; hover bg rgba(255,255,255,.08).
- All buttons `white-space: nowrap`.

## Sections (top → bottom)

### 1. Nav (`<header>`)
White, 1px bottom border #edf1f6, padding 14px padX. Flex row, gap 56px.
- Logo (28px mark + 22px wordmark).
- Links (hidden < 760px): exactly **two** — `Producto` → landing route, `Caso técnico` → case-study route. 14px; active: #0b1d45 600 + 2px bottom border #0f9d9a; inactive: #46557a 500, transparent border; padding 6px 0; gap 30px.
- Right: primary button "Ver demo →" (anchors `#demo`). Below 760px also a 44×44 hamburger (`pi-bars` 18px) — open behavior not designed; suggest PrimeNG `Sidebar`/drawer with the same two links + Ver demo.

### 2. Hero (`#producto`)
Grid `minmax(0,.62fr) minmax(0,1fr)`, gap 40px, align center.
Left column (gap 22px):
- Eyebrow "GESTIÓN DE SERVICIOS DE CAMPO"
- H1 (line-height 1.06, −0.04em, #0b1730): "Todo tu equipo.<br>Cada servicio.<br>En <span teal-500>un solo lugar.</span>"
- P 18px/1.5 #46557a, max-width 440px: "Conecta solicitudes, cotizaciones, visitas y facturación para mantener tu operación bajo control."
- Buttons (gap 14px, wrap): Primary "Explorar la demo" → #demo; Secondary "Ver cómo funciona" → #como-funciona.
- Caption 13px #7b88a3: "Proyecto demostrativo · Datos ficticios"

Right column: composition, height 420px, position relative.
- **Desktop mock** (hidden < 760px): absolute left 0 top 0, width 96%, height 372px, radius 8px. Sidebar 96px #0b1d33 with nav items (8.5px): Dashboard, Requests, Quotes, Jobs, Schedule, Customers, Team, Billing (active: bg #2563eb, white), Reports, Settings; inactive #c9d3e3. Content: top bar 34px (search "Search customers, jobs, quotes...", "All branches ▾", bell with red dot, avatar DK "Daniel Kim / Accountant"); header "← Invoicing" / "Invoices & payments" / subtitle; buttons Export (outline blue) + "+ New invoice" (blue); 4 KPI cards (Outstanding $18,760 blue; Overdue $4,320 red; Draft $2,845 grey; Paid this month $118,140 green); tabs Invoices (active blue underline) / Payments / Completed jobs ready to invoice (badge 6 red); filter row; table columns Invoice # · Customer · Work order · Invoice date · Due date · Amount · Balance · Status with rows:
  | INV-1048 | Sofia Martinez | WO-1048 | Sep 20, 2026 | Oct 4, 2026 | $357.28 | $0.00 | Paid |
  | INV-1049 | Daniel Kim | WO-1042 | Sep 19, 2026 | Oct 3, 2026 | $149.00 | $149.00 | Sent |
  | INV-1045 | Jennifer Walsh | WO-1037 | Sep 2, 2026 | Sep 16, 2026 | $325.00 | $325.00 | Overdue |
  | INV-1044 | BrightLine Offices | WO-1035 | Sep 1, 2026 | Sep 30, 2026 | $1,560.00 | $780.00 | Partially paid |
  | INV-1050 | Robert Chen | WO-1053 | — | — | $485.00 | $485.00 | Draft |
- **Phone mock** (technician "Today's jobs"): 200×400, frame #0b0f19 radius 30 padding 6, notch 62×16. Desktop: absolute right −24px top 58px; mobile: relative, centered. Contents: navy header "FieldOps Today's jobs" + bell + CR avatar; "Good morning, Carlos" / "Wednesday, Sep 23, 2026" / chip "● Clocked in · 7:42 AM" (green); 3 stats (4 jobs · 7.5 scheduled hours · 52 min travel); progress "1 of 4 completed" 25% teal; NEXT card (border #9edbd8): "NEXT · 9:30 AM – 11:30 AM", chip "High priority" (orange), "Kitchen sink leak repair", #WO-3091, Sofia Martinez, 1842 Oak Street Austin, 22 min away · 8.4 mi, chips "Plumbing" (blue) + "3 planned materials · Ready ✓" (green), Call/Message/Directions outline buttons, teal "Start travel" button; bottom tab bar Today (active teal) / Schedule / Time / Messages / More.
- **Toast**: absolute left 37% bottom 14px (mobile: left 0, bottom −6px). White, radius 8, padding 12 18 12 14. 32px teal circle with `pi-check`; "Visita completada" 14px/600 #0b5e5b; "Servicio finalizado con éxito." 11.5px #46557a.

### 3. Flujo (`#como-funciona`)
Centered title "De la solicitud al pago, todo conectado." + subtitle 17px "Un flujo simple y completo para que nada se quede pendiente." Gap 44px to steps.
Steps grid: 6 cols desktop / 3 tablet / 2 mobile, row-gap 32px. Each: 68px circle (teal: bg #e6f6f5 fg #0f8c89; blue: bg #e8f0fd fg #2563eb) with 26px icon; title 16px/700 (margin-top 12px); desc 13.5px/1.4 #46557a max-width 160px. Desktop only: `pi-arrow-right` 16px #6b7ba1 between steps (absolute right −10px, top 26px).
| # | icon | tone | title | desc |
|---|---|---|---|---|
| 1 | pi-file | teal | Solicitud | Registra y organiza las solicitudes de servicio. |
| 2 | pi-file-edit | blue | Cotización | Crea y envía cotizaciones en minutos. |
| 3 | pi-clipboard | teal | Orden | Convierte en una orden de trabajo. |
| 4 | pi-calendar | teal | Visita | Agenda y asigna a tu equipo. |
| 5 | pi-dollar | blue | Factura | Genera la factura automáticamente. |
| 6 | pi-credit-card | teal | Pago | Recibe pagos en línea o fuera de FieldOps. |

### 4. Agenda
Grid `minmax(0,1.3fr) minmax(0,1fr)`, gap 52px. 
Left: Schedule mock (sidebar with Schedule active; "Schedule" + "+ New job"; Today ‹ › "Sep 21 – Sep 27, 2026"; Day/Week(active)/Month segmented; filters All teams / All statuses / search). Week grid: 34px hour column (8 AM–5 PM, 20px rows) + 5 day columns (Mon 21 … Fri 25; Wed 23 is today: text #2563eb, bg #f3f7ff, blue dot). Events (left bar 2.5px): teal bg #dcf3ee bar #14a38b; blue bg #dde8fd bar #2f6fec; grey bg #eceff4 bar #8792a8:
Mon: 9 AM Toilet repair · Westlake Dr (teal) — Tue: 10 Sink leak repair · Oak Street (blue), 1 PM HVAC inspection · Cedar Park (grey) — Wed: 11 Water heater · Maple Ave (blue), 2 PM Pipe inspection · Riverside Ave (blue) — Thu: 9 AC maintenance · Downtown (teal), 12 Follow up · South Congress (grey) — Fri: 10 Estimate visit · Lamar Blvd (grey), 3 PM Install water heater · Pine Street (teal).
Right: H2b "Planifica con claridad.<br><span teal>Ejecuta con confianza.</span>"; P 16.5px "Coordina personas, visitas y recursos desde un solo lugar. Mantén a tu equipo alineado, da seguimiento en tiempo real y asegura un cierre completo de cada servicio."; 3 checks (26px teal circle, `pi-check` 11px white; title 15.5px/600; desc 13.5px), gap 22px:
- Agenda y asignación de técnicos — Visualiza la carga de trabajo y asigna visitas fácilmente.
- Seguimiento del trabajo en campo — Conoce el estado de cada servicio en tiempo real.
- Evidencias y cierre del servicio — Registra notas, fotos y confirma la finalización del trabajo.

### 5. Roles (`#roles`) — navy gradient
Eyebrow "UNA PLATAFORMA, CUATRO EXPERIENCIAS"; H2b white "Cada persona ve exactamente <span #2cc2bd>lo que necesita.</span>"; P 18px #d5deea "Herramientas claras para administrar, coordinar, ejecutar y consultar el trabajo."
Cards grid `repeat(auto-fit,minmax(220px,1fr))`, gap 18px. White, radius 6, padding 22 22 26. Icon 30px #0f9d9a; title 17px/700 (mt 10); desc 14.5px/1.45.
- pi-home · Propietario · Control total de la operación, las finanzas y el equipo.
- pi-users · Coordinador · Organiza solicitudes, agenda visitas y mantiene el trabajo en movimiento.
- pi-wrench · Técnico · Consulta su ruta, registra avances y documenta el servicio desde el móvil.
- pi-user · Cliente · Aprueba cotizaciones, sigue el servicio y consulta sus facturas.

### 6. Conectado
Centered title "Del escritorio al campo, <span teal>todo permanece conectado.</span>" + P 18px "La información correcta llega a cada persona en el momento adecuado."
Composition (desktop height 400px, relative; mobile stacks, desktop mock hidden):
- Desktop "Trabajos de campo" mock: left 0, width 58%, height 300. Sidebar (Trabajos active). Tabs Todos/En proceso/Programados/Completados/Cancelados. Table # Trabajo · Cliente · Dirección · Servicio · Fecha · Técnico · Estado:
  WO-3091 Sofía Martínez, 1842 Oak Street, Reparación de fuga, Sep 23, Daniel Kim, En proceso ·
  WO-3092 Robert Chen, 77 Pine Street, Mantenimiento AC, Sep 23, Jennifer Walsh, Programado ·
  WO-3093 Carlos Ruiz, 1200 Maple Ave, Instalación, Sep 24, Michael Torres, Programado ·
  WO-3094 Amanda Lewis, 56 Cedar Park, Inspección HVAC, Sep 24, Robert Chen, En proceso ·
  WO-3095 David Kim, 901 Lakeview Dr, Reparación, Sep 25, Daniel Kim, Completado
- Phone 172×360 at left 52%, top −12px, z-index 2: "Mis trabajos", Hoy/Esta semana toggle, 3 items (9:30 a. m. En camino — Reparación de fuga en fregadero — WO-3091 · Sofía Martínez — 1842 Oak Street, Austin; 11:30 a. m. Programado — Mantenimiento AC — WO-3092 · Robert Chen — 77 Pine Street; 2:00 p. m. Programado — Inspección HVAC — WO-3094 · Amanda Lewis — 56 Cedar Park), tab bar Hoy/Agenda/Registro/Mensajes/Más.
- Customer portal card: right 0, top 20px, width 22% (mobile 320px): "FieldOps | Portal del cliente", "Mis servicios", En curso/Historial, service card WO-3091 En proceso, "Reparación de fuga en fregadero", "Mié, 23 de sep de 2026 · 9:30 a. m. – 11:30 a. m.", Técnico Sofía Martínez, buttons Ver detalles / Mensajes.
Below: 3 feature columns (1 col mobile), gap 28. 62px circle #e8f6f5 with 26px icon #0f8c89; title 16px/700; desc 13.5px/1.5:
- pi-desktop · Operación centralizada · Toda la información en un solo lugar y actualizada en tiempo real.
- pi-mobile · Trabajo móvil · El técnico lleva su agenda, registra avances y consulta detalles desde cualquier lugar.
- pi-users · Portal del cliente · Tus clientes pueden seguir el estado del servicio y consultar su historial de forma simple y segura.

### 7. Datos
Grid `minmax(0,.8fr) minmax(0,1.2fr)`, gap 52. Left: eyebrow "CONTROL Y TRAZABILIDAD"; H2b "Decide con datos.<br><span teal>Revisa cada cambio.</span>"; P 17px "Reportes operativos y financieros para entender el rendimiento, junto con un historial de auditoría que conserva la trazabilidad."; 3 checks (26px teal circle, 15.5px, bold lead in #0b1d45): **Indicadores** de cotizaciones, trabajos y facturación. / **Rentabilidad,** antigüedad de saldos y utilización del equipo. / **Registro** de acciones importantes por usuario y fecha.; caption italic 12.5px #7b88a3 "Datos de demostración."
Right: Reports mock (sidebar Reportes active; tabs Resumen/Trabajos/Facturación/Clientes/Equipo/Auditoría(active); filters Todos los usuarios / 1 sep 2026 - 30 sep 2026 / Todos los tipos / Exportar). Audit table Fecha y hora · Usuario · Acción · Detalle:
  Sep 23, 2026 9:14 a. m. · Daniel Kim · Trabajo actualizado · Se cambió el estado a En proceso (WO-3091)
  Sep 23, 2026 8:57 a. m. · Sofía Martínez · Nota agregada · Se agregó una nota al trabajo (WO-3091)
  Sep 22, 2026 4:31 p. m. · Jennifer Walsh · Cotización enviada · Se envió la cotización COT-1042 por email
  Sep 22, 2026 3:18 p. m. · Robert Chen · Trabajo completado · Se marcó como completado el trabajo (WO-3090)
  Sep 21, 2026 11:03 a. m. · Daniel Kim · Cliente actualizado · Se actualizó la información de contacto
  Sep 20, 2026 2:16 p. m. · Admin · Usuario creado · Se creó el usuario Michael Torres

### 8. Guía (`#guia`)
Grid `minmax(0,1fr) minmax(0,.95fr)`, gap 40. 
Left visual (height 380px): book cover 230×300 rotated −12deg (navy gradient `170deg,#12305a→#0a1f3d`, inset spine shadow, teal mountain shapes #14b8b0 / #0d8f8a / #2dd4cc at bottom via clip-path) with "FieldOps", "DOCUMENTACIÓN DEL PRODUCTO", "Guía de uso", "Tu operación, paso a paso.", "Inicio rápido · Roles · Operaciones". Desktop only: a white page 260×330 rotated +3deg at left 220px showing "GUÍA DEL TÉCNICO / 03 / EJECUCIÓN EN CAMPO / Inicia tu próxima visita" with a small phone. **Recommended: replace this whole visual with a single exported image** (`guide-visual.png`) — it is decorative.
Right: eyebrow "GUÍA DE USO"; H2b "Aprende FieldOps paso a paso."; P "Recorre cada función por rol o descarga el manual completo para consultarlo cuando lo necesites."; list (17px teal icons, gap 18): pi-file Inicio rápido · pi-sitemap Flujos completos por rol · pi-image Instrucciones con capturas reales · pi-lightbulb Consejos y resultados esperados (first two #0b1d45/500, last two #46557a/400); buttons Primary "Explorar la guía" + Outline "Descargar manual PDF". Targets TBD (guide route / PDF asset).

### 9. CTA (`#demo`) — navy gradient
Decorative SVG lines in #1fb5ae (opacity .7) at bottom-left and right, with a ring node at right. Padding 44px top / 22px bottom, centered. H2 white "Descubre cómo se siente una operación <span #2cc2e0>bajo control.</span>"; P 17px #d5deea "Explora la demo con datos ficticios y conoce FieldOps desde cada rol."; buttons Primary "Explorar la demo" (padding 14px 32px, hover #13a29e) + On-navy secondary "Ver documentación"; caption 12px "Proyecto demostrativo · No utiliza datos reales".

### 10. Footer
White, padding 18px padX, flex wrap gap 16/56. Logo 24px; links 13px #1c2b55 gap 40: Producto (#producto) · Cómo funciona (#como-funciona) · Demo (#demo) · Documentación (case-study route). Right-aligned 12px: "Diseñado y desarrollado por Juan David Ríos." / "Proyecto de portafolio · 2026" (#46557a).

## Interactions & Behavior
- Static marketing page; no data fetching, no forms.
- Anchor links scroll to section ids: `#producto`, `#como-funciona`, `#roles`, `#guia`, `#demo` — use Angular router `fragment` + `anchorScrolling: 'enabled'` and `scroll-behavior: smooth`.
- "Explorar la demo" / "Ver demo" should eventually route to the demo login/role picker (currently `#demo`).
- Hover: buttons darken (values above); links keep color, no underline.
- No animations in the design. Optional: subtle fade/slide-up on section enter (respect `prefers-reduced-motion`).
- Responsive: see breakpoint table; implement with SCSS media queries (`max-width: 1099.98px`, `max-width: 759.98px`), not JS. The HTML prototype used a ResizeObserver only because of prototyping constraints.

## State Management
- Only the mobile nav drawer open/closed (`signal<boolean>`). Everything else is static.
- Keep mock data (invoices, jobs, audit rows, steps, roles) as typed `const` arrays in a `landing.data.ts`.

## Accessibility
- One `<h1>`; section titles `<h2>`. Decorative mocks: `aria-hidden="true"` (or real screenshots with descriptive `alt`).
- Text contrast meets 4.5:1 with the listed colors; keep teal highlight words at headline size only.
- Hamburger: `<button aria-label="Abrir menú" aria-expanded>`, 44×44 hit target.

## Assets
- Inter woff2 — `frontend/public/fonts/inter/` (already in repo).
- PrimeIcons — already a project dependency.
- Logo — inline SVG above (placeholder unless an official mark exists).
- Product mocks — built in HTML; replace with real app screenshots where available.
- Reference images the design was matched to: `references/landing-ref-1.png`, `references/landing-ref-2.png`.

## Files
- `design/FieldOps Landing.dc.html` — the design (open in a browser; requires `design/support.js`). Markup and inline styles are the source of truth for any value not listed here; data arrays are in the `<script>` logic class at the bottom.
- `design/support.js` — runtime for viewing the prototype only. Do not port.
- `design/frontend/public/fonts/inter/*` — fonts used by the prototype.
- `references/*.png` — original visual references.
