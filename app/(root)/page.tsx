"use client";
import ContentSection from "@/components/content1";
import CallToAction from "@/components/ctc";
import FAQs from "@/components/faq";
import HeroSection from "@/components/hero-section";
import Testimonial from "@/components/testimonial";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <Testimonial />
      <CallToAction />
      <FAQs />
    </>
  );
};

export default Home;
