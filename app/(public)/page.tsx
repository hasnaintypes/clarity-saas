import {
  HeroSection,
  ContentSection,
  Features,
  StatsSection,
  Pricing,
  Testimonials,
  FAQs,
  CallToAction,
} from "@/components/pages/(public)/home";

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <ContentSection />
      <Features />
      <StatsSection />
      <Pricing />
      <Testimonials />
      <FAQs />
      <CallToAction />
    </div>
  );
}
