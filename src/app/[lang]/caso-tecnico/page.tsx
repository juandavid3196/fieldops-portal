import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { CaseCta, CaseFooter } from "@/components/case-study/CaseCtaFooter";
import { CaseHero } from "@/components/case-study/CaseHero";
import {
  Architecture,
  Challenge,
  Contribution,
  Decisions,
  Quality,
  SpecDriven,
  Technologies,
} from "@/components/case-study/CaseSections";
import { MarketingNav } from "@/components/marketing/MarketingNav";
import "@/styles/case-study.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getDictionary();
  const locale = await getLocale();
  return {
    title: t.meta.caseTitle,
    description: t.meta.caseDescription,
    alternates: { canonical: `/${locale}/caso-tecnico`, languages: { es: "/es/caso-tecnico", en: "/en/caso-tecnico" } },
  };
}

export default async function CaseStudyPage() {
  const t = await getDictionary();
  const locale = await getLocale();
  return (
    <div className="fo cs">
      <MarketingNav variant="case" locale={locale} t={t.nav} />
      <main>
        <CaseHero />
        <Challenge />
        <Architecture />
        <Technologies />
        <SpecDriven />
        <Decisions />
        <Quality />
        <Contribution />
        <CaseCta />
      </main>
      <CaseFooter />
    </div>
  );
}
