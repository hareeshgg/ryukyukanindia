"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setHidden(true);
      return;
    }

    const handleLoad = () => {
      setHidden(true);
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-background">
      <img
        src="/ryukyukan_logo.png"
        alt="Ryukyukan Logo"
        className="w-28 animate-pulse transition-opacity duration-1000"
      />
    </div>
  );
}
