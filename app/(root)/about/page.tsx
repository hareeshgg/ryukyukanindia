import { EventImage } from "@/components/EventImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ryukyukan India",
  description:
    "Learn about the history, philosophy, lineage, and instructors of Ryukyukan India, dedicated to authentic Okinawan karate in India.",
};

const page = () => {
  return (
    <>
      <section className="pb-16 pt-8 dark:bg-transparent">
        <div className="mx-auto max-w-5xl px-6">
          <img
            src="/about/about.jpeg"
            className="w-full h-auto rounded-lg"
            alt="Ryukyukan India students"
          />
          <h2 className="text-balance text-center text-3xl font-bold md:text-4xl lg:text-5xl pt-8">
            About Us
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-12">
            <div className="space-y-8 p-4">
              <div className="space-y-2">
                <h3 className="text-balance text-2xl font-bold md:text-3xl lg:text-4xl">
                  Origins of Ryukyukan
                </h3>
                <p>
                  Ryukyukan is an internationally respected Okinawan karate
                  organization dedicated to preserving and advancing authentic
                  Okinawan Shorinryu karate while also excelling in modern
                  full-contact (knockdown) competition. Founded and based in
                  Okinawa, the birthplace of karate, Ryukyukan is known for its
                  deep historical roots, disciplined training methods, and
                  powerful international fighting teams.
                </p>
                <p>
                  Ryukyukan is led by Koei Nohara, Hanshi (10th Degree Black
                  Belt), a highly respected Okinawan Shorinryu karate master.
                  The organization maintains a direct lineage to original
                  Okinawan karate through two legendary figures: Chosin Chibana
                  & Chotoku Kyan This lineage ensures Ryukyukan’s techniques,
                  philosophy, and training methods remain faithful to classical
                  Okinawan karate.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-balance text-2xl font-bold md:text-3xl lg:text-4xl">
                  Ryukyukan India
                </h3>
                <p>
                  Ryukyukan India is the Indian branch of the international
                  Ryukyukan karate organization, dedicated to preserving and
                  teaching authentic Okinawan Shorinryu karate while actively
                  developing knockdown (full-contact) karate athletes.
                </p>
                <p>
                  Operating under the guidance and technical standards of
                  Ryukyukan headquarters in Okinawa, Ryukyukan India serves as a
                  direct link between traditional Okinawan karate culture and
                  modern Indian martial arts practice.
                </p>
              </div>
            </div>
            <img
              src="/about/about-hr.jpeg"
              className="size-full rounded-md object-cover object-top"
              alt="Ryukyukan Renshi & Hanshi Nohara"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
          <div className="text-center">
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              Our Philosophy
            </h2>
            <p className="text-muted-foreground mt-6 text-justify">
              We preserve the traditions of Okinawan Karate while promoting
              personal growth and discipline. Our art develops mind, body, and
              spirit through respect, perseverance, and humility. Karate is not
              about aggression, but about self-control, confidence, and harmony.
              We aim to build strong individuals and a global community of
              friendship and respect.
            </p>
          </div>
          <img
            className="rounded-(--radius)"
            src="/about/hero_photo.jpg"
            alt="Ryukyukan Seminar Training under Hanshi Nohara"
            height=""
            width=""
            loading="lazy"
          />
        </div>
      </section>

      <section className="pb-16 pt-8 dark:bg-transparent">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-balance text-center text-3xl font-bold md:text-4xl lg:text-5xl pt-8">
            Our Mission
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 mt-12">
            <div className="order-last md:order-first">
              <EventImage src="rs_6_ouuhrp" size="h-56" alt="Nvidia Logo" />
            </div>
            <div className="space-y-4">
              <h3 className="text-balance text-2xl font-bold md:text-3xl lg:text-4xl">
                Purpose
              </h3>
              <p>
                Ryukyukan India is committed to maintaining the integrity of
                traditional martial arts while adapting instruction responsibly
                for modern practitioners.
              </p>
              <p>
                Our focus remains on authentic technique, discipline, and
                long-term development rather than short-term competition
                results.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 mt-12">
            <div className="space-y-2">
              <h3 className="text-balance text-2xl font-bold md:text-3xl lg:text-4xl">
                Student Development
              </h3>
              <p>
                Ryukyukan India emphasizes disciplined training that builds
                strong fundamentals, character, and respect through consistent,
                traditional practice.
              </p>
              <p>
                Students are guided toward long-term personal growth, developing
                focus, confidence, and responsibility beyond physical technique
                or competitive achievement.
              </p>
            </div>
            <div>
              <EventImage src="sh_8_w2njaw" size="h-56" alt="Nvidia Logo" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 mt-12">
            <div className="order-last md:order-first">
              <EventImage src="kc23_09_g3uqvz" size="h-56" alt="Nvidia Logo" />
            </div>

            <div className="space-y-4">
              <h3 className="text-balance text-2xl font-bold md:text-3xl lg:text-4xl">
                Core Values
              </h3>
              <p>
                Ryukyukan India upholds respect, discipline, and integrity,
                ensuring traditional principles guide every aspect of
                instruction and conduct.
              </p>
              <p>
                Training fosters humility, perseverance, and responsibility,
                shaping practitioners who value continuous improvement over
                recognition or short-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
