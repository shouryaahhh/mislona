import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Why Mislona', href: '#why' },
  { label: 'Manufacturing', href: '#manufacturing' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Distributors', href: '#distributors' },
  { label: 'Contact', href: '#contact' },
];

const legal = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Cookie Policy', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="font-black text-3xl italic text-white tracking-tight">Mislona</div>
              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-magenta mt-0.5">
                Power of Cleanliness
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premium detergent powder with Deep Clean Technology.
              Trusted by millions of Indian families for brilliant whiteness and tough stain removal.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-green-600 flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
              <a
                href="tel:+919837042508"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-blue flex items-center justify-center transition-colors duration-200"
                aria-label="Phone"
              >
                <Phone size={15} />
              </a>
              <a
                href="mailto:mislonateam@gmail.com"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-magenta flex items-center justify-center transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-5">
              Our Products
            </h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
            {[
              'Detergent Powder',
              'Liquid Detergent',
              'Toilet Cleaner',
              'Phenyl',
              'Dishwash Liquid',
              'Dishwash Cake',
              'Hand Wash',
              'Washing Cake',
            ].map((product) => (
              <li key={product}>
                <a
                  href="#products"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {product}
                </a>
              </li>
            ))}
          </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-brand-sky mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-white/80">+91 9837042508</div>
                  <div className="text-xs text-white/40">Mon – Sat, 9 AM – 6 PM</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-brand-sky mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-white/80">mislonateam@gmial.com</div>
                  <div className="text-xs text-white/40">Reply within 24 hours</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-brand-sky mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-white/80">Mislona Industries</div>
                  <div className="text-xs text-white/40">Made in India</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Mislona Detergent Powder. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legal.map((l) => (
              <a key={l.label} href={l.href} className="text-xs text-white/40 hover:text-white/70 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

