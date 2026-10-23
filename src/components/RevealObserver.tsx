"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll reveal (see motion.css): sets `data-in` on `[data-reveal]` elements as they enter the
 * viewport. Nothing is hidden until `data-reveal-ready` is set, and anything already on screen is
 * marked first, so visible content never flashes.
 *
 * It starts after load, once the browser is idle: sections hydrate in separate boundaries, and
 * touching their DOM before React has hydrated them would trigger hydration mismatch errors.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // React can drop attributes it doesn't manage on <html> when the root layout re-renders.
    root.dataset.motion = "on";

    let io: IntersectionObserver | undefined;
    const start = () => {
      const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-in])"));
      const fold = window.innerHeight;
      for (const el of items) if (el.getBoundingClientRect().top < fold) el.setAttribute("data-in", "");
      root.dataset.revealReady = "on";

      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.setAttribute("data-in", "");
            io?.unobserve(entry.target);
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
      );
      for (const el of items) if (!el.hasAttribute("data-in")) io.observe(el);
    };

    // Wait for the page to finish loading (all streamed sections arrived) and then for an idle moment,
    // so every section has hydrated before we add attributes to it.
    let timer: number | undefined;
    const schedule = () => {
      timer = window.setTimeout(() => {
        const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1));
        idle(start);
      }, 300);
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    return () => {
      window.removeEventListener("load", schedule);
      window.clearTimeout(timer);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
