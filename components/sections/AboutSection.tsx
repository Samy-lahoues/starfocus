import { ExternalLink, Film, Mic, Popcorn, CircleDot } from 'lucide-react';
import { RevealSection } from './SectionUtils';

const pillars = [
  {
    icon: <Film size={24} />,
    title: 'تحليل المشاهد',
    desc: 'غوص عميق في اللغة السينمائية — التأطير، الألوان، الصوت، والقصة التي تحرك مشاعر الجمهور.',
  },
  {
    icon: <Popcorn size={24} />,
    title: 'لعشاق السينما الحقيقيين',
    desc: 'مساحة صُنعت من قِبل مهووسي الأفلام، لأجل مهووسي الأفلام. لا مكان للمشاهدين العابرين هنا، فقط للشغوفين بالسينما.',
  },
  {
    icon: <CircleDot size={24} />,
    title: 'الوعي الاجتماعي',
    desc: 'نستخدم السينما كعدسة لنقاش القضايا الواقعية — المخدرات، الجريمة، العلاقات، والطبيعة البشرية.',
  },
  {
    icon: <Mic size={24} />,
    title: 'بودكاست °180',
    desc: 'بودكاستنا الشهير الذي يقلب وجهات النظر حول الأفلام، ليبحث عما يحدث على كلا جانبي الكاميرا.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-cinema-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <RevealSection>
          <div className="text-center mb-20">
            <span className="text-gold-500 font-tajawal text-xs tracking-[0.3em] uppercase mb-4 block">من نحن</span>
            <h2 className="font-cinzel font-bold text-4xl sm:text-5xl text-white mb-6 max-md:leading-14">
              التجربة <span className="gold-gradient">السينمائية الكاملة</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-gray-400 font-tajawal text-lg max-w-2xl mx-auto leading-relaxed dir-rtl">
              StarFocus ليس مجرد نادي — بل هو حراك لكل من يؤمن بأن السينما هي أقوى مرآة خلقتها البشرية لتعكس واقع المجتمع. من مقرنا في مركز الترفيه العلمي بالبويرة (CLS)، نحن نعيش ونتنفس كل كادر سينمائي.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <RevealSection key={i}>
              <div
                className="card-hover podcast-card rounded-2xl p-8 text-center h-full"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-5 text-gold-500">
                  {p.icon}
                </div>
                <h3 className="font-cinzel font-semibold text-white text-base mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-tajawal dir-rtl">{p.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection className="mt-16">
          <div className="rounded-2xl border border-cinema-border bg-cinema-card p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
              <ExternalLink size={28} className="text-gold-500" />
            </div>
            <div className="flex-1 text-center sm:text-right dir-rtl">
              <h3 className="font-cinzel font-semibold text-white text-xl mb-2">جزء من مركز الترفيه العلمي بالبويرة</h3>
              <p className="text-gray-500 font-tajawal text-sm leading-relaxed">
                تنشط StarFocus بكل فخر داخل مجتمع CLS Bouira — الذي يمثل قطباً للثقافة، الإبداع، والفعاليات الشبابية في البويرة.
              </p>
            </div>
            <a
              href="https://clsbouira.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold flex-shrink-0"
            >
              قم بزيارة CLS Bouira
              <ExternalLink size={14} />
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
