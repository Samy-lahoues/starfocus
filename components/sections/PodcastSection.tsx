import { ArrowRight, Play } from 'lucide-react';
import { RevealSection } from './SectionUtils';
import { YouTubeIcon } from '../icons/SocialIcons';

const episodes = [
  {
    number: '01',
    title: 'محمد مختاري الرياضي الخلوق - الموسم الثاني من بودكاست 180',
    desc: 'حوار ملهم مع الرياضي الخلوق محمد مختاري ضمن الموسم الثاني من "بودكاست 180"، يتناول مسيرته الرياضية الحافلة بالقيم والأخلاق وكيفية تحقيق التوازن بين النجاح الرياضي والسلوك القويم.',
  },
  {
    number: '02',
    title: 'يناير: احتفال رأس السنة الأمازيغية',
    desc: 'عرض توثيقي لتقاليد واحتفالات رأس السنة الأمازيغية "يناير"، يسلط الضوء على الأبعاد الثقافية والتاريخية لهذا الموروث الأصيل وأهميته كجزء من الهوية الوطنية.',
  },
  {
    number: '03',
    title: 'تحديات المسار المهني وإجابات صادمة - بودكاست 180',
    desc: 'مقطع تشويقي يستعرض إجابات غير متوقعة حول التحولات الكبرى في حياة الأفراد، وكيف يمكن لتغيير المجالات المهنية أن يؤدي إلى نتائج صادمة ومؤثرة، وذلك ضمن التحضيرات للموسم الثاني من البودكاست.',
  },
];

export default function PodcastSection() {
  return (
    <section id="podcast" className="py-32 bg-cinema-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cinema-crimson/5 blur-3xl" />
        <div className="absolute right-0 top-1/4 w-72 h-72 rounded-full bg-gold-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealSection>
            <div>
              <span className="text-gold-500 font-tajawal text-xs tracking-[0.3em] uppercase mb-4 block">البودكاست الخاص بنا</span>
              <h2 className="font-cinzel font-bold text-4xl sm:text-5xl text-white mb-4 leading-tight">
                بودكاست
                <br />
                <span className="gold-gradient">°180 درجة</span>
              </h2>
              <div className="gold-line w-20 mb-6" />
              <p className="text-gray-400 font-tajawal text-lg leading-relaxed mb-8 dir-rtl">
                لكل قصة وجهان. يستكشف بودكاستنا كلاهما — قالباً العدسة على السينما والمجتمع، ليطرح الأسئلة التي يتجنبها الإعلام التقليدي. وعيٌ اجتماعي عبر قوة الفن السابع.
              </p>
              <a
                href="https://www.youtube.com/@StarFocus10"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold"
              >
                <YouTubeIcon className="w-[18px] h-[18px]" />
                شاهد على يوتيوب
              </a>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="space-y-4">
              {episodes.map((ep, i) => (
                <div key={i} className="podcast-card rounded-xl p-6 group cursor-pointer">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cinema-charcoal border border-cinema-border group-hover:border-gold-500/40 flex items-center justify-center transition-colors">
                      <Play size={14} className="text-gold-500 ml-0.5" fill="currentColor" />
                    </div>
                    <div className="flex-1 dir-rtl">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-gold-500/50 font-cinzel text-xs tracking-wider">الحلقة {ep.number}</span>
                      </div>
                      <h4 className="text-white font-tajawal font-semibold text-sm mb-2 group-hover:text-gold-400 transition-colors">
                        {ep.title}
                      </h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{ep.desc}</p>
                    </div>
                  </div>
                </div>
              ))}

              <a
                href="https://www.youtube.com/@StarFocus10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-gold-500/60 hover:text-gold-400 text-sm font-tajawal py-2 transition-colors"
              >
                عرض كل الحلقات
                <ArrowRight size={14} className="rotate-180" />
              </a>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
