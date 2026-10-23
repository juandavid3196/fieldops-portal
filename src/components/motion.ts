import type { CSSProperties } from "react";

/** Delay for a `data-reveal` / `.fo-enter` element (read by motion.css as --d). */
export const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/** Position in a staggered list (read by motion.css as --i). */
export const order = (i: number) => ({ "--i": i }) as CSSProperties;
