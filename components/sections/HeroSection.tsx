import { ArrowRight, ChevronDown, Clapperboard, Eye, Film, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section dir="rtl" id="hero" className="relative min-h-screen hero-bg flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute inset-0 vignette" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
          <div className="gold-line w-16" />
          <span className="text-gold-500 font-tajawal text-xs tracking-[0.3em] uppercase">نادي السينما</span>
          <div className="gold-line w-16" />
        </div>

        <h1
          className="font-cinzel font-black text-5xl sm:text-7xl md:text-8xl text-white mb-2 tracking-tight leading-none animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          STAR<span className="gold-gradient">FOCUS</span>
        </h1>

        <p
          className="font-playfair italic text-xl sm:text-2xl text-gray-400 mb-8 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          Cinema Vibes Only
        </p>

        <div
          className="flex items-center justify-center gap-6 mb-12 text-sm text-gray-500 font-tajawal tracking-widest animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <span className="flex items-center gap-2"><Clapperboard size={14} className="text-gold-500" /> Scenes</span>
          <span className="text-gold-500/40">•</span>
          <span className="flex items-center gap-2"><Eye size={14} className="text-gold-500" /> Edits</span>
          <span className="text-gold-500/40">•</span>
          <span className="flex items-center gap-2"><Film size={14} className="text-gold-500" /> Analyses</span>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href="https://www.youtube.com/@StarFocus10"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold tracking-wide"
          >
            <Play size={16} fill="currentColor" />
            شاهد بودكاست °180
          </a>
          <a
            href="#about"
            className="btn-outline-gold flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold tracking-wide"
          >
            اكتشف StarFocus
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 hover:text-gold-500 transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
