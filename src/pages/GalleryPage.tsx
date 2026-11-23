import { useState } from 'react';
import { Expand } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { SafeImage } from '../components/SafeImage';
import { LightboxModal } from '../components/LightboxModal';
import {
  GALLERY_CATEGORIES,
  getGalleryItems,
  type GalleryCategory,
} from '../data/gallery';
import { useLanguage } from '../context/LanguageContext';
import { getUiText } from '../data/translations';

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = getUiText(lang);
  const copy = t.galleryPage;
  const items = getGalleryItems(lang);

  const visibleItems =
    selectedCategory === 'All'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <>
      <PageMeta title={copy.metaTitle} description={copy.metaDescription} />

      {/* Page Header */}
      <section className="border-b border-[#17324D]/10 bg-[#F3F8FC] py-12 lg:py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#13A89E]">{copy.kicker}</p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold tracking-tight text-[#17324D] sm:text-4xl">
            {copy.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#17324D]/75">
            {copy.subtitle}
          </p>

          {/* Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter gallery photos by care category"
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            {GALLERY_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setSelectedCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`min-h-[40px] whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                    isActive
                      ? 'bg-[#0877C9] text-white shadow-sm'
                      : 'border border-[#17324D]/15 bg-white text-[#17324D]/80 hover:border-[#0877C9] hover:text-[#0877C9]'
                  }`}
                >
                  {copy.categories[category]}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Responsive Image Grid */}
      <section className="bg-white py-14 lg:py-18">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                aria-label={`${copy.openPreviewPrefix} ${item.title}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#17324D]/10 bg-white text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0877C9]/30 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3F8FC]">
                  <SafeImage
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17324D]/65 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  <span
                    aria-hidden="true"
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-[#17324D] opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100"
                  >
                    <Expand className="h-4 w-4" />
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-xs font-medium text-[#13A89E]">{item.context}</p>
                  <h2 className="mt-1 font-display text-base font-semibold text-[#17324D]">
                    {item.title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#17324D]/70">
                    {item.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <LightboxModal
        items={visibleItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </>
  );
}
