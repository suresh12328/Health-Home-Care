import { useLanguage } from '../context/LanguageContext';
import { getUiText } from '../data/translations';

interface LanguageSwitcherProps {
  variant?: 'topbar' | 'light';
}

export function LanguageSwitcher({ variant = 'topbar' }: LanguageSwitcherProps) {
  const { lang, setLang } = useLanguage();
  const t = getUiText(lang);

  if (variant === 'light') {
    return (
      <div
        role="group"
        aria-label={t.nav.languageLabel}
        className="inline-flex shrink-0 items-center rounded-md border border-[#17324D]/15 bg-[#F3F8FC] p-0.5"
      >
        <button
          type="button"
          onClick={() => setLang('en')}
          aria-pressed={lang === 'en'}
          className={`shrink-0 whitespace-nowrap rounded px-2.5 py-1 text-xs font-semibold transition-colors duration-150 ${
            lang === 'en'
              ? 'bg-[#0877C9] text-white'
              : 'text-[#17324D]/75 hover:text-[#17324D]'
          }`}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLang('ne')}
          aria-pressed={lang === 'ne'}
          className={`shrink-0 whitespace-nowrap rounded px-2.5 py-1 text-xs font-semibold transition-colors duration-150 ${
            lang === 'ne'
              ? 'bg-[#0877C9] text-white'
              : 'text-[#17324D]/75 hover:text-[#17324D]'
          }`}
        >
          नेपाली
        </button>
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label={t.nav.languageLabel}
      className="inline-flex shrink-0 items-center overflow-hidden rounded-md border border-white/80 bg-white shadow-xs"
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`shrink-0 whitespace-nowrap px-3 py-1 text-xs font-semibold transition-colors duration-150 ${
          lang === 'en'
            ? 'bg-[#0877C9] text-white'
            : 'bg-white text-[#0877C9] hover:bg-[#F3F8FC]'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('ne')}
        aria-pressed={lang === 'ne'}
        className={`shrink-0 whitespace-nowrap px-3 py-1 text-xs font-semibold transition-colors duration-150 ${
          lang === 'ne'
            ? 'bg-[#0877C9] text-white'
            : 'bg-white text-[#0877C9] hover:bg-[#F3F8FC]'
        }`}
      >
        नेपाली
      </button>
    </div>
  );
}
