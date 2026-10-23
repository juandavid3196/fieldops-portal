import type { CSSProperties, ReactNode } from "react";
import type { NavItem } from "@/app/landing.data";

export function Icon({ name, size, style }: { name: string; size: number; style?: CSSProperties }) {
  return <i className={`pi ${name}`} style={{ fontSize: size, ...style }} aria-hidden="true" />;
}

export function Leaf({ size, fill = "#0f9d9a", stroke = false }: { size: number; fill?: string; stroke?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 21C3 11 9 3 21 3c0 11-7 18-18 18z" fill={fill} />
      {stroke && <path d="M5.5 18.5L15 9" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />}
    </svg>
  );
}

export const WINDOW_SHADOW = "0 22px 50px rgba(11,29,69,.12), 0 0 0 1px rgba(11,29,69,.06)";

export function Sidebar({
  items,
  active,
  width,
  fontSize = 8.5,
  logoSize = 12,
  wordSize = 12,
  padX = 7,
}: {
  items: NavItem[];
  active: string;
  width: number;
  fontSize?: number;
  logoSize?: number;
  wordSize?: number;
  padX?: number;
}) {
  return (
    <div
      className="fo-sidebar"
      style={{ width, flex: "none", background: "#0b1d33", padding: `12px ${padX}px`, display: "flex", flexDirection: "column", gap: 3 }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#fff", fontWeight: 700, fontSize: wordSize, padding: "0 4px 12px" }}>
        <Leaf size={logoSize} fill="#2cc2bd" />
        FieldOps
      </div>
      {items.map((it) => {
        const on = it.label === active;
        return (
          <div
            key={it.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "5px 6px",
              borderRadius: 3,
              fontSize,
              color: on ? "#fff" : "#c9d3e3",
              background: on ? "#2563eb" : "transparent",
            }}
          >
            <Icon name={it.icon} size={fontSize} />
            {it.label}
          </div>
        );
      })}
    </div>
  );
}

export function TopBar({
  height,
  searchWidth,
  searchPlaceholder,
  filterLabel,
  filterGap,
  bellColor,
  user,
}: {
  height: number;
  searchWidth?: number;
  searchPlaceholder: string;
  filterLabel: string;
  filterGap: number;
  bellColor?: string;
  user?: { initials: string; name: string; role: string };
}) {
  return (
    <div style={{ height, borderBottom: "1px solid #edf1f6", display: "flex", alignItems: "center", padding: "0 10px", gap: 8 }}>
      <div
        style={{
          width: searchWidth,
          flex: searchWidth ? undefined : 1,
          maxWidth: searchWidth ? undefined : 260,
          height: 20,
          border: "1px solid #dfe5ee",
          borderRadius: 4,
          fontSize: 7.5,
          color: "#9aa5b8",
          display: "flex",
          alignItems: "center",
          gap: 5,
          padding: "0 6px",
        }}
      >
        <Icon name="pi-search" size={7.5} />
        {searchPlaceholder}
      </div>
      <div
        style={{
          marginLeft: "auto",
          height: 20,
          border: "1px solid #dfe5ee",
          borderRadius: 4,
          fontSize: 7.5,
          color: "#1c2b55",
          display: "flex",
          alignItems: "center",
          gap: filterGap,
          padding: "0 6px",
        }}
      >
        {filterLabel} <Icon name="pi-chevron-down" size={6} />
      </div>
      <div style={{ position: "relative", color: bellColor ?? "#1c2b55" }}>
        <Icon name="pi-bell" size={10} />
        <span style={{ position: "absolute", top: -1, right: -2, width: 5, height: 5, borderRadius: "50%", background: "#e5484d" }} />
      </div>
      {user ? (
        <div style={{ display: "flex", alignItems: "center", gap: 5, borderLeft: "1px solid #edf1f6", paddingLeft: 8 }}>
          <Avatar initials={user.initials} />
          <div>
            <div style={{ fontSize: 7.5, fontWeight: 600 }}>{user.name}</div>
            <div style={{ fontSize: 6.5, color: "#7b88a3" }}>{user.role}</div>
          </div>
        </div>
      ) : (
        <Avatar initials="DK" />
      )}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#0b1d45", color: "#fff", fontSize: 7, display: "grid", placeItems: "center", fontWeight: 600 }}>
      {initials}
    </div>
  );
}

export function Chip({ status, size, pad }: { status: { label: string; bg: string; fg: string }; size?: number; pad: string }) {
  return (
    <span style={{ padding: pad, borderRadius: 999, background: status.bg, color: status.fg, fontWeight: 600, whiteSpace: "nowrap", fontSize: size }}>
      ● {status.label}
    </span>
  );
}

export function FilterBox({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return <div style={{ border: "1px solid #dfe5ee", borderRadius: 4, padding: "4px 6px", ...style }}>{children}</div>;
}

export function Tabs({ tabs, gap, fontSize = 7.5 }: { tabs: string[]; gap: number; fontSize?: number }) {
  return (
    <div style={{ display: "flex", gap, fontSize, color: "#46557a", borderBottom: "1px solid #e6ebf2", whiteSpace: "nowrap", overflow: "hidden" }}>
      {tabs.map((t, i) => (
        <span key={t} style={i === 0 ? { color: "#2563eb", fontWeight: 600, borderBottom: "1.5px solid #2563eb", paddingBottom: 5 } : undefined}>
          {t}
        </span>
      ))}
    </div>
  );
}

/** Phone bezel + screen. `inner` is the screen radius, `notch` the island size. */
export function PhoneShell({
  width,
  height,
  radius,
  innerRadius,
  notch,
  shadow,
  className,
  style,
  children,
}: {
  width: number;
  height: number;
  radius: number;
  innerRadius: number;
  notch: { w: number; h: number; top: number };
  shadow: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div
      className={className}
      aria-hidden="true"
      style={{ width, height, background: "#0b0f19", borderRadius: radius, padding: 6, boxShadow: shadow, zIndex: 2, ...style }}
    >
      <div style={{ width: "100%", height: "100%", borderRadius: innerRadius, background: "#fff", overflow: "hidden", display: "flex", flexDirection: "column", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: notch.top,
            left: "50%",
            transform: "translateX(-50%)",
            width: notch.w,
            height: notch.h,
            borderRadius: 10,
            background: "#0b0f19",
          }}
        />
        {children}
      </div>
    </div>
  );
}

export function PhoneTabBar({
  tabs,
  fontSize,
  iconSize,
  pad,
}: {
  tabs: NavItem[];
  fontSize: number;
  iconSize: number;
  pad: string;
}) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", borderTop: "1px solid #e6ebf2", padding: pad, fontSize, color: "#46557a", textAlign: "center" }}>
      {tabs.map((t, i) => (
        <div key={t.label} style={{ color: i === 0 ? "#0f8c89" : "#46557a", fontWeight: i === 0 ? 600 : 400 }}>
          <Icon name={t.icon} size={iconSize} style={{ display: "block", marginBottom: 2 }} />
          {t.label}
        </div>
      ))}
    </div>
  );
}

export function PhoneHeader({
  padding,
  fontSize,
  logo,
  avatar,
  bell,
  children,
}: {
  padding: string;
  fontSize: number;
  logo: number;
  avatar: number;
  bell: number;
  children?: ReactNode;
}) {
  return (
    <div style={{ background: "#0b1d33", color: "#fff", padding, display: "flex", alignItems: "center", gap: 5, fontSize, fontWeight: 700 }}>
      <Leaf size={logo} fill="#2cc2bd" />
      FieldOps
      {children}
      <Icon name="pi-bell" size={bell} style={{ marginLeft: "auto" }} />
      <span
        style={{
          width: avatar,
          height: avatar,
          borderRadius: "50%",
          background: "#e6f7f6",
          color: "#0b7471",
          fontSize: avatar * 0.38,
          display: "grid",
          placeItems: "center",
          border: "1.5px solid #2cc2bd",
        }}
      >
        CR
      </span>
    </div>
  );
}
