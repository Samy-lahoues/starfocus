"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { RevealSection } from './SectionUtils';
import { rationalizeFood, shortFilmEvent } from '@/constants/images';

const events = [
  {
    title: "الإبداع في جيبك",
    subtitle: "Short Film Event",
    arabicSubtitle: "تظاهرة الأفلام القصيرة المصورة بالهاتف",
    image: shortFilmEvent,
    description: "مهرجان سينمائي وتدريبي مميز يثبت أن كل هاتف ذكي يحمل كاميرا سينمائية، وكل صانع محتوى لديه قصة تستحق أن تروى.",
    fullDescription: "مهرجان سينمائي وتدريبي مميز يثبت أن كل هاتف ذكي يحمل كاميرا سينمائية، وكل صانع محتوى لديه قصة تستحق أن تروى. يُقام الحدث في مركز الترفيه العلمي بالبويرة، ليشكل جسراً للانتقال من الهواية إلى الاحتراف عبر ورشات تدريبية مكثفة، تطبيق ميداني، وعرض تنافسي أمام لجنة تحكيم متخصصة.",
    highlights: [
      "ورشات عمل وتدريب (كتابة السيناريو، المونتاج، الذكاء الاصطناعي، والإخراج)",
      "الإنتاج الميداني وحفل عرض الأفلام",
    ],
    badge: "الفعالية القادمة",
    status: "new",
    link: "https://gamma.app/docs/-lmocpfg71n6vahi?mode=doc"
  },
  {
    title: "Rationalizing Food Consumption",
    subtitle: "Social Awareness",
    arabicSubtitle: "ترشيد الإستهلاك الغذائي",
    image: rationalizeFood,
    description: "يوم توعوي واجتماعي جمع بين معرض للمنتجات الطبيعية ومحاضرة رئيسية حول عادات الاستهلاك الرشيد.",
    fullDescription: "يوم توعوي واجتماعي جمع بين معرض للمنتجات الطبيعية ومحاضرة رئيسية حول عادات الاستهلاك الرشيد. أقيم بمركز الترفيه العلمي بالبويرة — متاح للجميع.",
    highlights: [
      "معرض المنتجات الطبيعية",
      "محاضرة: ترشيد الاستهلاك",
    ],
    badge: "آخر الفعاليات",
    status: "recent"
  }
];

export default function EventsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    direction: 'rtl'
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="events" className="py-32 bg-cinema-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <RevealSection>
          <div className="text-center mb-16">
            <span className="text-gold-500 font-tajawal text-xs tracking-[0.3em] uppercase mb-4 block">أبرز المحطات</span>
            <h2 className="font-cinzel font-bold text-4xl sm:text-5xl text-white mb-4">
              فعاليات <span className="gold-gradient">StarFocus</span>
            </h2>
            <div className="gold-line w-24 mx-auto" />
          </div>
        </RevealSection>

        <RevealSection>
          <div className="relative group max-w-6xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef} dir="rtl">
              <div className="flex">
                {events.map((event, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                    <div className="podcast-card rounded-2xl overflow-hidden border border-cinema-border relative bg-cinema-card/30">
                      <div className="flex flex-col md:grid md:grid-cols-5 gap-0 min-h-[500px]">
                        
                        {/* Image Side - Full width on mobile, 2/5 on desktop */}
                        <div className="relative md:col-span-2 h-[350px] md:h-auto overflow-hidden group/img">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover/img:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-cinema-card/90" />
                      </div>

                        {/* Content Side - Full width on mobile, 3/5 on desktop */}
                        <div className="md:col-span-3 p-6 sm:p-12 flex flex-col justify-center relative z-10 dir-rtl" dir="rtl">
                          <div className="flex items-center gap-2 mb-4">
                            <div className={`w-2 h-2 rounded-full ${event.status === 'new' ? 'bg-cinema-crimson' : 'bg-gold-500'} animate-pulse`} />
                            <span className="text-gold-500 text-[10px] sm:text-xs font-tajawal tracking-[0.2em] uppercase font-medium">
                              {event.badge}
                            </span>
                          </div>

                          <h3 className="font-cinzel font-bold text-2xl sm:text-4xl text-white mb-1 leading-tight text-right">
                            {event.title}
                          </h3>
                          
                          {event.arabicSubtitle && (
                            <p className="font-tajawal text-gold-500/80 text-sm sm:text-lg mb-4 opacity-90 text-right">
                              {event.arabicSubtitle}
                            </p>
                          )}

                          <div className="gold-line w-16 sm:w-20 mb-6 mr-0" />

                          {/* Minimal text on mobile: show description, hide fullDescription */}
                          <p className="text-gray-400 text-xs sm:text-sm font-tajawal leading-relaxed mb-6 sm:mb-8 max-w-xl text-right">
                            <span className="block sm:hidden">{event.description}</span>
                            <span className="hidden sm:block">{event.fullDescription}</span>
                          </p>

                          <div className="space-y-3 mb-8 hidden sm:block">
                            {event.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-3 text-sm font-tajawal text-gray-500 text-right">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500/30 flex-shrink-0" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-4 items-center justify-start">
                            {event.link && (
                              <a
                                href={event.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-gold px-6 py-2.5 rounded-full text-xs font-bold inline-flex items-center gap-2 group/btn"
                              >
                                اقرأ المزيد
                                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                              </a>
                            )}
                            
                            <div className="text-[10px] text-gray-600 font-tajawal uppercase tracking-widest sm:hidden">
                              اسحب للاستكشاف
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons - Hidden on small mobile, visible otherwise */}
            <button 
              onClick={scrollPrev}
              className="absolute top-1/2 -left-4 sm:-left-16 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cinema-dark/80 border border-cinema-border text-gold-500 hidden sm:flex items-center justify-center hover:border-gold-500/50 hover:bg-cinema-charcoal transition-all group"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            
            <button 
              onClick={scrollNext}
              className="absolute top-1/2 -right-4 sm:-right-16 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cinema-dark/80 border border-cinema-border text-gold-500 hidden sm:flex items-center justify-center hover:border-gold-500/50 hover:bg-cinema-charcoal transition-all group"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Swipe Indicator for Mobile */}
            <div className="mt-8 flex justify-center gap-2 sm:hidden">
              <div className="text-[10px] text-gray-500 animate-pulse flex items-center gap-2 uppercase tracking-[0.2em]">
                <ChevronLeft size={10} /> اسحب <ChevronRight size={10} />
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
