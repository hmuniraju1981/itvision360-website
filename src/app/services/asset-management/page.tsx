import { Database, Monitor, TrendingUp, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Asset Management | ITVision360",
  description: "Comprehensive systems for tracking, maintaining, and optimizing physical and digital assets throughout their lifecycle.",
};

const features = [
  {
    icon: <Database size={24} />,
    title: "Asset Tracking & Inventory",
    description: "Real-time visibility into your entire asset portfolio with automated discovery, classification, and lifecycle tracking across physical and digital domains.",
  },
  {
    icon: <Monitor size={24} />,
    title: "Proactive Monitoring",
    description: "Continuous health monitoring with predictive analytics that identify degradation patterns before they impact operations — maximizing uptime and reliability.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Performance Optimization",
    description: "Data-driven optimization strategies that extend asset lifespan, reduce maintenance costs, and ensure peak performance throughout the operational lifecycle.",
  },
  {
    icon: <Shield size={24} />,
    title: "Compliance & Governance",
    description: "Automated compliance tracking, audit trails, and regulatory reporting that simplify governance while maintaining the highest standards of accountability.",
  },
];

export default function AssetManagementPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80"
            alt="Asset Management"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/60 via-dark-950/80 to-dark-950" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="gradient-text">Asset Management</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive systems for tracking, maintaining, and optimizing physical 
            and digital assets throughout their lifecycle — ensuring maximum uptime, 
            reliability, and return on investment.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((item, i) => (
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

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Optimize Your Asset Portfolio</h2>
          <p className="text-gray-400 mb-8">
            Discover how intelligent asset management can reduce costs and maximize reliability.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full font-semibold hover:from-primary-500 hover:to-accent-500 transition-all shadow-xl shadow-primary-500/20"
          >
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
