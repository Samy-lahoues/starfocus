import Link from 'next/link';
import EventBanner from '@/components/sections/EventBanner';
import NavBar from '@/components/sections/NavBar';
import Footer from '@/components/sections/Footer';

const terms = [
  'يجب أن يتراوح عمر المشارك بين 18 و35 سنة.',
  'المسابقة مفتوحة للطلبة الجامعيين ومنخرطي مؤسسات الشباب.',
  'يجب أن يتم إنتاج الأفلام القصيرة حصرياً باستخدام الهاتف المحمول مع التركيز على الفكرة والإبداع.',
  'يجب أن يعالج العمل المقترح أحد المحاور التالية: المواطنة، الذكاء الاصطناعي، البيئة والطاقات المتجددة، المقاولاتية وريادة الأعمال.',
  'يشترط الالتزام بحضور البرنامج الكامل الممتد على مدار 3 أيام من 6 إلى 8 جويلية 2026، بما في ذلك الورشات التدريبية في السيناريو والإخراج والمونتاج عبر الهاتف واستخدام الذكاء الاصطناعي.',
  'يتم إرسال الأعمال المنجزة إلى لجنة التحكيم في اليوم الثاني من التظاهرة 07 جويلية 2026 لمناقشتها وتقييمها.',
  'عدد المشاركين محدود بـ 20 مشاركاً فقط لهذه الطبعة.',
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cinema-black text-white">
      <EventBanner />
      <NavBar />

      <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-cinema-border bg-cinema-card/90 p-8 shadow-2xl shadow-black/30">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold-500">الشروط والأحكام</p>
          <h1 className="font-cinzel text-3xl font-bold text-white sm:text-4xl">
            شروط ومبادئ <span className="gold-gradient">مسابقة الأفلام القصيرة</span>
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-gray-400 sm:text-base">
            يرجى قراءة الشروط التالية بعناية قبل إتمام التسجيل، حيث تمثل هذه البنود أساس المشاركة في الفعالية.
          </p>
        </div>

        <div className="rounded-3xl border border-cinema-border bg-cinema-card/80 p-8 shadow-xl shadow-black/20">
          <ol className="space-y-4 text-sm leading-8 text-gray-300 sm:text-base">
            {terms.map((term, index) => (
              <li key={term} className="flex gap-3 rounded-2xl border border-cinema-border/70 bg-cinema-dark/70 p-4">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-sm font-semibold text-gold-500">
                  {index + 1}
                </span>
                <span className="text-right">{term}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/" className="btn-gold inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold">
            العودة إلى الصفحة الرئيسية
          </Link>
          <Link href="/#registration" className="btn-outline-gold inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold">
            الانتقال إلى التسجيل
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
