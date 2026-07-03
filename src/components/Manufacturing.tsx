import { useEffect, useRef } from 'react';
import { ShieldCheck, FlaskConical, Factory, Flag } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Quality Control',
    desc: 'Every batch undergoes rigorous multi-stage quality checks — from raw material sourcing to final packaging.',
  },
  {
    icon: FlaskConical,
    title: 'Premium Ingredients',
    desc: 'Carefully selected surfactants, enzymes, and brighteners sourced from certified suppliers for consistent performance.',
  },
  {
    icon: Factory,
    title: 'Modern Production',
    desc: 'State-of-the-art automated manufacturing facility ensuring hygiene, precision, and consistent product quality at scale.',
  },
  {
    icon: Flag,
    title: 'Made in India',
    desc: 'Proudly designed and manufactured in India. Supporting local manufacturing and creating employment across the country.',
  },
];

export default function Manufacturing() {
  const headerRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="manufacturing" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div
            ref={headerRef}
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
          >
            <p className="text-brand-magenta text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Manufacturing Excellence
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-6">
              Built with
              <br />
              <span className="text-brand-blue">Precision.</span>
              <br />
              Trusted by Millions.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Behind every pack of Mislona is a commitment to manufacturing excellence.
              Our facility operates to the highest standards of hygiene, quality, and efficiency.
            </p>

            {/* India badge */}
            <div className="inline-flex items-center gap-3 bg-brand-sky-pale border border-brand-sky-light rounded-2xl px-6 py-4">
              <div className="flex gap-1">
                <div className="w-3 h-5 rounded-sm" style={{ background: '#FF9933' }} />
                <div className="w-3 h-5 rounded-sm" style={{ background: '#FFFFFF', border: '1px solid #e5e7eb' }} />
                <div className="w-3 h-5 rounded-sm" style={{ background: '#138808' }} />
              </div>
              <div>
                <div className="text-sm font-bold text-brand-blue">Made in India</div>
                <div className="text-xs text-gray-500">Proudly manufactured for Indian families</div>
              </div>
            </div>
          </div>

          {/* Right — pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <PillarCard key={p.title} pillar={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarCard({ pillar, index }: { pillar: (typeof pillars)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = pillar.icon;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
      className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-brand-sky-light hover:bg-brand-sky-pale/40 transition-all duration-300 group"
    >
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-blue text-white mb-4 group-hover:bg-brand-magenta transition-colors duration-300">
        <Icon size={18} />
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{pillar.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
    </div>
  );
}
