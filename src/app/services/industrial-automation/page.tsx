import { Cpu, Cog, Package, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Industrial Automation | ITVision360",
  description: "End-to-End automation solutions from sensors to SCADA/DCS, with complete lifecycle support for manufacturing and utility sectors.",
};

const phases = [
  {
    icon: <Cog size={24} />,
    step: "01",
    title: "Design",
    description: "We architect state-of-the-art technology and process designs that form the foundation of resilient automation systems. Our solutions integrate seamlessly across local, remote, and cloud environments while ensuring both CAPEX and OPEX are meticulously optimized.",
  },
  {
    icon: <Cpu size={24} />,
    step: "02",
    title: "Engineering",
    description: "Our engineering division develops detailed P&I diagrams and programs PLC, DCS, HMI, and SCADA systems with precision. We prioritize interoperability, intuitive interface design, and comprehensive system integration — connecting controllers with field instruments for flawless operations.",
  },
  {
    icon: <Package size={24} />,
    step: "03",
    title: "Procurement",
    description: "We orchestrate procurement with surgical focus on quality, cost efficiency, and delivery timelines. From lifecycle support and rigorous testing to third-party inspections and inventory governance, every component meets the highest industry standards.",
  },
  {
    icon: <Wrench size={24} />,
    step: "04",
    title: "Installation",
    description: "We deploy sensors, transmitters, RTUs, PLCs, SCADA, DCS, HMIs, and control panels with expert precision. Our teams execute complete system integration, loop testing, and both cold and hot start-up support to guarantee a seamless transition into full operation.",
  },
];

const brands = ["Siemens", "Rockwell", "ABB", "Honeywell", "Yokogawa", "Emerson"];

export default function IndustrialAutomationPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&q=80"
            alt="Industrial Automation"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/60 via-dark-950/80 to-dark-950" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="gradient-text">Industrial Automation</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            End-to-End automation solutions from sensors to SCADA/DCS, with complete 
            lifecycle support for manufacturing and utility sectors. We combine technical 
            expertise, proven processes, and a customer-first mindset to deliver automation 
            solutions that are reliable, cost-efficient, and future-ready.
          </p>
        </div>
      </section>

      {/* People, Technology, Customer */}
      <section className="py-16 border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-8">
            {["People", "Technology", "Customer"].map((pillar) => (
              <div key={pillar} className="glass rounded-xl px-8 py-4">
                <span className="text-lg font-semibold gradient-text">{pillar}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Phases */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">How We Deliver</span>
            </h2>
          </div>

          <div className="space-y-6">
            {phases.map((phase, i) => (
              <div key={i} className="glass glass-hover rounded-2xl p-8 flex items-start gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400">
                    {phase.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-primary-400 font-mono">PHASE {phase.step}</span>
                    <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-padding bg-dark-300/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Trusted Platform Partners</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand) => (
              <div key={brand} className="glass rounded-xl px-6 py-3">
                <span className="text-sm text-gray-300 font-medium">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Transform Your Operations</h2>
          <p className="text-gray-400 mb-8">
            Let us engineer automation solutions that drive efficiency, reliability, and competitive advantage.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full font-semibold hover:from-primary-500 hover:to-accent-500 transition-all shadow-xl shadow-primary-500/20"
          >
            Discuss Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
