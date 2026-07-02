"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { starfocusLogo } from '@/constants/images';

const links = [
  { label: 'عن النادي', href: '#about' },
  { label: 'بودكاست °180', href: '#podcast' },
  { label: 'القضية اللغز', href: '#mystery' },
  { label: 'الفعاليات', href: '#events' },
  { label: 'التسجيل', href: '#registration' },
  { label: 'تواصل معنا', href: '#connect' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cinema-dark/95 backdrop-blur-md border-b border-cinema-border shadow-2xl' : 'bg-cinema-black/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <Image
            width={80}
            height={35}
            src={starfocusLogo}
            alt="StarFocus"
          />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-tajawal text-gray-400 hover:text-gold-500 transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cinema-dark/98 border-b border-cinema-border px-6 pb-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-400 hover:text-gold-500 transition-colors border-b border-cinema-border/50 text-sm tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
