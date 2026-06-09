import { CircleDot, Clock, Search, Star, Users } from 'lucide-react';
import { RevealSection } from './SectionUtils';
import { mystercasePoster } from '@/constants/images';
import Image from "next/image";

const featureItems = [
  { icon: <Users size={18} />, label: 'لعب جماعي', sub: 'تجربة جماعية' },
  { icon: <Clock size={18} />, label: '40–45 دقيقة', sub: 'لكل جلسة' },
  { icon: <Search size={18} />, label: 'قضايا حقيقية', sub: 'قتل وغموض' },
  { icon: <Star size={18} />, label: 'عش الدور', sub: 'كن أنت المحقق' },
];

export default function MysterySection() {
  return (
    <section id="mystery" className="py-32 relative overflow-hidden bg-cinema-dark">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-cinema-dark via-cinema-crimson/5 to-cinema-dark" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <RevealSection>
          <div className="text-center mb-16">
            <span className="text-gold-500 font-tajawal text-xs tracking-[0.3em] uppercase mb-4 block">أحدث مشاريعنا</span>
            <h2 className="font-cinzel font-bold text-4xl sm:text-5xl text-white mb-4">
              Mystery <span className="gold-gradient">Case</span>
            </h2>
            <p className="font-playfair italic text-gold-500/60 text-xl mb-2">القضية اللغز</p>
            <div className="gold-line w-24 mx-auto" />
          </div>
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <RevealSection>
            <div className="relative">
              <div className="mystery-glow rounded-2xl overflow-hidden bg-cinema-card border border-cinema-border">
                <Image src={mystercasePoster} alt={"mysterycase-poster"} width={480} height={600} className='w-full' />
              </div>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="dir-rtl">
              <h3 className="font-cinzel font-bold text-3xl text-white mb-6 leading-tight">
                كن أنت
                <br />
                <span className="gold-gradient">المحقق</span>
              </h3>
              <p className="text-gray-400 font-tajawal leading-relaxed mb-8 text-lg">
                خطوة واحدة داخل الغرفة وستجد نفسك في عالم مليء بالغموض. &ldquo;القضية اللغز&rdquo; هي تجربة تحقيق تفاعلية حية، حيث يكون أمامك وأمام فريقك من 40 إلى 45 دقيقة لحل جريمة قتل أو وفاة مشبوهة. كل دليل له قيمته.. وكل ثانية تصنع الفارق.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {featureItems.map((item, i) => (
                  <div key={i} className="podcast-card rounded-xl p-4 flex items-center gap-4">
                    <div className="text-gold-500 flex-shrink-0">{item.icon}</div>
                    <div>
                      <div className="text-white text-sm font-semibold font-tajawal">{item.label}</div>
                      <div className="text-gray-600 text-xs">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-cinema-crimson/10 border border-cinema-crimson/20 flex-1">
                  <CircleDot size={16} className="text-cinema-crimson-light flex-shrink-0 animate-pulse" />
                  <span className="text-sm font-tajawal text-gray-400">
                    <span className="text-cinema-crimson-light font-semibold">متاح الآن</span> — احجز غرفتك وعش تجربة المحقق الحقيقية
                  </span>
                </div>
                <a
                  href="https://mysterycase-xi.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-8 py-4 rounded-xl text-sm font-bold whitespace-nowrap"
                >
                  زيارة الموقع
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
