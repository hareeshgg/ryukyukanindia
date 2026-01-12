"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const isHome = pathname === "/";
    const hasVisited = localStorage.getItem("hasVisitedHome");

    // CASE 1: First visit to homepage → minimum 3 seconds
    if (isHome && !hasVisited) {
      localStorage.setItem("hasVisitedHome", "true");

      const timer = setTimeout(() => {
        setHidden(true);
      }, 3000);

      return () => clearTimeout(timer);
    }

    // CASE 2: Other pages OR returning visitor → hide when ready
    if (document.readyState === "complete") {
      setHidden(true);
      return;
    }

    const handleLoad = () => {
      setHidden(true);
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, [pathname]);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-background">
      <img
        src="/logo.png"
        alt="Ryukyukan Logo"
        className="w-28 animate-pulse transition-opacity duration-1000"
      />
    </div>
  );
}
