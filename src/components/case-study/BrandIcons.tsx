import type { ReactNode } from "react";
import { Icon } from "../marketing/mock-frames";

/*
 * Simplified technology marks for the stack lists. They are drawn here (not
 * official assets) so they stay lightweight; swap for official SVGs if needed.
 */

function Svg({ size, children, viewBox = "0 0 24 24" }: { size: number; children: ReactNode; viewBox?: string }) {
  return (
    <svg width={size} height={size} viewBox={viewBox} aria-hidden="true" style={{ flex: "none", display: "block" }}>
      {children}
    </svg>
  );
}

export function AngularMark({ size = 20 }: { size?: number }) {
  return (
    <Svg size={size}>
      <path d="M12 1.5 2.5 4.9l1.5 12.6L12 22l8-4.5 1.5-12.6z" fill="#dd0031" />
      <path d="M12 1.5v20.5l8-4.5 1.5-12.6z" fill="#c3002f" />
      <path d="M12 4.6 6.2 17.6h2.2l1.2-2.9h4.8l1.2 2.9h2.2zm-1.6 8.3L12 9l1.6 3.9z" fill="#fff" />
    </Svg>
  );
}

export function DotnetMark({ size = 20 }: { size?: number }) {
  return (
    <span style={{ width: size, height: size, flex: "none", borderRadius: "50%", background: "#5b3fd4", color: "#fff", fontSize: size * 0.3, fontWeight: 700, display: "grid", placeItems: "center", letterSpacing: "-0.02em" }} aria-hidden="true">
      .NET
    </span>
  );
}

function Tile({ size, bg, color = "#fff", text, radius = 3, font }: { size: number; bg: string; color?: string; text: string; radius?: number | string; font: number }) {
  return (
    <span style={{ width: size, height: size, flex: "none", borderRadius: radius, background: bg, color, fontSize: font, fontWeight: 800, display: "grid", placeItems: "center", letterSpacing: "-0.03em" }} aria-hidden="true">
      {text}
    </span>
  );
}

export function TsMark({ size = 20 }: { size?: number }) {
  return (
    <span style={{ width: size, height: size, flex: "none", borderRadius: 2, background: "#3178c6", color: "#fff", fontSize: size * 0.45, fontWeight: 800, display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: "0 2px 1px 0", boxSizing: "border-box" }} aria-hidden="true">
      TS
    </span>
  );
}

export function SignalsMark({ size = 20 }: { size?: number }) {
  return (
    <Svg size={size}>
      <g fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round">
        <path d="M7 7.5a6.4 6.4 0 0 0 0 9M17 7.5a6.4 6.4 0 0 1 0 9" />
        <path d="M4 5a10 10 0 0 0 0 14M20 5a10 10 0 0 1 0 14" opacity=".55" />
      </g>
      <circle cx="12" cy="12" r="2.3" fill="#7c3aed" />
    </Svg>
  );
}

export function RxjsMark({ size = 20 }: { size?: number }) {
  return (
    <Svg size={size}>
      <circle cx="12" cy="12" r="10" fill="#d6247f" />
      <path d="M6.5 15.5c1.5-5 6-8 11-6.5-3.5.2-5.5 2.4-6 5.2" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="9" cy="9.5" r="1.6" fill="#fff" />
    </Svg>
  );
}

export function PrimeNgMark({ size = 20 }: { size?: number }) {
  return (
    <Svg size={size}>
      <path d="M12 2 4 5v6.5c0 5 3.4 8.8 8 10.5 4.6-1.7 8-5.5 8-10.5V5z" fill="#dd0031" />
      <path d="M9.5 16.5V7.5H13a2.6 2.6 0 0 1 0 5.2h-3.5" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
    </Svg>
  );
}

export function SassMark({ size = 20 }: { size?: number }) {
  return (
    <Svg size={size}>
      <path
        d="M16.5 4.5c-2.6-1.4-8.4.4-9.8 3.4-.9 2 1.6 3 3.6 4.2 1.9 1.1 3 2.4 1.6 4.2-1.6 2-5 2.7-6 1.5-.7-.9.4-2.4 2-3.4"
        fill="none"
        stroke="#cd6799"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function CsharpMark({ size = 20 }: { size?: number }) {
  return (
    <Svg size={size}>
      <path d="M12 1.8 21 7v10l-9 5.2L3 17V7z" fill="#68217a" />
      <text x="12" y="15.3" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff" fontFamily="Inter, sans-serif">
        C#
      </text>
    </Svg>
  );
}

export function EfMark({ size = 20 }: { size?: number }) {
  return <Tile size={size} bg="#1e3a8a" text="EF" font={size * 0.42} />;
}

export function PostgresMark({ size = 20 }: { size?: number }) {
  return (
    <Svg size={size} viewBox="0 0 32 32">
      <path
        d="M22.8 3.2c-1.9-.6-4.4-.4-6.5.6C14 3 11 2.9 8.9 4 4.6 6.2 4.2 12.6 5.6 17c1 3.3 2.9 6.8 5 6.9 1 0 1.8-.9 2.4-1.8.5.4 1.1.6 1.8.6-.2 1.8 0 4.2 1.4 5.3 1.3 1 3.6.6 4.4-1.5.6-1.6.6-4 .5-5.6 2.3-.5 4.6-2.2 5.6-4.6 1.5-3.6 2-8.6-.8-11.6-.9-.9-2-1.6-3.1-1.5Z"
        fill="#336791"
        stroke="#fff"
        strokeWidth="1"
      />
      <path d="M16.6 4.2c-1.7 1.2-3.3 4.4-3.1 8 .1 2.2 1 4 2.4 5.2M22.8 3.4c1.2 2.6 1.4 6.4.5 9.6-.6 2-1.8 3.4-3.4 4" fill="none" stroke="#fff" strokeWidth="1" />
      <circle cx="12" cy="10" r="1" fill="#fff" />
    </Svg>
  );
}

export function DockerMark({ size = 20 }: { size?: number }) {
  return (
    <Svg size={size} viewBox="0 0 32 24">
      <g fill="#2496ed">
        <rect x="5" y="9" width="3.6" height="3.2" rx=".4" />
        <rect x="9.3" y="9" width="3.6" height="3.2" rx=".4" />
        <rect x="13.6" y="9" width="3.6" height="3.2" rx=".4" />
        <rect x="17.9" y="9" width="3.6" height="3.2" rx=".4" />
        <rect x="9.3" y="5.2" width="3.6" height="3.2" rx=".4" />
        <rect x="13.6" y="5.2" width="3.6" height="3.2" rx=".4" />
        <rect x="13.6" y="1.4" width="3.6" height="3.2" rx=".4" />
        <path d="M2 13.2h26.6c.8-1.6 2.4-2 3.2-1.6-.5-1.3-1.9-1.7-3-1.5-.4-1.4-1.4-2.3-2.2-2.7-.7.9-.9 2.4-.4 3.6-.6.4-1.5.6-2.2.6H2.2C1.8 18 5.4 22.4 12.5 22.4c6.8 0 12-3 14.5-8.6" />
      </g>
    </Svg>
  );
}

export function EslintMark({ size = 20 }: { size?: number }) {
  return (
    <Svg size={size}>
      <path d="M12 2.2 20.5 7v10L12 21.8 3.5 17V7z" fill="none" stroke="#4b32c3" strokeWidth="2" />
      <path d="M12 7.4 16 9.7v4.6L12 16.6l-4-2.3V9.7z" fill="#8080f2" />
    </Svg>
  );
}

export function PrettierMark({ size = 20 }: { size?: number }) {
  const bars = [
    ["#56b3b4", 2, 9],
    ["#ea5e5e", 5.5, 7],
    ["#f7b93e", 9, 11],
    ["#bf85bf", 12.5, 6],
    ["#4d616e", 16, 9],
    ["#f7b93e", 19.5, 5],
  ] as const;
  return (
    <Svg size={size}>
      {bars.map(([c, y, w], i) => (
        <rect key={i} x={3 + (i % 2) * 2} y={y} width={w} height="2.4" rx="1.2" fill={c} />
      ))}
    </Svg>
  );
}

export const BRAND_ICONS: Record<string, (p: { size?: number }) => ReactNode> = {
  angular: AngularMark,
  ts: TsMark,
  signals: SignalsMark,
  rxjs: RxjsMark,
  primeng: PrimeNgMark,
  sass: SassMark,
  dotnet: DotnetMark,
  csharp: CsharpMark,
  ef: EfMark,
  postgres: PostgresMark,
  docker: DockerMark,
  eslint: EslintMark,
  prettier: PrettierMark,
};

/** Renders a brand mark by key, or a PrimeIcon when the key starts with "pi-". */
export function TechIcon({ id, size, color = "#0b1d45" }: { id: string; size: number; color?: string }) {
  if (id.startsWith("pi-")) return <Icon name={id} size={size * 0.9} style={{ color, width: size, textAlign: "center", flex: "none" }} />;
  if (id.startsWith("text:")) {
    return (
      <span style={{ width: size, flex: "none", textAlign: "center", fontSize: size * 0.7, fontWeight: 600, color }} aria-hidden="true">
        {id.slice(5)}
      </span>
    );
  }
  const Mark = BRAND_ICONS[id];
  return Mark ? <Mark size={size} /> : null;
}
