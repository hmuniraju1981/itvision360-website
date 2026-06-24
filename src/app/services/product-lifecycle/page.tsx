import { Lightbulb, PenTool, FlaskConical, Rocket, Wrench, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Product Lifecycle | ITVision360",
  description: "End-to-end product management from concept to continuous optimization. Accelerate innovation and reduce time-to-market.",
};

const phases = [
  {
    icon: <Lightbulb size={24} />,
    step: "01",
    title: "Concept & Requirements",
    description: "We capture the Voice of the Customer, define detailed requirements, and develop proof-of-concept solutions that align precisely with business goals and market opportunity.",
  },
  {
    icon: <PenTool size={24} />,
    step: "02",
    title: "Design & Prototyping",
    description: "Robust product design, rapid prototyping, and early-stage testing to validate functionality, user experience, and technical feasibility before scaling.",
  },
  {
    icon: <FlaskConical size={24} />,
    step: "03",
    title: "Testing & Validation",
    description: "Comprehensive testing, validation, and interoperability verification to ensure seamless integration across platforms, environments, and edge cases.",
  },
  {
    icon: <Rocket size={24} />,
    step: "04",
    title: "Production & Deployment",
    description: "Scalable production and deployment of smart devices, IoT-enabled systems, and enterprise applications — delivered on time and optimized for peak performance.",
  },
  {
    icon: <Wrench size={24} />,
    step: "05",
    title: "Maintenance & Support",
    description: "Continuous monitoring, updates, and technical support to improve efficiency, enhance security, and extend product longevity throughout its operational life.",
  },
  {
    icon: <TrendingUp size={24} />,
    step: "06",
    title: "Evolution & Growth",
    description: "Future-proofing through version upgrades, new feature integration, and product evolution strategies that ensure long-term competitive advantage.",
  },
];

export default function ProductLifecyclePage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
            alt="Product Development"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/60 via-dark-950/80 to-dark-950" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="gradient-text">End-to-End Product Lifecycle</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At ITVision360, we shepherd your product vision from concept to continuous 
            optimization. Our full lifecycle methodology ensures efficiency, reliability, 
            and scalability — empowering your business to innovate with confidence.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">From Concept to Evolution</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              ITVision360 is your trusted partner for complete product lifecycle management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {phases.map((phase, i) => (
              <div key={i} className="glass glass-hover rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">
                    {phase.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-primary-400 font-mono">PHASE {phase.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{phase.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Accelerate Your Product Innovation</h2>
          <p className="text-gray-400 mb-8">
            Partner with us to bring your products to market faster with enterprise-grade quality.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full font-semibold hover:from-primary-500 hover:to-accent-500 transition-all shadow-xl shadow-primary-500/20"
          >
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
