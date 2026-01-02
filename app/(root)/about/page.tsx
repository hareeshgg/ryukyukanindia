import TeamSection from "@/components/team";

const page = () => {
  return (
    <>
      <section className="pb-16 pt-8 dark:bg-transparent">
        <div className="mx-auto max-w-5xl px-6">
          <img src="/about.jpeg" className="w-full h-auto rounded-lg" />
          <h2 className="text-balance text-center text-3xl font-bold md:text-4xl lg:text-5xl pt-8">
            About Us
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-12">
            <div className="space-y-8 p-4">
              <div className="space-y-2">
                <h3 className="text-balance text-2xl font-bold md:text-3xl lg:text-4xl">
                  Ryukyukan
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
                  Ryukyukan is led by Koei Nohara, Hanshi (9th Degree Black
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
              src="/about-hr.jpeg"
              className="size-full rounded-md object-cover object-top"
            />
          </div>
        </div>
      </section>

      <TeamSection />
    </>
  );
};

export default page;
