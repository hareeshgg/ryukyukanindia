"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { CldImage } from "next-cloudinary";

export function EventImage({
  src,
  alt,
  size,
  onClick,
}: {
  src: string;
  alt: string;
  size: string;
  onClick?: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="cursor-pointer overflow-hidden rounded-xl"
      onClick={onClick}
    >
      <CldImage
        src={src}
        alt={alt}
        width={48}
        height={48}
        quality="auto"
        format="auto"
        sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${size} w-full object-cover transition-all duration-500 ${
          loaded ? "blur-0 scale-100" : "blur-md scale-105"
        }`}
      />
    </motion.div>
  );
}
