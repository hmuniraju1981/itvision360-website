import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contact | ITVision360 - Professional Technology Solutions",
  description: "Reach out to ITVision360 for inquiries about technology solutions, AI strategy, cloud services, and industrial automation.",
};

const offices = [
  {
    location: "USA (Headquarters)",
    address: "300 E Royal Ln STE 230, Irving, TX 75039, USA",
    phone: "+1 (469) 261-3662",
    hours: "Monday – Friday, 9:00 AM – 5:00 PM (CST)",
  },
  {
    location: "Mexico",
    address: "Calle Vicente Guerrero Norte 19, Centro, Querétaro, C.P - 76000",
    phone: "+52-442 185 8294",
    hours: "Monday – Friday, 9:00 AM – 5:00 PM (CST)",
  },
  {
    location: "India – Hyderabad",
    address: "101, Sairanga Asian Residency, Madhavnagar Colony, Miyapur, Hyderabad, India-500049",
    phone: "+91-8500638409",
    hours: "Monday – Friday, 9:00 AM – 5:00 PM (IST)",
  },
  {
    location: "India – Tirupati",
    address: "6-31/404, Velmathre Plaza, Padmavathi Puram, Tiruchnur Road, Tirupati, Andhra Pradesh, India, 517501",
    phone: "+91-8500638409",
    hours: "Monday – Friday, 9:00 AM – 5:00 PM (IST)",
  },
];

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Global Communication Technology"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/30 via-dark-950/50 to-dark-950" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="gradient-text">Connect With Our Team</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Reach out for tailored solutions. Whether you need AI strategy, industrial 
            automation, or enterprise IT services — our experts are ready to help you 
            architect your next breakthrough.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="glass rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/40 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/40 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/40 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/40 transition-colors"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">How can we help?</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/40 transition-colors resize-none"
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl font-semibold hover:from-primary-500 hover:to-accent-500 transition-all shadow-lg shadow-primary-500/20"
                >
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">Email</h3>
                    <p className="text-sm text-gray-500 mb-2">Fast, expert responses to your queries.</p>
                    <a href="mailto:info@itvision360.com" className="text-primary-400 hover:text-primary-300 text-sm font-medium">
                      info@itvision360.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">Phone</h3>
                    <p className="text-sm text-gray-500 mb-2">Speak directly with our team.</p>
                    <a href="tel:+14692613662" className="text-primary-400 hover:text-primary-300 text-sm font-medium">
                      +1 (469) 261-3662
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">Headquarters</h3>
                    <p className="text-sm text-gray-500 mb-2">Visit us at our Irving, TX office.</p>
                    <p className="text-sm text-gray-300">
                      300 E Royal Ln STE 230, Irving, TX 75039, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="section-padding bg-dark-300/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Global Presence</span>
            </h2>
            <p className="text-gray-500">Delivering excellence across four continents with 24/7 support.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, i) => (
              <div key={i} className="glass glass-hover rounded-2xl p-6">
                <h3 className="text-base font-semibold text-white mb-3">{office.location}</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-primary-500 mt-0.5 shrink-0" />
                    <span className="text-xs text-gray-400">{office.address}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone size={14} className="text-primary-500 mt-0.5 shrink-0" />
                    <span className="text-xs text-gray-400">{office.phone}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock size={14} className="text-primary-500 mt-0.5 shrink-0" />
                    <span className="text-xs text-gray-400">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
