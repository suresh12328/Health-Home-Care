import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { SITE_CONFIG } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { getUiText } from '../data/translations';

interface LegalPageProps {
  mode: 'privacy' | 'terms';
}

export function LegalPage({ mode }: LegalPageProps) {
  const { lang } = useLanguage();
  const t = getUiText(lang);
  const copy = t.legalPage;
  const isPrivacy = mode === 'privacy';
  const title = isPrivacy ? copy.privacyTitle : copy.termsTitle;

  return (
    <>
      <PageMeta
        title={`${title} – ${SITE_CONFIG.brandName}`}
        description={`${title} — ${SITE_CONFIG.brandName} (${SITE_CONFIG.country[lang]}).`}
      />

      <section className="border-b border-[#17324D]/10 bg-[#F3F8FC] py-12">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#13A89E]">{copy.kicker}</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-[#17324D]">
            {title}
          </h1>
          <p className="mt-2 text-xs text-[#17324D]/65">
            {copy.lastUpdatedLabel} {SITE_CONFIG.legalPlaceholders.lastUpdated[lang]} ·{' '}
            {copy.templateTag}
          </p>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-[900px] space-y-8 px-4 text-sm leading-relaxed text-[#17324D]/80 sm:px-6 sm:text-base lg:px-8">
          {isPrivacy ? (
            <>
              <div>
                <h2 className="font-display text-xl font-bold text-[#17324D]">
                  {copy.privacySections[0].heading}
                </h2>
                <p className="mt-2">{copy.privacySections[0].body}</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-[#17324D]">
                  {copy.privacySections[1].heading}
                </h2>
                <p className="mt-2">{copy.privacySections[1].body}</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-[#17324D]">
                  {copy.privacySections[2].heading}
                </h2>
                <p className="mt-2">
                  {copy.privacySections[2].bodyPrefix}{' '}
                  {SITE_CONFIG.contact.email[lang]}
                </p>
              </div>
            </>
          ) : (
            copy.termsSections.map((sec) => (
              <div key={sec.heading}>
                <h2 className="font-display text-xl font-bold text-[#17324D]">
                  {sec.heading}
                </h2>
                <p className="mt-2">{sec.body}</p>
              </div>
            ))
          )}

          <div className="border-t border-[#17324D]/10 pt-6">
            <Link
              to="/contact"
              className="text-sm font-semibold text-[#0877C9] hover:underline"
            >
              {copy.contactCoordinator}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
