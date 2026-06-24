"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Industrial Automation", href: "/services/industrial-automation" },
  { name: "IoT & Cloud Solutions", href: "/services/iot-cloud" },
  { name: "Asset Management", href: "/services/asset-management" },
  { name: "Product Lifecycle", href: "/services/product-lifecycle" },
  { name: "Operations & Maintenance", href: "/services/operations-maintenance" },
  { name: "Consulting & Strategy", href: "/services/consulting-strategy" },
  { name: "AI Strategy & Enablement", href: "/services/ai-strategy" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-950/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center font-bold text-white text-sm">
            IT
          </div>
          <span className="text-xl font-bold">
            <span className="gradient-text">ITVision</span>
            <span className="text-white">360</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm text-gray-300 hover:text-primary-400 transition-colors">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-primary-400 transition-colors"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              Services <ChevronDown size={14} />
            </button>
            <div
              className={`absolute top-full left-0 mt-2 w-72 glass rounded-xl p-2 shadow-2xl shadow-black/50 transition-all duration-200 ${
                servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-4 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/[0.06] transition-all"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/about" className="text-sm text-gray-300 hover:text-primary-400 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm text-gray-300 hover:text-primary-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full text-sm font-medium hover:from-primary-500 hover:to-accent-500 transition-all shadow-lg shadow-primary-500/20"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-950/95 backdrop-blur-xl border-t border-white/[0.06] px-6 py-6 space-y-4">
          <Link href="/" className="block text-gray-300 hover:text-primary-400" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <div className="space-y-2">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Services</p>
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block pl-4 text-sm text-gray-400 hover:text-primary-400"
                onClick={() => setMobileOpen(false)}
              >
                {service.name}
              </Link>
            ))}
          </div>
          <Link href="/about" className="block text-gray-300 hover:text-primary-400" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="block text-gray-300 hover:text-primary-400" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>
          <Link
            href="/contact"
            className="block text-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
