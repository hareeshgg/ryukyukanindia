import UpButton from "@/components/back-to-top";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <UpButton />
      <HeroHeader />
      {children}
      <FooterSection />
    </>
  );
}
