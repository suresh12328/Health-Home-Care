import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Info, UserCheck } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { SafeImage } from '../components/SafeImage';
import { getTeamMembers, type TeamCategory } from '../data/team';
import { useLanguage } from '../context/LanguageContext';
import { getUiText } from '../data/translations';

const ROLE_FILTERS: ('All' | TeamCategory)[] = [
  'All',
  'Doctors',
  'Registered Nurses',
  'Caregivers & Support',
];

export function TeamPage() {
  const [activeRole, setActiveRole] = useState<'All' | TeamCategory>('All');
  const { lang } = useLanguage();
  const t = getUiText(lang);
  const copy = t.teamPage;
  const members = getTeamMembers(lang);

  const filteredMembers =
    activeRole === 'All'
      ? members
      : members.filter((member) => member.category === activeRole);

  return (
    <>
      <PageMeta title={copy.metaTitle} description={copy.metaDescription} />

      {/* Header */}
      <section className="border-b border-[#17324D]/10 bg-[#F3F8FC] py-12 lg:py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#13A89E]">{copy.kicker}</p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold tracking-tight text-[#17324D] sm:text-4xl">
            {copy.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#17324D]/75">
            {copy.subtitle}
          </p>

          <div
            role="tablist"
            aria-label="Filter team profiles by role"
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            {ROLE_FILTERS.map((role) => {
              const isActive = activeRole === role;
              return (
                <button
                  key={role}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveRole(role)}
                  className={`min-h-[40px] whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                    isActive
                      ? 'bg-[#0877C9] text-white shadow-sm'
                      : 'border border-[#17324D]/15 bg-white text-[#17324D]/80 hover:border-[#0877C9] hover:text-[#0877C9]'
                  }`}
                >
                  {copy.roles[role]}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-white py-14 lg:py-18">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-start gap-3 rounded-xl border border-[#0877C9]/20 bg-[#F3F8FC] p-4 text-sm text-[#17324D]/85">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#0877C9]" aria-hidden="true" />
            <p>
              <span className="font-semibold text-[#17324D]">
                {copy.policyLabel}
              </span>{' '}
              {copy.policyBody}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {filteredMembers.map((member) => (
              <article
                key={member.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#17324D]/10 bg-white sm:flex-row"
              >
                <div className="aspect-[4/3] w-full shrink-0 bg-[#F3F8FC] sm:aspect-auto sm:w-52">
                  <SafeImage
                    src={member.image}
                    alt={member.imageAlt}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#13A89E]">
                      <span>{copy.roles[member.category]}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#17324D]/65">{member.availabilityNote}</span>
                    </div>

                    <h2 className="mt-2 font-display text-lg font-bold text-[#17324D]">
                      {member.name}
                    </h2>
                    <p className="mt-0.5 text-sm font-medium text-[#0877C9]">
                      {member.designation}
                    </p>

                    <div className="mt-4 space-y-2 border-t border-[#17324D]/10 pt-4 text-xs leading-relaxed text-[#17324D]/75">
                      <p>
                        <span className="font-semibold text-[#17324D]">
                          {copy.qualificationsLabel}
                        </span>{' '}
                        {member.qualificationPlaceholder}
                      </p>
                      <p>
                        <span className="font-semibold text-[#17324D]">
                          {copy.experienceLabel}
                        </span>{' '}
                        {member.experiencePlaceholder}
                      </p>
                      <p className="flex items-center gap-1.5 font-medium text-[#17324D]/70">
                        <UserCheck className="h-3.5 w-3.5 text-[#13A89E]" aria-hidden="true" />
                        <span>{member.verificationStatus}</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-[#17324D]/10 pt-3 text-xs text-[#17324D]/65">
                    <span>
                      {copy.focusLabel} {member.focusAreas.join(' · ')}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#17324D]/10 bg-[#F3F8FC] p-6 sm:flex sm:items-center sm:justify-between sm:p-8">
            <div className="max-w-xl">
              <h2 className="font-display text-xl font-bold text-[#17324D]">
                {copy.ctaTitle}
              </h2>
              <p className="mt-1.5 text-sm text-[#17324D]/75">{copy.ctaBody}</p>
            </div>
            <Link
              to="/book"
              className="mt-4 inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-lg bg-[#0877C9] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#065FA1] sm:mt-0"
            >
              {copy.ctaBtn}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
