"use client";

/**
 * Inline script that runs during HTML parsing on the initial load only.
 * On client renders (e.g. switching locale, which re-renders the root layout) it is
 * emitted as text/plain, so React doesn't warn about rendering a <script> tag.
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
