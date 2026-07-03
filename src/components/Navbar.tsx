import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from "react-router-dom";

const links = [
  { label: 'Products', href: '#products' },
  { label: 'Why Mislona', href: '#why' },
  { label: 'Manufacturing', href: '#manufacturing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="flex flex-col leading-none">
              <span
                className={`font-black text-2xl lg:text-3xl tracking-tight transition-colors duration-300 ${
                  'text-brand-blue'
                }`}
                style={{ fontStyle: 'italic' }}
              >
                Mislona
              </span>
              <span
                className={`text-[9px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${
                  scrolled ? 'text-brand-magenta' : 'text-brand-sky-light'
                }`}
              >
                Power of Cleanliness
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) =>
  l.href.startsWith("/") ? (
    <Link
      key={l.href}
      to={l.href}
      className="text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-magenta text-gray-600"
    >
      {l.label}
    </Link>
  ) : (
    <a
      key={l.href}
      href={l.href}
      className="text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-magenta text-gray-600"
    >
      {l.label}
    </a>
  )
)}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+91XXXXXXXXXX"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
                scrolled ? 'text-brand-blue' : 'text-white/90 hover:text-white'
              }`}
            >
              <Phone size={14} />
              Call Us
            </a>
            <Link
              to="/review"
              className="bg-brand-magenta text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-magenta-light transition-colors duration-200"
            >
              Reviews
            </Link>
            <a
              href="#distributors"
              className="bg-brand-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-blue-dark transition-colors duration-200"
            >

              Become a Distributor
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

{/* Mobile menu */}
<div
  className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
    open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
  }`}
>
  <nav className="px-4 py-4 flex flex-col gap-1">
    {links.map((l) =>
  l.href.startsWith("/") ? (
    <Link
      key={l.href}
      to={l.href}
      onClick={() => setOpen(false)}
      className="text-gray-700 font-medium py-2.5 px-3 rounded-lg hover:bg-brand-sky-pale hover:text-brand-blue transition-colors"
    >
      {l.label}
    </Link>
  ) : (
    <a
      key={l.href}
      href={l.href}
      onClick={() => setOpen(false)}
      className="text-gray-700 font-medium py-2.5 px-3 rounded-lg hover:bg-brand-sky-pale hover:text-brand-blue transition-colors"
    >
      {l.label}
    </a>
  )
)}
        <Link
          to="/review"
          onClick={() => setOpen(false)}
          className="mt-2 bg-brand-magenta text-white font-semibold py-3 px-3 rounded-xl text-center hover:bg-brand-magenta-light transition-colors"
        >
          Reviews
        </Link>
    <a
      href="#distributors"
      onClick={() => setOpen(false)}
      className="mt-2 bg-brand-blue text-white font-semibold py-3 px-3 rounded-xl text-center hover:bg-brand-blue-dark transition-colors"
    >
      Become a Distributor
    </a>
  </nav>
</div>
</header>
  );
}