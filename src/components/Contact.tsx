import { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from 'lucide-react';

const contacts = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9837042508',
    sub: 'Mon – Sat, 9 AM – 6 PM',
    href: 'tel:+919876543210',
    color: 'bg-brand-blue',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 63980 16560',
    sub: 'Quick response guaranteed',
    href: 'https://wa.me/919876543210',
    color: 'bg-green-600',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'mislonateam@gmail.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:mislonateam@gmail.com',
    color: 'bg-brand-magenta',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Mislona Industries',
    sub: 'India',
    href: '#',
    color: 'bg-brand-sky',
  },
];

export default function Contact() {
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
          className="text-center mb-16"
        >
          <p className="text-brand-magenta text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            We'd Love to
            <span className="text-brand-blue"> Hear From You</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Whether you're a consumer, retailer, or distributor — our team is always ready to help.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {contacts.map((c, i) => (
            <ContactCard key={c.label} contact={c} index={i} />
          ))}
        </div>

        {/* WhatsApp CTA strip */}
        <div className="bg-brand-blue rounded-3xl p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-white text-center sm:text-left">
            <div className="text-xl font-black mb-1">Chat with us on WhatsApp</div>
            <div className="text-white/70 text-sm">Get instant support, product info, and distributor details.</div>
          </div>
          <a
            href="https://wa.me/916398016560"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-full transition-colors duration-200 flex-shrink-0"
          >
            <MessageCircle size={18} />
            Open WhatsApp
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ contact, index }: { contact: (typeof contacts)[0]; index: number }) {
  const ref =useRef<HTMLAnchorElement>(null);;
  const Icon = contact.icon;

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

  return (
    <a
      ref={ref}
      href={contact.href}
      target={contact.href.startsWith('http') ? '_blank' : undefined}
      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
      className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-sky-light hover:shadow-md transition-all duration-300 group block"
    >
      <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${contact.color} text-white mb-4 group-hover:scale-110 transition-transform duration-200`}>
        <Icon size={20} />
      </div>
      <div className="text-xs font-bold text-gray-400 tracking-wide uppercase mb-1">{contact.label}</div>
      <div className="font-bold text-gray-900 text-sm mb-1">{contact.value}</div>
      <div className="text-xs text-gray-400">{contact.sub}</div>
    </a>
  );
}

