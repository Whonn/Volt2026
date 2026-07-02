"use client";

import { motion } from "framer-motion";

const RESULTS = [
  {
    initials: "JM",
    name: "Jana M.",
    stat: "+45kg",
    metric: "Deadlift, 6 months",
    quote:
      "I'd plateaued for two years training alone. The Powerlifting Lab coaches rebuilt my technique from the bar up.",
  },
  {
    initials: "RC",
    name: "Rico C.",
    stat: "-14kg",
    metric: "Body fat, 8 months",
    quote:
      "Metabolic Conditioning three times a week did more for my conditioning than any app-based program ever did.",
  },
  {
    initials: "AT",
    name: "Anna T.",
    stat: "3x",
    metric: "Weekly sessions kept",
    quote:
      "Having a capped class size means the coach actually knows my name and my numbers. That accountability changed everything.",
  },
];

const TICKER_ITEMS = [
  "1,420+ MEMBERS",
  "38 COACHED SESSIONS / WEEK",
  "12 YEARS ON THE FLOOR",
  "6 PROGRAM LANES",
  "24HR ACCESS TIERS",
];

export default function Transformations() {
  return (
    <section id="results" className="py-28 md:py-36 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16">
        <p className="readout mb-4">Member Results</p>
        <h2 className="display-heading text-5xl md:text-7xl text-bone">
          Numbers, Not <span className="text-volt">Vibes.</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-6 mb-20">
        {RESULTS.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="glow-card bg-ink border border-line p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-full bg-line flex items-center justify-center font-mono text-sm text-volt">
                {r.initials}
              </div>
              <div className="text-right">
                <div className="font-display text-3xl text-volt leading-none">
                  {r.stat}
                </div>
                <div className="font-mono text-[10px] text-mute mt-1">
                  {r.metric}
                </div>
              </div>
            </div>
            <p className="text-bone leading-relaxed mb-6 flex-1">
              &ldquo;{r.quote}&rdquo;
            </p>
            <p className="font-mono text-xs text-mute">{r.name}</p>
          </motion.div>
        ))}
      </div>

      <div className="border-y border-line py-5">
        <div className="marquee-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="font-mono text-sm text-mute px-6 whitespace-nowrap">
                {item}
              </span>
              <span className="text-volt">&bull;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
