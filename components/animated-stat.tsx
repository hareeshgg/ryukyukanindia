"use client";

import NumberFlow from "@number-flow/react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export function AnimatedStat({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const [start, setStart] = useState(false);

  if (inView && !start) setStart(true);

  return (
    <div ref={ref} className="font-medium text-7xl lg:text-8xl">
      <NumberFlow value={start ? value : 9} suffix={suffix} />
    </div>
  );
}
