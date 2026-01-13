import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, ChevronRight } from "lucide-react";

const page = () => {
  const programs = [
    {
      title: "Karate",
      description:
        "Karate is a traditional martial art that focuses on developing strong character, discipline, and effective self-defense through structured training. It combines powerful strikes, blocks, stances, and controlled movements to improve both physical ability and mental focus. Beyond combat techniques, karate emphasizes respect, patience, and continuous self-improvement, making it suitable for all ages and skill levels.",
      benefits: [
        "Improves overall strength, flexibility, and coordination",
        "Builds discipline, focus, and self-confidence",
        "Enhances self-defense and situational awareness",
        " Promotes mental calmness and stress control",
        "Encourages respect, humility, and personal growth",
      ],
      img: "/programs/kata.jpg",
    },
    {
      title: "Kumite",
      description:
        "Kumite is the sparring aspect of karate where practitioners apply techniques in a controlled, dynamic fighting environment. It trains students to react quickly, maintain proper distance, and adapt strategies against an opponent while following strict rules and safety principles. Kumite sharpens real-time decision-making and helps bridge the gap between practice and practical application.",

      benefits: [
        "Develops speed, reflexes, and timing",
        "Improves combat awareness and tactical thinking",
        "Builds confidence under pressure",
        "Enhances cardiovascular endurance",
        "Teaches control, sportsmanship, and respect",
      ],
      img: "/programs/kumite.png",
    },
    {
      title: " Kobudo",
      description:
        "Kobudo is a traditional martial art that focuses on the use of classical Okinawan weapons such as the bo, sai, tonfa, and nunchaku. It emphasizes precision, balance, and coordination while preserving ancient techniques and cultural heritage. Kobudo training enhances body mechanics and deepens a practitioner’s understanding of distance, rhythm, and control.",
      benefits: [
        "Improves hand-eye coordination and balance",
        "Strengthens grip, posture, and body control",
        "Enhances focus and spatial awareness",
        "Preserves traditional martial arts heritage",
        "Builds discipline and advanced technical skill",
      ],
      img: "/programs/kobudo.png",
    },
  ];
  return (
    <section>
      <div className="pb-16 pt-8" id="programs">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
              Training Program
            </h2>
          </div>
          <div className="space-y-6 mt-8">
            {programs.map((program, index) => (
              <div
                key={index}
                id={program.title.toLowerCase().replace(/\s+/g, "-")}
                className="grid gap-8 rounded-xl border border-white/10 p-6 md:grid-cols-2 md:items-center"
              >
                {/* Text Content */}
                <div className="space-y-4">
                  <h3 className="text-balance text-2xl font-bold md:text-3xl lg:text-4xl">
                    {program.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>

                  <ul className="mt-4 space-y-2 list-disc list-inside">
                    {program.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm md:text-base">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={program.img}
                    alt={program.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

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
          <h3 className="inter text-base font-bold">{title}</h3>
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

export default page;
