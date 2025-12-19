"use client";
import ContentSection from "@/components/content1";
import CallToAction from "@/components/ctc";
import HeroSection from "@/components/hero-section";
import Programs from "@/components/programs";
import Schedule from "@/components/schedule";
import TeamSection from "@/components/team";
import Testimonial from "@/components/testimonial";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <Programs />
      <Schedule />
      <TeamSection />
      <Testimonial />
      <CallToAction />
    </>
  );
};

export default Home;
