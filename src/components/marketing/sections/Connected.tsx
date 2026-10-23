import { JOBS, MY_JOBS, NAV_ES, PHONE_TABS_ES, SURFACES } from "@/app/landing.data";
import { Chip, FilterBox, Icon, Leaf, PhoneHeader, PhoneShell, PhoneTabBar, Sidebar, Tabs, TopBar, WINDOW_SHADOW } from "../mock-frames";

const JOB_COLS = "38px minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) 40px 54px 58px";
const ellipsis = { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } as const;

function JobsDesktop() {
  return (
    <div
      className="fo-comp-desktop"
      aria-hidden="true"
      style={{ background: "#fff", borderRadius: 8, boxShadow: WINDOW_SHADOW, overflow: "hidden", display: "flex" }}
    >
      <Sidebar items={NAV_ES} active="Trabajos" width={94} padX={7} />
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        <TopBar height={32} searchWidth={210} searchPlaceholder="Buscar clientes, trabajos, cotizaciones..." filterLabel="Todos los estados" filterGap={14} />
        <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: 7 }}>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Trabajos de campo</div>
              <div style={{ fontSize: 7, color: "#7b88a3" }}>Gestiona y da seguimiento a todos los trabajos asignados.</div>
            </div>
            <div style={{ marginLeft: "auto", fontSize: 7.5, color: "#fff", background: "#2563eb", padding: "5px 9px", borderRadius: 4, fontWeight: 500 }}>+ Nuevo trabajo</div>
          </div>
          <Tabs tabs={["Todos", "En proceso", "Programados", "Completados", "Cancelados"]} gap={16} />
          <div style={{ display: "flex", gap: 6, fontSize: 7, color: "#46557a" }}>
            <FilterBox style={{ flex: 1, color: "#9aa5b8" }}>
              <Icon name="pi-search" size={6.5} /> Buscar trabajos, clientes, direcciones...
            </FilterBox>
            <FilterBox>
              <Icon name="pi-calendar" size={6.5} /> 1 sep 2026 - 30 sep 2026
            </FilterBox>
            <FilterBox>
              Estado <Icon name="pi-chevron-down" size={5} />
            </FilterBox>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: JOB_COLS, gap: 6, fontSize: 6.8, fontWeight: 600, color: "#46557a", padding: "5px 4px", background: "#f6f8fb", borderRadius: 3 }}>
            <span># Trabajo</span>
            <span>Cliente</span>
            <span>Dirección</span>
            <span>Servicio</span>
            <span>Fecha</span>
            <span>Técnico</span>
            <span>Estado</span>
          </div>
          {JOBS.map((j) => (
            <div key={j.id} style={{ display: "grid", gridTemplateColumns: JOB_COLS, gap: 6, fontSize: 7, color: "#46557a", padding: "5px 4px", borderBottom: "1px solid #f1f4f8", alignItems: "center" }}>
              <span style={{ color: "#2563eb" }}>{j.id}</span>
              <span style={{ color: "#2563eb", ...ellipsis }}>{j.customer}</span>
              <span style={ellipsis}>{j.addr}</span>
              <span style={ellipsis}>{j.service}</span>
              <span>{j.date}</span>
              <span style={{ color: "#2563eb", whiteSpace: "nowrap" }}>{j.tech}</span>
              <span>
                <Chip status={j.status} pad="2px 6px" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TechPhone() {
  return (
    <PhoneShell
      className="fo-comp-phone"
      width={172}
      height={360}
      radius={28}
      innerRadius={23}
      notch={{ w: 54, h: 14, top: 5 }}
      shadow="0 30px 60px rgba(11,29,69,.28)"
    >
      <PhoneHeader padding="22px 9px 8px" fontSize={9} logo={10} avatar={15} bell={8.5} />
      <div style={{ padding: "8px 9px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700 }}>Mis trabajos</div>
            <div style={{ fontSize: 6.5, color: "#7b88a3" }}>Miércoles, 23 de sep de 2026</div>
          </div>
          <Icon name="pi-filter" size={9} style={{ marginLeft: "auto" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "1px solid #dfe5ee", borderRadius: 4, fontSize: 6.5, textAlign: "center", overflow: "hidden" }}>
          <span style={{ background: "#eef3fc", color: "#2563eb", fontWeight: 600, padding: 3 }}>Hoy</span>
          <span style={{ padding: 3, color: "#46557a" }}>Esta semana</span>
        </div>
        {MY_JOBS.map((m) => (
          <div key={m.who} style={{ borderBottom: "1px solid #f1f4f8", paddingBottom: 6 }}>
            <div style={{ display: "flex", alignItems: "center", fontSize: 6.5, color: "#46557a" }}>
              {m.time}
              <span style={{ marginLeft: "auto" }}>
                <Chip status={m.status} pad="1px 5px" />
              </span>
            </div>
            <div style={{ fontSize: 8.5, fontWeight: 700, marginTop: 2, lineHeight: 1.2 }}>{m.title}</div>
            <div style={{ fontSize: 6.3, color: "#7b88a3", marginTop: 1 }}>{m.who}</div>
            <div style={{ fontSize: 6.3, color: "#7b88a3" }}>
              <Icon name="pi-map-marker" size={6} /> {m.addr}
            </div>
          </div>
        ))}
      </div>
      <PhoneTabBar tabs={PHONE_TABS_ES} fontSize={5.5} iconSize={8.5} pad="4px 2px 9px" />
    </PhoneShell>
  );
}

function CustomerPortal() {
  return (
    <div className="fo-comp-portal" aria-hidden="true" style={{ background: "#fff", borderRadius: 8, boxShadow: WINDOW_SHADOW, overflow: "hidden" }}>
      <div style={{ padding: "11px 13px", borderBottom: "1px solid #edf1f6", display: "flex", alignItems: "center", gap: 7, fontSize: 10 }}>
        <Leaf size={13} />
        <b style={{ fontSize: 11 }}>FieldOps</b>
        <span style={{ color: "#46557a", borderLeft: "1px solid #dfe5ee", paddingLeft: 7 }}>Portal del cliente</span>
        <Icon name="pi-bars" size={10} style={{ marginLeft: "auto", color: "#46557a" }} />
      </div>
      <div style={{ padding: "12px 13px", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontSize: 13, fontWeight: 700 }}>Mis servicios</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "1px solid #dfe5ee", borderRadius: 4, fontSize: 8, textAlign: "center", overflow: "hidden" }}>
          <span style={{ background: "#eef3fc", color: "#2563eb", fontWeight: 600, padding: 5, border: "1px solid #2563eb", borderRadius: 4 }}>En curso</span>
          <span style={{ padding: 5, color: "#46557a" }}>Historial</span>
        </div>
        <div style={{ border: "1px solid #e6ebf2", borderRadius: 6, padding: 10, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 10, fontWeight: 700 }}>
            WO-3091
            <span style={{ marginLeft: "auto", fontSize: 7, fontWeight: 600, color: "#136f4a", background: "#e7f6ee", padding: "2px 6px", borderRadius: 999 }}>● En proceso</span>
          </div>
          <div style={{ fontSize: 10, fontWeight: 500 }}>Reparación de fuga en fregadero</div>
          <div style={{ fontSize: 7.5, color: "#46557a" }}>Mié, 23 de sep de 2026 · 9:30 a. m. – 11:30 a. m.</div>
          <div style={{ display: "flex", alignItems: "center", gap: 7, borderTop: "1px solid #f1f4f8", paddingTop: 7, marginTop: 2 }}>
            <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#0b1d45", color: "#fff", fontSize: 7.5, fontWeight: 600, display: "grid", placeItems: "center" }}>SM</div>
            <div>
              <div style={{ fontSize: 6.5, color: "#7b88a3" }}>Técnico</div>
              <div style={{ fontSize: 8.5, fontWeight: 600 }}>Sofía Martínez</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, fontSize: 7.5, color: "#2563eb" }}>
            <span style={{ border: "1px solid #dfe5ee", borderRadius: 4, padding: 5, textAlign: "center" }}>
              <Icon name="pi-phone" size={7} /> Ver detalles
            </span>
            <span style={{ border: "1px solid #dfe5ee", borderRadius: 4, padding: 5, textAlign: "center" }}>
              <Icon name="pi-comment" size={7} /> Mensajes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Connected() {
  return (
    <section style={{ background: "#fff" }}>
      <div className="fo-wrap" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
          <h2 className="fo-h2">
            Del escritorio al campo, <span className="teal">todo permanece conectado.</span>
          </h2>
          <p style={{ fontSize: 18, color: "#46557a" }}>La información correcta llega a cada persona en el momento adecuado.</p>
        </div>
        <div className="fo-comp">
          <JobsDesktop />
          <TechPhone />
          <CustomerPortal />
        </div>
        <div className="fo-surfaces">
          {SURFACES.map((f) => (
            <div key={f.title} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <div style={{ width: 62, height: 62, flex: "none", borderRadius: "50%", background: "#e8f6f5", color: "#0f8c89", display: "grid", placeItems: "center" }}>
                <Icon name={f.icon} size={26} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#0b1d45" }}>{f.title}</h3>
                <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "#46557a", marginTop: 6 }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
