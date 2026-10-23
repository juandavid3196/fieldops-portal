import type { Metadata } from "next";
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
import "./case-study.css";

export const metadata: Metadata = {
  title: "Caso técnico — FieldOps",
  description:
    "Cómo se construyó FieldOps: el reto, la arquitectura en capas, el stack, el proceso spec-driven, las decisiones técnicas y la calidad de entrega.",
};

export default function CaseStudyPage() {
  return (
    <div className="fo cs">
      <MarketingNav variant="case" />
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
