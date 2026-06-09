import { Clapperboard } from 'lucide-react';

export default function FilmStrip() {
  const frames = Array.from({ length: 20 });

  return (
    <div className="overflow-hidden w-full py-3 bg-cinema-charcoal border-y border-cinema-border" dir="ltr">
      <div className="flex animate-film-scroll" style={{ width: 'max-content' }}>
        {[...frames, ...frames].map((_, i) => (
          <div key={i} className="flex items-center gap-0 mx-1">
            <div className="w-5 h-8 bg-cinema-dark border border-cinema-border rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-cinema-border" />
            </div>
            <div className="w-16 h-8 bg-cinema-dark border border-cinema-border mx-0.5 flex items-center justify-center">
              <Clapperboard size={12} className="text-cinema-border" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
