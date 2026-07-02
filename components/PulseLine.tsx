"use client";

import { motion } from "framer-motion";

interface PulseLineProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
  delay?: number;
}

// Signature element: a voltage/EKG-style waveform that draws itself on
// entry and then carries a traveling charge indefinitely. Used in the
// hero, as section dividers, and behind key stats — it's the visual
// thread that ties VOLT's "energy output" concept together.
export default function PulseLine({
  className = "",
  color = "#D4FF3D",
  strokeWidth = 3,
  delay = 0,
}: PulseLineProps) {
  const path =
    "M0,40 L120,40 L145,10 L170,70 L195,25 L215,40 L340,40 L365,15 L390,65 L415,40 L1200,40";

  return (
    <svg
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay, ease: "easeInOut" }}
      />
    </svg>
  );
}
