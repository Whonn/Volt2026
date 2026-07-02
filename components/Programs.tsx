"use client";

import { motion } from "framer-motion";

const PROGRAMS = [
  {
    code: "STR",
    name: "Strength Circuit",
    detail:
      "Progressive barbell programming built around the big compound lifts. Tracked loads, deload weeks built in.",
    duration: "60 min",
  },
  {
    code: "MTB",
    name: "Metabolic Conditioning",
    detail:
      "High-output interval work on rowers, bikes, and sleds. Built to spike heart rate and hold it there.",
    duration: "45 min",
  },
  {
    code: "PWR",
    name: "Powerlifting Lab",
    detail:
      "Squat, bench, deadlift under a coach who programs your meet cycle and checks your form every rep.",
    duration: "75 min",
  },
  {
    code: "BOX",
    name: "Boxing Conditioning",
    detail:
      "Pad rounds, bag work, and footwork drills. No sparring required — just output.",
    duration: "50 min",
  },
  {
    code: "MOB",
    name: "Mobility & Recovery",
    detail:
      "Guided stretching, banded work, and breathwork to keep the rest of the week's training on the floor, not on the bench.",
    duration: "40 min",
  },
  {
    code: "OPN",
    name: "Open Floor",
    detail:
      "Full equipment access, no class structure. For members who've got their own program dialed in.",
    duration: "Unlimited",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-28 md:py-36 bg-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="readout mb-4">The Programs</p>
            <h2 className="display-heading text-5xl md:text-7xl text-bone">
              Six Ways To <span className="text-volt">Push Output.</span>
            </h2>
          </div>
          <p className="max-w-sm text-mute leading-relaxed">
            Every class is capped and coached. Pick one lane or rotate — your
            membership covers all six.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {PROGRAMS.map((p, i) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="glow-card bg-card border border-transparent p-8 flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <span className="font-mono text-xs tracking-widest2 text-volt">
                  {p.code}
                </span>
                <h3 className="font-display text-2xl md:text-3xl mt-4 mb-3 text-bone">
                  {p.name}
                </h3>
                <p className="text-mute text-sm leading-relaxed">{p.detail}</p>
              </div>
              <p className="font-mono text-xs text-mute mt-8 pt-4 border-t border-line">
                {p.duration}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
