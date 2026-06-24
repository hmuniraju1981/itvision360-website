import { Monitor, Clock, Wrench, Database, Wifi, BarChart3, Brain, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Operations & Maintenance | ITVision360",
  description: "Maximize uptime, reduce risks, and ensure efficient performance with our comprehensive O&M services.",
};

const operations = [
  {
    icon: <Clock size={24} />,
    title: "24/7 Technical Support",
    description: "Round-the-clock expert support for rapid incident resolution, ensuring your critical systems maintain continuous availability.",
  },
  {
    icon: <Monitor size={24} />,
    title: "Proactive Monitoring",
    description: "Empowering teams with real-time observability, automated alerting, and predictive diagnostics for efficient operations.",
  },
  {
    icon: <Wrench size={24} />,
    title: "Tailored Operational Management",
    description: "Customized management frameworks that align with your unique infrastructure, workflows, and business objectives.",
  },
];

const reliability = [
  {
    icon: <BarChart3 size={24} />,
    title: "Data-Driven Diagnostics",
    description: "Rapid root-cause analysis powered by telemetry data, reducing mean time to resolution and preventing cascading failures.",
  },
  {
    icon: <Wrench size={24} />,
    title: "Preventive Maintenance",
    description: "Systematic maintenance programs that prevent recurring issues, extend equipment life, and optimize operational budgets.",
  },
  {
    icon: <Database size={24} />,
    title: "Secure Storage & Recovery",
    description: "Enterprise-grade backup, disaster recovery, and data protection strategies that safeguard your most critical assets.",
  },
];

const advancedTech = [
  {
    icon: <Wifi size={24} />,
    title: "Remote Data Access",
    description: "Secure, real-time access to operational data through IoT/IIoT frameworks — enabling informed decisions from anywhere.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Cloud & Analytics",
    description: "Transform raw operational data into actionable intelligence through advanced analytics platforms and visualization.",
  },
  {
    icon: <Brain size={24} />,
    title: "AI & Machine Learning",
    description: "Predictive maintenance, anomaly detection, and process automation powered by machine learning models trained on your operational data.",
  },
  {
    icon: <Zap size={24} />,
    title: "Energy Management",
    description: "Intelligent energy optimization that reduces waste, balances loads, and minimizes consumption without compromising performance.",
  },
];

export default function OperationsMaintenancePage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1920&q=80"
            alt="Server Infrastructure Operations"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/30 via-dark-950/50 to-dark-950" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="gradient-text">Operations & Maintenance</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At ITVision360, our O&M services maximize uptime, reduce operational risks, 
            and ensure efficient performance across your entire technology estate — 
            so you can focus on growth while we ensure continuity.
          </p>
        </div>
      </section>

      {/* Seamless Operations */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Ensuring Seamless Business Operations</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {operations.map((item, i) => (
              <div key={i} className="glass glass-hover rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reliability */}
      <section className="section-padding bg-dark-300/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Maximizing Reliability & Performance</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reliability.map((item, i) => (
              <div key={i} className="glass glass-hover rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Technologies */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Advanced Technologies</span>
            </h2>
            <p className="text-gray-500">Driving innovation with cutting-edge solutions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedTech.map((item, i) => (
              <div key={i} className="glass glass-hover rounded-2xl p-6 text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ensure Business Continuity</h2>
          <p className="text-gray-400 mb-8">
            Partner with us for operations and maintenance that delivers peace of mind.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full font-semibold hover:from-primary-500 hover:to-accent-500 transition-all shadow-xl shadow-primary-500/20"
          >
            Discuss O&M Services <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
