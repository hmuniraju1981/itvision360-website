import { Target, Users, Lightbulb, Handshake, Award } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About | ITVision360 - Your Partner in Technology Solutions",
  description: "Discover ITVision360's commitment to delivering exceptional technology solutions, shaped by our mission, vision, and world-class leadership.",
};

const leadership = [
  {
    name: "Harsha Muniraju, MBA",
    title: "Chief Technology Officer (CTO)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Data, AI & Agentic AI executive with 15+ years leading enterprise transformation in Fortune 50 environments. Scaled AT&T's Chief Data Office to 400+ members managing 760+ PB of enterprise data. Delivered $70M+ in organizational savings. Expert in Azure OpenAI, GenAI productization, and Responsible AI governance.",
    credentials: ["MBA — Jack Welch Management Institute", "PG AI & ML — UT Austin McCombs", "PMP • SAFe Agilist"],
    linkedin: "https://linkedin.com/in/harshamuniraju",
  },
];

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
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Corporate"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 to-dark-950" />
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
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
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

      {/* Leadership */}
      <section className="section-padding bg-dark-300/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Executive Leadership</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Visionary leaders driving innovation, operational excellence, and AI-forward transformation.
            </p>
          </div>

          {leadership.map((leader, i) => (
            <div key={i} className="glass rounded-3xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-72 h-72 md:h-auto shrink-0">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  </div>
                  <p className="text-primary-400 font-medium text-lg mb-4">{leader.title}</p>
                  <p className="text-gray-400 leading-relaxed mb-6">{leader.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {leader.credentials.map((cred, j) => (
                      <span key={j} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-500/5 border border-primary-500/15 rounded-lg text-xs text-primary-300">
                        <Award size={12} />
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Business Model */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
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
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
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
