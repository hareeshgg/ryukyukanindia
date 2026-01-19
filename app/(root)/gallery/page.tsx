"use client";

import { useEffect, useState } from "react";
import { EventImage } from "@/components/EventImage";
import { ImageModal } from "@/components/ImageModal";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { supabase } from "@/lib/lib";

type GalleryProps = {
  id: number;
  title: string;
  description: string;
  images: string[];
  folder: string;
};

export default function Page() {
  const [events, setEvents] = useState<GalleryProps[]>([]);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("gallery")
        .select("id, title, description, date, folder, images")
        .order("date", { ascending: false });

      if (error) {
        console.error("Supabase Error:", error.message);
      } else if (data) {
        console.log("Raw Data from Supabase:", data); // Check this log!
        setEvents(data);
      }

      setLoading(false);
    };

    fetchGallery();
  }, []);

  if (loading) return <div className="py-20 text-center">Loading gallery…</div>;
  if (!events.length)
    return <div className="py-20 text-center">No events yet</div>;
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6 space-y-24">
        {events.map((event, index) => (
          <div key={index} className="space-y-10">
            <div className="border-b pb-6">
              <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                {event.title}
              </h2>
              <p className="mt-4 text-muted-foreground max-w-3xl">
                {event.description}
              </p>
            </div>

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
                {event.images.map((src, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <EventImage
                      key={imgIndex}
                      src={src}
                      alt={`${event.title} image ${imgIndex + 1}`}
                      onClick={() => setActiveImage(src)}
                      size="h-48"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        ))}
      </div>

      {activeImage && (
        <ImageModal
          src={activeImage}
          alt="Event image"
          onClose={() => setActiveImage(null)}
        />
      )}
    </section>
  );
}
