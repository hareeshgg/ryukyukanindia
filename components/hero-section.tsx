import Link from "next/link";

import { Button } from "@/components/ui/button";

import logo from "../public/herosection.png";

export default function HeroSection() {
  return (
    <main className="overflow-hidden" id="home">
      <section>
        <div className="pb-20 pt-12 md:pb-32 lg:pb-50 lg:pt-44">
          <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left mb-10">
              <h1 className="mt-16 max-w-2xl text-balance text-6xl font-medium md:text-6xl xl:text-8xl xl:mt-4">
                RYUKYUKAN INDIA
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-lg">
                A legacy of authentic karate, dedicated to refinement, respect
                and mastery.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="px-5 text-base"
                >
                  <Link href="#enroll">
                    <span className="text-nowrap">Enroll Now</span>
                  </Link>
                </Button>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="ghost"
                  className="px-5 text-base sm:border-2"
                >
                  <Link href="#link">
                    <span className="text-nowrap">See Our Classes</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-around h-56 w-full lg:items-start lg:justify-start lg:absolute lg:h-max lg:w-2/3 lg:top-64 lg:-right-70 lg:gap-18">
              <div>
                <h1 className="text-7xl font-medium lg:text-8xl">10k+</h1>
                <p className="font-medium pl-2">Students</p>
              </div>
              <div>
                <h1 className="text-7xl font-medium lg:text-8xl">30+</h1>
                <p className="font-medium">Years experience</p>
              </div>
            </div>
          </div>
          <img
            className="-z-50 ml-auto h-200 object-cover absolute inset-0 size-full opacity-25 blur-[2px]"
            src={logo.src}
            alt="Abstract Object"
            height="4000"
            width="3000"
          />
        </div>
      </section>
    </main>
  );
}
