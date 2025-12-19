"use client";

import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { User2 } from "lucide-react";

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
      "The instructors are patient, skilled, and deeply committed to traditional Okinawan values.",
  },
  {
    name: "Amit Verma",
    role: "IT Professional",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "Training here has improved my focus both inside and outside the dojo.",
  },
  {
    name: "Sanjana Deshpande",
    role: "University Student",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Kumite sessions helped me become stronger mentally and physically.",
  },
  {
    name: "Kenshin Nakamura",
    role: "Martial Arts Enthusiast",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    quote: "Every class feels purposeful and deeply connected to tradition.",
  },
  {
    name: "Meera Nair",
    role: "School Teacher",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "My daughter has become more disciplined and confident since joining.",
  },
  {
    name: "Rohit Sharma",
    role: "Parent of Student",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "My son’s confidence and discipline have improved tremendously.",
  },
  {
    name: "Amit Verma",
    role: "IT Professional",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote: "Training here sharpened my focus and self-control.",
  },
  {
    name: "Sanjana Deshpande",
    role: "University Student",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Kumite sessions made me mentally and physically stronger.",
  },
  {
    name: "Kenshin Nakamura",
    role: "Martial Arts Enthusiast",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    quote: "Authentic Okinawan karate taught with deep respect.",
  },
  {
    name: "Meera Nair",
    role: "School Teacher",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "My daughter is more confident and disciplined now.",
  },
  {
    name: "Akshay Patil",
    role: "Engineer",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    quote: "Karate here brought clarity and consistency to my life.",
  },
  {
    name: "Sophia Fernandes",
    role: "High School Student",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
    quote: "The training helped me overcome fear and hesitation.",
  },
  {
    name: "Vikram Chauhan",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    quote: "Disciplined training with exceptional instructors.",
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Ryukyukan <span className="text-secondary">Experiences</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Real stories from students and families who have grown through our
            authentic Okinawan martial arts training.
          </p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Swiper
            className="testimonial-swiper"
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={16}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <Card className="h-55">
                  <CardContent className="grid grid-cols-[auto_1fr] gap-4 p-6">
                    <Avatar className="size-10">
                      <AvatarImage alt={t.name} />
                      <AvatarFallback>
                        {t.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="font-bold">{t.name}</p>
                      <span className="text-muted-foreground text-sm">
                        {t.role}
                      </span>

                      <blockquote className="mt-3">
                        <p className="text-sm text-muted-foreground">
                          “{t.quote}”
                        </p>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
