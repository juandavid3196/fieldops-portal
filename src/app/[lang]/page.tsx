import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { Cta } from "@/components/marketing/sections/Cta";
import { Connected } from "@/components/marketing/sections/Connected";
import { DataAudit } from "@/components/marketing/sections/DataAudit";
import { Flow } from "@/components/marketing/sections/Flow";
import { Guide } from "@/components/marketing/sections/Guide";
import { Hero } from "@/components/marketing/sections/Hero";
import { Roles } from "@/components/marketing/sections/Roles";
import { Schedule } from "@/components/marketing/sections/Schedule";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingNav } from "@/components/marketing/MarketingNav";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getDictionary();
  const locale = await getLocale();
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: { canonical: `/${locale}`, languages: { es: "/es", en: "/en" } },
  };
}

export default async function Home() {
  const t = await getDictionary();
  const locale = await getLocale();
  return (
    <div className="fo">
      <MarketingNav variant="landing" locale={locale} t={t.nav} />
      <main>
        <Hero />
        <Flow />
        <Schedule />
        <Roles />
        <Connected />
        <DataAudit />
        <Guide />
        <Cta />
      </main>
      <MarketingFooter />
    </div>
  );
}
