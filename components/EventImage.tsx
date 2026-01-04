"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function EventImage({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick: () => void;
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
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-96 w-full object-cover transition-all duration-500 ${
          loaded ? "blur-0 scale-100" : "blur-md scale-105"
        }`}
      />
    </motion.div>
  );
}
