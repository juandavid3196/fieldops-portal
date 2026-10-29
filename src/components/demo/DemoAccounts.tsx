"use client";

import { useEffect, useRef, useState } from "react";
import { APP_URL, DEMO_ACCOUNTS, DEMO_PASSWORD, OTHER_ACCOUNTS } from "@/content/demo.data";
import type { Dictionary } from "@/i18n/es";
import { Icon } from "../marketing/mock-frames";

type Copy = Dictionary["demo"]["accounts"];

async function writeClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return;
  } catch {}
  // Fallback for insecure contexts or denied permission.
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.cssText = "position:fixed;opacity:0;pointer-events:none";
  document.body.appendChild(area);
  area.select();
  try {
    document.execCommand("copy");
  } catch {}
  area.remove();
}

/** Icon button that copies `value` and flips to a check for a moment. */
function CopyButton({ value, label, copied, className = "dm-copy", children }: { value: string; label: string; copied: string; className?: string; children?: React.ReactNode }) {
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const onClick = async () => {
    await writeClipboard(value);
    setDone(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setDone(false), 1800);
  };

  return (
    <button type="button" className={`${className}${done ? " done" : ""}`} onClick={onClick} aria-label={done ? copied : label} title={done ? copied : label}>
      <Icon name={done ? "pi-check" : "pi-copy"} size={13} />
      {children && <span>{done ? copied : children}</span>}
      <span className="dm-sr" role="status">{done ? copied : ""}</span>
    </button>
  );
}

export function DemoAccounts({ t }: { t: Copy }) {
  const [reveal, setReveal] = useState(false);
  const [others, setOthers] = useState(false);

  return (
    <>
      <div className="dm-table" role="table" aria-label={t.title}>
        <div className="dm-pass">
          <span className="dm-pass-hint">
            <Icon name="pi-key" size={13} /> {t.shared}
          </span>
          <span className="dm-pass-field">
            <span className="dm-pass-label">{t.password}</span>
            <span className={`dm-pass-value${reveal ? " shown" : ""}`} aria-live="polite">
              {reveal ? DEMO_PASSWORD : "•".repeat(DEMO_PASSWORD.length - 3)}
            </span>
            <button type="button" className="dm-copy" onClick={() => setReveal((v) => !v)} aria-label={reveal ? t.hide : t.show} aria-pressed={reveal} title={reveal ? t.hide : t.show}>
              <Icon name={reveal ? "pi-eye-slash" : "pi-eye"} size={14} />
            </button>
            <CopyButton value={DEMO_PASSWORD} label={t.copyPassword} copied={t.copied} className="dm-copy dm-copy-wide">
              {t.copyPassword}
            </CopyButton>
          </span>
        </div>

        <div className="dm-row dm-head" role="row">
          {t.cols.map((c, i) => (
            <span key={c} role="columnheader" className={i === 3 ? "dm-col-end" : undefined}>{c}</span>
          ))}
        </div>

        {DEMO_ACCOUNTS.map((acc, i) => {
          const row = t.rows[i];
          const start = "start" in acc;
          return (
            <div key={acc.email} className={`dm-row dm-account${start ? " start" : ""}`} role="row">
              <div className="dm-role" role="cell">
                <span className="dm-role-icon"><Icon name={acc.icon} size={15} /></span>
                <span>
                  <b>{row.role}</b>
                  <small className={start ? "start" : undefined}>{start ? t.start : row.sub}</small>
                </span>
              </div>
              <span className="dm-explore" role="cell">{row.explore}</span>
              <div className="dm-email" role="cell">
                <code>{acc.email}</code>
                <CopyButton value={acc.email} label={t.copyEmail.replace("{role}", row.role)} copied={t.copied} />
              </div>
              <span className="dm-col-end" role="cell">
                <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="dm-enter">
                  {row.cta} <Icon name="pi-external-link" size={12} />
                </a>
              </span>
            </div>
          );
        })}
      </div>

      <p className="dm-note">
        <Icon name="pi-info-circle" size={13} /> {t.note}
      </p>

      <button type="button" className="dm-others-toggle" aria-expanded={others} aria-controls="dm-others" onClick={() => setOthers((v) => !v)}>
        <Icon name={others ? "pi-arrow-down" : "pi-arrow-right"} size={12} /> {t.others}
      </button>
      <div id="dm-others" className="dm-others" hidden={!others}>
        {OTHER_ACCOUNTS.map((o) => {
          const label = t[o.key];
          return (
            <div key={o.key} className="dm-other">
              <b>{label}</b>
              <code>{o.email}</code>
              <CopyButton value={o.email} label={t.copyEmail.replace("{role}", label)} copied={t.copied} />
            </div>
          );
        })}
      </div>
    </>
  );
}
