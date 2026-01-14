import { Calendar, Clock } from "lucide-react";

export default function Schedule() {
  const dojos = [
    {
      name: "Holy Cross Convent School",
      location: "Mira Road, Thane",
      description: "Our first Ryukyukan dojo in India",
      days: ["Tuesday", "Saturday", "Sunday"],
      time: ["6:30 PM - 7:30 PM", "5:00 PM - 6:30 PM", "5:00 PM - 6:30 PM"],
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.9345360814855!2d72.86307357519253!3d19.285212845371316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b04678f27b17%3A0xbfaeb0666af9e77d!2sHoly%20Cross%20Convent%20School!5e0!3m2!1sen!2sin!4v1766066301286!5m2!1sen!2sin",
    },
    {
      name: "PG Vora High School",
      location: "Mira Road, Thane",
      description: "Beginner friendly traditional dojo",
      days: ["Tuesday", "Saturday", "Sunday"],
      time: ["5:00 PM - 6:00 PM", "7:00 PM - 8:00 PM", "9:00 AM - 10:00 AM"],
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470.7666237974173!2d72.8571251349182!3d19.276582000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b05188579fbb%3A0x9bfc5294c525ffef!2sP%20G%20Vora%20High%20School!5e0!3m2!1sen!2sin!4v1766065862558!5m2!1sen!2sin",
    },
    {
      name: "RBK International School",
      location: "Bhayandar, Thane",
      description: "Advanced karate and kumite training",
      days: ["Saturday", "Sunday"],
      time: ["5:00 PM - 6:30 PM", "5:00 PM - 6:30 PM"],
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.5549082834896!2d72.86884527519281!3d19.301712644847928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b03a0c2ba003%3A0xde6a877deac1c04b!2sKanakia%20International%20School%20(IGCSE)%2C%20Bhayandar!5e0!3m2!1sen!2sin!4v1766066385125!5m2!1sen!2sin",
    },

    {
      name: "RBK International School",
      location: "Chembur, Mumbai",
      description: "Advanced karate and kumite training",
      days: ["Friday", "Saturday", "Sunday"],
      time: ["4:00pm - 5:50pm", "9:00 AM - 10:30 AM", "9:00 AM - 10:30 AM"],
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0357313539453!2d72.91102647518791!3d19.062166552406715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c617a31ab63b%3A0x3d15d6dd7540ac7c!2sKanakia%20International%20School%20(IB%20and%20CBSE)%20-%20Chembur%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1766066467192!5m2!1sen!2sin",
    },
  ];

  return (
    <section className="pb-16 pt-8" id="branches">
      <div className="mx-auto max-w-5xl space-y-16 px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Our Branches
          </h2>

          <p className="text-muted-foreground mt-6">
            Every branch carries forward the legacy of Ryukyukan through
            dedicated instruction and disciplined practice.
          </p>
        </div>
        {dojos.map((dojo, index) => (
          <div
            key={index}
            className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24 items-center"
          >
            {/* Text */}
            <div className="space-y-4">
              <div className="space-y-0">
                <h3 className="inter text-3xl font-bold">
                  {dojo.name}
                  <br />
                </h3>
                <p className="font-semibold">{dojo.location}</p>
              </div>

              <p className="text-muted-foreground">{dojo.description}</p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4" />
                    <p className="text-md font-medium">Days</p>
                  </div>
                  <ul className="text-sm text-muted-foreground">
                    {dojo.days.map((day) => (
                      <li key={day}>{day}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="size-4" />
                    <p className="text-md font-medium">Time</p>
                  </div>
                  <ul className="text-sm text-muted-foreground">
                    {dojo.time.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-67/34 rounded-2xl overflow-hidden border">
                <iframe
                  src={dojo.map}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
