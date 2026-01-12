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
    name: "2nd State Kobudo Championship 2024",
    description: "",
    date: "",
    images: [
      "kc24_05_lslers",
      "kc24_16_ayfcgf",
      "kc24_15_zfocv1",
      "kc24_14_dpfag0",
      "kc24_13_bvrb3b",
      "kc24_04_hauwul",
      "kc24_12_qfdqtq",
      "kc24_07_obiuyx",
      "kc24_06_s9ptqv",
      "kc24_11_uld1rr",
      "kc24_08_w0bp3c",
      "kc24_03_g4hke0",
      "kc24_10_ubanli",
      "kc24_09_rh7lmo",
      "kc24_02_kouo2n",
      "kc24_01_radbmf",
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
    name: "Okinawan Kobudo State Championship 2023",
    description: "",
    date: "",
    images: [
      "kc23_10_h0l62y",
      "kc23_07_nntzqd",
      "kc23_08_kp2wjb",
      "kc23_09_g3uqvz",
      "kc23_06_hx6lpk",
      "kc23_05_yaylfl",
      "kc23_02_cz4nqt",
      "kc23_04_qb0o5j",
      "kc23_03_re6rlj",
      "kc23_01_e4lniq",
    ],
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
