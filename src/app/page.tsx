import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Cloud,
  Shield,
  Settings,
  BarChart3,
  Brain,
  Wrench,
  FlaskConical,
} from "lucide-react";

const services = [
  {
    icon: <Cpu size={24} />,
    title: "Industrial Automation",
    description: "Orchestrate operational excellence through intelligent automation ecosystems — converging IT and OT to unlock unprecedented efficiency at scale.",
    href: "/services/industrial-automation",
  },
  {
    icon: <Cloud size={24} />,
    title: "IoT & Cloud Solutions",
    description: "Architect seamless connectivity fabrics spanning edge to cloud, enabling real-time intelligence and elastic scalability across your enterprise.",
    href: "/services/iot-cloud",
  },
  {
    icon: <Settings size={24} />,
    title: "Asset Management",
    description: "Maximize asset longevity and performance through predictive analytics, lifecycle optimization, and enterprise-grade monitoring frameworks.",
    href: "/services/asset-management",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Product Lifecycle",
    description: "Accelerate innovation velocity from ideation through deployment — systematic product engineering with rigorous quality assurance at every milestone.",
    href: "/services/product-lifecycle",
  },
  {
    icon: <Shield size={24} />,
    title: "Cybersecurity",
    description: "Fortify your digital perimeter with defense-in-depth architectures, threat intelligence, and zero-trust frameworks purpose-built for industrial environments.",
    href: "/services/consulting-strategy",
  },
  {
    icon: <Wrench size={24} />,
    title: "Operations & Maintenance",
    description: "Ensure continuous uptime through proactive monitoring, AI-driven diagnostics, and rapid-response support that safeguards business continuity.",
    href: "/services/operations-maintenance",
  },
  {
    icon: <FlaskConical size={24} />,
    title: "Consulting & Strategy",
    description: "Transform ambition into execution with strategic advisory that aligns technology investments to measurable business outcomes.",
    href: "/services/consulting-strategy",
  },
  {
    icon: <Brain size={24} />,
    title: "AI Strategy & Enablement",
    description: "Architect enterprise AI ecosystems — from agentic automation to Responsible AI governance — delivering measurable ROI with production-grade reliability.",
    href: "/services/ai-strategy",
  },
];

const stats = [
  { value: "200+", label: "Clients Served" },
  { value: "14+", label: "Years in the Industry" },
  { value: "40%", label: "Faster Project Delivery" },
  { value: "Fortune 500", label: "Enterprise Trusted" },
];

const techExpertise = {
  automation: [
    "Siemens", "Rockwell", "ABB", "Honeywell", "Yokogawa",
    "PLC", "DCS", "SCADA", "HMI", "RTU",
  ],
  protocols: [
    "OPC", "MQTT", "Modbus", "HART", "Profibus",
    "LoRaWAN", "BLE", "IoT/IIoT", "FDT", "EDDL",
  ],
  software: [
    "Azure", "AWS", "Python", "Java", "C#",
    "Snowflake", "Power BI", "Salesforce", "SAP", "Databricks",
  ],
};

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* AI-themed professional background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80"
            alt="Artificial Intelligence Neural Network"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/30 via-dark-950/60 to-dark-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-transparent to-accent-600/5" />
        </div>
        {/* Animated accent orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent-500/8 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-24">
          {/* Logo mark */}
          <div className="flex justify-center mb-8">
            <img src="/logo.png" alt="ITVision360" className="w-20 h-20 drop-shadow-2xl" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs text-primary-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            Trusted by Fortune 500 since 2011
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
            <span className="gradient-text">Architecting the Future</span>
            <br />
            <span className="text-white">of Industrial Intelligence</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Where operational technology converges with enterprise AI to deliver 
            transformative outcomes at scale. Industrial Automation, Cloud, IoT, 
            and Artificial Intelligence — delivered with confidence.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/services/ai-strategy"
              className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full font-semibold hover:from-primary-500 hover:to-accent-500 transition-all shadow-xl shadow-primary-500/20 hover:shadow-primary-500/40 flex items-center gap-2"
            >
              Explore AI Solutions
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/5 transition-all text-gray-200"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80"
            alt="AI Brain Visualization"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/90 to-dark-950" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Comprehensive Technology Solutions</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Enterprise-grade services spanning industrial automation, cloud infrastructure, 
              cybersecurity, and artificial intelligence — engineered for modern business complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group glass glass-hover rounded-2xl p-6 block"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 mb-4 group-hover:bg-primary-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80"
            alt="AI Data Circuits"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/95 to-dark-950" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Technology Expertise</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Empowering Fortune 500 clients with tailored technology, robust security, 
              and seamless digital transformation across the full industrial and IT spectrum.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Cpu size={20} className="text-primary-400" />
                Systems Integration
              </h3>
              <div className="flex flex-wrap gap-2">
                {techExpertise.automation.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-primary-500/5 border border-primary-500/15 rounded-lg text-xs text-primary-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Settings size={20} className="text-primary-400" />
                Protocols & Standards
              </h3>
              <div className="flex flex-wrap gap-2">
                {techExpertise.protocols.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-primary-500/5 border border-primary-500/15 rounded-lg text-xs text-primary-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Cloud size={20} className="text-primary-400" />
                Software & Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                {techExpertise.software.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-primary-500/5 border border-primary-500/15 rounded-lg text-xs text-primary-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1694903110330-cc865e8c9e04?w=1920&q=80"
            alt="AI Technology Abstract"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/90 to-dark-950" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="gradient-text">Why Choose ITVision360?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-primary-400 mb-4 border border-primary-500/20">
                <Shield size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2">Proven Expertise</h3>
              <p className="text-sm text-gray-500">Fortune 500 trusted with 14+ years delivering mission-critical solutions across industries.</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-primary-400 mb-4 border border-primary-500/20">
                <BarChart3 size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2">Certified & Recognized</h3>
              <p className="text-sm text-gray-500">Government-recognized, women & minority-owned business with global delivery excellence.</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-primary-400 mb-4 border border-primary-500/20">
                <Brain size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2">AI-Forward Vision</h3>
              <p className="text-sm text-gray-500">Pioneering enterprise AI strategy with agentic automation, GenAI, and Responsible AI governance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1676299081847-824916de030a?w=1920&q=80"
            alt="AI Future"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/85 to-dark-950" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="relative glass rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-600/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Digital Future?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Partner with us to architect solutions that drive innovation, efficiency, and sustainable growth.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full font-semibold hover:from-primary-500 hover:to-accent-500 transition-all shadow-xl shadow-primary-500/20"
              >
                Start the Conversation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
