import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { SafeImage } from '../components/SafeImage';
import { FaqAccordion } from '../components/FaqAccordion';
import { RevealSection } from '../components/RevealSection';
import { IMAGES, getServices } from '../data/services';
import { getHomeContent } from '../data/homeContent';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { getUiText } from '../data/translations';

export function HomePage() {
  const { lang } = useLanguage();
  const t = getUiText(lang);
  const services = getServices(lang);
  const featuredServices = services.slice(0, 3);
  const overviewServices = services.slice(0, 6);
  const {
    trustPillars,
    whyChoosePoints,
    howItWorksSteps,
    feedbackSlots,
    homeFaqs,
  } = getHomeContent(lang);

  return (
    <>
      <PageMeta
        title={t.home.metaTitle}
        description={t.home.metaDescription}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F3F8FC] to-white pb-12 pt-10 lg:pb-16 lg:pt-14">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Copy Column */}
            <div className="flex flex-col justify-center lg:col-span-6">
              <p className="text-sm font-semibold tracking-wide text-[#0877C9]">
                {t.home.heroKicker}
              </p>

              <h1
                className="mt-3 font-display font-bold tracking-tight text-[#17324D]"
                style={{ fontSize: 'clamp(2.15rem, 3.8vw, 3.55rem)', lineHeight: 1.15 }}
              >
                {t.home.heroTitle}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#17324D]/80 sm:text-lg">
                {t.home.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/book"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#0877C9] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#065FA1]"
                >
                  <span>{t.home.heroPrimaryCta}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-[#17324D]/20 bg-white px-6 py-3 text-sm font-semibold text-[#17324D] transition-colors duration-150 hover:border-[#0877C9] hover:text-[#0877C9]"
                >
                  <span>{t.home.heroSecondaryCta}</span>
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#17324D]/10 pt-5 text-xs font-medium text-[#17324D]/70 sm:text-sm">
                <span>{t.home.heroTrustItems[0]}</span>
                <span aria-hidden="true">·</span>
                <span>{t.home.heroTrustItems[1]}</span>
                <span aria-hidden="true">·</span>
                <span>{t.home.heroTrustItems[2]}</span>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6">
              <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-[#17324D]/10 bg-[#F3F8FC] shadow-sm sm:min-h-[380px] lg:min-h-[460px]">
                <SafeImage
                  src={IMAGES.hero}
                  alt={t.home.heroImageAlt}
                  priority
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#17324D]/80 via-[#17324D]/35 to-transparent p-6">
                  <p className="text-sm font-medium text-white">
                    {t.home.heroImageCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted Healthcare Support Strip (4-column row below Hero Split) */}
          <div className="mt-10 grid gap-5 border-t border-[#17324D]/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map((pillar) => (
              <div key={pillar.title} className="space-y-1.5">
                <p className="font-display text-xs font-semibold text-[#13A89E]">
                  {pillar.index}
                </p>
                <h2 className="font-display text-base font-semibold text-[#17324D]">
                  {pillar.title}
                </h2>
                <p className="text-sm leading-relaxed text-[#17324D]/70">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Overview Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex flex-col justify-between gap-4 border-b border-[#17324D]/10 pb-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold text-[#13A89E]">
                  {t.home.servicesKicker}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#17324D] sm:text-3xl">
                  {t.home.servicesHeading}
                </h2>
              </div>
              <Link
                to="/services"
                className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-semibold text-[#0877C9] transition-colors hover:text-[#065FA1]"
              >
                <span>{t.home.servicesViewAll}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {overviewServices.map((service) => (
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
                    <h3 className="mt-2 font-display text-xl font-semibold text-[#17324D]">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#17324D]/75">
                      {service.shortDescription}
                    </p>
                    <p className="mt-4 text-xs font-medium text-[#13A89E] tabular-nums">
                      {service.nprEstimate}
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-[#17324D]/10 pt-4">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex min-h-[40px] items-center justify-center whitespace-nowrap rounded-lg border border-[#17324D]/15 px-4 py-2 text-xs font-semibold text-[#17324D] transition-colors hover:border-[#0877C9] hover:text-[#0877C9]"
                      >
                        {t.home.learnMore}
                      </Link>
                      <Link
                        to={`/book?service=${service.slug}`}
                        className="inline-flex min-h-[40px] flex-1 items-center justify-center whitespace-nowrap rounded-lg bg-[#0877C9] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#065FA1]"
                      >
                        {t.home.bookServiceBtn}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#F3F8FC] py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <div className="h-full min-h-[300px] overflow-hidden rounded-2xl border border-[#17324D]/10 bg-white">
                  <SafeImage
                    src={IMAGES.teamGroup}
                    alt={t.home.whyImageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center lg:col-span-7">
                <p className="text-sm font-semibold text-[#13A89E]">
                  {t.home.whyKicker}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#17324D] sm:text-3xl">
                  {t.home.whyHeading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#17324D]/75">
                  {t.home.whyBody}
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {whyChoosePoints.map((point) => (
                    <div
                      key={point.title}
                      className="rounded-xl border border-[#17324D]/10 bg-white p-5"
                    >
                      <div className="flex items-start gap-3">
                        <ShieldCheck
                          className="mt-0.5 h-5 w-5 shrink-0 text-[#0877C9]"
                          aria-hidden="true"
                        />
                        <div>
                          <h3 className="font-display text-base font-semibold text-[#17324D]">
                            {point.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-[#17324D]/70">
                            {point.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#13A89E]">
                {t.home.howKicker}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#17324D] sm:text-3xl">
                {t.home.howHeading}
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {howItWorksSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col rounded-2xl border border-[#17324D]/10 bg-[#F3F8FC]/60 p-6"
                >
                  <span className="font-display text-2xl font-bold text-[#0877C9] tabular-nums">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-[#17324D]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#17324D]/75">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Featured Care Services Spotlight */}
      <section className="border-y border-[#17324D]/10 bg-[#F3F8FC] py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold text-[#0877C9]">
                  {t.home.featuredKicker}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#17324D] sm:text-3xl">
                  {t.home.featuredHeading}
                </h2>
              </div>
              <Link
                to="/book"
                className="inline-flex min-h-[44px] shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-[#13A89E] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0E877F]"
              >
                {t.home.featuredCta}
              </Link>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {featuredServices.map((service) => (
                <div
                  key={service.slug}
                  className="flex flex-col justify-between rounded-2xl border border-[#17324D]/10 bg-white p-6"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-medium text-[#17324D]/60">
                      <span>{service.categoryLabel}</span>
                      <span className="tabular-nums text-[#0877C9]">{service.index}</span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-semibold text-[#17324D]">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#17324D]/75">
                      {service.shortDescription}
                    </p>
                    <ul className="mt-5 space-y-2 border-t border-[#17324D]/10 pt-4">
                      {service.benefits.slice(0, 2).map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2.5 text-sm text-[#17324D]/80"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#13A89E]"
                            aria-hidden="true"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-2">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0877C9] transition-colors hover:text-[#065FA1]"
                    >
                      <span>{t.home.viewServiceDetails}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Testimonials / Family Feedback Slots (Strictly No Fabricated Reviews) */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#13A89E]">
                {t.home.testimonialsKicker}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#17324D] sm:text-3xl">
                {t.home.testimonialsHeading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#17324D]/70">
                {t.home.testimonialsNote}
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {feedbackSlots.map((slot) => (
                <figure
                  key={slot.slotLabel}
                  className="flex flex-col justify-between rounded-2xl border border-dashed border-[#17324D]/20 bg-[#F3F8FC]/50 p-6"
                >
                  <div>
                    <p className="text-xs font-semibold text-[#0877C9]">
                      {slot.slotLabel}
                    </p>
                    <blockquote className="mt-3 text-sm leading-relaxed text-[#17324D]/80">
                      “{slot.quote}”
                    </blockquote>
                  </div>
                  <figcaption className="mt-5 border-t border-[#17324D]/10 pt-4 text-xs text-[#17324D]/65">
                    <span className="font-semibold text-[#17324D]">
                      {slot.attribution}
                    </span>
                    <span className="mx-1.5" aria-hidden="true">
                      ·
                    </span>
                    <span>{slot.serviceTag}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F3F8FC] py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-sm font-semibold text-[#13A89E]">
                  {t.home.faqKicker}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#17324D] sm:text-3xl">
                  {t.home.faqHeading}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#17324D]/75">
                  {t.home.faqSubtitle}
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="rounded-2xl border border-[#17324D]/10 bg-white px-6 py-2">
                  <FaqAccordion items={homeFaqs} idPrefix="home-faq" />
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-[#0877C9] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {t.home.ctaHeading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/85">
                {t.home.ctaBody}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                to="/book"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0877C9] transition-colors hover:bg-[#F3F8FC]"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                <span>{t.home.ctaBookBtn}</span>
              </Link>
              <a
                href={getWhatsAppUrl(undefined, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white/30 bg-[#13A89E] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0E877F]"
              >
                <span>{t.home.ctaWhatsappBtn}</span>
              </a>
              <a
                href={SITE_CONFIG.contact.phoneHref}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>{t.home.ctaCallBtn}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
