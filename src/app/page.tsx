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

export default function Home() {
  return (
    <div className="fo">
      <MarketingNav active="producto" />
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
