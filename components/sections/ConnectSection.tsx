import { ArrowRight } from 'lucide-react';
import { RevealSection } from './SectionUtils';
import { YouTubeIcon, InstagramIcon, FacebookIcon } from '../icons/SocialIcons';

const socials = [
  {
    label: 'يوتيوب',
    handle: '@StarFocus10',
    href: 'https://www.youtube.com/@StarFocus10',
    icon: <YouTubeIcon className="w-[22px] h-[22px]" />,
    desc: 'شاهد بودكاست °180',
    color: 'hover:border-red-500/50 hover:text-red-400',
    action: 'اشترك'
  },
  {
    label: 'إنستغرام',
    handle: '@starfocus10',
    href: 'https://www.instagram.com/starfocus10/',
    icon: <InstagramIcon className="w-[22px] h-[22px]" />,
    desc: 'كواليس و Edits',
    color: 'hover:border-pink-500/50 hover:text-pink-400',
    action: 'تابعنا'
  },
  {
    label: 'فيسبوك',
    handle: 'StarFocus',
    href: 'https://www.facebook.com/profile.php?id=61574770616545',
    icon: <FacebookIcon className="w-[22px] h-[22px]" />,
    desc: 'الفعاليات والمجتمع',
    color: 'hover:border-blue-500/50 hover:text-blue-400',
    action: 'تابعنا'
  },
];

export default function ConnectSection() {
  return (
    <section id="connect" className="py-32 bg-cinema-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/3 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <RevealSection>
          <div className="text-center mb-16">
            <span className="text-gold-500 font-tajawal text-xs tracking-[0.3em] uppercase mb-4 block">أين تجدنا</span>
            <h2 className="font-cinzel font-bold text-4xl sm:text-5xl text-white mb-4 leading-5">
              انضم إلى <span className="gold-gradient">المجتمع</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-gray-500 font-tajawal max-w-xl mx-auto dir-rtl">
              تابع StarFocus على مختلف المنصات للحصول على أحدث المحتويات السينمائية، نقاشات الوعي الاجتماعي، ومتابعة فعالياتنا القادمة.
            </p>
          </div>
        </RevealSection>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socials.map((s, i) => (
            <RevealSection key={i}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`podcast-card rounded-2xl p-8 flex flex-col items-center text-center card-hover group border border-cinema-border transition-all duration-300 ${s.color}`}
              >
                <div className="w-16 h-16 rounded-full bg-cinema-charcoal border border-cinema-border group-hover:border-current flex items-center justify-center mb-5 text-gray-500 group-hover:text-current transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="font-cinzel font-semibold text-white text-base mb-1">{s.label}</h3>
                <p className="text-gold-500/60 text-xs font-tajawal mb-3 tracking-wide">{s.handle}</p>
                <p className="text-gray-600 text-xs">{s.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-xs text-gray-600 group-hover:text-current transition-colors">
                  {s.action} <ArrowRight size={12} className="rotate-180" />
                </div>
              </a>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
