import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, HeartHandshake, ShieldCheck } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { SafeImage } from '../components/SafeImage';
import { RevealSection } from '../components/RevealSection';
import { IMAGES } from '../data/services';
import { SITE_CONFIG } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { getUiText } from '../data/translations';

export function AboutPage() {
  const { lang } = useLanguage();
  const t = getUiText(lang);
  const copy = t.about;

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
            {copy.intro}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <div className="h-full min-h-[280px] overflow-hidden rounded-2xl border border-[#17324D]/10 bg-[#F3F8FC]">
                <SafeImage
                  src={IMAGES.hero}
                  alt={copy.storyImageAlt}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center lg:col-span-6">
              <p className="text-sm font-semibold text-[#0877C9]">
                {copy.storyKicker}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#17324D] sm:text-3xl">
                {copy.storyHeading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#17324D]/80">
                {copy.storyP1}
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#17324D]/80">
                {copy.storyP2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F3F8FC] py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-[#17324D]/10 bg-white p-8">
                <p className="text-sm font-semibold text-[#0877C9]">
                  {copy.missionKicker}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-[#17324D]">
                  {copy.missionHeading}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#17324D]/75">
                  {copy.missionBody}
                </p>
              </div>

              <div className="rounded-2xl border border-[#17324D]/10 bg-white p-8">
                <p className="text-sm font-semibold text-[#13A89E]">
                  {copy.visionKicker}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-[#17324D]">
                  {copy.visionHeading}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#17324D]/75">
                  {copy.visionBody}
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#13A89E]">
                {copy.valuesKicker}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#17324D] sm:text-3xl">
                {copy.valuesHeading}
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {copy.coreValues.map((val) => (
                <div
                  key={val.title}
                  className="rounded-2xl border border-[#17324D]/10 bg-[#F3F8FC]/60 p-6"
                >
                  <p className="font-display text-sm font-bold text-[#0877C9]">
                    {val.index}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-[#17324D]">
                    {val.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#17324D]/75">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Why Families Trust Us & Commitment to Patient Safety */}
      <section className="border-y border-[#17324D]/10 bg-[#F3F8FC] py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="grid items-stretch gap-10 lg:grid-cols-12">
              <div className="flex flex-col justify-center lg:col-span-7">
                <p className="text-sm font-semibold text-[#0877C9]">
                  {copy.trustKicker}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#17324D] sm:text-3xl">
                  {copy.trustHeading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#17324D]/75">
                  {copy.trustBody}
                </p>

                <ul className="mt-6 space-y-3.5">
                  {copy.trustBullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[#17324D]/85 sm:text-base"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#13A89E]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/team"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0877C9] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#065FA1]"
                  >
                    <span>{copy.meetTeamBtn}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/book"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#17324D]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#17324D] transition-colors hover:border-[#0877C9] hover:text-[#0877C9]"
                  >
                    <span>{copy.requestServiceBtn}</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="flex h-full flex-col justify-between rounded-2xl border border-[#17324D]/10 bg-white p-7">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#F3F8FC]">
                    <SafeImage
                      src={IMAGES.teamGroup}
                      alt={copy.teamImageAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <ShieldCheck
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#0877C9]"
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="font-display text-base font-semibold text-[#17324D]">
                          {copy.safetyCardTitle}
                        </h3>
                        <p className="mt-1 text-sm text-[#17324D]/75">
                          {copy.safetyCardBody}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <HeartHandshake
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#13A89E]"
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="font-display text-base font-semibold text-[#17324D]">
                          {copy.regCardTitle}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-[#17324D]/65">
                          {SITE_CONFIG.legalPlaceholders.registrationNotice[lang]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
