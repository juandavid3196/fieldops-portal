import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { DemoAccountsSection, DemoCta, DemoFooter, DemoHelp, DemoHero, DemoJourney } from "@/components/demo/DemoSections";
import { MarketingNav } from "@/components/marketing/MarketingNav";
import "@/styles/demo.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getDictionary();
  const locale = await getLocale();
  return {
    title: t.meta.demoTitle,
    description: t.meta.demoDescription,
    alternates: { canonical: `/${locale}/demo`, languages: { es: "/es/demo", en: "/en/demo" } },
  };
}

export default async function DemoPage() {
  const t = await getDictionary();
  const locale = await getLocale();
  return (
    <div className="fo dm">
      <MarketingNav variant="demo" locale={locale} t={t.nav} />
      <main>
        <DemoHero />
        <DemoAccountsSection />
        <DemoJourney />
        <DemoHelp />
        <DemoCta />
      </main>
      <DemoFooter />
    </div>
  );
}
