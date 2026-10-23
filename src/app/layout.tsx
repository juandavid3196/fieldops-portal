import type { Metadata } from "next";
import localFont from "next/font/local";
import "primeicons/primeicons.css";
import "./globals.css";
import "./landing.css";

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    { path: "./fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Inter-Bold.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "FieldOps — Gestión de servicios de campo",
  description:
    "Conecta solicitudes, cotizaciones, visitas y facturación para mantener tu operación bajo control. Proyecto demostrativo con datos ficticios.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
