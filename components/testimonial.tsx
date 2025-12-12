import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rohit Sharma",
    role: "Parent of Student",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Ryukyukan has completely transformed my son's confidence and discipline. The instructors are patient, skilled, and deeply committed to traditional Okinawan values.",
  },
  {
    name: "Amit Verma",
    role: "IT Professional",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "Training here has improved my focus both inside and outside the dojo. The structured approach and attention to technique are unmatched.",
  },
  {
    name: "Sanjana Deshpande",
    role: "University Student",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Kumite sessions helped me become stronger mentally and physically. The guidance I receive here is truly world-class.",
  },
  {
    name: "Kenshin Nakamura",
    role: "Martial Arts Enthusiast",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    quote:
      "The dojo maintains the true spirit of Okinawan karate. Every class feels purposeful and deeply connected to tradition.",
  },
  {
    name: "Prakash Singh",
    role: "Fitness Trainer",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
    quote:
      "Ryukyukan's training methodology builds real strength and precision. The instructors ensure every student trains safely and effectively.",
  },
  {
    name: "Meera Nair",
    role: "School Teacher",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "My daughter has become more disciplined and confident since joining. The environment is encouraging, respectful, and very well-structured.",
  },
  {
    name: "Daniel Lee",
    role: "College Athlete",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    quote:
      "Kobudo classes opened a new world of martial arts for me. The weapons training is handled with great expertise and care.",
  },
  {
    name: "Harshita Bhattacharjee",
    role: "Corporate Employee",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    quote:
      "The instructors are extremely knowledgeable and dedicated. Every session pushes you to be a better version of yourself.",
  },
  {
    name: "Akshay Patil",
    role: "Engineer",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    quote:
      "I joined to stay fit, but I stayed because of the discipline and clarity karate brought into my life. Highly recommended.",
  },
  {
    name: "Sophia Fernandez",
    role: "High School Student",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
    quote:
      "Kumite training helped me overcome fear and build real confidence. The dojo atmosphere is positive and motivating.",
  },
  {
    name: "Vikram Chauhan",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    quote:
      "Ryukyukan stands out for its authentic training and disciplined approach. The teaching quality is exceptional.",
  },
  {
    name: "Elena Park",
    role: "Artist & Martial Arts Student",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote:
      "Kobudo training enhanced my understanding of martial arts as a whole. The precision and cultural depth taught here are incredible.",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export default function Testimonial() {
  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Voices of Our Dojo</h2>
            <p className="mt-6">
              Real stories from students and families who have grown through our
              authentic Okinawan martial arts training.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-3">
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>

                        <blockquote className="mt-3">
                          <p className="text-gray-200 dark:text-gray-300">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
