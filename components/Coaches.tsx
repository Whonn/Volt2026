"use client";

import { motion } from "framer-motion";
import PulseLine from "./PulseLine";

const COACHES = [
  {
    initials: "DP",
    name: "Diego Perez",
    role: "Head of Strength",
    credentials: "USAPL Coach · 11yr coaching",
  },
  {
    initials: "SK",
    name: "Sarah Kim",
    role: "Conditioning Lead",
    credentials: "CSCS · Former national rower",
  },
  {
    initials: "MB",
    name: "Marcus Bell",
    role: "Boxing Coach",
    credentials: "Ex-amateur boxer · 8yr coaching",
  },
  {
    initials: "LR",
    name: "Lena Reyes",
    role: "Mobility & Recovery",
    credentials: "DPT · Movement specialist",
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="py-28 md:py-36 bg-ink relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16">
          <p className="readout mb-4">The Coaches</p>
          <h2 className="display-heading text-5xl md:text-7xl text-bone">
            Every Rep, <span className="text-volt">Watched.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COACHES.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <div className="aspect-[4/5] bg-card border border-line flex items-center justify-center relative overflow-hidden">
                <span className="font-display text-6xl text-line group-hover:text-volt/20 transition-colors duration-500">
                  {c.initials}
                </span>
                <div className="absolute bottom-0 inset-x-0 h-1 bg-volt scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </div>
              <h3 className="font-display text-xl mt-4 text-bone">{c.name}</h3>
              <p className="readout !text-volt mt-1">{c.role}</p>
              <p className="text-mute text-sm mt-2">{c.credentials}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <PulseLine className="w-full h-14" color="#2A2A2A" strokeWidth={2} />
      </div>
    </section>
  );
}
