import type { CSSProperties, ReactNode } from "react";
import type { NavItem } from "@/app/landing.data";

export function Icon({ name, size, style }: { name: string; size: number; style?: CSSProperties }) {
  return <i className={`pi ${name}`} style={{ fontSize: size, ...style }} aria-hidden="true" />;
}

export function Leaf({ size, fill = "#0f9d9a", stroke = false }: { size: number; fill?: string; stroke?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={{ flex: "none" }}>
      <path d="M3 21C3 11 9 3 21 3c0 11-7 18-18 18z" fill={fill} />
      {stroke && <path d="M5.5 18.5L15 9" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />}
    </svg>
  );
}

/** Hard hat — PrimeIcons has no equivalent. Inherits currentColor. */
export function HardHat({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 15a8 8 0 0 1 16 0" />
      <path d="M10 7.3V5h4v2.3" />
      <path d="M9.5 15V9M14.5 15V9" />
      <rect x="2.5" y="15" width="19" height="3.5" rx="1" />
    </svg>
  );
}

export const WINDOW_SHADOW = "0 22px 50px rgba(11,29,69,.12), 0 0 0 1px rgba(11,29,69,.06)";

export type SidebarSpec = {
  width: number;
  logo: { top: number; leaf: number; font: number; left: number };
  items: { top: number; step: number; height: number; font: number; icon: number; inset: number; iconX: number; gap: number };
};

/** Dark app sidebar drawn at absolute design positions. */
export function Sidebar({ items, active, spec }: { items: NavItem[]; active: string; spec: SidebarSpec }) {
  const { width, logo, items: it } = spec;
  return (
    <div className="fo-sidebar" style={{ position: "relative", width, flex: "none", background: "#0b1d33", alignSelf: "stretch" }}>
      <div
        style={{
          position: "absolute",
          left: logo.left,
          top: logo.top,
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 6,
          color: "#fff",
          fontWeight: 700,
          fontSize: logo.font,
          letterSpacing: "-0.02em",
        }}
      >
        <Leaf size={logo.leaf} fill="#2cc2bd" />
        FieldOps
      </div>
      {items.map((item, i) => {
        const on = item.label === active;
        return (
          <div
            key={item.label}
            style={{
              position: "absolute",
              left: it.inset,
              right: it.inset,
              top: it.top + i * it.step - it.height / 2,
              height: it.height,
              display: "flex",
              alignItems: "center",
              gap: it.gap,
              paddingLeft: it.iconX - it.inset,
              borderRadius: 4,
              fontSize: it.font,
              color: on ? "#fff" : "#c9d3e3",
              background: on ? "#2563eb" : "transparent",
              whiteSpace: "nowrap",
            }}
          >
            <Icon name={item.icon} size={it.icon} style={{ width: it.icon, textAlign: "center" }} />
            {item.label}
          </div>
        );
      })}
    </div>
  );
}

export function Box({ children, style }: { children?: ReactNode; style?: CSSProperties }) {
  return (
    <div
      style={{
        border: "1px solid #dfe5ee",
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "0 8px",
        background: "#fff",
        whiteSpace: "nowrap",
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Chip({ status, size, height, pad = "0 8px", style }: { status: { label: string; bg: string; fg: string }; size: number; height: number; pad?: string; style?: CSSProperties }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        height,
        padding: pad,
        borderRadius: 999,
        background: status.bg,
        color: status.fg,
        fontWeight: 500,
        whiteSpace: "nowrap",
        fontSize: size,
        ...style,
      }}
    >
      <span style={{ width: size * 0.62, height: size * 0.62, borderRadius: "50%", background: "currentColor", flex: "none" }} />
      {status.label}
    </span>
  );
}

export function Avatar({ initials, size, font, bg = "#0b1d45", color = "#fff", style }: { initials: string; size: number; font: number; bg?: string; color?: string; style?: CSSProperties }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        flex: "none",
        borderRadius: "50%",
        background: bg,
        color,
        fontSize: font,
        fontWeight: 600,
        display: "grid",
        placeItems: "center",
        ...style,
      }}
    >
      {initials}
    </span>
  );
}

export function Bell({ size, color = "#1c2b55" }: { size: number; color?: string }) {
  return (
    <span style={{ position: "relative", color, display: "inline-flex" }}>
      <Icon name="pi-bell" size={size} />
      <span style={{ position: "absolute", top: -1, right: -2, width: size * 0.42, height: size * 0.42, borderRadius: "50%", background: "#e5484d", border: "1.5px solid #fff" }} />
    </span>
  );
}

/** Phone bezel + screen. */
export function PhoneShell({
  width,
  height,
  radius,
  bezel = 6,
  notch,
  shadow = "0 30px 60px rgba(11,29,69,.3)",
  style,
  children,
}: {
  width: number;
  height: number;
  radius: number;
  bezel?: number;
  notch?: { w: number; h: number; top: number; radius?: number };
  shadow?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div
      aria-hidden="true"
      style={{ width, height, background: "#0b0f19", borderRadius: radius, padding: bezel, boxShadow: shadow, boxSizing: "border-box", ...style }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: radius - bezel,
          background: "#fff",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {notch && (
          <div
            style={{
              position: "absolute",
              zIndex: 3,
              top: notch.top,
              left: "50%",
              transform: "translateX(-50%)",
              width: notch.w,
              height: notch.h,
              borderRadius: notch.radius ?? 10,
              background: "#0b0f19",
            }}
          />
        )}
        {children}
      </div>
    </div>
  );
}

export function PhoneTabBar({ tabs, font, icon, height, dotIndex }: { tabs: NavItem[]; font: number; icon: number; height: number; dotIndex?: number }) {
  return (
    <div
      style={{
        marginTop: "auto",
        height,
        flex: "none",
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        alignItems: "center",
        borderTop: "1px solid #e6ebf2",
        fontSize: font,
        color: "#46557a",
        textAlign: "center",
        background: "#fff",
      }}
    >
      {tabs.map((t, i) => (
        <div key={t.label} style={{ color: i === 0 ? "#0f8c89" : "#46557a", fontWeight: i === 0 ? 600 : 400, whiteSpace: "nowrap" }}>
          <span style={{ position: "relative", display: "inline-block", marginBottom: 3 }}>
            <Icon name={t.icon} size={icon} style={{ display: "block" }} />
            {i === dotIndex && <span style={{ position: "absolute", top: -2, right: -3, width: 6, height: 6, borderRadius: "50%", background: "#e5484d" }} />}
          </span>
          <div>{t.label}</div>
        </div>
      ))}
    </div>
  );
}

/** iOS-style status row ("9:41" + signal/wifi/battery). */
export function StatusBar({ color = "#fff", font = 10, height = 22 }: { color?: string; font?: number; height?: number }) {
  return (
    <div style={{ height, display: "flex", alignItems: "center", padding: "0 16px 0 20px", color, fontSize: font, fontWeight: 600 }}>
      9:41
      <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4 }}>
        <svg width="14" height="9" viewBox="0 0 14 9" fill="currentColor" aria-hidden="true">
          <rect x="0" y="6" width="2.5" height="3" rx=".5" />
          <rect x="3.8" y="4" width="2.5" height="5" rx=".5" />
          <rect x="7.6" y="2" width="2.5" height="7" rx=".5" />
          <rect x="11.4" y="0" width="2.5" height="9" rx=".5" />
        </svg>
        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <path d="M1 3.2a7.5 7.5 0 0 1 10 0M2.8 5.2a4.8 4.8 0 0 1 6.4 0" />
          <circle cx="6" cy="7.6" r=".9" fill="currentColor" stroke="none" />
        </svg>
        <svg width="20" height="9" viewBox="0 0 20 9" fill="none" aria-hidden="true">
          <rect x=".5" y=".5" width="16" height="8" rx="2" stroke="currentColor" opacity=".6" />
          <rect x="2" y="2" width="13" height="5" rx="1" fill="currentColor" />
          <rect x="17.5" y="3" width="1.5" height="3" rx=".5" fill="currentColor" opacity=".6" />
        </svg>
      </span>
    </div>
  );
}
