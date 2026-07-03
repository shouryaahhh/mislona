import { ArrowRight, Star, CheckCircle2, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

const benefits = [
  'Deep Clean Technology',
  'Tough Stain Removal',
  'Fresh Fragrance',
  'Machine & Hand Wash',
];

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const handler = () => el.classList.add('animate-float');
    setTimeout(handler, 800);
  }, []);

  return (
    <section className="relative min-h-screen bg-brand-blue overflow-hidden flex items-center">
      {/* Background geometry */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue-mid opacity-30 skew-x-[-8deg] translate-x-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-sky opacity-10 -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-20 left-1/4 w-3 h-3 rounded-full bg-brand-magenta opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-brand-sky-light opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen lg:py-24">
          {/* Left content */}
          <div className="text-white space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/90">
                New Improved Formula
              </span>
            </div>

            <div>
              <h1 className="font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
                Powerful
                <br />
                Cleaning.
                <br />
                <span className="text-brand-sky-light">Brilliant</span>
                <br />
                <span className="relative inline-block">
                  Whiteness.
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-brand-magenta rounded-full" />
                </span>
              </h1>
            </div>

            <p className="text-white/75 text-lg leading-relaxed max-w-md font-light">
              Mislona Detergent Powder with Deep Clean Technology removes the toughest stains
              while keeping your clothes fresh and brilliantly white.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-2">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand-sky-light flex-shrink-0" />
                  <span className="text-sm text-white/85 font-medium">{b}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-blue font-bold px-8 py-4 rounded-full hover:bg-brand-sky-pale transition-all duration-200 hover:shadow-lg group"
              >
                Explore Products
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/reviews"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                Read Reviews
              </a>
            </div>
            {/* Available Packs */}
<div className="pt-6 border-t border-white/15">

  {/* Heading */}
  <div className="flex items-center justify-center gap-3 mb-6">
    <div className="h-px flex-1 bg-white/15" />

    <Sparkles
      size={14}
      className="text-white fill-white"
    />

    <span className="uppercase tracking-[0.25em] text-xs font-bold text-white/80">
      Available In
    </span>

    <Sparkles
      size={14}
      className="text-white fill-white"
    />

    <div className="h-px flex-1 bg-white/15" />
  </div>

  <div className="flex items-center">

    {/* Left */}
    <div className="flex-1 text-center">

      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-full bg-brand-sky/20 flex items-center justify-center">

          <Star
            size={22}
            className="fill-white text-white"
          />

        </div>
      </div>

      <h3 className="text-4xl font-black text-white">
        1 KG
      </h3>

      <p className="mt-3 text-white/70 text-lg">
        Everyday Use
      </p>

    </div>

    <div className="mx-8 w-px h-36 bg-white/15" />

    {/* Right */}
    <div className="flex-1 text-center">

      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">

          <Star
            size={26}
            className="fill-white text-white"
          />

        </div>
      </div>

      <h3 className="text-4xl font-black text-white">
        4+1 KG
      </h3>

      <p className="mt-3 text-brand-sky-light text-lg font-bold">
        1 KG FREE
      </p>

    </div>

  </div>

</div>


     </div>

          {/* Right — product image */}
          <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-brand-sky opacity-20 blur-3xl scale-110" />
              <img
                ref={imgRef}
                src="/images/mislona-pack.png"
                alt="Mislona Detergent Powder 1kg Pack"
                className="relative w-64 sm:w-72 lg:w-80 xl:w-[360px] object-contain drop-shadow-2xl transition-all duration-300 hover:scale-105"
              />
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-brand-magenta text-white text-xs font-bold px-3 py-2 rounded-2xl shadow-lg rotate-6">
                Deep Clean
                <br />Technology
              </div>
              <div className="absolute -bottom-2 -left-4 bg-white text-brand-blue text-xs font-bold px-3 py-2 rounded-2xl shadow-lg -rotate-3">
                Suitable for
                <br />Top & Front Load
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 64L48 58.7C96 53.3 192 42.7 288 42.7C384 42.7 480 53.3 576 56C672 58.7 768 53.3 864 45.3C960 37.3 1056 26.7 1152 24C1248 21.3 1344 26.7 1392 29.3L1440 32V64H1392C1344 64 1248 64 1152 64C1056 64 960 64 864 64C768 64 672 64 576 64C480 64 384 64 288 64C192 64 96 64 48 64H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
