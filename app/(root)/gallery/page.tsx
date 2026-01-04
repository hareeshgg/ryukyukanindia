"use client";

import { useState } from "react";
import { EventImage } from "@/components/EventImage";
import { ImageModal } from "@/components/ImageModal";

const events = [
  {
    name: "All India Kobudo Championship",
    description:
      "4th All India Kobudo Championship organized by the Okinawan Kobudo Association.",
    date: "9th November, 2025",
    images: [
      "https://images.unsplash.com/photo-1530417838433-4b24dd3f72d4?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1529566193698-bc394165d541?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGthcmF0ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1601878458406-a80adc9b3e61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGthcmF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    name: "All India Open Shuri Championship",
    description:
      "An intensive national-level training camp focusing on kata and kumite.",
    date: "26th January, 2025",
    images: [
      "https://plus.unsplash.com/premium_photo-1663126473034-a3367fd5598e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555597408-26bc8e548a46?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1514050566906-8d077bae7046?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    name: "2nd State Kobudo Championship",
    description:
      "An intensive national-level training camp focusing on kata and kumite.",
    date: "25th August, 2024",
    images: [
      "https://plus.unsplash.com/premium_photo-1663126473034-a3367fd5598e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555597408-26bc8e548a46?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1514050566906-8d077bae7046?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
];

export default function Page() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6 space-y-24">
        {events.map((event, index) => (
          <div key={index} className="space-y-10">
            <div className="border-b pb-6">
              <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                {event.name}
              </h2>
              <p className="mt-4 text-muted-foreground max-w-3xl">
                {event.description}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {event.images.map((src, imgIndex) => (
                <EventImage
                  key={imgIndex}
                  src={src}
                  alt={`${event.name} image ${imgIndex + 1}`}
                  onClick={() => setActiveImage(src)}
                />
              ))}
            </div>
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
