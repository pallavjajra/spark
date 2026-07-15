import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FeatureShowcase } from "@/components/home/FeatureShowcase";
import { AIServices } from "@/components/home/AIServices";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ImpactStats } from "@/components/home/ImpactStats";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { TechStackSection } from "@/components/home/TechStackSection";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <AIServices />
      <FeatureShowcase />
      <FeaturedProducts />
      <WhyChooseUs />
      <ImpactStats />
      <ProcessSection />
      <FeaturedWork />
      <TechStackSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
