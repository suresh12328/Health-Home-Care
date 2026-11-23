import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { SafeImage } from '../components/SafeImage';
import { getServices, type ServiceCategory } from '../data/services';
import { useLanguage } from '../context/LanguageContext';
import { getUiText } from '../data/translations';

const CATEGORIES: ('All' | ServiceCategory)[] = [
  'All',
  'Clinical Nursing',
  'Daily & Senior Care',
  'Recovery & Rehab',
  'Extended Support',
];

export function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ServiceCategory>('All');
  const { lang } = useLanguage();
  const t = getUiText(lang);
  const copy = t.servicesPage;
  const services = getServices(lang);

  const filteredServices =
    selectedCategory === 'All'
      ? services
      : services.filter((service) => service.category === selectedCategory);

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

          {/* Interactive Category Filter */}
          <div
            role="tablist"
            aria-label="Filter healthcare services by category"
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
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

      {/* Services Grid */}
      <section className="bg-white py-14 lg:py-18">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* Verification Transparency Notice */}
          <div className="mb-10 flex items-start gap-3 rounded-xl border border-[#0877C9]/20 bg-[#F3F8FC] p-4 text-sm text-[#17324D]/85">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#0877C9]" aria-hidden="true" />
            <p>
              <span className="font-semibold text-[#17324D]">
                {copy.scopeLabel}
              </span>{' '}
              {copy.scopeBody}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <article
                key={service.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#17324D]/10 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0877C9]/30 hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#F3F8FC]">
                  <SafeImage
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#17324D]/65">
                    <span className="tabular-nums text-[#0877C9]">{service.index}</span>
                    <span aria-hidden="true">·</span>
                    <span>{service.categoryLabel}</span>
                  </div>

                  <h2 className="mt-2 font-display text-xl font-semibold text-[#17324D]">
                    {service.title}
                  </h2>

                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#17324D]/75">
                    {service.shortDescription}
                  </p>

                  <div className="mt-4 space-y-1 border-t border-[#17324D]/10 pt-3.5 text-xs">
                    <p className="font-semibold text-[#13A89E] tabular-nums">
                      {service.nprEstimate}
                    </p>
                    <p className="text-[#17324D]/65">{service.availabilityNote}</p>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex min-h-[42px] items-center justify-center whitespace-nowrap rounded-lg border border-[#17324D]/15 px-4 py-2 text-xs font-semibold text-[#17324D] transition-colors hover:border-[#0877C9] hover:text-[#0877C9]"
                    >
                      {copy.learnMore}
                    </Link>
                    <Link
                      to={`/book?service=${service.slug}`}
                      className="inline-flex min-h-[42px] flex-1 items-center justify-center whitespace-nowrap rounded-lg bg-[#0877C9] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#065FA1]"
                    >
                      {copy.bookService}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
