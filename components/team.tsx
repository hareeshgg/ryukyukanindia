import Link from "next/link";

const members = [
  {
    name: "Koei Nohara",
    role: "Hanshi - President of Ryukyukan",
    avatar: "/team/hanshi.jpg",
    link: "#",
  },
  {
    name: "Padma Bhushan Mishra",
    role: "Renshi - Technical Director, India",
    avatar: "/team/renshi.PNG",
    link: "#",
  },
  {
    name: "Rochit Mishra",
    role: "Sensei - Nidan",
    avatar: "/team/rochit.PNG",
    link: "#",
  },
  {
    name: "Manav Gavde",
    role: "Sensei - Nidan",
    avatar: "/team/manav.PNG",
    link: "#",
  },
  {
    name: "Abhijit Nair",
    role: "Sensei - Nidan",
    avatar: "/team/abhijit.PNG",
    link: "#",
  },
  {
    name: "Hareesh Gurung",
    role: "Senpai - Shodan",
    avatar: "/team/hareesh.PNG",
    link: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="pb-16 pt-8 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Our Instructors
          </h2>

          <p className="text-muted-foreground mt-6">
            Highly trained and dedicated, our instructors uphold the true spirit
            of Okinawan karate through disciplined teaching and authentic
            practice.
          </p>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <img
                  className="h-96 w-full rounded-md object-cover object-top transition-all duration-500 group-hover:h-90 group-hover:rounded-xl"
                  src={member.avatar}
                  alt={`${member.name} - Ryukyukan instructor ${member.role}`}
                  width="826"
                  height="1239"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <p className="text-xl font-bold transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </p>
                    <span className="text-xs">_0{index + 1}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block lg:translate-y-6 text-sm lg:opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                    <Link
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <svg
                        className="size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
