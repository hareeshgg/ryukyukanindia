"use client";
import ContentSection from "@/components/content1";
import CallToAction from "@/components/ctc";
import HeroSection from "@/components/hero-section";
import Programs from "@/components/programs";
import TeamSection from "@/components/team";
import Testimonial from "@/components/testimonial";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <Programs />
      <TeamSection />
      <Testimonial />
      <CallToAction />
    </>
  );
};

export default Home;
