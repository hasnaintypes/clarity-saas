import { HeroHeader } from "@/components/layout/header";
import FooterSection from "@/components/layout/footer";
import ScrollToTop from "@/components/scroll-to-top";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeroHeader />
      <main>{children}</main>
      <FooterSection />
      <ScrollToTop />
    </>
  );
}
