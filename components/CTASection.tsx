"use client";

import { motion } from "framer-motion";
import PulseLine from "./PulseLine";

export default function CTASection() {
  return (
    <section className="relative py-28 md:py-40 bg-charcoal overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[180px] opacity-20"
        style={{ background: "#D4FF3D" }}
      />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="display-heading text-6xl md:text-8xl text-bone"
        >
          Your First Week
          <br />
          Is <span className="text-volt">On Us.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-mute mt-6 mb-10 max-w-md mx-auto"
        >
          No contract, no card required. Walk in, meet a coach, take a class.
          Decide after.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="#"
          className="inline-flex items-center bg-volt text-ink font-display text-lg px-10 py-5 tracking-tight hover:scale-[1.03] active:scale-[0.98] transition-transform"
        >
          Claim Your Free Week
        </motion.a>
      </div>

      <div className="relative mt-24">
        <PulseLine className="w-full h-16" delay={0.2} />
      </div>
    </section>
  );
}
