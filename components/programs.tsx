import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";

export default function Programs() {
  const cards = [
    {
      title: "Karate",
      description:
        "A striking martial art developing discipline, power, precision, and self-defense skills.",
      img: "/programs/kata.jpg",
    },
    {
      title: "Kumite",
      description:
        "Sparring practice where karate practitioners apply techniques dynamically against resisting opponents.",
      img: "/programs/kata.jpg",
    },
    {
      title: " Kobudo",
      description:
        "Okinawan weapon art preserving traditional techniques using bo, sai, and tonfa.",
      img: "/programs/kata.jpg",
    },
  ];
  return (
    <section>
      <div className="py-32" id="programs">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Our Core Arts
            </h2>
            <p className="text-muted-foreground mt-6">
              A structured path through Okinawan martial arts, focusing on
              technical mastery and personal growth.
            </p>
          </div>

          <div className="mt-12 grid gap-3 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <IntegrationCard
                key={card.title + index}
                title={card.title}
                description={card.description}
              >
                {/* default child: small visual/icon placeholder — replace with an actual icon if you want */}

                <img
                  className="flex items-center justify-center rounded-md object-cover"
                  src={card.img}
                  alt={card.title}
                />
              </IntegrationCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  title,
  description,
  children,
  link = "https://github.com/meschacirung/cnblocks",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  link?: string;
}) => {
  return (
    <Card className="p-6">
      <div className="relative">
        <div className="*:h-96 *:w-full">{children}</div>

        <div className="space-y-2 py-6">
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {description}
          </p>
        </div>

        <div className="flex gap-3 border-t border-dashed pt-6">
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="gap-1 pr-2 shadow-none"
          >
            <Link href={link}>
              Learn More
              <ChevronRight className="ml-0 size-3.5! opacity-50" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};
