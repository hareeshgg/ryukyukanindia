import { ChevronRight } from "lucide-react";

import { Button } from "./ui/button";
import Link from "next/link";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-10">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            The Birthplace of Karate
          </h2>
          <p>Shuri Castle, Okinawa</p>
        </div>
        <img
          className="rounded-(--radius)"
          src="/home/shuri.jpg"
          alt="team image"
          height=""
          width=""
          loading="lazy"
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium">
            Explore the history of Okinawa’s homegrown martial art
          </h2>
          <div className="space-y-6">
            <p>
              In Japanese, karate is known as heiwa no bu, the “martial art of
              peace,” and around the world it is practiced by more than 130
              million enthusiasts.
            </p>

            <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link
                href="https://visitokinawajapan.com/discover/traditional-culture/birthplace-of-karate/"
                target="blank"
              >
                <span>Learn More</span>
                <ChevronRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
