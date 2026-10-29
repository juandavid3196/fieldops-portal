import Link from "next/link";
import { INVOICE_TONE, INVOICES, KPIS, PHONE_TAB_ICONS } from "@/content/landing.data";
import { getDictionary, getLocale, getMockCopy, type MockCopy } from "@/i18n/dictionaries";
import { delay } from "../../motion";
import { APP_SIDEBAR_WIDTH, AppSidebar } from "../AppSidebar";
import { Avatar, Bell, Box, Chip, Icon, LogoMark, Wordmark, PhoneShell, PhoneTabBar } from "../mock-frames";

// The shared app sidebar (243px native) is scaled down to this 129px column.
const SIDEBAR_ZOOM = 129 / APP_SIDEBAR_WIDTH;

// Column start offsets from the content padding edge (measured on the design).
const INVOICE_COLS = "20px 46px 67px 52px 62px 57px 47px 43px 80px";
const Check = () => <span style={{ width: 11, height: 11, border: "1px solid var(--m-faint)", borderRadius: 2, background: "var(--m-surface)" }} />;

function DesktopMock({ m }: { m: MockCopy }) {
  const t = m.invoices;
  return (
    <div
      aria-hidden="true"
      className="fo-mock"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 818,
        height: 471,
        background: "var(--m-surface)",
        borderRadius: 8,
        boxShadow: "0 30px 70px rgba(11,29,69,.18), 0 0 0 1px rgba(11,29,69,.06)",
        overflow: "hidden",
        display: "flex",
      }}
    >
      <div style={{ zoom: SIDEBAR_ZOOM, flex: "none" }}>
        <AppSidebar active="Invoices" copy={m.sidebar} height={471 / SIDEBAR_ZOOM} />
      </div>
      <div style={{ position: "relative", flex: 1, minWidth: 0 }}>
        {/* top bar */}
        <div style={{ height: 43, borderBottom: "1px solid var(--m-line)", display: "flex", alignItems: "center", padding: "0 13px 0 11px" }}>
          <Box style={{ width: 233, height: 23, fontSize: 9.5, color: "var(--m-muted)" }}>
            <Icon name="pi-search" size={9.5} />
            {t.search}
          </Box>
          <Box style={{ marginLeft: "auto", minWidth: 77, height: 23, fontSize: 9.5, color: "var(--m-ink2)", justifyContent: "space-between", gap: 8 }}>
            {t.allBranches} <Icon name="pi-chevron-down" size={7} />
          </Box>
          <span style={{ marginLeft: 27 }}>
            <Bell size={14} color="#2563eb" />
          </span>
          <div style={{ marginLeft: 32, paddingLeft: 14, height: 43, borderLeft: "1px solid var(--m-line)", display: "flex", alignItems: "center", gap: 8 }}>
            <Avatar initials="DK" size={27} font={9.5} />
            <div style={{ lineHeight: 1.25 }}>
              <div style={{ fontSize: 11.5, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                Daniel Kim <Icon name="pi-chevron-down" size={7} />
              </div>
              <div style={{ fontSize: 9, color: "var(--m-muted)" }}>{t.role}</div>
            </div>
          </div>
          <Box style={{ marginLeft: 14, width: 21, height: 21, padding: 0, justifyContent: "center", fontSize: 10, color: "var(--m-body)" }}>?</Box>
        </div>

        {/* Content stops short of the phone that overlaps the window's right side. */}
        <div style={{ position: "absolute", left: 15, top: 53, width: 448 }}>
          <div style={{ fontSize: 9, color: "var(--m-link)", display: "flex", alignItems: "center", gap: 4 }}>
            <Icon name="pi-arrow-left" size={7} /> {t.back}
          </div>
          <div style={{ marginTop: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>{t.title}</div>
            <Box style={{ marginLeft: "auto", height: 25, gap: 8, fontSize: 9.5, color: "var(--m-link)", borderColor: "var(--m-link)", padding: "0 10px" }}>
              {t.export} <Icon name="pi-chevron-down" size={7} />
            </Box>
            <div style={{ height: 25, padding: "0 11px", borderRadius: 4, background: "#2563eb", color: "#fff", fontSize: 9.5, fontWeight: 500, display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
              <Icon name="pi-plus" size={8} /> {t.newInvoice}
            </div>
          </div>
          <div style={{ fontSize: 8.5, color: "var(--m-muted)", marginTop: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {t.subtitle}
          </div>

          {/* KPIs */}
          <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 7 }}>
            {KPIS.map((k, i) => (
              <div key={k.value} style={{ height: 53, minWidth: 0, border: "1px solid var(--m-line)", borderRadius: 6, padding: "0 7px", display: "flex", gap: 6, alignItems: "center" }}>
                <div style={{ width: 24, height: 24, flex: "none", borderRadius: 6, background: k.bg, color: k.fg, display: "grid", placeItems: "center" }}>
                  <Icon name={k.icon} size={12} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 8, color: "var(--m-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.kpis[i]}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, marginTop: 2, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>{k.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* tabs */}
          <div style={{ marginTop: 13, display: "flex", gap: 24, fontSize: 9.5, color: "var(--m-body)", borderBottom: "1px solid var(--m-line)", height: 26, alignItems: "center" }}>
            <span style={{ color: "var(--m-link)", fontWeight: 600, height: 26, display: "flex", alignItems: "center", borderBottom: "2px solid var(--m-link)", padding: "0 8px", marginLeft: -2 }}>{t.tabs[0]}</span>
            <span>{t.tabs[1]}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {t.tabs[2]}
              <span style={{ background: "#e5484d", color: "#fff", borderRadius: 999, width: 13, height: 13, display: "grid", placeItems: "center", fontSize: 7.5, fontWeight: 700 }}>6</span>
            </span>
          </div>

          {/* filters */}
          <div style={{ marginTop: 10, display: "flex", gap: 7, fontSize: 8.5, color: "var(--m-body)" }}>
            <Box style={{ width: 142, height: 23, color: "var(--m-muted)" }}>
              <Icon name="pi-search" size={8.5} /> {t.tableSearch}
            </Box>
            <Box style={{ width: 148, height: 23, gap: 5 }}>
              <Icon name="pi-calendar" size={8.5} /> {t.range}
            </Box>
            <Box style={{ width: 53, height: 23, justifyContent: "space-between" }}>
              {t.status} <Icon name="pi-chevron-down" size={6.5} />
            </Box>
            <Box style={{ width: 64, height: 23, justifyContent: "space-between" }}>
              {t.customer} <Icon name="pi-chevron-down" size={6.5} />
            </Box>
          </div>

          {/* table */}
          <div style={{ marginTop: 11, width: 520 }}>
            <div style={{ display: "grid", gridTemplateColumns: INVOICE_COLS, height: 25, alignItems: "center", fontSize: 8.5, fontWeight: 600, color: "var(--m-body)", borderBottom: "1px solid var(--m-line)", paddingLeft: 8 }}>
              <Check />
              {t.columns.map((c) => (
                <span key={c} style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c}</span>
              ))}
            </div>
            {INVOICES.map((r, i) => (
              <div
                key={r.id}
                style={{ display: "grid", gridTemplateColumns: INVOICE_COLS, height: 28.7, alignItems: "center", fontSize: 8.5, color: "var(--m-body)", borderBottom: "1px solid var(--m-line-soft)", paddingLeft: 8 }}
              >
                <Check />
                <span style={{ color: "var(--m-link)" }}>{r.id}</span>
                <span style={{ color: "var(--m-link)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.customer}</span>
                <span style={{ color: "var(--m-link)" }}>{r.wo}</span>
                <span>{t.dates[i][0]}</span>
                <span>{t.dates[i][1]}</span>
                <span>{r.amount}</span>
                <span>{r.balance}</span>
                <span>
                  <Chip status={{ label: t.statuses[r.status], ...INVOICE_TONE[r.status] }} size={8} height={15} pad="0 7px" />
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
  border: "1px solid var(--m-blue-bd)",
  borderRadius: 5,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 5,
  color: "var(--m-link)",
  fontSize: 9,
} as const;

function PhoneMock({ m }: { m: MockCopy }) {
  const t = m.techToday;
  return (
    <PhoneShell
      width={269}
      height={477}
      radius={34}
      bezel={6}
      notch={{ w: 120, h: 15, top: 0, radius: 9 }}
      shadow="0 30px 60px rgba(11,29,69,.3)"
      className="fo-float"
      style={{ position: "absolute", left: 598, top: 75, zIndex: 2 }}
    >
      <div style={{ height: 61, flex: "none", background: "#0b1d33", color: "#fff", display: "flex", alignItems: "flex-end", padding: "0 12px 11px 14px", gap: 6, fontSize: 11.5, fontWeight: 700 }}>
        <LogoMark size={15} />
        <Wordmark ops="#2cc2bd" />
        <span style={{ fontWeight: 500, marginLeft: 12, whiteSpace: "nowrap" }}>{t.title}</span>
        <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
          <Bell size={12} color="#fff" />
          <Avatar initials="CR" size={23} font={8.5} bg="var(--m-teal-bg)" color="var(--m-teal-fg)" style={{ border: "1.5px solid #2cc2bd" }} />
          <Icon name="pi-chevron-down" size={7} />
        </span>
      </div>
      <div style={{ padding: "8px 9px 0", display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700 }}>{t.greeting}</div>
            <div style={{ fontSize: 8.5, color: "var(--m-muted)", marginTop: 3 }}>{t.date}</div>
          </div>
          <span style={{ marginLeft: "auto", height: 18, display: "flex", alignItems: "center", gap: 4, fontSize: 8, fontWeight: 500, color: "var(--m-green-fg)", border: "1px solid var(--m-green-bd)", background: "var(--m-green-bg)", padding: "0 7px", borderRadius: 999 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#16a34a" }} /> {t.clockedIn}
          </span>
        </div>
        <div style={{ marginTop: 13, display: "grid", gridTemplateColumns: "0.62fr 1fr 0.86fr", gap: 5 }}>
          {[
            { icon: null, v: "4", l: t.stats[0] },
            { icon: "pi-clock", v: "7.5", l: t.stats[1] },
            { icon: "pi-car", v: "52 min", l: t.stats[2] },
          ].map((p) => (
            <div key={p.l} style={{ height: 43, border: "1px solid var(--m-line)", borderRadius: 6, display: "flex", gap: 6, alignItems: "center", justifyContent: "center" }}>
              {p.icon && <Icon name={p.icon} size={11} style={{ color: "var(--m-body)" }} />}
              <div style={{ textAlign: p.icon ? "left" : "center" }}>
                <div style={{ fontSize: 12, fontWeight: 700 }}>{p.v}</div>
                <div style={{ fontSize: 8, color: "var(--m-muted)", whiteSpace: "nowrap" }}>{p.l}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 9, display: "flex", alignItems: "center", gap: 6, fontSize: 7.5, color: "var(--m-body)" }}>
          {t.progress}
          <div style={{ flex: 1, height: 5, background: "var(--m-line)", borderRadius: 3 }}>
            <div className="fo-fill-anim" style={{ width: "25%", height: "100%", background: "#0f9d9a", borderRadius: 3 }} />
          </div>
          25%
        </div>
        <div style={{ marginTop: 9, border: "1px solid var(--m-teal-bd)", borderRadius: 8, padding: "9px 9px 9px", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 8.5, fontWeight: 600, color: "var(--m-teal-fg)" }}>
            {t.next}
            <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4, color: "var(--m-amber-fg)", background: "var(--m-amber-bg)", padding: "3px 7px", borderRadius: 999, fontWeight: 500 }}>
              <Icon name="pi-arrow-up" size={7} /> {t.priority}
            </span>
          </div>
          <div style={{ fontSize: 12.5, fontWeight: 700, marginTop: 6 }}>{t.job}</div>
          <div style={{ marginTop: 6, display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: 7, columnGap: 6, fontSize: 8.5, color: "var(--m-body)" }}>
            <span style={{ color: "var(--m-muted)" }}>#WO-3091</span>
            <span style={{ display: "flex", gap: 5, alignItems: "center" }}><Icon name="pi-car" size={9} /> {t.away}</span>
            <span style={{ display: "flex", gap: 5, alignItems: "center" }}><Icon name="pi-user" size={9} /> Sofia Martinez</span>
            <span style={{ display: "flex", gap: 5, alignItems: "center" }}><Icon name="pi-clock" size={9} /> {t.window}</span>
            <span style={{ display: "flex", gap: 5, alignItems: "center", whiteSpace: "nowrap" }}><Icon name="pi-map-marker" size={9} /> 1842 Oak Street, Austin</span>
            <span style={{ color: "var(--m-muted)", paddingLeft: 14 }}>{t.arrival}</span>
          </div>
          <div style={{ marginTop: 8, display: "flex", gap: 6, fontSize: 8 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 4, background: "var(--m-blue-bg)", color: "var(--m-blue-fg)", padding: "4px 8px", borderRadius: 999 }}>
              <Icon name="pi-wrench" size={8} /> {t.trade}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 4, background: "var(--m-green-bg)", color: "var(--m-green-fg)", padding: "4px 8px", borderRadius: 999 }}>
              <Icon name="pi-box" size={8} /> {t.materials} <Icon name="pi-check-circle" size={8} />
            </span>
          </div>
          <div style={{ marginTop: 9, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
            <span style={actionBtn}><Icon name="pi-phone" size={9} /> {t.actions[0]}</span>
            <span style={actionBtn}><Icon name="pi-comment" size={9} /> {t.actions[1]}</span>
            <span style={actionBtn}><Icon name="pi-send" size={9} /> {t.actions[2]}</span>
          </div>
          <div style={{ marginTop: 9, height: 30, background: "#0f8c89", color: "#fff", fontSize: 10, fontWeight: 600, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
            <Icon name="pi-send" size={10} /> {t.start}
          </div>
        </div>
      </div>
      <PhoneTabBar tabs={t.tabs.map((label, i) => ({ label, icon: PHONE_TAB_ICONS[i] }))} font={8.5} icon={15} height={48} dotIndex={3} />
    </PhoneShell>
  );
}

function Toast({ title, body }: { title: string; body: string }) {
  return (
    <div
      aria-hidden="true"
      className="fo-mock fo-pop"
      style={{
        position: "absolute",
        left: 297,
        top: 451,
        zIndex: 3,
        minWidth: 279,
        height: 75,
        background: "var(--m-surface)",
        borderRadius: 8,
        boxShadow: "0 14px 34px rgba(11,29,69,.16)",
        display: "flex",
        alignItems: "center",
        gap: 17,
        padding: "0 17px",
      }}
    >
      <div className="fo-pulse-ring" style={{ width: 43, height: 43, flex: "none", borderRadius: "50%", background: "#0f8c89", color: "#fff", display: "grid", placeItems: "center" }}>
        <Icon name="pi-check" size={18} />
      </div>
      <div>
        <div style={{ fontSize: 17.5, fontWeight: 600, color: "var(--m-teal-fg)" }}>{title}</div>
        <div style={{ fontSize: 13.5, color: "var(--m-body)", marginTop: 3, whiteSpace: "nowrap" }}>{body}</div>
      </div>
    </div>
  );
}

export async function Hero() {
  const { hero: t } = await getDictionary();
  const m = await getMockCopy();
  const locale = await getLocale();
  return (
    <section id="producto" className="fo-hero">
      <div className="fo-container fo-hero-grid">
        <div className="fo-hero-copy">
          <div className="fo-eyebrow fo-enter" style={{ fontSize: 12, letterSpacing: "0.13em" }}>{t.eyebrow}</div>
          <h1 className="fo-h1" style={{ marginTop: 22 }}>
            <span className="fo-enter" style={{ display: "block", ...delay(90) }}>{t.line1}</span>
            <span className="fo-enter" style={{ display: "block", ...delay(180) }}>{t.line2}</span>
            <span className="fo-enter" style={{ display: "block", ...delay(270) }}>
              {t.line3}
              <span className="teal fo-shine">{t.accent}</span>
            </span>
          </h1>
          <p className="fo-enter" style={{ marginTop: 26, fontSize: 18, lineHeight: 1.5, color: "var(--body)", maxWidth: 360, ...delay(380) }}>{t.lead}</p>
          <div className="fo-enter" style={{ marginTop: 33, display: "flex", flexWrap: "wrap", gap: 12, ...delay(470) }}>
            <Link href={`/${locale}/demo`} className="fo-btn fo-btn-primary" style={{ minWidth: 193, height: 52, padding: "0 14px", fontSize: 15, boxShadow: "0 6px 16px rgba(15,140,137,.25)" }}>
              {t.primary} <Icon name="pi-arrow-right" size={13} />
            </Link>
            <a href="#video" className="fo-btn fo-btn-secondary" style={{ minWidth: 195, height: 52, padding: "0 14px", fontSize: 15, gap: 10 }}>
              <span style={{ width: 19, height: 19, borderRadius: "50%", background: "#2563eb", color: "#fff", display: "grid", placeItems: "center" }}>
                <Icon name="pi-play" size={8} style={{ marginLeft: 1 }} />
              </span>
              {t.secondary}
            </a>
          </div>
          <div className="fo-enter" style={{ fontSize: 13, color: "var(--muted)", marginTop: 22, ...delay(560) }}>{t.caption}</div>
        </div>

        <div className="fo-stage fo-hero-stage fo-enter-fade" style={delay(250)}>
          <DesktopMock m={m} />
          <PhoneMock m={m} />
          <Toast title={t.toastTitle} body={t.toastBody} />
        </div>
      </div>
    </section>
  );
}
