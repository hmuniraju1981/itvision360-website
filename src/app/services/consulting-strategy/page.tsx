import { GraduationCap, Target, Users, Compass, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Consulting & Strategy | ITVision360",
  description: "Expert IT consulting to align technology with business goals. Drive transformation and growth with strategic advisory and workforce training.",
};

const services = [
  {
    icon: <Compass size={24} />,
    title: "Digital Transformation Strategy",
    description: "Comprehensive technology roadmaps that align IT investments with business objectives, prioritize high-ROI initiatives, and accelerate time-to-value across the enterprise.",
  },
  {
    icon: <Target size={24} />,
    title: "Technology Assessment & Advisory",
    description: "In-depth evaluation of your current technology landscape with actionable recommendations for modernization, optimization, and competitive differentiation.",
  },
  {
    icon: <Users size={24} />,
    title: "Organizational Enablement",
    description: "Change management, team structuring, and capability building that ensure your organization can fully leverage new technologies and sustain transformation momentum.",
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Workforce Training & Certification",
    description: "Specialized training programs certified by the Texas Workforce Commission, designed to build technical competency in industrial automation, IT systems, and emerging technologies.",
  },
];

const certifications = [
  "Texas Workforce Commission Certified",
  "Industrial Automation Training",
  "IT Systems Administration",
  "Cloud & DevOps Foundations",
  "Cybersecurity Fundamentals",
  "Project Management Professional",
];

export default function ConsultingStrategyPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
            alt="Business Strategy Planning"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/30 via-dark-950/50 to-dark-950" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="gradient-text">Consulting & Strategy</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transform ambition into execution with strategic advisory that aligns 
            technology investments to measurable business outcomes — complemented by 
            certified workforce training programs that build lasting organizational capability.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((item, i) => (
              <div key={i} className="glass glass-hover rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Certifications */}
      <section className="section-padding bg-dark-300/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Training & Certifications</span>
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            Accredited programs designed to elevate technical competency across your workforce.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <span key={cert} className="px-4 py-2.5 glass rounded-xl text-sm text-gray-300 font-medium">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Drive Strategic Transformation</h2>
          <p className="text-gray-400 mb-8">
            Let our consultants help you align technology with business growth objectives.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full font-semibold hover:from-primary-500 hover:to-accent-500 transition-all shadow-xl shadow-primary-500/20"
          >
            Book a Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
