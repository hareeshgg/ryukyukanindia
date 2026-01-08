"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

// ✅ create a motion-enabled component
const MotionCldImage = motion(CldImage);

export function ImageModal({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <MotionCldImage
          src={src}
          alt={alt}
          width={1200}
          height={800}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>
  );
}
