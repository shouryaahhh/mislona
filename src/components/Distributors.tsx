import { useState, useRef, useEffect } from 'react';
import { Send, Store, TrendingUp, Users, Package } from 'lucide-react';

const benefits = [
  { icon: TrendingUp, title: 'High Demand Product', desc: 'Mislona is a fast-moving daily essential with consistent repeat purchases.' },
  { icon: Users, title: 'Marketing Support', desc: 'Full branding, display materials, and promotional campaigns provided.' },
  { icon: Package, title: 'Flexible MOQ', desc: 'Minimum order quantities designed to suit distributors of all sizes.' },
  { icon: Store, title: 'Exclusive Territory', desc: 'Protected territory rights ensure you own your distribution zone.' },
];

export default function Distributors() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    name: '', business: '', city: '', phone: '', email: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setSubmitting(true);

  const res = await fetch("http://localhost:5000/api/distributors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      business_name: form.business,
      owner_name: form.name,
      mobile: form.phone,
      email: form.email,
      city: form.city,
      message: form.message,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    alert(data.error);
    setSubmitting(false);
    return;
  }

  setSubmitting(false);

  setSubmitted(true);

  setForm({
    name: "",
    business: "",
    city: "",
    phone: "",
    email: "",
    message: "",
  });
};
  return (
    <section id="distributors" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
          className="text-center mb-16"
        >
          <p className="text-brand-magenta text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Distributor Program
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Grow With
            <span className="text-brand-blue"> Mislona</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Partner with a fast-growing national FMCG brand. Become a Mislona distributor
            or retail partner and build a profitable business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — benefits + retail */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Distributor Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-brand-sky-light transition-colors duration-300">
                    <div className="w-9 h-9 rounded-lg bg-brand-blue text-white flex items-center justify-center mb-3">
                      <Icon size={16} />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{b.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Retail partner box */}
            <div className="bg-brand-sky-pale border border-brand-sky-light rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center flex-shrink-0">
                  <Store size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Retail Partners</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Are you a kirana store, supermarket, or general merchant?
                    Stock Mislona and offer your customers a trusted brand.
                    Contact us for wholesale pricing and promotional support.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-semibold hover:text-brand-magenta transition-colors"
                  >
                    Contact for retail inquiry
                    <Send size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — inquiry form */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Distributor Inquiry Form</h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Inquiry Submitted!</h4>
                <p className="text-gray-500 text-sm">
                  Our team will contact you within 24 business hours to discuss partnership opportunities.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Full Name" required>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                    />
                  </Field>
                  <Field label="Business Name" required>
                    <input
                      type="text"
                      required
                      placeholder="Your business name"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                    />
                  </Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="City / District" required>
                    <input
                      type="text"
                      required
                      placeholder="Your city or district"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                    />
                  </Field>
                  <Field label="Phone Number" required>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                    />
                  </Field>
                </div>
                <Field label="Email Address">
                  <input
                    type="email"
                    placeholder="your@email.com (optional)"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                  />
                </Field>
                <Field label="Message">
                  <textarea
                    rows={3}
                    placeholder="Tell us about your distribution network or any questions..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all resize-none"
                  />
                </Field>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 bg-brand-blue text-white font-semibold py-3.5 rounded-xl hover:bg-brand-blue-dark transition-colors duration-200 disabled:opacity-60"
                >
                  {submitting ? (
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send size={15} />
                  )}
                  {submitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide">
        {label} {required && <span className="text-brand-magenta">*</span>}
      </label>
      {children}
    </div>
  );
}

