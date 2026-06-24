import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const solutions = [
  { name: "Industrial Automation", href: "/services/industrial-automation" },
  { name: "IoT & Cloud Solutions", href: "/services/iot-cloud" },
  { name: "Asset Management", href: "/services/asset-management" },
  { name: "Product Lifecycle", href: "/services/product-lifecycle" },
  { name: "Operations & Maintenance", href: "/services/operations-maintenance" },
  { name: "Consulting & Strategy", href: "/services/consulting-strategy" },
  { name: "AI Strategy & Enablement", href: "/services/ai-strategy" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-dark-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center font-bold text-white text-sm">
                IT
              </div>
              <span className="text-xl font-bold">
                <span className="gradient-text">ITVision</span>
                <span className="text-white">360</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Architecting the future of industrial intelligence since 2011. 
              Fortune 500 trusted. Globally delivered.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/itvision360/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center text-gray-400 hover:text-primary-400"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center text-gray-400 hover:text-primary-400"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2.5">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-primary-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-primary-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-primary-500 mt-0.5 shrink-0" />
                <a href="mailto:info@itvision360.com" className="text-sm text-gray-500 hover:text-primary-400 transition-colors">
                  info@itvision360.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-primary-500 mt-0.5 shrink-0" />
                <a href="tel:+14692613662" className="text-sm text-gray-500 hover:text-primary-400 transition-colors">
                  +1 (469) 261-3662
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-primary-500 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-500">
                  300 E Royal Ln STE 230, Irving, TX 75039, USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} ITVision360 Inc. All rights reserved. Certified Women & Minority-Owned Business.
          </p>
          <p className="text-xs text-gray-600">
            Irving, TX • Querétaro, MX • Hyderabad, IN • Tirupati, IN
          </p>
        </div>
      </div>
    </footer>
  );
}
