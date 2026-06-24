import { Wifi, Server, Cloud, Factory, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "IoT & Cloud Solutions | ITVision360",
  description: "Seamless IoT and Cloud solutions that integrate with your systems, deliver real-time insights, and scale with your business.",
};

const offerings = [
  {
    icon: <Wifi size={24} />,
    title: "Seamless Connectivity",
    description: "We architect robust connectivity fabrics leveraging 4G/5G, WiFi, BLE, and IoT-CAT-M1/NB-IoT to ensure smooth, low-power connections that scale across distributed environments.",
    tags: ["4G/5G", "WiFi", "BLE", "NB-IoT", "CAT-M1"],
  },
  {
    icon: <Server size={24} />,
    title: "Robust Systems & Protocols",
    description: "Our interoperable systems leverage industry-standard protocols including DLMS, MODBUS, and proprietary frameworks to ensure reliable device-to-device communication across heterogeneous environments.",
    tags: ["DLMS", "MODBUS", "OPC-UA", "MQTT"],
  },
  {
    icon: <Cloud size={24} />,
    title: "Cloud & Applications",
    description: "We leverage AWS and Azure to build elastic, scalable Web & Mobile Applications that keep your data secure, accessible, and actionable — from edge computing to enterprise analytics.",
    tags: ["AWS", "Azure", "Web Apps", "Mobile Apps"],
  },
  {
    icon: <Factory size={24} />,
    title: "Industry Applications",
    description: "Purpose-built solutions for energy, water, and gas metering infrastructure, complemented by advanced vehicle tracking, diagnostics, and fleet management capabilities.",
    tags: ["Energy Meters", "Water/Gas", "Vehicle Tracking", "Diagnostics"],
  },
];

export default function IoTCloudPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
            alt="Cloud Infrastructure"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/60 via-dark-950/80 to-dark-950" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="gradient-text">IoT & Cloud Solutions</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Seamless, scalable IoT and Cloud solutions engineered for impact — integrating 
            with your existing systems to deliver real-time intelligence and elastic 
            scalability that grows with your business ambitions.
          </p>
        </div>
      </section>

      {/* Offerings */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">What We Offer</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((item, i) => (
              <div key={i} className="glass glass-hover rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-primary-500/5 border border-primary-500/15 rounded-md text-xs text-primary-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Connect Your Enterprise</h2>
          <p className="text-gray-400 mb-8">
            Let us architect IoT and cloud infrastructure that transforms data into actionable intelligence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full font-semibold hover:from-primary-500 hover:to-accent-500 transition-all shadow-xl shadow-primary-500/20"
          >
            Explore IoT Solutions <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
