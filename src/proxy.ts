import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, LOCALE_COOKIE, type Locale } from "@/i18n/config";

/** Picks the visitor's locale: their saved choice, otherwise Spanish (the browser language is ignored). */
function pickLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  return saved && hasLocale(saved) ? saved : defaultLocale;
}

/** Sends locale-less paths ("/", "/caso-tecnico") to their localized version. */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";
  if (hasLocale(first)) return;

  request.nextUrl.pathname = `/${pickLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals and any file with an extension (favicon, fonts, images).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
