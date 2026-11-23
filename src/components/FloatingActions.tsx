import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { getUiText } from '../data/translations';

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const { lang } = useLanguage();
  const t = getUiText(lang);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 360);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      aria-label="Quick contact and navigation controls"
      className="fixed bottom-4 right-4 z-30 flex items-center gap-2.5 sm:bottom-6 sm:right-6"
    >
      {showTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label={t.floating.backToTop}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#17324D]/15 bg-white text-[#17324D] shadow-md transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#F3F8FC]"
        >
          <ArrowUp className="h-4.5 w-4.5" aria-hidden="true" />
        </button>
      )}

      <a
        href={SITE_CONFIG.contact.phoneHref}
        aria-label={t.floating.callLabel}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0877C9] text-white shadow-md transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#065FA1]"
      >
        <Phone className="h-4.5 w-4.5" aria-hidden="true" />
      </a>

      <a
        href={getWhatsAppUrl(undefined, lang)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floating.whatsappAria}
        className="flex h-11 items-center gap-2 rounded-full bg-[#13A89E] px-4 text-sm font-semibold text-white shadow-md transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#0E877F]"
      >
        <MessageCircle className="h-4.5 w-4.5 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline">{t.floating.whatsappText}</span>
      </a>
    </div>
  );
}
