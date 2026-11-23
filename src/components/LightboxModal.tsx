import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryItem } from '../data/gallery';
import { SafeImage } from './SafeImage';
import { useLanguage } from '../context/LanguageContext';
import { getUiText } from '../data/translations';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function LightboxModal({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const { lang } = useLanguage();
  const t = getUiText(lang);

  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const item = items[currentIndex];
  const localizedCategory =
    t.galleryPage.categories[item.category] || item.category;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#17324D]/90 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#17324D]/10 px-5 py-3.5">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#17324D]/65">
            <span>{localizedCategory}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">
              {currentIndex + 1} {t.galleryPage.of} {items.length}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.galleryPage.closePreview}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#17324D]/70 transition-colors hover:bg-[#F3F8FC] hover:text-[#17324D]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="relative bg-[#F3F8FC]">
          <SafeImage
            src={item.image}
            alt={item.imageAlt}
            priority
            className="max-h-[65vh] w-full object-contain"
          />

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  onNavigate((currentIndex - 1 + items.length) % items.length)
                }
                aria-label={t.galleryPage.prevImage}
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#17324D] shadow-md transition-transform hover:scale-105 hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate((currentIndex + 1) % items.length)}
                aria-label={t.galleryPage.nextImage}
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#17324D] shadow-md transition-transform hover:scale-105 hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        <div className="px-6 py-4">
          <h3 className="font-display text-lg font-semibold text-[#17324D]">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-[#17324D]/75">{item.caption}</p>
        </div>
      </div>
    </div>
  );
}
