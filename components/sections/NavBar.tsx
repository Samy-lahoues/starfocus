"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { starfocusLogo } from '@/constants/images';
import { YouTubeIcon } from '../icons/SocialIcons';

const links = [
  { label: 'عن النادي', href: '#about' },
  { label: 'بودكاست °180', href: '#podcast' },
  { label: 'القضية اللغز', href: '#mystery' },
  { label: 'الفعاليات', href: '#events' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cinema-dark/95 backdrop-blur-md border-b border-cinema-border shadow-2xl' : 'bg-transparent'
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

        <a
          href="https://www.youtube.com/@StarFocus10"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex btn-gold items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
        >
          <YouTubeIcon className="w-4 h-4" />
          شاهد الآن
        </a>

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
