import { INVOICES, KPIS, NAV_HERO, PHONE_STATS, PHONE_TABS_EN } from "@/app/landing.data";
import { Chip, FilterBox, Icon, PhoneHeader, PhoneShell, PhoneTabBar, Sidebar, TopBar } from "../mock-frames";

const INVOICE_COLS = "10px 44px minmax(0,1.2fr) 40px 52px 44px 40px 36px 52px";
const Box = () => <span style={{ width: 7, height: 7, border: "1px solid #bcc6d6", borderRadius: 2 }} />;

function DesktopMock() {
  return (
    <div
      className="fo-hero-desktop"
      aria-hidden="true"
      style={{ background: "#fff", borderRadius: 8, boxShadow: "0 30px 70px rgba(11,29,69,.18), 0 0 0 1px rgba(11,29,69,.06)", overflow: "hidden", display: "flex" }}
    >
      <Sidebar items={NAV_HERO} active="Billing" width={96} padX={8} logoSize={13} wordSize={12.5} />
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        <TopBar
          height={34}
          searchWidth={170}
          searchPlaceholder="Search customers, jobs, quotes..."
          filterLabel="All branches"
          filterGap={6}
          user={{ initials: "DK", name: "Daniel Kim", role: "Accountant" }}
        />
        <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 6 }}>
            <div>
              <div style={{ fontSize: 7, color: "#2563eb" }}>← Invoicing</div>
              <div style={{ fontSize: 13, fontWeight: 700, marginTop: 2 }}>Invoices &amp; payments</div>
              <div style={{ fontSize: 7, color: "#7b88a3" }}>Track invoices, outstanding balances, due dates, and customer payments.</div>
            </div>
            <div style={{ marginLeft: "auto", fontSize: 7.5, color: "#2563eb", border: "1px solid #2563eb", padding: "4px 8px", borderRadius: 4 }}>
              Export <Icon name="pi-chevron-down" size={5} />
            </div>
            <div style={{ fontSize: 7.5, color: "#fff", background: "#2563eb", padding: "5px 9px", borderRadius: 4, fontWeight: 500 }}>+ New invoice</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 7 }}>
            {KPIS.map((k) => (
              <div key={k.label} style={{ border: "1px solid #e6ebf2", borderRadius: 6, padding: 7, display: "flex", gap: 7, alignItems: "center" }}>
                <div style={{ width: 22, height: 22, borderRadius: 5, background: k.bg, color: k.fg, display: "grid", placeItems: "center" }}>
                  <Icon name={k.icon} size={10} />
                </div>
                <div>
                  <div style={{ fontSize: 6.5, color: "#7b88a3" }}>{k.label}</div>
                  <div style={{ fontSize: 11.5, fontWeight: 700 }}>{k.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 14, fontSize: 7.5, color: "#46557a", borderBottom: "1px solid #e6ebf2" }}>
            <span style={{ color: "#2563eb", fontWeight: 600, borderBottom: "1.5px solid #2563eb", paddingBottom: 5 }}>Invoices</span>
            <span>Payments</span>
            <span>
              Completed jobs ready to invoice{" "}
              <span style={{ background: "#e5484d", color: "#fff", borderRadius: 999, padding: "0 4px", fontSize: 6.5 }}>6</span>
            </span>
          </div>
          <div style={{ display: "flex", gap: 6, fontSize: 7, color: "#46557a" }}>
            <FilterBox style={{ flex: 1, color: "#9aa5b8" }}>
              <Icon name="pi-search" size={6.5} /> Search invoices, customers, or work orders...
            </FilterBox>
            <FilterBox>
              <Icon name="pi-calendar" size={6.5} /> Sep 1, 2026 - Sep 20, 2026
            </FilterBox>
            <FilterBox>
              Status <Icon name="pi-chevron-down" size={5} />
            </FilterBox>
            <FilterBox>
              Customer <Icon name="pi-chevron-down" size={5} />
            </FilterBox>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: INVOICE_COLS, gap: 6, fontSize: 6.5, fontWeight: 600, color: "#46557a", padding: "3px 2px", borderBottom: "1px solid #e6ebf2" }}>
            <Box />
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
              style={{ display: "grid", gridTemplateColumns: INVOICE_COLS, gap: 6, fontSize: 6.8, color: "#46557a", padding: "4px 2px", borderBottom: "1px solid #f1f4f8", alignItems: "center" }}
            >
              <Box />
              <span style={{ color: "#2563eb" }}>{r.id}</span>
              <span style={{ color: "#2563eb", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.customer}</span>
              <span style={{ color: "#2563eb" }}>{r.wo}</span>
              <span>{r.date}</span>
              <span>{r.due}</span>
              <span>{r.amount}</span>
              <span>{r.balance}</span>
              <span>
                <Chip status={r.status} pad="1px 5px" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const outlineBtn = { border: "1px solid #c9d8f6", borderRadius: 4, padding: 3 } as const;

function PhoneMock() {
  return (
    <PhoneShell
      className="fo-hero-phone"
      width={200}
      height={400}
      radius={30}
      innerRadius={25}
      notch={{ w: 62, h: 16, top: 6 }}
      shadow="0 30px 60px rgba(11,29,69,.3)"
    >
      <PhoneHeader padding="26px 10px 9px" fontSize={9.5} logo={11} avatar={17} bell={9}>
        <span style={{ fontWeight: 500, marginLeft: 8 }}>Today&apos;s jobs</span>
      </PhoneHeader>
      <div style={{ padding: "8px 9px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700 }}>Good morning, Carlos</div>
            <div style={{ fontSize: 6.5, color: "#7b88a3" }}>Wednesday, Sep 23, 2026</div>
          </div>
          <span style={{ marginLeft: "auto", fontSize: 6, fontWeight: 600, color: "#136f4a", border: "1px solid #b8e5cd", background: "#effaf4", padding: "2px 5px", borderRadius: 999 }}>
            ● Clocked in · 7:42 AM
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 4 }}>
          {PHONE_STATS.map((p) => (
            <div key={p.l} style={{ border: "1px solid #e6ebf2", borderRadius: 5, padding: "4px 5px", display: "flex", gap: 4, alignItems: "center" }}>
              <Icon name={p.icon} size={7.5} style={{ color: "#46557a" }} />
              <div>
                <div style={{ fontSize: 9, fontWeight: 700 }}>{p.v}</div>
                <div style={{ fontSize: 5.5, color: "#7b88a3" }}>{p.l}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 5.8, color: "#46557a" }}>
          1 of 4 completed
          <div style={{ flex: 1, height: 3, background: "#e6ebf2", borderRadius: 3 }}>
            <div style={{ width: "25%", height: "100%", background: "#0f9d9a", borderRadius: 3 }} />
          </div>
          25%
        </div>
        <div style={{ border: "1px solid #9edbd8", borderRadius: 7, padding: 7, display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 6.2, fontWeight: 600, color: "#0b7471" }}>
            NEXT · 9:30 AM – 11:30 AM
            <span style={{ marginLeft: "auto", color: "#b45309", background: "#fff1e0", padding: "1px 4px", borderRadius: 999 }}>⚑ High priority</span>
          </div>
          <div style={{ fontSize: 9.5, fontWeight: 700 }}>Kitchen sink leak repair</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px 6px", fontSize: 6.2, color: "#46557a" }}>
            <span>#WO-3091</span>
            <span><Icon name="pi-car" size={6} /> 22 min away · 8.4 mi</span>
            <span><Icon name="pi-user" size={6} /> Sofia Martinez</span>
            <span><Icon name="pi-clock" size={6} /> 9:30 AM – 11:30 AM</span>
            <span><Icon name="pi-map-marker" size={6} /> 1842 Oak Street, Austin</span>
            <span style={{ color: "#7b88a3" }}>Arrival window</span>
          </div>
          <div style={{ display: "flex", gap: 4, fontSize: 5.8 }}>
            <span style={{ background: "#eaf1fd", color: "#1d4ed8", padding: "2px 5px", borderRadius: 999 }}>🔧 Plumbing</span>
            <span style={{ background: "#effaf4", color: "#136f4a", padding: "2px 5px", borderRadius: 999 }}>3 planned materials · Ready ✓</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 4, fontSize: 6.2, color: "#2563eb", textAlign: "center" }}>
            <span style={outlineBtn}><Icon name="pi-phone" size={6} /> Call</span>
            <span style={outlineBtn}><Icon name="pi-comment" size={6} /> Message</span>
            <span style={outlineBtn}><Icon name="pi-send" size={6} /> Directions</span>
          </div>
          <div style={{ background: "#0f8c89", color: "#fff", fontSize: 7.5, fontWeight: 600, textAlign: "center", padding: 6, borderRadius: 5 }}>
            <Icon name="pi-send" size={6.5} /> Start travel
          </div>
        </div>
      </div>
      <PhoneTabBar tabs={PHONE_TABS_EN} fontSize={5.8} iconSize={9} pad="5px 2px 10px" />
    </PhoneShell>
  );
}

export function Hero() {
  return (
    <section id="producto" className="fo-hero">
      <div className="fo-hero-grid">
        <div style={{ display: "flex", flexDirection: "column", gap: 22, minWidth: 0 }}>
          <div className="fo-eyebrow" style={{ letterSpacing: "0.14em" }}>GESTIÓN DE SERVICIOS DE CAMPO</div>
          <h1 className="fo-h1">
            Todo tu equipo.
            <br />
            Cada servicio.
            <br />
            En <span className="teal">un solo lugar.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: "#46557a", maxWidth: 440, textWrap: "pretty" }}>
            Conecta solicitudes, cotizaciones, visitas y facturación para mantener tu operación bajo control.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 6 }}>
            <a href="#demo" className="fo-btn fo-btn-primary" style={{ padding: "15px 22px", boxShadow: "0 6px 16px rgba(15,140,137,.25)" }}>
              Explorar la demo <Icon name="pi-arrow-right" size={13} />
            </a>
            <a href="#como-funciona" className="fo-btn fo-btn-secondary" style={{ padding: "14px 20px" }}>
              <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#2563eb", color: "#fff", display: "grid", placeItems: "center" }}>
                <Icon name="pi-play" size={8} style={{ marginLeft: 1 }} />
              </span>
              Ver cómo funciona
            </a>
          </div>
          <div style={{ fontSize: 13, color: "#7b88a3", marginTop: 10 }}>Proyecto demostrativo · Datos ficticios</div>
        </div>

        <div className="fo-hero-mock">
          <DesktopMock />
          <PhoneMock />
          <div
            className="fo-toast"
            style={{ background: "#fff", borderRadius: 8, boxShadow: "0 14px 34px rgba(11,29,69,.16)", padding: "12px 18px 12px 14px", display: "flex", alignItems: "center", gap: 14 }}
          >
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#0f8c89", color: "#fff", display: "grid", placeItems: "center" }}>
              <Icon name="pi-check" size={14} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#0b5e5b" }}>Visita completada</div>
              <div style={{ fontSize: 11.5, color: "#46557a", marginTop: 2 }}>Servicio finalizado con éxito.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
