"use client";

import { useState } from "react";
import { EventImage } from "@/components/EventImage";
import { ImageModal } from "@/components/ImageModal";

const events = [
  {
    name: "All India Shuri Championship 2025",
    description:
      "A glimpse of the Kobudo Championship organized by the Okinawan Kobudo Association.",
    date: "9th November, 2025",
    images: [
      "sh_8_w2njaw",
      "sh_4_yyj06l",
      "sh_3_wt54pu",

      "sh_5_co94u3",
      "sh_7_xaeku8",
      "sh_6_kcskke",
    ],
  },
  {
    name: "Yonabaru Dojo, Japan",
    description: "",
    date: "26th September, 2023",
    images: ["yonabaru_dojo_grihxg"],
  },
  {
    name: "Ryukyukan Headquarter, Japan",
    description:
      "A memorable training visit to the Ryukyukan Headquarters, where our Renshi trained under Hanshi alongside other fellow practitioners",
    date: "26th September, 2023",
    images: ["hd_1_v3p0gy", "hd_3_q18rnw"],
  },

  {
    name: "Ryukyukan Seminar & Training Camp",
    description:
      "A special training seminar conducted at our dojo during the visit of Hanshi from Japan",
    date: "26th September, 2023",
    images: [
      "rs_17_o7wlrv",
      "rs_2_bpyc7g",
      "rs_7_hyxovh",
      "rs_6_ouuhrp",
      "rs_3_p2gv8h",
      "rs_12_h6wwey",
      "rs_4_gceqoc",
      "rs_14_rk609q",
      "rs_19_owshei",
      "rs_15_lijh9q",
      "rs_11_qdpnab",
      "rs_1_dzxmgw",
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
