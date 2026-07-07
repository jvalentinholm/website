const proofCards = [
  {
    eyebrow: "Commercially proven",
    title: "Commercial production and industrial partnerships.",
    items: ["Commercial production", "Offtake agreement with Trafigura", "Downstream validation with Neste"],
  },
  {
    eyebrow: "Certified",
    title: "Documented circular feedstock for industrial value chains.",
    items: ["REACH registered", "ISCC+ certified", "End-of-Waste status", "Certification body placeholder"],
  },
  {
    eyebrow: "Built for scale",
    title: "A modular platform designed for industrial deployment.",
    items: ["Continuous production", "Modular production lines", "Designed for global deployment"],
  },
];

export function ProofCards() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="cx-container">
        <div className="grid gap-4 lg:grid-cols-3">
          {proofCards.map((card) => (
            <article key={card.eyebrow} className="rounded-[1.75rem] border border-coreGreen/12 bg-offWhite/55 p-7 shadow-[0_18px_50px_rgba(38,93,55,0.06)] md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-orange">{card.eyebrow}</p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-coreGreen md:text-3xl">{card.title}</h2>
              <ul className="mt-7 space-y-3">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-black/66">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
