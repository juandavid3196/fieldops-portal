import { INVOICES, KPIS, NAV_HERO, PHONE_TABS_EN } from "@/app/landing.data";
import { Avatar, Bell, Box, Chip, Icon, Leaf, PhoneShell, PhoneTabBar, Sidebar, type SidebarSpec } from "../mock-frames";

const SIDEBAR: SidebarSpec = {
  width: 129,
  logo: { top: 23, leaf: 19, font: 16.5, left: 14 },
  items: { top: 64, step: 32.6, height: 31, font: 11.5, icon: 13, inset: 5, iconX: 15, gap: 10 },
};

// Column start offsets from the content padding edge (measured on the design).
const INVOICE_COLS = "20px 46px 67px 52px 62px 57px 47px 43px 80px";
const Check = () => <span style={{ width: 11, height: 11, border: "1px solid #bcc6d6", borderRadius: 2, background: "#fff" }} />;

function DesktopMock() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 818,
        height: 471,
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 30px 70px rgba(11,29,69,.18), 0 0 0 1px rgba(11,29,69,.06)",
        overflow: "hidden",
        display: "flex",
      }}
    >
      <Sidebar items={NAV_HERO} active="Billing" spec={SIDEBAR} />
      <div style={{ position: "relative", flex: 1, minWidth: 0 }}>
        {/* top bar */}
        <div style={{ height: 43, borderBottom: "1px solid #edf1f6", display: "flex", alignItems: "center", padding: "0 13px 0 11px" }}>
          <Box style={{ width: 233, height: 23, fontSize: 9.5, color: "#9aa5b8" }}>
            <Icon name="pi-search" size={9.5} />
            Search customers, jobs, quotes...
          </Box>
          <Box style={{ marginLeft: 81, width: 77, height: 23, fontSize: 9.5, color: "#1c2b55", justifyContent: "space-between" }}>
            All branches <Icon name="pi-chevron-down" size={7} />
          </Box>
          <span style={{ marginLeft: 27 }}>
            <Bell size={14} color="#2563eb" />
          </span>
          <div style={{ marginLeft: 32, paddingLeft: 14, height: 43, borderLeft: "1px solid #edf1f6", display: "flex", alignItems: "center", gap: 8 }}>
            <Avatar initials="DK" size={27} font={9.5} />
            <div style={{ lineHeight: 1.25 }}>
              <div style={{ fontSize: 11.5, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                Daniel Kim <Icon name="pi-chevron-down" size={7} />
              </div>
              <div style={{ fontSize: 9, color: "#7b88a3" }}>Accountant</div>
            </div>
          </div>
          <Box style={{ marginLeft: "auto", width: 21, height: 21, padding: 0, justifyContent: "center", fontSize: 10, color: "#46557a" }}>?</Box>
        </div>

        <div style={{ position: "absolute", left: 15, top: 53, width: 460 }}>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 9, color: "#2563eb", display: "flex", alignItems: "center", gap: 4 }}>
                <Icon name="pi-arrow-left" size={7} /> Invoicing
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, marginTop: 9, letterSpacing: "-0.01em" }}>Invoices &amp; payments</div>
              <div style={{ fontSize: 8.5, color: "#7b88a3", marginTop: 4 }}>Track invoices, outstanding balances, due dates, and customer payments.</div>
            </div>
          </div>
          <div style={{ position: "absolute", top: 36, left: 261, display: "flex", gap: 8 }}>
            <Box style={{ width: 75, height: 25, justifyContent: "center", gap: 10, fontSize: 9.5, color: "#2563eb", borderColor: "#2563eb" }}>
              Export <Icon name="pi-chevron-down" size={7} />
            </Box>
            <div style={{ width: 99, height: 25, borderRadius: 4, background: "#2563eb", color: "#fff", fontSize: 9.5, fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <Icon name="pi-plus" size={8} /> New invoice
            </div>
          </div>

          {/* KPIs */}
          <div style={{ marginTop: 26, display: "grid", gridTemplateColumns: "108px 101px 98px 113px", gap: 7 }}>
            {KPIS.map((k) => (
              <div key={k.label} style={{ height: 53, border: "1px solid #e6ebf2", borderRadius: 6, padding: "0 9px", display: "flex", gap: 9, alignItems: "center" }}>
                <div style={{ width: 31, height: 31, flex: "none", borderRadius: 6, background: k.bg, color: k.fg, display: "grid", placeItems: "center" }}>
                  <Icon name={k.icon} size={14} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 8.5, color: "#7b88a3", whiteSpace: "nowrap" }}>{k.label}</div>
                  <div style={{ fontSize: 14.5, fontWeight: 700, marginTop: 1 }}>{k.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* tabs */}
          <div style={{ marginTop: 13, display: "flex", gap: 24, fontSize: 9.5, color: "#46557a", borderBottom: "1px solid #e6ebf2", height: 26, alignItems: "center" }}>
            <span style={{ color: "#2563eb", fontWeight: 600, height: 26, display: "flex", alignItems: "center", borderBottom: "2px solid #2563eb", padding: "0 8px", marginLeft: -2 }}>Invoices</span>
            <span>Payments</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              Completed jobs ready to invoice
              <span style={{ background: "#e5484d", color: "#fff", borderRadius: 999, width: 13, height: 13, display: "grid", placeItems: "center", fontSize: 7.5, fontWeight: 700 }}>6</span>
            </span>
          </div>

          {/* filters */}
          <div style={{ marginTop: 10, display: "flex", gap: 7, fontSize: 8.5, color: "#46557a" }}>
            <Box style={{ width: 175, height: 23, color: "#9aa5b8" }}>
              <Icon name="pi-search" size={8.5} /> Search invoices, customers, or work orders...
            </Box>
            <Box style={{ width: 115, height: 23 }}>
              <Icon name="pi-calendar" size={8.5} /> Sep 1, 2026 - Sep 20, 2026
            </Box>
            <Box style={{ width: 53, height: 23, justifyContent: "space-between" }}>
              Status <Icon name="pi-chevron-down" size={6.5} />
            </Box>
            <Box style={{ width: 64, height: 23, justifyContent: "space-between" }}>
              Customer <Icon name="pi-chevron-down" size={6.5} />
            </Box>
          </div>

          {/* table */}
          <div style={{ marginTop: 11, width: 520 }}>
            <div style={{ display: "grid", gridTemplateColumns: INVOICE_COLS, height: 25, alignItems: "center", fontSize: 8.5, fontWeight: 600, color: "#46557a", borderBottom: "1px solid #e6ebf2", paddingLeft: 8 }}>
              <Check />
              <span>Invoice #</span>
              <span>Customer</span>
              <span>Work order</span>
              <span>Invoice date</span>
              <span>Due date</span>
              <span>Amount</span>
              <span>Balance</span>
              <span>Status</span>
            </div>
            {INVOICES.map((r) => (
              <div
                key={r.id}
                style={{ display: "grid", gridTemplateColumns: INVOICE_COLS, height: 28.7, alignItems: "center", fontSize: 8.5, color: "#46557a", borderBottom: "1px solid #f1f4f8", paddingLeft: 8 }}
              >
                <Check />
                <span style={{ color: "#2563eb" }}>{r.id}</span>
                <span style={{ color: "#2563eb", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.customer}</span>
                <span style={{ color: "#2563eb" }}>{r.wo}</span>
                <span>{r.date}</span>
                <span>{r.due}</span>
                <span>{r.amount}</span>
                <span>{r.balance}</span>
                <span>
                  <Chip status={r.status} size={8} height={15} pad="0 7px" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const actionBtn = {
  height: 25,
  border: "1px solid #c9d8f6",
  borderRadius: 5,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 5,
  color: "#2563eb",
  fontSize: 9,
} as const;

function PhoneMock() {
  return (
    <PhoneShell
      width={269}
      height={477}
      radius={34}
      bezel={6}
      notch={{ w: 120, h: 15, top: 0, radius: 9 }}
      shadow="0 30px 60px rgba(11,29,69,.3)"
      style={{ position: "absolute", left: 598, top: 75, zIndex: 2 }}
    >
      <div style={{ height: 61, flex: "none", background: "#0b1d33", color: "#fff", display: "flex", alignItems: "flex-end", padding: "0 12px 11px 14px", gap: 6, fontSize: 11.5, fontWeight: 700 }}>
        <Leaf size={15} fill="#2cc2bd" />
        FieldOps
        <span style={{ fontWeight: 500, marginLeft: 12 }}>Today&apos;s jobs</span>
        <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
          <Bell size={12} color="#fff" />
          <Avatar initials="CR" size={23} font={8.5} bg="#e6f7f6" color="#0b7471" style={{ border: "1.5px solid #2cc2bd" }} />
          <Icon name="pi-chevron-down" size={7} />
        </span>
      </div>
      <div style={{ padding: "8px 9px 0", display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700 }}>Good morning, Carlos</div>
            <div style={{ fontSize: 8.5, color: "#7b88a3", marginTop: 3 }}>Wednesday, Sep 23, 2026</div>
          </div>
          <span style={{ marginLeft: "auto", height: 18, display: "flex", alignItems: "center", gap: 4, fontSize: 8, fontWeight: 500, color: "#136f4a", border: "1px solid #b8e5cd", background: "#e7f6ee", padding: "0 7px", borderRadius: 999 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#16a34a" }} /> Clocked in · 7:42 AM
          </span>
        </div>
        <div style={{ marginTop: 13, display: "grid", gridTemplateColumns: "0.62fr 1fr 0.86fr", gap: 5 }}>
          {[
            { icon: null, v: "4", l: "jobs" },
            { icon: "pi-clock", v: "7.5", l: "scheduled hours" },
            { icon: "pi-car", v: "52 min", l: "travel" },
          ].map((p) => (
            <div key={p.l} style={{ height: 43, border: "1px solid #e6ebf2", borderRadius: 6, display: "flex", gap: 6, alignItems: "center", justifyContent: "center" }}>
              {p.icon && <Icon name={p.icon} size={11} style={{ color: "#46557a" }} />}
              <div style={{ textAlign: p.icon ? "left" : "center" }}>
                <div style={{ fontSize: 12, fontWeight: 700 }}>{p.v}</div>
                <div style={{ fontSize: 8, color: "#7b88a3", whiteSpace: "nowrap" }}>{p.l}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 9, display: "flex", alignItems: "center", gap: 6, fontSize: 7.5, color: "#46557a" }}>
          1 of 4 completed
          <div style={{ flex: 1, height: 5, background: "#e6ebf2", borderRadius: 3 }}>
            <div style={{ width: "25%", height: "100%", background: "#0f9d9a", borderRadius: 3 }} />
          </div>
          25%
        </div>
        <div style={{ marginTop: 9, border: "1px solid #9edbd8", borderRadius: 8, padding: "9px 9px 9px", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 8.5, fontWeight: 600, color: "#0b7471" }}>
            NEXT · 9:30 AM – 11:30 AM
            <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4, color: "#c2410c", background: "#fff1e0", padding: "3px 7px", borderRadius: 999, fontWeight: 500 }}>
              <Icon name="pi-arrow-up" size={7} /> High priority
            </span>
          </div>
          <div style={{ fontSize: 12.5, fontWeight: 700, marginTop: 6 }}>Kitchen sink leak repair</div>
          <div style={{ marginTop: 6, display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: 7, columnGap: 6, fontSize: 8.5, color: "#46557a" }}>
            <span style={{ color: "#7b88a3" }}>#WO-3091</span>
            <span style={{ display: "flex", gap: 5, alignItems: "center" }}><Icon name="pi-car" size={9} /> 22 min away · 8.4 mi</span>
            <span style={{ display: "flex", gap: 5, alignItems: "center" }}><Icon name="pi-user" size={9} /> Sofia Martinez</span>
            <span style={{ display: "flex", gap: 5, alignItems: "center" }}><Icon name="pi-clock" size={9} /> 9:30 AM – 11:30 AM</span>
            <span style={{ display: "flex", gap: 5, alignItems: "center", whiteSpace: "nowrap" }}><Icon name="pi-map-marker" size={9} /> 1842 Oak Street, Austin</span>
            <span style={{ color: "#7b88a3", paddingLeft: 14 }}>Arrival window</span>
          </div>
          <div style={{ marginTop: 8, display: "flex", gap: 6, fontSize: 8 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 4, background: "#eaf1fd", color: "#1d4ed8", padding: "4px 8px", borderRadius: 999 }}>
              <Icon name="pi-wrench" size={8} /> Plumbing
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 4, background: "#effaf4", color: "#136f4a", padding: "4px 8px", borderRadius: 999 }}>
              <Icon name="pi-box" size={8} /> 3 planned materials · Ready <Icon name="pi-check-circle" size={8} />
            </span>
          </div>
          <div style={{ marginTop: 9, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
            <span style={actionBtn}><Icon name="pi-phone" size={9} /> Call</span>
            <span style={actionBtn}><Icon name="pi-comment" size={9} /> Message</span>
            <span style={actionBtn}><Icon name="pi-send" size={9} /> Directions</span>
          </div>
          <div style={{ marginTop: 9, height: 30, background: "#0f8c89", color: "#fff", fontSize: 10, fontWeight: 600, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
            <Icon name="pi-send" size={10} /> Start travel
          </div>
        </div>
      </div>
      <PhoneTabBar tabs={PHONE_TABS_EN} font={8.5} icon={15} height={48} dotIndex={3} />
    </PhoneShell>
  );
}

function Toast() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: 297,
        top: 451,
        zIndex: 3,
        width: 279,
        height: 75,
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 14px 34px rgba(11,29,69,.16)",
        display: "flex",
        alignItems: "center",
        gap: 17,
        padding: "0 17px",
      }}
    >
      <div style={{ width: 43, height: 43, flex: "none", borderRadius: "50%", background: "#0f8c89", color: "#fff", display: "grid", placeItems: "center" }}>
        <Icon name="pi-check" size={18} />
      </div>
      <div>
        <div style={{ fontSize: 17.5, fontWeight: 600, color: "#0b5e5b" }}>Visita completada</div>
        <div style={{ fontSize: 13.5, color: "#46557a", marginTop: 3 }}>Servicio finalizado con éxito.</div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="producto" className="fo-hero">
      <div className="fo-container fo-hero-grid">
        <div className="fo-hero-copy">
          <div className="fo-eyebrow" style={{ fontSize: 12, letterSpacing: "0.13em" }}>Gestión de servicios de campo</div>
          <h1 className="fo-h1" style={{ marginTop: 22 }}>
            Todo tu equipo.
            <br />
            Cada servicio.
            <br />
            En <span className="teal">un solo lugar.</span>
          </h1>
          <p style={{ marginTop: 26, fontSize: 18, lineHeight: 1.5, color: "#46557a", maxWidth: 360 }}>
            Conecta solicitudes, cotizaciones, visitas y facturación para mantener tu operación bajo control.
          </p>
          <div style={{ marginTop: 33, display: "flex", flexWrap: "wrap", gap: 17 }}>
            <a href="#demo" className="fo-btn fo-btn-primary" style={{ width: 193, height: 52, fontSize: 15.5, boxShadow: "0 6px 16px rgba(15,140,137,.25)" }}>
              Explorar la demo <Icon name="pi-arrow-right" size={13} />
            </a>
            <a href="#como-funciona" className="fo-btn fo-btn-secondary" style={{ width: 195, height: 52, fontSize: 15.5 }}>
              <span style={{ width: 19, height: 19, borderRadius: "50%", background: "#2563eb", color: "#fff", display: "grid", placeItems: "center" }}>
                <Icon name="pi-play" size={8} style={{ marginLeft: 1 }} />
              </span>
              Ver cómo funciona
            </a>
          </div>
          <div style={{ fontSize: 13, color: "#7b88a3", marginTop: 22 }}>Proyecto demostrativo · Datos ficticios</div>
        </div>

        <div className="fo-stage fo-hero-stage">
          <DesktopMock />
          <PhoneMock />
          <Toast />
        </div>
      </div>
    </section>
  );
}
