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

        <RevealSection>
          <div className="mt-16 max-w-5xl mx-auto rounded-3xl border border-cinema-border bg-cinema-charcoal/70 p-4 sm:p-6 shadow-[0_0_40px_rgba(0,0,0,0.25)]">
            <div className="mb-5 text-center md:text-right">
              <p className="text-gold-500 font-tajawal text-xs tracking-[0.3em] uppercase mb-3">تجدنا في</p>
              <h3 className="font-cinzel font-bold text-white text-3xl sm:text-4xl mb-2 leading-tight">
                مركز الترفيه العلمي
              </h3>
              <p className="text-gold-500/80 font-tajawal text-sm mb-4 tracking-wide">سيدهم جعفر — البويرة</p>
              <p className="text-gray-500 font-tajawal dir-rtl text-sm leading-relaxed">
                StarFocus تعمل وتنمو داخل CLS، المركز الذي يجمع الشغف والعلم معاً. هنا تنطلق أفكارنا السينمائية، وهنا نبني مجتمعاً من العاشقين للسينما والإبداع.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-cinema-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.1502622260878!2d3.901041299999999!3d36.3813563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128c2f7da4ffe005%3A0x5c953b4cbdef0595!2sCentre%20de%20loisir%20scientifique%20(CLS)%20sidhoum%20djaafer!5e0!3m2!1sen!2sdz!4v1783170534952!5m2!1sen!2sdz"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Location of CLS"
                className="w-full h-[320px] sm:h-[420px]"
              />
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
