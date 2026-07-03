import { useEffect, useRef } from 'react';

const products = [
  {
    name: 'Toilet Cleaner',
    image: '/images/products/toilet-cleaner.png',
    desc: 'Powerful toilet cleaning and germ protection.',
    comingSoon: true,
  },
  {
    name: 'Dishwash Liquid',
    image: '/images/products/dishwash-liquid.png',
    desc: 'Tough on grease, gentle on hands.',
    comingSoon: true,
  },
  {
    name: 'Detergent Powder',
    image: '/images/products/detergent-powder.png',
    desc: 'Brilliant clean and long-lasting freshness.',
    featured: true,
    comingSoon: false,
  },
  {
    name: 'Phenyl',
    image: '/images/products/phenyl.png',
    desc: 'Kills germs and leaves a fresh fragrance.',
    comingSoon: true,
  },
  {
    name: 'Liquid Detergent',
    image: '/images/products/liquid-detergent.png',
    desc: 'Deep cleaning for all fabrics.',
    comingSoon: true,
  },
  {
    name: 'Dishwash Cake',
    image: '/images/products/dishwash-cake.png',
    desc: 'Powerful grease removal with lemon freshness.',
    comingSoon: true,
  },
  {
    name: 'Hand Wash',
    image: '/images/products/hand-wash.png',
    desc: 'Gentle on skin, tough on germs.',
    comingSoon: true,
  },
  {
    name: 'Washing Cake',
    image: '/images/products/washing-cake.png',
    desc: 'Strong stain removal and fabric care.',
    comingSoon: true,
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Products() {
  const sectionRef = useReveal();

  return (
    <section id="products" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={sectionRef} className="reveal text-center mb-16">
          <p className="text-brand-magenta text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Product Range
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Explore Our Product Range
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Premium cleaning solutions for every household need. More innovative Mislona products are coming soon.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Explore the growing Mislona family of cleaning products.
            More exciting launches are coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
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
          }, index * 80);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  const isFeatured = !!product.featured;

  return (
    <div
  ref={ref}
  className={`relative rounded-2xl overflow-hidden border transition-all duration-500 group cursor-pointer hover:scale-105 ${
    !isFeatured ? 'coming-soon-card' : ''
  }
      `}
      style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease, border-color 0.3s ease' }}
    >
      {/* Background */}
      <div
  className={`p-6 flex flex-col items-center text-center gap-4 ${
    isFeatured
      ? 'bg-gradient-to-b from-brand-blue to-brand-blue-mid'
      : 'bg-gradient-to-b from-brand-sky-pale to-white'
  }`}
>
        {/* Badge */}
{!isFeatured && (
  <div className="absolute top-5 right-[-38px] rotate-45 bg-white text-brand-blue font-bold text-xs px-10 py-2 shadow-md z-20">
    COMING SOON
  </div>
)}
        {isFeatured && (
          <div className="absolute top-4 right-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full z-20">
            AVAILABLE NOW
          </div>
        )}
        {/* Product image */}
        <div className="relative w-full flex justify-center py-4">
          <div className={`absolute inset-0 rounded-full blur-2xl opacity-30 ${isFeatured ? 'bg-brand-sky-light' : 'bg-brand-sky'}`} />
          <img
          src={product.image}
          alt={product.name}
          className="relative h-44 w-auto object-contain drop-shadow-lg transition-all duration-500 group-hover:scale-110"
        />
        </div>

        {/* Weight */}
        <div>
          <div className={`text-3xl font-black ${isFeatured ? 'text-white' : 'text-brand-blue'}`}>
            {product.name}
          </div>
          <div className={`text-xs font-semibold tracking-widest uppercase mt-0.5 ${isFeatured ? 'text-brand-sky-light' : 'text-gray-400'}`}>
          {isFeatured ? 'Available Now' : 'Coming Soon'}
          </div>
        </div>

        <p className={`text-sm leading-relaxed ${isFeatured ? 'text-white/80' : 'text-gray-500'}`}>
          {product.desc}
        </p>
      </div>
    </div>
  );
}
