const ContactSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Ryukyukan in <span className="text-secondary">numbers</span>
          </h2>
          <p></p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">+1200</div>
            <p>Students in India</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">+2200</div>
            <p>Active Practitioners</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">+50</div>
            <p>Experienced Faculties</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
