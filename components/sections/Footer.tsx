import Image from 'next/image';
import { Film } from 'lucide-react';
import { starfocusLogo } from '@/constants/images';
import { YouTubeIcon, InstagramIcon, FacebookIcon } from '../icons/SocialIcons';

const socials = [
  { href: 'https://www.youtube.com/@StarFocus10', icon: <YouTubeIcon className="w-[18px] h-[18px]" /> },
  { href: 'https://www.instagram.com/starfocus10/', icon: <InstagramIcon className="w-[18px] h-[18px]" /> },
  { href: 'https://www.facebook.com/profile.php?id=61574770616545', icon: <FacebookIcon className="w-[10px] h-[10px]" /> },
];

export default function Footer() {
  return (
    <footer className="bg-cinema-black border-t border-cinema-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-4">
              <div className="font-cinzel font-bold text-xl text-white tracking-widest uppercase">
                <Image
                            width={80}
                            height={35}
                            src={starfocusLogo}
                            alt="StarFocus"
                          />
              <div className="text-gray-600 text-xs font-tajawal tracking-wide">Cinema Vibes Only</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="gold-line mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-xs font-tajawal dir-rtl">
          <p>© {new Date().getFullYear()} StarFocus. جميع الحقوق محفوظة.</p>
          <p className="flex items-center gap-2">
            تم التطوير بواسطة 
            <a href="https://samy-dev.netlify.app" target="_blank" rel="noopener noreferrer" className="text-gold-500/60 hover:text-gold-400 transition-colors underline underline-offset-2">
              samy_dev
            </a>
          </p>
          <p className="flex items-center gap-1 ltr">
            <Film size={12} className="text-gold-500/50" /> Scenes · Edits · Analysis
          </p>
        </div>
      </div>
    </footer>
  );
}
