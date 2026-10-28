// Spanish copy — the source of truth for the Dictionary shape.
// "\n" marks the line breaks used in the design.

const status = {
  prog: "En proceso",
  sched: "Programado",
  done: "Completado",
  route: "En camino",
};

export const es = {
  meta: {
    title: "FieldOps — Gestión de servicios de campo",
    description:
      "Conecta solicitudes, cotizaciones, visitas y facturación para mantener tu operación bajo control. Proyecto demostrativo con datos ficticios.",
    caseTitle: "Caso técnico — FieldOps",
    caseDescription:
      "Cómo se construyó FieldOps: el reto, la arquitectura en capas, el stack, el proceso spec-driven, las decisiones técnicas y la calidad de entrega.",
  },

  nav: {
    home: "FieldOps — inicio",
    main: "Principal",
    mobile: "Menú móvil",
    product: "Producto",
    caseStudy: "Caso técnico",
    viewDemo: "Ver demo",
    exploreDemo: "Explorar demo",
    viewRepo: "Ver repositorio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
    theme: "Cambiar entre modo claro y oscuro",
  },

  footer: {
    label: "Pie de página",
    product: "Producto",
    howItWorks: "Cómo funciona",
    demo: "Demo",
    docs: "Documentación",
    goPortfolio: "Ir al portafolio",
    credit: "Diseñado y desarrollado por Juan David Ríos.",
    portfolio: "Proyecto de portafolio · 2026",
    whatsapp: "Escríbeme por WhatsApp",
    linkedin: "Mi perfil de LinkedIn",
  },

  hero: {
    eyebrow: "Gestión de servicios de campo",
    line1: "Todo tu equipo.",
    line2: "Cada servicio.",
    line3: "En ",
    accent: "un solo lugar.",
    lead: "Conecta solicitudes, cotizaciones, visitas y facturación para mantener tu operación bajo control.",
    primary: "Explorar la demo",
    secondary: "Ver cómo funciona",
    caption: "Proyecto demostrativo · Datos ficticios",
    toastTitle: "Visita completada",
    toastBody: "Servicio finalizado con éxito.",
  },

  flow: {
    title: "De la solicitud al pago, todo conectado.",
    lead: "Un flujo simple y completo para que nada se quede pendiente.",
    steps: [
      { title: "Solicitud", desc: "Registra y organiza\nlas solicitudes de servicio." },
      { title: "Cotización", desc: "Crea y envía\ncotizaciones en minutos." },
      { title: "Orden", desc: "Convierte en una\norden de trabajo." },
      { title: "Visita", desc: "Agenda y asigna\na tu equipo." },
      { title: "Factura", desc: "Genera la factura\nautomáticamente." },
      { title: "Pago", desc: "Recibe pagos en línea\no fuera de FieldOps." },
    ],
  },

  schedule: {
    title1: "Planifica con claridad.",
    title2: "Ejecuta con confianza.",
    lead: "Coordina personas, visitas y recursos desde un solo lugar. Mantén a tu equipo alineado, da seguimiento en tiempo real y asegura un cierre completo de cada servicio.",
    checks: [
      { title: "Agenda y asignación de técnicos", desc: "Visualiza la carga de trabajo y asigna visitas fácilmente." },
      { title: "Seguimiento del trabajo en campo", desc: "Conoce el estado de cada servicio en tiempo real." },
      { title: "Evidencias y cierre del servicio", desc: "Registra notas, fotos y confirma la finalización del trabajo." },
    ],
  },

  roles: {
    eyebrow: "Una plataforma, cuatro experiencias",
    title: "Cada persona ve exactamente ",
    accent: "lo que necesita.",
    lead: "Herramientas claras para administrar, coordinar, ejecutar y consultar el trabajo.",
    items: [
      { title: "Propietario", desc: "Control total de la operación, las finanzas y el equipo." },
      { title: "Coordinador", desc: "Organiza solicitudes, agenda visitas y mantiene el trabajo en movimiento." },
      { title: "Técnico", desc: "Consulta su ruta, registra avances y documenta el servicio desde el móvil." },
      { title: "Cliente", desc: "Aprueba cotizaciones, sigue el servicio y consulta sus facturas." },
    ],
  },

  connected: {
    title: "Del escritorio al campo, ",
    accent: "todo permanece conectado.",
    lead: "La información correcta llega a cada persona en el momento adecuado.",
    features: [
      { title: "Operación centralizada", desc: "Toda la información en un solo lugar y actualizada en tiempo real." },
      { title: "Trabajo móvil", desc: "El técnico lleva su agenda, registra avances y consulta detalles desde cualquier lugar." },
      { title: "Portal del cliente", desc: "Tus clientes pueden seguir el estado del servicio y consultar su historial de forma simple y segura." },
    ],
  },

  data: {
    eyebrow: "Control y trazabilidad",
    title1: "Decide con datos.",
    title2: "Revisa cada cambio.",
    lead: "Reportes operativos y financieros para entender el rendimiento, junto con un historial de auditoría que conserva la trazabilidad.",
    checks: [
      { bold: "Indicadores", text: "de cotizaciones, trabajos y facturación." },
      { bold: "Rentabilidad,", text: "antigüedad de saldos y utilización del equipo." },
      { bold: "Registro", text: "de acciones importantes por usuario y fecha." },
    ],
    caption: "Datos de demostración.",
  },

  video: {
    eyebrow: "Presentación",
    title: "Conoce FieldOps en un video.",
    lead: "Un recorrido por la plataforma: de la solicitud al reporte, desde cada rol.",
    videoTitle: "FieldOps: presentación del proyecto",
    play: "Reproducir video",
  },

  guide: {
    eyebrow: "Guía de uso",
    title: "Aprende FieldOps paso a paso.",
    lead: "Aprende a usar FieldOps con instrucciones paso a paso, flujos por rol y capturas reales. Consulta o descarga el manual en español o inglés.",
    items: ["Inicio rápido", "Flujos completos por rol", "Instrucciones con capturas reales", "Consejos y resultados esperados"],
    guideEs: "Ver guía en español",
    guideEn: "View English guide",
  },

  cta: {
    title: "Descubre cómo se siente una operación ",
    accent: "bajo control.",
    lead: "Explora la demo con datos ficticios y conoce FieldOps desde cada rol.",
    primary: "Explorar la demo",
    secondary: "Ver documentación",
    caption: "Proyecto demostrativo · No utiliza datos reales",
  },

  /** Copy shown inside the product mock-ups (the in-app UI language). */
  mock: {
    status,
    portal: {
      label: "Portal del cliente",
      title: "Mis servicios",
      current: "En curso",
      history: "Historial",
      job: "Reparación de fuga en fregadero",
      when: "Mié, 23 de sep de 2026 · 9:30 a. m. – 11:30 a. m.",
      tech: "Técnico",
      details: "Ver detalles",
      messages: "Mensajes",
    },
    book: {
      kicker: "DOCUMENTACIÓN DEL PRODUCTO",
      title: "Guía de uso",
      subtitle: "Tu operación, paso a paso.",
      topics: "Inicio rápido · Roles · Operaciones",
    },
    sheet: {
      kicker: "GUÍA DEL TÉCNICO",
      chapter: "03 / EJECUCIÓN EN CAMPO",
      title: "Inicia tu próxima visita",
      lead: "Revisa el servicio asignado y avisa al cliente cuando estés en camino.",
      tipTitle: "Antes de empezar",
      tip: "Accede como técnico y abre una visita asignada.",
      today: "Trabajos de hoy",
      date: "Miércoles, 23 de sep de 2026",
      stats: ["trabajos", "horas programadas", "de traslado"],
      next: "2:00 p. m. · WO-3091",
      job: "Reparación de fuga en fregadero",
      window: "2:00 – 3:30 p. m.",
    },
  },

  caseStudy: {
    eyebrow: "Engineering case study",
    h1: ["Cómo construí FieldOps:", "del problema a una"],
    h1Accent: "plataforma completa.",
    lead: "Un proyecto Full Stack diseñado para demostrar arquitectura, producto, calidad y decisiones técnicas en un sistema de operaciones reales.",
    tags: ["Full Stack", "Product design", "System design", "Spec-driven development"],
    explore: "Explorar la arquitectura",
    viewApp: "Ver la aplicación",
    diagramCaption:
      "Arquitectura de FieldOps: aplicaciones Angular (portal del equipo, experiencia del técnico y portal del cliente) conectadas a una API .NET 10 con las capas Application (CQRS), Domain (DDD) e Infrastructure (EF Core), que persiste en PostgreSQL y almacenamiento de archivos. CI/CD con GitHub Actions, Docker, auditoría y permisos por rol.",
    diagram: {
      apps: ["Gestión completa", "Trabajo en campo", "Consulta y pagos"],
      storage: ["Datos de la\naplicación", "Archivos y\nevidencias"],
      ops: ["GitHub Actions", "Entornos de desarrollo", "Trazabilidad", "Permisos por rol"],
    },
    stats: [
      "Frontend moderno y reactivo",
      "API robusta y escalable",
      "Datos relacionales confiables",
      "Modelo de dominio completo",
      "Equipo, técnicos y clientes",
    ],
    challenge: {
      eyebrow: "El reto",
      title: ["Modelar una operación completa,", "no solo una interfaz."],
      lead: "Gestionar solicitudes, cotizaciones, órdenes de trabajo, visitas, técnicos, facturas y pagos en un mismo sistema, manteniendo aislamiento por organización (tenant) y control de permisos por rol.",
      pillars: [
        { title: "Producto", desc: "Flujos completos de principio a fin." },
        { title: "Arquitectura", desc: "Separación clara entre dominio, aplicación e infraestructura." },
        { title: "Experiencia", desc: "Portales adaptados al equipo, técnicos y clientes." },
      ],
    },
    architecture: {
      eyebrow: "Arquitectura",
      title: "Una base preparada para crecer.",
      lead: "Una arquitectura en capas que separa claramente las responsabilidades, facilita el mantenimiento y permite evolucionar el sistema sin afectar el núcleo del negocio.",
      apps: ["Gestión y administración", "Trabajo en campo", "Consulta y pagos"],
      layers: ["Casos de uso y orquestación", "Entidades y reglas de negocio", "Repositorios y persistencia"],
      storage: ["Datos de la aplicación", "Archivos y evidencias"],
      checks: [
        { title: "Clean Architecture", desc: "Capas bien definidas y bajo acoplamiento." },
        { title: "Tenant isolation", desc: "Datos aislados por organización." },
        { title: "Role-based access", desc: "Control de acceso por rol y sucursal." },
        { title: "Auditable actions", desc: "Registro de eventos importantes." },
        { title: "Versioned database migrations", desc: "Migraciones versionadas y revisadas." },
      ],
    },
    tech: {
      eyebrow: "Tecnologías",
      title: "Elegidas por su capacidad, no por moda.",
      testsNote: "(unitarios e integración)",
    },
    spec: {
      eyebrow: "Spec-driven development",
      title: ["Cada feature comenzó con", "decisiones explícitas."],
      lead: "Diseño, reglas de negocio y criterios de aceptación antes de escribir código.",
      steps: [
        { title: "Diseño", desc: "Mockups y\nestados" },
        { title: "SPEC", desc: "Reglas y\nalcance" },
        { title: "Arquitectura", desc: "Contratos y\ndatos" },
        { title: "Implementación", desc: "Frontend y\nbackend" },
        { title: "Auditoría", desc: "QA, seguridad\ny accesibilidad" },
      ],
      card: "Solicitud de servicio – SPEC",
      rows: [
        "Reglas de negocio y validaciones",
        "Endpoints, payloads y respuestas",
        "Entidades y cambios en la base de datos",
        "Criterios de aceptación y casos de prueba",
      ],
    },
    decisions: {
      eyebrow: "Decisiones técnicas",
      title: "Los retos que definieron el proyecto.",
      items: [
        { title: "Multi-tenancy", desc: "Evitar cruces de información entre organizaciones." },
        { title: "Estados y transiciones", desc: "Mantener consistencia entre solicitudes, cotizaciones, trabajos y visitas." },
        { title: "Permisos por rol y sucursal", desc: "Autorizar tanto la interfaz como cada operación del servidor." },
        { title: "Trazabilidad", desc: "Registrar cambios importantes sin exponer información sensible." },
      ],
      path: ["Problema", "decisión", "resultado"],
    },
    quality: {
      eyebrow: "Calidad y entrega",
      title: "Construido como si fuera a producción.",
      checks: [
        "CI para frontend y backend",
        "Migraciones revisadas y no aplicadas automáticamente",
        "Validación de aislamiento por organización",
        "Pruebas de permisos y flujos críticos",
        "Revisión visual, responsive y accesibilidad",
      ],
      note: "Las decisiones y limitaciones también quedan documentadas.",
    },
    contribution: {
      eyebrow: "Mi contribución",
      title: ["Diseñé el producto y también", "construí sus cimientos."],
      lead: "Definí los flujos, diseñé la experiencia, modelé el dominio y desarrollé la arquitectura Full Stack apoyándome en un proceso iterativo asistido por IA y validado mediante revisiones técnicas.",
      links: [
        { title: "Explorar los SPECs", desc: "Requisitos, reglas de negocio y criterios de aceptación." },
        { title: "Revisar la arquitectura", desc: "Diagramas, estructura del proyecto y decisiones técnicas." },
        { title: "Leer la guía de uso", desc: "Recorrido paso a paso por la aplicación." },
      ],
    },
    cta: {
      title: "¿Quieres ver el resultado funcionando?",
      lead: "Explora FieldOps en acción o revisa el código fuente.",
      demo: "Abrir demo",
      repo: "Ver repositorio",
      note: ["Proyecto demostrativo", "con datos ficticios."],
    },
    footer: {
      product: "Producto",
      caseStudy: "Case study",
      docs: "Documentación",
      demo: "Demo",
      credit: "Diseñado y desarrollado por Juan David Ríos · 2026",
    },
  },
};

export type Dictionary = typeof es;
