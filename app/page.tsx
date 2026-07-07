import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PlatformPillars } from "@/components/sections/PlatformPillars";
import { ProofCards } from "@/components/sections/ProofCards";
import { FeedstockTeaser } from "@/components/sections/FeedstockTeaser";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { ApplicationsSection } from "@/components/sections/ApplicationsSection";
import { DeploymentSection } from "@/components/sections/DeploymentSection";
import { CompanySection } from "@/components/sections/CompanySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-offWhite text-black">
      <Header />
      <Hero />
      <ProofCards />
      <FeedstockTeaser />
      <PlatformPillars />
      <TechnologySection />
      <MetricsSection />
      <ApplicationsSection />
      <DeploymentSection />
      <CompanySection />
      <Footer />
    </main>
  );
}
