import type { CSSProperties } from "react";
import { JOBS, MY_JOBS, NAV_ES, PHONE_TABS_ES, SURFACES } from "@/app/landing.data";
import { Avatar, Bell, Box, Chip, Icon, Leaf, PhoneShell, PhoneTabBar, Sidebar, StatusBar, WINDOW_SHADOW, type SidebarSpec } from "../mock-frames";

const SIDEBAR: SidebarSpec = {
  width: 129,
  logo: { top: 22, leaf: 17, font: 13.5, left: 14 },
  items: { top: 57, step: 30.4, height: 29, font: 10, icon: 12, inset: 5.5, iconX: 15, gap: 14 },
};

const JOB_COLS = "67px 70px 85px 88px 77px 89px 90px";
const cell: CSSProperties = { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingLeft: 7 };

function JobsDesktop() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", left: 1, top: 4, width: 726, height: 400, background: "#fff", borderRadius: 8, boxShadow: WINDOW_SHADOW, overflow: "hidden", display: "flex" }}
    >
      <Sidebar items={NAV_ES} active="Trabajos" spec={SIDEBAR} />
      <div style={{ position: "relative", flex: 1, minWidth: 0 }}>
        <div style={{ height: 47, borderBottom: "1px solid #edf1f6", display: "flex", alignItems: "center", padding: "0 11px 0 13.5px" }}>
          <Box style={{ width: 303, height: 25, fontSize: 9, color: "#9aa5b8" }}>
            <Icon name="pi-search" size={9} /> Buscar clientes, trabajos, cotizaciones...
          </Box>
          <Box style={{ marginLeft: 17, width: 171, height: 25, fontSize: 9, color: "#1c2b55", justifyContent: "space-between" }}>
            Todos los estados <Icon name="pi-chevron-down" size={7} />
          </Box>
          <span style={{ marginLeft: 28 }}>
            <Bell size={14} color="#2563eb" />
          </span>
          <Avatar initials="DK" size={25} font={8.5} style={{ marginLeft: "auto" }} />
        </div>
        <div style={{ position: "absolute", left: 16, right: 14, top: 57 }}>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 16.5, fontWeight: 700, letterSpacing: "-0.01em" }}>Trabajos de campo</div>
              <div style={{ fontSize: 9, color: "#7b88a3", marginTop: 4 }}>Gestiona y da seguimiento a todos los trabajos asignados.</div>
            </div>
            <div style={{ marginLeft: "auto", marginTop: 5, width: 118, height: 26, borderRadius: 4, background: "#2563eb", color: "#fff", fontSize: 9.5, fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
              <Icon name="pi-plus" size={8} /> Nuevo trabajo
            </div>
          </div>
          <div style={{ marginTop: 13, height: 26, display: "flex", alignItems: "center", gap: 28, fontSize: 10, color: "#46557a", borderBottom: "1px solid #e6ebf2" }}>
            <span style={{ height: 26, display: "flex", alignItems: "center", color: "#2563eb", fontWeight: 600, borderBottom: "2px solid #2563eb", padding: "0 10px" }}>Todos</span>
            <span>En proceso</span>
            <span>Programados</span>
            <span>Completados</span>
            <span>Cancelados</span>
          </div>
          <div style={{ marginTop: 11, display: "flex", gap: 8, fontSize: 9, color: "#1c2b55" }}>
            <Box style={{ width: 308, height: 27, color: "#9aa5b8" }}>
              <Icon name="pi-search" size={9} /> Buscar trabajos, clientes, direcciones...
            </Box>
            <Box style={{ width: 159, height: 27, gap: 8 }}>
              <Icon name="pi-calendar" size={9} /> 1 sep 2026 - 30 sep 2026
            </Box>
            <Box style={{ width: 81, height: 27, justifyContent: "space-between" }}>
              Estado <Icon name="pi-chevron-down" size={7} />
            </Box>
          </div>
          <div style={{ marginTop: 12, border: "1px solid #e6ebf2", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: JOB_COLS, height: 30, alignItems: "center", fontSize: 9, fontWeight: 600, color: "#46557a", background: "#f6f8fb" }}>
              {["# Trabajo", "Cliente", "Dirección", "Servicio", "Fecha", "Técnico", "Estado"].map((h, i) => (
                <span key={h} style={{ ...cell, height: 30, display: "flex", alignItems: "center", borderLeft: i ? "1px solid #e6ebf2" : undefined }}>
                  {h}
                </span>
              ))}
            </div>
            {JOBS.map((j) => (
              <div key={j.id} style={{ display: "grid", gridTemplateColumns: JOB_COLS, height: 31.5, alignItems: "center", fontSize: 9, color: "#46557a", borderTop: "1px solid #f1f4f8" }}>
                <span style={{ ...cell, color: "#2563eb" }}>{j.id}</span>
                <span style={{ ...cell, color: "#2563eb" }}>{j.customer}</span>
                <span style={cell}>{j.addr}</span>
                <span style={cell}>{j.service}</span>
                <span style={cell}>{j.date}</span>
                <span style={{ ...cell, color: "#2563eb" }}>{j.tech}</span>
                <span style={{ paddingLeft: 5 }}>
                  <Chip status={j.status} size={8.5} height={20} pad="0 9px" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TechPhone() {
  return (
    <PhoneShell width={234} height={495} radius={36} bezel={6} notch={{ w: 100, h: 20, top: 0, radius: 12 }} shadow="0 30px 60px rgba(11,29,69,.28)" style={{ position: "absolute", left: 727, top: 0, zIndex: 2 }}>
      <div style={{ height: 68, flex: "none", background: "#0b1d33", color: "#fff", display: "flex", flexDirection: "column" }}>
        <StatusBar font={10} height={34} />
        <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "0 12px 0 14px", fontSize: 12, fontWeight: 700 }}>
          <Leaf size={15} fill="#2cc2bd" />
          FieldOps
          <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
            <Bell size={12} color="#fff" />
            <Avatar initials="CR" size={25} font={8.5} bg="#e6f7f6" color="#0b7471" style={{ border: "1.5px solid #2cc2bd" }} />
            <Icon name="pi-chevron-down" size={7} />
          </span>
        </div>
      </div>
      <div style={{ padding: "13px 10px 0", display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 13.5, fontWeight: 700 }}>Mis trabajos</div>
            <div style={{ fontSize: 9, color: "#7b88a3", marginTop: 3 }}>Miércoles, 23 de sep de 2026</div>
          </div>
          <Icon name="pi-filter" size={13} style={{ marginLeft: "auto", marginTop: 3 }} />
        </div>
        <div style={{ marginTop: 11, height: 24, display: "grid", gridTemplateColumns: "1fr 1fr", border: "1px solid #dfe5ee", borderRadius: 4, fontSize: 9, overflow: "hidden" }}>
          <span style={{ display: "grid", placeItems: "center", background: "#e3ecfb", color: "#2563eb", fontWeight: 600 }}>Hoy</span>
          <span style={{ display: "grid", placeItems: "center", color: "#46557a" }}>Esta semana</span>
        </div>
        {MY_JOBS.map((m, i) => (
          <div key={m.who} style={{ padding: i === 0 ? "12px 0 8px" : "8px 0", borderBottom: i < MY_JOBS.length - 1 ? "1px solid #edf1f6" : undefined }}>
            <div style={{ display: "flex", alignItems: "center", fontSize: 9.5, color: "#46557a" }}>
              {m.time}
              <span style={{ marginLeft: "auto" }}>
                <Chip status={m.status} size={8} height={19} pad="0 9px" />
              </span>
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, marginTop: 2, lineHeight: "17px", maxWidth: 120 }}>{m.title}</div>
            <div style={{ fontSize: 9, color: "#7b88a3", marginTop: 2 }}>{m.who}</div>
            <div style={{ fontSize: 9, color: "#46557a", marginTop: 4, display: "flex", alignItems: "center", gap: 5 }}>
              <Icon name="pi-map-marker" size={9} /> {m.addr}
            </div>
          </div>
        ))}
      </div>
      <PhoneTabBar tabs={PHONE_TABS_ES} font={8.5} icon={15} height={56} dotIndex={3} />
    </PhoneShell>
  );
}

const portalBtn: CSSProperties = {
  height: 31,
  border: "1px solid #dfe5ee",
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 7,
  color: "#2563eb",
  fontSize: 10,
};

function CustomerPortal() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", left: 977, top: 30, width: 279, height: 342, background: "#fff", borderRadius: 8, boxShadow: WINDOW_SHADOW, overflow: "hidden" }}
    >
      <div style={{ height: 48, padding: "0 15px", borderBottom: "1px solid #edf1f6", display: "flex", alignItems: "center", gap: 7 }}>
        <Leaf size={17} />
        <b style={{ fontSize: 13.5, letterSpacing: "-0.01em" }}>FieldOps</b>
        <span style={{ fontSize: 12.5, color: "#46557a", borderLeft: "1px solid #dfe5ee", paddingLeft: 8, marginLeft: 2 }}>Portal del cliente</span>
        <Icon name="pi-bars" size={14} style={{ marginLeft: "auto", color: "#46557a" }} />
      </div>
      <div style={{ padding: "13px 15px 0" }}>
        <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em" }}>Mis servicios</div>
        <div style={{ marginTop: 12, height: 30, display: "grid", gridTemplateColumns: "1fr 1fr", background: "#f3f6fa", border: "1px solid #e6ebf2", borderRadius: 4, fontSize: 10 }}>
          <span style={{ display: "grid", placeItems: "center", background: "#fff", color: "#2563eb", fontWeight: 600, border: "1px solid #2563eb", borderRadius: 4, margin: -1 }}>En curso</span>
          <span style={{ display: "grid", placeItems: "center", color: "#7b88a3" }}>Historial</span>
        </div>
        <div style={{ marginTop: 13, height: 194, border: "1px solid #e6ebf2", borderRadius: 6, padding: "10px 12px", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 13, fontWeight: 700 }}>
            WO-3091
            <span style={{ marginLeft: "auto" }}>
              <Chip status={{ label: "En proceso", bg: "#e7f6ee", fg: "#136f4a" }} size={8.5} height={20} pad="0 9px" />
            </span>
          </div>
          <div style={{ marginTop: 9, fontSize: 12.5, fontWeight: 600 }}>Reparación de fuga en fregadero</div>
          <div style={{ marginTop: 6, fontSize: 9.5, color: "#46557a", whiteSpace: "nowrap", letterSpacing: "-0.01em" }}>Mié, 23 de sep de 2026 · 9:30 a. m. – 11:30 a. m.</div>
          <div style={{ marginTop: 12, paddingTop: 13, borderTop: "1px solid #f1f4f8", display: "flex", alignItems: "center", gap: 10 }}>
            <Avatar initials="SM" size={27} font={9} />
            <div>
              <div style={{ fontSize: 9, color: "#7b88a3" }}>Técnico</div>
              <div style={{ fontSize: 11.5, fontWeight: 600, marginTop: 1 }}>Sofía Martínez</div>
            </div>
          </div>
          <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
            <span style={portalBtn}><Icon name="pi-phone" size={10} /> Ver detalles</span>
            <span style={portalBtn}><Icon name="pi-comment" size={10} /> Mensajes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc, circleLeft, textLeft, width }: { icon: string; title: string; desc: string; circleLeft?: number; textLeft?: number; width: number }) {
  const positioned = circleLeft !== undefined;
  return (
    <>
      <div
        style={{
          ...(positioned ? { position: "absolute", left: circleLeft, top: 431 } : {}),
          width: 85,
          height: 85,
          flex: "none",
          borderRadius: "50%",
          background: "#e8f6f5",
          color: "#0f8c89",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Icon name={icon} size={36} />
      </div>
      <div style={positioned ? { position: "absolute", left: textLeft, top: 441, width } : { maxWidth: width }}>
        <h3 style={{ fontSize: 17.5, fontWeight: 700, color: "#0b1d45", letterSpacing: "-0.01em" }}>{title}</h3>
        <p style={{ marginTop: 9, fontSize: 13, lineHeight: "19px", color: "#6b7895" }}>{desc}</p>
      </div>
    </>
  );
}

const FEATURE_POS = [
  { circleLeft: -5, textLeft: 104, width: 232 },
  { circleLeft: 394, textLeft: 505, width: 222 },
  { circleLeft: 975, textLeft: 1079, width: 228 },
];

export function Connected() {
  return (
    <section className="fo-conn">
      <div className="fo-container">
        <div style={{ textAlign: "center" }}>
          <h2 className="fo-title fo-title-md" style={{ fontSize: 40, lineHeight: 1.15, letterSpacing: "-0.04em" }}>
            Del escritorio al campo, <span className="teal">todo permanece conectado.</span>
          </h2>
          <p style={{ marginTop: 4, fontSize: 21.5, color: "#46557a" }}>La información correcta llega a cada persona en el momento adecuado.</p>
        </div>
        <div className="fo-stage fo-conn-stage">
          <JobsDesktop />
          <TechPhone />
          <CustomerPortal />
          {SURFACES.map((f, i) => (
            <Feature key={f.title} {...f} {...FEATURE_POS[i]} />
          ))}
        </div>
        <div className="fo-conn-features">
          {SURFACES.map((f) => (
            <div key={f.title} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <Feature {...f} width={320} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
