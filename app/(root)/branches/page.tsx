import Schedule from "@/components/schedule";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ryukyukan India Branches",
  description:
    "Find Ryukyukan India training branches across different regions of India offering traditional Okinawan karate instruction.",
};

const page = () => {
  return <Schedule />;
};

export default page;
