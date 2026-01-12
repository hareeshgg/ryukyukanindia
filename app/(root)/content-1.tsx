import Image from "next/image";

export default function ContentSection_1() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        {/* <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">The Lyra ecosystem brings together our models.</h2> */}
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24 place-items-center">
          <Image
            src="/logo.png"
            className="relative mb-6 sm:mb-0 self-center h-72 w-72"
            alt="ryukyukan logo"
            width={72}
            height={72}
          />

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              Ryukyukan India is dedicated to preserving and teaching
              traditional Okinawan karate and kobudo in India.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  Rooted in authentic lineage and disciplined practice,
                  Ryukyukan India offers structured martial arts training
                  focused on technique, respect, and lifelong mastery for
                  students across all age groups.
                </p>

                <div className="mt-6">
                  <cite className="block font-medium">RYUKYUKAN</cite>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
