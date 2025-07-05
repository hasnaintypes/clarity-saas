import {
  Navbar,
  HeroSection,
  FeaturesSection,
  PricingSection,
  CTASection,
  Footer,
} from "@/components/landing-page";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container">
          <HeroSection />
          <FeaturesSection />
          <PricingSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}
