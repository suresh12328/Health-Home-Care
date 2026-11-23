import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ShieldAlert,
  Users,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { SafeImage } from '../components/SafeImage';
import { FaqAccordion } from '../components/FaqAccordion';
import { getServiceBySlug, getServices } from '../data/services';
import { useLanguage } from '../context/LanguageContext';
import { getUiText } from '../data/translations';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const t = getUiText(lang);
  const copy = t.serviceDetail;
  const service = getServiceBySlug(slug, lang);

  if (!service) {
    return (
      <section className="mx-auto max-w-[1280px] px-4 py-20 text-center sm:px-6 lg:px-8">
        <PageMeta
          title={copy.notFoundMetaTitle}
          description={copy.notFoundMetaDesc}
        />
        <h1 className="font-display text-2xl font-bold text-[#17324D] sm:text-3xl">
          {copy.notFoundTitle}
        </h1>
        <p className="mt-3 text-base text-[#17324D]/75">{copy.notFoundBody}</p>
        <Link
          to="/services"
          className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0877C9] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#065FA1]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>{copy.backToServices}</span>
        </Link>
      </section>
    );
  }

  const relatedServices = getServices(lang)
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <PageMeta
        title={`${service.title} – Health Home Care Services`}
        description={service.shortDescription}
      />

      {/* Large Service Banner */}
      <section className="border-b border-[#17324D]/10 bg-[#F3F8FC] py-10 lg:py-14">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs text-[#17324D]/65"
          >
            <Link to="/" className="hover:text-[#0877C9]">
              {t.nav.home}
            </Link>
            <span aria-hidden="true">/</span>
            <Link to="/services" className="hover:text-[#0877C9]">
              {t.nav.services}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-[#17324D]">{service.title}</span>
          </nav>

          <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-center lg:col-span-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#13A89E]">
                <span className="tabular-nums">{service.index}</span>
                <span aria-hidden="true">·</span>
                <span>{service.categoryLabel}</span>
              </div>

              <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#17324D] sm:text-4xl">
                {service.title}
              </h1>

              <p className="mt-4 text-base leading-relaxed text-[#17324D]/80">
                {service.fullDescription}
              </p>

              <div className="mt-6 rounded-xl border border-[#17324D]/10 bg-white p-4 text-sm">
                <p className="font-semibold text-[#0877C9] tabular-nums">
                  {service.nprEstimate}
                </p>
                <p className="mt-1 text-xs text-[#17324D]/70">
                  {service.availabilityNote}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <Link
                  to={`/book?service=${service.slug}`}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#0877C9] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#065FA1]"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  <span>{copy.bookThisService}</span>
                </Link>
                <Link
                  to="/services"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[#17324D]/15 bg-white px-5 py-3 text-sm font-semibold text-[#17324D] transition-colors hover:border-[#0877C9] hover:text-[#0877C9]"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  <span>{copy.allServices}</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[260px] overflow-hidden rounded-2xl border border-[#17324D]/10 bg-white">
                <SafeImage
                  src={service.image}
                  alt={service.imageAlt}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Sections */}
      <section className="bg-white py-14 lg:py-18">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left Column */}
            <div className="space-y-12 lg:col-span-8">
              <div className="flex items-start gap-3 rounded-xl border border-[#0877C9]/20 bg-[#F3F8FC] p-5 text-sm text-[#17324D]/85">
                <ShieldAlert
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#0877C9]"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="font-display text-sm font-semibold text-[#17324D]">
                    {copy.scopeTitle}
                  </h2>
                  <p className="mt-1 leading-relaxed">{service.verificationScope}</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-[#17324D]">
                  {copy.benefitsTitle}
                </h2>
                <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 rounded-xl border border-[#17324D]/10 bg-[#F3F8FC]/50 p-4 text-sm leading-relaxed text-[#17324D]/85"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#13A89E]"
                        aria-hidden="true"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-[#17324D]">
                  {copy.whoTitle}
                </h2>
                <ul className="mt-5 space-y-3">
                  {service.whoCanBenefit.map((person) => (
                    <li
                      key={person}
                      className="flex items-start gap-3 border-b border-[#17324D]/10 pb-3 text-sm leading-relaxed text-[#17324D]/80 last:border-none sm:text-base"
                    >
                      <Users
                        className="mt-1 h-4.5 w-4.5 shrink-0 text-[#0877C9]"
                        aria-hidden="true"
                      />
                      <span>{person}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-[#17324D]">
                  {copy.howTitle}
                </h2>
                <div className="mt-5 space-y-4">
                  {service.howItWorks.map((item, idx) => (
                    <div
                      key={item.step}
                      className="flex gap-4 rounded-xl border border-[#17324D]/10 bg-white p-5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0877C9]/10 font-display text-sm font-bold text-[#0877C9] tabular-nums">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold text-[#17324D]">
                          {item.step}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#17324D]/75">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-[#17324D]">
                  {copy.faqTitle}
                </h2>
                <div className="mt-5 rounded-2xl border border-[#17324D]/10 bg-white px-5">
                  <FaqAccordion
                    items={service.faqs}
                    idPrefix={`svc-${service.slug}-${lang}`}
                  />
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="space-y-8 lg:col-span-4">
              <div className="rounded-2xl border border-[#17324D]/10 bg-[#F3F8FC] p-6">
                <h2 className="font-display text-lg font-bold text-[#17324D]">
                  {copy.sidebarTitlePrefix} {service.title}{' '}
                  {copy.sidebarTitleSuffix}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#17324D]/75">
                  {copy.sidebarBody}
                </p>
                <div className="mt-4 border-t border-[#17324D]/10 pt-4 text-xs text-[#17324D]/70">
                  <p className="font-semibold text-[#13A89E] tabular-nums">
                    {service.nprEstimate}
                  </p>
                </div>
                <Link
                  to={`/book?service=${service.slug}`}
                  className="mt-5 flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-[#0877C9] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#065FA1]"
                >
                  <span>{copy.bookThisService}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="rounded-2xl border border-[#17324D]/10 bg-white p-6">
                <h3 className="font-display text-base font-bold text-[#17324D]">
                  {copy.otherServicesTitle}
                </h3>
                <ul className="mt-4 divide-y divide-[#17324D]/10">
                  {relatedServices.map((rel) => (
                    <li key={rel.slug} className="py-3 first:pt-0 last:pb-0">
                      <Link
                        to={`/services/${rel.slug}`}
                        className="group flex items-center justify-between gap-3 text-sm font-medium text-[#17324D] hover:text-[#0877C9]"
                      >
                        <span>{rel.title}</span>
                        <ArrowRight
                          className="h-4 w-4 shrink-0 text-[#17324D]/40 transition-transform group-hover:translate-x-0.5 group-hover:text-[#0877C9]"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
