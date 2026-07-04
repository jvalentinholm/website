import { ArrowRight, Check, Factory, Leaf, Network, ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FlowDiagram, PlatformIllustration } from "@/components/Illustrations";

const pillars = [
  { title: "Feedstock", text: "Designed for mixed and contaminated plastic waste streams that mechanical recycling cannot handle." },
  { title: "Technology", text: "A friction-based process transfers energy directly into the material instead of heating large reactors." },
  { title: "Deployment", text: "Modular production lines make capacity expansion repeatable, capital-efficient and location-flexible." },
  { title: "Commercial", text: "Long-term supply, offtake and certification pathways connect waste owners to petrochemical demand." }
];

const advantages = [
  { icon: Factory, title: "Industrial by design", text: "Continuous production architecture developed for scalable operations." },
  { icon: Network, title: "Platform logic", text: "A replicable system combining technology, feedstock access and commercial integration." },
  { icon: Leaf, title: "Circular output", text: "Circular oil used as feedstock for new plastics and chemical applications." },
  { icon: ShieldCheck, title: "Regulatory pathway", text: "Built around EU commercialisation requirements including REACH, ISCC+ and End-of-Waste." }
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-cx-offwhite text-cx-black">
      <Header />

      <section className="grid-bg">
        <div className="container-cx grid min-h-[calc(100vh-104px)] items-center gap-14 py-20 lg:grid-cols-[1fr_.92fr]">
          <div>
            <p className="kicker mb-8">From waste to value</p>
            <h1 className="max-w-4xl text-6xl font-semibold leading-[.96] tracking-[-.065em] text-cx-black md:text-7xl lg:text-8xl">
              Building the industrial platform for plastic circularity.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-cx-black/70 md:text-2xl">
              Circle X develops industrial technology that transforms low-value plastic waste into circular feedstock for new plastics.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#platform" className="inline-flex items-center justify-center rounded-full bg-cx-coregreen px-7 py-4 font-semibold text-white transition hover:bg-cx-petroleum">
                Explore the platform <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#technology" className="inline-flex items-center justify-center rounded-full border border-cx-coregreen/25 bg-white/55 px-7 py-4 font-semibold text-cx-coregreen transition hover:border-cx-coregreen">
                See the technology
              </a>
            </div>
          </div>
          <PlatformIllustration />
        </div>
      </section>

      <section id="platform" className="bg-white py-24 md:py-32">
        <div className="container-cx">
          <div className="mb-14 max-w-3xl">
            <p className="kicker mb-5">The platform</p>
            <h2 className="text-5xl font-semibold leading-[1.02] tracking-[-.055em] md:text-7xl">Everything required to make plastic circularity industrial.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {pillars.map((p, i) => (
              <article key={p.title} className="rounded-cx border border-cx-coregreen/12 bg-cx-offwhite/55 p-7">
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl bg-cx-coregreen text-white">{i + 1}</div>
                <h3 className="mb-3 text-2xl font-semibold tracking-[-.04em]">{p.title}</h3>
                <p className="leading-7 text-cx-black/68">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="py-24 md:py-32">
        <div className="container-cx grid gap-16 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="kicker mb-5">Technology</p>
            <h2 className="text-5xl font-semibold leading-[1.02] tracking-[-.055em] md:text-6xl">Built around friction. Not combustion.</h2>
            <p className="mt-7 text-xl leading-8 text-cx-black/68">
              Instead of relying on external heating of large reactors, the Circle X process transfers mechanical energy directly into plastic material through controlled friction.
            </p>
            <ul className="mt-8 space-y-4 text-cx-black/72">
              {["Compact process chamber", "Continuous closed system", "Designed for real-world waste streams"].map((x) => (
                <li key={x} className="flex items-center gap-3"><Check className="h-5 w-5 text-cx-coregreen" />{x}</li>
              ))}
            </ul>
          </div>
          <FlowDiagram />
        </div>
      </section>

      <section id="applications" className="bg-white py-24 md:py-32">
        <div className="container-cx">
          <p className="kicker mb-5">Applications</p>
          <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
            <h2 className="text-5xl font-semibold leading-[1.02] tracking-[-.055em] md:text-6xl">A bridge between waste management and petrochemistry.</h2>
            <p className="text-xl leading-8 text-cx-black/68">
              The platform creates a new route for residual plastic fractions: from low-value waste into circular oil that can be used as industrial feedstock for chemicals and new plastics.
            </p>
          </div>
        </div>
      </section>

      <section id="deployment" className="py-24 md:py-32">
        <div className="container-cx grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="kicker mb-5">Deployment</p>
            <h2 className="text-5xl font-semibold leading-[1.02] tracking-[-.055em]">Designed to scale.</h2>
          </div>
          <div className="grid gap-5 lg:col-span-2 md:grid-cols-3">
            {["Platform build", "Multi-line facility", "Regional rollout"].map((step, i) => (
              <div key={step} className="soft-card rounded-cx p-7">
                <p className="mb-8 text-sm font-bold uppercase tracking-[.15em] text-cx-orange">Step {i + 1}</p>
                <h3 className="mb-4 text-2xl font-semibold tracking-[-.04em]">{step}</h3>
                <p className="leading-7 text-cx-black/65">Replicable production architecture enables staged expansion from Frederiksværk to additional European locations.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="bg-cx-coregreen py-24 text-white md:py-32">
        <div className="container-cx">
          <p className="mb-5 text-sm font-bold uppercase tracking-[.15em] text-white/70">Impact</p>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              ["1,250 kg/h", "Documented process capacity per line"],
              ["60–70%", "Target oil yield, feedstock dependent"],
              ["Modular", "Replicable production lines"],
              ["EU-ready", "Certification and market access focus"]
            ].map(([n, t]) => (
              <div key={n} className="border-t border-white/20 pt-7">
                <div className="text-4xl font-semibold tracking-[-.05em] md:text-5xl">{n}</div>
                <p className="mt-4 leading-7 text-white/70">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="company" className="bg-white py-24 md:py-32">
        <div className="container-cx grid gap-12 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="kicker mb-5">Company</p>
            <h2 className="text-5xl font-semibold leading-[1.02] tracking-[-.055em] md:text-6xl">Engineering the future of plastic circularity.</h2>
          </div>
          <div className="text-xl leading-8 text-cx-black/68">
            <p>Circle X is a Danish industrial technology company based in Frederiksværk. The company is building a scalable platform for converting difficult plastic waste into valuable circular feedstock.</p>
            <a href="#contact" className="mt-8 inline-flex items-center font-semibold text-cx-coregreen">Talk to us <ArrowRight className="ml-2 h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
