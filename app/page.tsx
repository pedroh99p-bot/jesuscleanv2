"use client";

import { BeforeAfterInfiniteCarousel } from "@/components/BeforeAfterInfiniteCarousel";
import { EditorialRoller } from "@/components/EditorialRoller";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroVideoSection } from "@/components/IntroVideoSection";
import { InfantSection } from "@/components/InfantSection";
import { LocationSection } from "@/components/LocationSection";
import { Preloader } from "@/components/Preloader";
import { ProblemSection } from "@/components/ProblemSection";
import { PracticalExperienceSection } from "@/components/PracticalExperienceSection";
import { Quiz } from "@/components/Quiz";
import { ServicesSection } from "@/components/ServicesSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { SpecialistSection } from "@/components/SpecialistSection";
import { TopbarRoller } from "@/components/TopbarRoller";
import { WaveDivider } from "@/components/WaveDivider";
import { useTranslations } from "@/i18n/useTranslations";

export default function Home() {
  const { t } = useTranslations();

  return (
    <>
      <Preloader />
      <TopbarRoller />
      <Header />
      <main>
        <Hero />
        <WaveDivider variant="navyToCyan" />
        <IntroVideoSection />
        <ProblemSection />
        <WaveDivider variant="navyToCyan" />
        <Quiz />
        <EditorialRoller
          items={t.rollers.one.items}
          label={t.rollers.one.label}
        />
        <SpecialistSection />
        <BeforeAfterInfiniteCarousel />
        <WaveDivider variant="navyToCyan" />
        <SocialProofSection />
        <ServicesSection />
        <InfantSection />
        <EditorialRoller
          items={t.rollers.two.items}
          variant="navy"
          reverse
          label={t.rollers.two.label}
        />
        <PracticalExperienceSection />
        <FAQSection />
        <WaveDivider variant="whiteToBlue" />
        <LocationSection />
        <EditorialRoller
          id="roller-final"
          items={t.rollers.three.items}
          variant="sand"
          label={t.rollers.three.label}
        />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
