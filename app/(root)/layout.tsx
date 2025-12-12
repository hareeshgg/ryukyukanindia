import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeroHeader />
      {children}
      <FooterSection />
    </>
  );
}
