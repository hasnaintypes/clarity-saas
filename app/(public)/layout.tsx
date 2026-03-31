import { HeroHeader } from "@/components/layout/header";
import ConditionalFooter from "@/components/layout/conditional-footer";
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
      <ConditionalFooter />
      <ScrollToTop />
    </>
  );
}
