import localFont from "next/font/local";
import { lang } from "next/root-params";
import "primeicons/primeicons.css";
import "@/styles/globals.css";
import "@/styles/landing.css";
import "@/styles/motion.css";
import { InlineScript } from "@/components/InlineScript";
import { RevealObserver } from "@/components/RevealObserver";
import { locales } from "@/i18n/config";

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    { path: "../fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Inter-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Inter-Bold.woff2", weight: "700", style: "normal" },
  ],
});

// Runs before first paint: applies the saved theme (or the OS preference) so there is no flash,
// and enables the CSS entrance animations unless the visitor prefers reduced motion.
const BOOT_SCRIPT = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}d.setAttribute("data-theme",t)}catch(e){}try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches)d.setAttribute("data-motion","on")}catch(e){}})()`;

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  return (
    <html lang={await lang()} className={`${inter.variable} h-full antialiased`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <InlineScript html={BOOT_SCRIPT} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
