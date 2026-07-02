"use client";

import Link from 'next/link';
import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ArrowRight } from 'lucide-react';
import { z } from 'zod';
import { RevealSection } from './SectionUtils';

const registrationSchema = z.object({
  firstTeamMember: z.string().trim().min(2, 'اسم العضو الأول يجب أن يتكون من حرفين على الأقل.'),
  secondTeamMember: z.string().trim().min(2, 'اسم العضو الثاني يجب أن يتكون من حرفين على الأقل.'),
  teamName: z.string().trim().min(2, 'اسم الفريق يجب أن يتكون من حرفين على الأقل.'),
  email: z.string().trim().email('يرجى إدخال بريد إلكتروني صالح.'),
  phone: z.string().trim().regex(/^05\d{8}$/, 'يرجى إدخال رقم هاتف سعودي صحيح يبدأ بـ 05.'),
});

export default function RegistrationSection() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'mvzjwylk';
  const [state, handleSubmitFormspree] = useForm(formId);
  const [formData, setFormData] = useState({
    firstTeamMember: '',
    secondTeamMember: '',
    teamName: '',
    email: '',
    phone: '',
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [termsError, setTermsError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [cooldownActive, setCooldownActive] = useState(false);
  const [cooldownTimeLeft, setCooldownTimeLeft] = useState(60);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);
  const [isClosingFeedback, setIsClosingFeedback] = useState(false);

  const allFieldsFilled = useMemo(() => {
    return Object.values(formData).every((value) => value.trim() !== '');
  }, [formData]);

  useEffect(() => {
    if (!cooldownActive) return;

    const timer = window.setInterval(() => {
      setCooldownTimeLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          setCooldownActive(false);
          return 60;
        }

        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [cooldownActive]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = event.target;

    setSubmitted(false);
    setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    if (feedback) setFeedback(null);

    if (type === 'checkbox') {
      setAcceptedTerms(checked);
      if (checked) setTermsError('');
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      firstTeamMember: '',
      secondTeamMember: '',
      teamName: '',
      email: '',
      phone: '',
    });
    setAcceptedTerms(false);
    setFieldErrors({});
    setTermsError('');
  };

  const showFeedback = (type: 'success' | 'error' | 'info', message: string) => {
    setFeedback({ type, message });
  };

  const dismissFeedback = () => {
    setIsClosingFeedback(true);
    window.setTimeout(() => {
      setFeedback(null);
      setIsClosingFeedback(false);
    }, 180);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (cooldownActive) {
      return;
    }

    const result = registrationSchema.safeParse(formData);

    if (!result.success) {
      const errors = Object.fromEntries(
        result.error.issues.map((issue) => [issue.path[0], issue.message])
      );
      setFieldErrors(errors);
      showFeedback('error', 'يرجى تصحيح الأخطاء قبل الإرسال.');
      return;
    }

    if (!acceptedTerms) {
      setTermsError('يجب الموافقة على الشروط والأحكام قبل إرسال الطلب.');
      showFeedback('error', 'يجب الموافقة على الشروط والأحكام قبل إرسال الطلب.');
      return;
    }

    setTermsError('');
    setFieldErrors({});
    setSubmitted(true);
    setCooldownActive(true);
    setCooldownTimeLeft(60);
    handleSubmitFormspree(event);
    resetForm();
    showFeedback('success', 'تم إرسال طلبك بنجاح. سنتواصل معك قريبًا.');
  };

  return (
    <section id="registration" className="py-24 bg-cinema-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.08),transparent_40%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <RevealSection>
          <div className="text-center mb-12">
            <span className="mb-4 block text-xs uppercase tracking-[0.35em] text-gold-500">تسجيل الفريق</span>
            <h2 className="font-cinzel text-4xl font-bold text-white sm:text-5xl">
              سجل <span className="gold-gradient">فريقك</span> الآن
            </h2>
            <div className="gold-line mx-auto mb-6 mt-5 w-24" />
            {/* <p className="mx-auto max-w-2xl font-tajawal text-gray-500 dir-rtl">
              املأ النموذج وسنرسل لك تفاصيل المشاركة في فعالية تصوير الأفلام القصيرة بالهاتف مع دعم من StarFocus.
            </p> */}
          </div>
        </RevealSection>
        <div className="flex justify-center">
        {/* <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"> */}
          {/* <RevealSection>
            <div className="rounded-3xl border border-cinema-border bg-cinema-card/80 p-8 shadow-2xl shadow-black/30">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-full border border-gold-500/30 bg-gold-500/10 p-3 text-gold-500">
                  <Clapperboard className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-cinzel text-lg font-semibold text-white">ما الذي ستحصل عليه؟</p>
                  <p className="text-sm text-gray-500">مجموعة من التحديات والفرص الإبداعية.</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-400">
                <div className="flex items-start gap-3 rounded-2xl border border-cinema-border/70 bg-cinema-dark/70 p-4">
                  <Camera className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  <p>تدريب سريع على تصوير أفلام قصيرة بالهاتف مع نصائح فنية عملية.</p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-cinema-border/70 bg-cinema-dark/70 p-4">
                  <Users className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  <p>مشاركة فريقية في تحدي إبداعي بصياغة سينمائية بسيطة ومؤثرة.</p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-cinema-border/70 bg-cinema-dark/70 p-4">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  <p>فرصة لعرض العمل النهائي أمام المجتمع السينمائي والمهتمين.</p>
                </div>
              </div>
            </div>
          </RevealSection> */}

          <RevealSection className="lg:w-[750px]">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-cinema-border bg-cinema-card/90 p-8 shadow-2xl shadow-black/30"
            >
              <input
                type="hidden"
                name="message"
                value={`Team: ${formData.teamName} | Members: ${formData.firstTeamMember}, ${formData.secondTeamMember} | Email: ${formData.email} | Phone: ${formData.phone}`}
              />

              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-gray-400 md:col-span-2">
                  <span className="mb-2 block">اسم الفريق</span>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-cinema-border bg-cinema-dark px-4 py-3 text-white outline-none transition focus:border-gold-500"
                    placeholder="مثال: فريق اللمعة"
                  />
                  {fieldErrors.teamName && <p className="mt-2 text-sm text-red-400">{fieldErrors.teamName}</p>}
                </label>

                <label className="text-sm text-gray-400">
                  <span className="mb-2 block">العضو الأول في الفريق</span>
                  <input
                    type="text"
                    name="firstTeamMember"
                    value={formData.firstTeamMember}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-cinema-border bg-cinema-dark px-4 py-3 text-white outline-none transition focus:border-gold-500"
                    placeholder="اسم العضو الأول"
                  />
                  {fieldErrors.firstTeamMember && <p className="mt-2 text-sm text-red-400">{fieldErrors.firstTeamMember}</p>}
                </label>

                <label className="text-sm text-gray-400">
                  <span className="mb-2 block">العضو الثاني في الفريق</span>
                  <input
                    type="text"
                    name="secondTeamMember"
                    value={formData.secondTeamMember}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-cinema-border bg-cinema-dark px-4 py-3 text-white outline-none transition focus:border-gold-500"
                    placeholder="اسم العضو الثاني"
                  />
                  {fieldErrors.secondTeamMember && <p className="mt-2 text-sm text-red-400">{fieldErrors.secondTeamMember}</p>}
                </label>

                <label className="text-sm text-gray-400">
                  <span className="mb-2 block">البريد الإلكتروني</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-cinema-border bg-cinema-dark px-4 py-3 text-white outline-none transition focus:border-gold-500"
                    placeholder="name@example.com"
                  />
                  {fieldErrors.email && <p className="mt-2 text-sm text-red-400">{fieldErrors.email}</p>}
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </label>

                <label className="text-sm text-gray-400">
                  <span className="mb-2 block">رقم الهاتف</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-cinema-border bg-cinema-dark px-4 py-3 text-white outline-none transition focus:border-gold-500"
                    placeholder="05XXXXXXXX"
                  />
                  {fieldErrors.phone && <p className="mt-2 text-sm text-red-400">{fieldErrors.phone}</p>}
                </label>
              </div>

              <label className="mt-6 flex items-start gap-3 rounded-2xl border border-cinema-border bg-cinema-dark/80 p-4 text-sm text-gray-300">
                <input
                  type="checkbox"
                  name="acceptedTerms"
                  checked={acceptedTerms}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-cinema-border bg-cinema-dark text-gold-500 focus:ring-gold-500"
                />
                <span>
                  أوافق على{' '}
                  <Link href="/terms" className="text-gold-500 underline underline-offset-4">
                    الشروط والأحكام
                  </Link>{' '}
                  الخاصة بالحدث.
                </span>
              </label>

              {termsError && <p className="mt-3 text-sm text-red-400">{termsError}</p>}

              {feedback && (
                <div
                  className={`mt-4 flex items-start justify-between gap-3 rounded-2xl border px-4 py-3 text-sm shadow-lg ${
                    isClosingFeedback ? 'animate-[fadeOut_0.18s_ease-out_forwards]' : 'animate-[slideDown_0.25s_ease-out]'
                  } ${
                    feedback.type === 'success'
                      ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                      : feedback.type === 'error'
                        ? 'border-red-500/30 bg-red-500/10 text-red-300'
                        : 'border-gold-500/30 bg-gold-500/10 text-gold-300'
                  }`}
                >
                  <p className="leading-6">{feedback.message}</p>
                  <button
                    type="button"
                    onClick={dismissFeedback}
                    className="text-sm font-semibold opacity-80 transition hover:opacity-100"
                    aria-label="إغلاق الرسالة"
                  >
                    ×
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={state.submitting || cooldownActive || !allFieldsFilled || !acceptedTerms}
                className="btn-gold mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
              >
                {cooldownActive ? `أعد المحاولة خلال ${cooldownTimeLeft}s` : state.submitting ? 'جاري الإرسال...' : 'أرسل الطلب'} <ArrowRight className="h-4 w-4" />
              </button>

              {cooldownActive && (
                <div className="mt-4 rounded-2xl border border-gold-500/20 bg-gold-500/10 px-4 py-3 text-sm text-gold-300 animate-[slideDown_0.25s_ease-out]">
                  يرجى الانتظار <span className="font-semibold">{cooldownTimeLeft}</span> ثانية قبل إرسال طلب جديد.
                </div>
              )}
            </form>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
