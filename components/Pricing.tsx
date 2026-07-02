"use client";

import { motion } from "framer-motion";

const PLANS = [
  {
    name: "Floor",
    price: "$59",
    period: "/mo",
    tagline: "Open floor access, self-directed",
    features: [
      "Unlimited open floor hours",
      "Locker & shower access",
      "Member app tracking",
      "1 guest pass / month",
    ],
    featured: false,
  },
  {
    name: "Coached",
    price: "$119",
    period: "/mo",
    tagline: "Everything in Floor, plus every class",
    features: [
      "All 6 coached programs",
      "Unlimited open floor hours",
      "Monthly progress check-in",
      "3 guest passes / month",
      "Priority class booking",
    ],
    featured: true,
  },
  {
    name: "Performance",
    price: "$219",
    period: "/mo",
    tagline: "1-on-1 coaching layered on top",
    features: [
      "Everything in Coached",
      "2x monthly 1-on-1 sessions",
      "Custom programming",
      "Nutrition check-ins",
      "Unlimited guest passes",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="membership" className="py-28 md:py-36 bg-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16 text-center md:text-left">
          <p className="readout mb-4">Membership</p>
          <h2 className="display-heading text-5xl md:text-7xl text-bone">
            Pick Your <span className="text-volt">Voltage.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`flex flex-col p-8 border ${
                plan.featured
                  ? "border-volt bg-card relative md:-translate-y-4 shadow-[0_0_60px_-15px_rgba(212,255,61,0.35)]"
                  : "border-line bg-card"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 bg-volt text-ink font-mono text-[10px] tracking-widest2 px-3 py-1">
                  MOST PICKED
                </span>
              )}
              <h3 className="font-display text-2xl text-bone">{plan.name}</h3>
              <p className="text-mute text-sm mt-2 mb-6">{plan.tagline}</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-display text-5xl text-bone">
                  {plan.price}
                </span>
                <span className="font-mono text-sm text-mute">
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-mute"
                  >
                    <span className="text-volt mt-0.5">&#9679;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`inline-flex justify-center items-center font-display text-base px-6 py-4 tracking-tight transition-colors ${
                  plan.featured
                    ? "bg-volt text-ink hover:bg-bone"
                    : "border border-line text-bone hover:border-volt hover:text-volt"
                }`}
              >
                Choose {plan.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
