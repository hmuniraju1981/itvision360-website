import { Target, Users, Lightbulb, Handshake } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About | ITVision360 - Your Partner in Technology Solutions",
  description: "Discover ITVision360's commitment to delivering exceptional technology solutions, shaped by our mission, vision, and values.",
};

const values = [
  {
    icon: <Target size={24} />,
    title: "Mission-Driven Excellence",
    description: "To enable organizations to succeed by delivering reliable, scalable, and innovative technology solutions that drive progress and create long-term value.",
  },
  {
    icon: <Users size={24} />,
    title: "People First",
    description: "We invest in our people — building diverse, expert teams that bring unmatched depth across industrial automation, AI, and enterprise IT.",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Innovation & Reliability",
    description: "Committed to innovative, robust, and interoperable solutions that empower your industrial and IT systems to perform at their highest potential.",
  },
  {
    icon: <Handshake size={24} />,
    title: "Long-Term Partnerships",
    description: "We foster enduring collaborations, becoming a trusted extension of your team for sustained success and continuous improvement.",
  },
];

const businessModel = [
  { title: "Staff Augmentation", desc: "Contract to Hire, FTE, and specialized talent on demand." },
  { title: "Fixed Bid / SoW", desc: "Defined scope, predictable outcomes, transparent pricing." },
  { title: "Time & Material", desc: "Flexible engagement for evolving requirements and agile delivery." },
  { title: "Managed Services", desc: "End-to-end operational ownership with SLA-backed performance." },
];

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
            alt="Technology Circuit Board"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/30 via-dark-950/50 to-dark-950" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="gradient-text">Who We Are</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Established in 2011, ITVision360 is a distinguished technology solutions provider 
            specializing in industrial automation, artificial intelligence, asset management, 
            and enterprise IT services. We combine unparalleled technical depth, diverse expertise, 
            and government recognition to deliver transformative solutions for businesses across industries.
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80"
            alt="Cybersecurity Technology"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/30 via-dark-950/50 to-dark-950" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Philosophy</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our project approach is built on three pillars: People, Technology, and Customer. 
              We deliver with an unwavering commitment to quality, cost optimization, and timely execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="glass glass-hover rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488229297570-58520851e868?w=1920&q=80"
            alt="Digital Technology Network"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-dark-950/60 to-dark-950" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Engagement Models</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              At ITVision360, our foundational business model is built on establishing 
              lasting relationships and delivering unparalleled value through flexible engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessModel.map((model, i) => (
              <div key={i} className="glass glass-hover rounded-2xl p-6 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-primary-400 mb-4 text-lg font-bold border border-primary-500/20">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-white mb-2">{model.title}</h3>
                <p className="text-sm text-gray-500">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80"
            alt="Matrix Data Visualization"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-dark-950/60 to-dark-950" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Partner With Us for Success</h2>
          <p className="text-gray-400 mb-8">
            Discover how ITVision360 can accelerate your digital transformation journey.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full font-semibold hover:from-primary-500 hover:to-accent-500 transition-all shadow-xl shadow-primary-500/20"
          >
            Connect With Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
