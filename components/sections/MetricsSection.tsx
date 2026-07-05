const metrics = [
  ["1,250 kg/h", "Documented pilot-line processing capacity"],
  ["60–70%", "Typical oil yield, depending on feedstock"],
  ["TRL 8", "Operational validation towards industrial scale"],
  ["Modular", "Production lines designed for replication"],
];

export function MetricsSection() {
  return (
    <section id="impact" className="bg-coreGreen py-16 text-white md:py-20">
      <div className="cx-container grid gap-5 md:grid-cols-4">
        {metrics.map(([value, label]) => (
          <article key={value} className="rounded-[1.5rem] bg-white/8 p-7 ring-1 ring-white/12">
            <p className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">{value}</p>
            <p className="mt-4 text-sm leading-6 text-white/68">{label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
