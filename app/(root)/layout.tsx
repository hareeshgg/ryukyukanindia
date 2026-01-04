import UpButton from "@/components/back-to-top";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import WhatsAppBtn from "@/components/whatsapp-button";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <UpButton />
      {/* <WhatsAppBtn /> */}
      <HeroHeader />
      {children}
      <FooterSection />
    </>
  );
}
