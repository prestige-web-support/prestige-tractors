import { Hero } from "@/components/home/Hero";
import { BrandStrip } from "@/components/home/BrandStrip";
import { TrustBar } from "@/components/home/TrustBar";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedEquipment } from "@/components/home/FeaturedEquipment";
import { ServiceBand } from "@/components/home/ServiceBand";
import { FinanceBand } from "@/components/home/FinanceBand";
import { Testimonials } from "@/components/home/Testimonials";
import { Promotions } from "@/components/home/Promotions";
import { LocationBlock } from "@/components/shared/LocationBlock";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <TrustBar />
      <CategoryGrid />
      <FeaturedEquipment />
      <ServiceBand />
      <FinanceBand />
      <Testimonials />
      <Promotions />
      <LocationBlock />
    </>
  );
}
