import { useEffect, useRef } from 'react';
import { Sparkles, Zap, Wind, WashingMachine, Hand, IndianRupee } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Deep Clean Technology',
    desc: 'Advanced formula penetrates deep into fabric fibres to lift and dissolve stubborn stains at the molecular level.',
    color: 'bg-brand-blue text-white',
    accent: 'text-brand-blue',
  },
  {
    icon: Sparkles,
    title: 'Tough Stain Removal',
    desc: 'From grass to grease, curry to coffee — Mislona tackles the toughest stains with unmatched efficiency.',
    color: 'bg-brand-magenta text-white',
    accent: 'text-brand-magenta',
  },
  {
    icon: Wind,
    title: 'Fresh Fragrance',
    desc: 'Long-lasting floral freshness that stays with your clothes all day, keeping you confident.',
    color: 'bg-brand-sky text-white',
    accent: 'text-brand-sky',
  },
  {
    icon: WashingMachine,
    title: 'Machine Wash Compatible',
    desc: 'Specially formulated for top-load and front-load machines. Low-foam formula for optimal machine performance.',
    color: 'bg-brand-blue-mid text-white',
    accent: 'text-brand-blue-mid',
  },
  {
    icon: Hand,
    title: 'Hand Wash Compatible',
    desc: 'Gentle on hands, tough on stains. Pre-soak in Mislona solution for extra-difficult stains.',
    color: 'bg-brand-blue text-white',
    accent: 'text-brand-blue',
  },
  {
    icon: IndianRupee,
    title: 'Value for Money',
    desc: 'Premium cleaning power at an everyday price. More washes per kg, meaning real savings for your family.',
    color: 'bg-brand-magenta text-white',
    accent: 'text-brand-magenta',
  },
];

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

export default function WhyMislona() {
  const headerRef = useReveal();

  return (
    <section id="why" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
          className="text-center mb-16"
        >
          <p className="text-brand-magenta text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Science Behind the
            <span className="text-brand-blue"> Shine</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Six reasons why millions of Indian families trust Mislona for their everyday laundry.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const ref = useReveal(index * 90);
  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
      className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-sky-light hover:shadow-lg hover:shadow-brand-sky/10 transition-all duration-300 group"
    >
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-200`}>
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
    </div>
  );
}
