"use client";

import { motion } from "framer-motion";
import PulseLine from "./PulseLine";

const headlineWords = ["TRAIN", "AT", "FULL", "CHARGE."];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.3 },
  },
};

const word = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-25"
        style={{ background: "#D4FF3D" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="readout mb-8"
        >
          Two Locations — Open 5AM–11PM
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="display-heading text-[15vw] leading-[0.85] md:text-[8.5vw] text-bone"
        >
          {headlineWords.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.18em]">
              <motion.span
                variants={word}
                className={`inline-block ${w === "CHARGE." ? "text-volt" : ""}`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          <p className="max-w-md text-mute text-lg leading-relaxed">
            Coached strength &amp; conditioning for people done with generic
            programming. Real coaches, tracked output, a floor that pushes
            back.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#membership"
              className="inline-flex items-center bg-volt text-ink font-display text-base px-8 py-4 tracking-tight hover:scale-[1.03] active:scale-[0.98] transition-transform"
            >
              Start Free Week
            </a>
            <a
              href="#programs"
              className="inline-flex items-center border border-line text-bone font-display text-base px-8 py-4 tracking-tight hover:border-volt hover:text-volt transition-colors"
            >
              See Programs
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-20 md:mt-28"
      >
        <PulseLine className="w-full h-16 md:h-20" delay={1.1} />
      </motion.div>
    </section>
  );
}
