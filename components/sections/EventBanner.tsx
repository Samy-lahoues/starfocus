"use client";

import { useEffect, useState } from 'react';
import { Camera, Sparkles } from 'lucide-react';

function getTimeLeft() {
  const target = new Date('2026-07-08T00:00:00');
  const now = new Date();
  const difference = target.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    expired: false,
  };
}

export default function EventBanner() {
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    const updateTimeLeft = () => setTimeLeft(getTimeLeft());

    setIsMounted(true);
    updateTimeLeft();
    const timer = window.setInterval(updateTimeLeft, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const countdownItems = [
    { label: 'أيام', value: isMounted ? timeLeft.days : '--' },
    { label: 'ساعات', value: isMounted ? timeLeft.hours : '--' },
    { label: 'دقائق', value: isMounted ? timeLeft.minutes : '--' },
    { label: 'ثواني', value: isMounted ? timeLeft.seconds : '--' },
  ];

  return (
    <div className="border-b border-gold-500/20 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.14),transparent_45%),linear-gradient(135deg,#0e0e0e_0%,#121212_100%)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-3 py-2.5 sm:px-6 sm:py-3 lg:flex-row lg:items-center lg:justify-between lg:gap-3">
        <div className="flex items-center gap-2">
          <div className="rounded-full border border-gold-500/30 bg-gold-500/10 p-1.5 text-gold-500 sm:p-2">
            <Camera className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </div>
          <div className="min-w-0 text-center lg:text-right">
            <p className="font-tajawal text-3xl font-semibold text-white sm:text-sm">
              فعالية تصوير الفيلم القصير بالهاتف
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 lg:justify-end">
          {countdownItems.map((item) => (
            <div
              key={item.label}
              className="min-w-[58px] rounded-full border border-cinema-border bg-cinema-dark/70 px-2 py-1.5 text-center sm:min-w-[64px] sm:px-2.5 sm:py-2"
            >
              <div className="text-sm font-semibold text-gold-500 sm:text-base">
                {typeof item.value === 'number' ? String(item.value).padStart(2, '0') : item.value}
              </div>
              <div className="hidden sm:block text-[8px] uppercase tracking-[0.16em] text-gray-500 sm:text-[10px]">
                {item.label}
              </div>
            </div>
          ))}

          <a
            href="#registration"
            className="btn-gold inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.72rem] font-semibold sm:px-3.5 sm:py-2 sm:text-sm"
          >
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            سجل فريقك
          </a>
        </div>
      </div>
    </div>
  );
}
