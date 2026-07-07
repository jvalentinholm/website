const proofCards = [
  {
    eyebrow: "ESTABLISHED VALUE STREAM",
    title:
      "Industrial value chain established from mixed plastic waste to certified circular feedstock.",
    items: [
      "Commercial production",
      "Industrial downstream partners",
      "Documented material traceability",
    ],
  },
  {
    eyebrow: "CERTIFIED CIRCULAR OUTPUT",
    title:
      "Produced to meet the requirements of the industrial plastics value chain.",
    items: [
      "REACH registered",
      "ISCC+ certified",
      "End-of-Waste approved",
      "Certification body coming soon",
    ],
  },
  {
    eyebrow: "BUILT WHERE THE WASTE IS",
    title:
      "Modular production facilities deployed close to major plastic waste streams.",
    items: [
      "Modular deployment",
      "Reduced transport",
      "Local circular value creation",
    ],
  },
];

export function ProofCards() {
  return (
    <section className="bg-offWhite py-24 md:py-32">
      <div className="cx-container">
        <div className="grid gap-5 lg:grid-cols-3">
          {proofCards.map((card, index) => (
            <article
              key={card.eyebrow}
              className="group relative overflow-hidden rounded-[2rem] bg-white p-8 ring-1 ring-coreGreen/10 transition duration-300 hover:-translate-y-1 hover:shadow-card md:p-10"
            >
              <div className="absolute right-0 top-0 h-36 w-36 translate-x-12 -translate-y-12 rounded-full bg-freshGreen/10 transition duration-300 group-hover:bg-orange/12" />

              <div className="relative">
                <div className="mb-10 flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-coreGreen/60">
                    {card.eyebrow}
                  </p>

                  <span className="text-sm font-semibold text-orange">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-coreGreen md:text-[2rem]">
                  {card.title}
                </h3>

                <ul className="mt-10 space-y-4">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-base leading-7 text-black/65"
                    >
                      <span className="mt-[0.45rem] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-freshGreen/16 text-[10px] font-bold text-coreGreen">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}