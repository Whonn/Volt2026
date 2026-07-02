import AnimatedCounter from "./AnimatedCounter";

const STATS = [
  { value: 1420, suffix: "+", label: "Active Members" },
  { value: 38, suffix: "", label: "Coached Sessions / Week" },
  { value: 9.4, suffix: "", label: "Avg. Member Rating", decimal: true },
  { value: 12, suffix: "yr", label: "Running Since" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-line bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`py-10 md:py-14 px-2 ${
              i !== 0 ? "border-l border-line" : ""
            }`}
          >
            <div className="font-display text-4xl md:text-5xl text-volt">
              {s.decimal ? (
                <span>9.4</span>
              ) : (
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              )}
            </div>
            <p className="readout mt-3 !text-mute">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
