"use client";

import CallToAction from "@/components/ctc";
import FAQs from "@/components/faq";
import HeroSection from "@/components/hero-section";
import Testimonial from "@/components/testimonial";
import ContentSection_1 from "./content-1";
import ContentSection_2 from "@/components/content-2";
import Programs from "@/components/programs";
import TeamSection from "@/components/team";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ContentSection_1 />
      <ContentSection_2 />
      <Programs />
      <TeamSection />
      <Testimonial />
      <CallToAction />
      <FAQs />
      {/* <ContactSection /> */}
    </>
  );
};

export default Home;
