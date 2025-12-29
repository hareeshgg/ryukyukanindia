"use client";

import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    isVisible && (
      <button className="rounded-full fixed bottom-4 right-4 bg-card p-2">
        <Link href="#top">
          <ChevronUp size={28} />
        </Link>
      </button>
    )
  );
};

export default UpButton;
