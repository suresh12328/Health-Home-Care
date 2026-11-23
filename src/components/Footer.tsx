import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/siteConfig';
import { getServices } from '../data/services';
import { useLanguage } from '../context/LanguageContext';
import { getUiText } from '../data/translations';

export function Footer() {
  const { lang } = useLanguage();
  const t = getUiText(lang);
  const featuredFooterServices = getServices(lang).slice(0, 6);

  return (
    <footer className="border-t border-[#17324D]/10 bg-[#17324D] text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Description */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-white"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0877C9] text-white"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4.5 w-4.5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5z" />
                  <path d="M12 10v6" />
                  <path d="M9 13h6" />
                </svg>
              </span>
              <span>{SITE_CONFIG.brandName}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              {SITE_CONFIG.description[lang]}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-white/60">
              {SITE_CONFIG.legalPlaceholders.registrationNotice[lang]}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="font-display text-sm font-semibold tracking-wide text-white">
              {t.footer.quickLinks}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              <li>
                <Link to="/" className="transition-colors hover:text-[#13A89E]">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-[#13A89E]">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-[#13A89E]">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/team" className="transition-colors hover:text-[#13A89E]">
                  {t.nav.team}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="transition-colors hover:text-[#13A89E]">
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link to="/book" className="transition-colors hover:text-[#13A89E]">
                  {t.footer.bookService}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-[#13A89E]">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h2 className="font-display text-sm font-semibold tracking-wide text-white">
              {t.footer.ourServices}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              {featuredFooterServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="transition-colors hover:text-[#13A89E]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="font-medium text-[#13A89E] transition-colors hover:text-white"
                >
                  {t.footer.viewAllServices}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information & Social Media */}
          <div>
            <h2 className="font-display text-sm font-semibold tracking-wide text-white">
              {t.footer.contactInfo}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#13A89E]" aria-hidden="true" />
                <a
                  href={SITE_CONFIG.contact.phoneHref}
                  className="tabular-nums transition-colors hover:text-white"
                >
                  {SITE_CONFIG.contact.phoneDisplay[lang]}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#13A89E]" aria-hidden="true" />
                <span className="break-all">{SITE_CONFIG.contact.email[lang]}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#13A89E]" aria-hidden="true" />
                <span>{SITE_CONFIG.contact.address[lang]}</span>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-xs font-medium text-white/60">
                {t.footer.connectWithUs}
              </p>
              <div className="mt-2.5 flex flex-wrap items-center gap-2.5">
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Health Home Care Services on Facebook"
                  className="inline-flex h-10 items-center justify-center rounded-lg border border-white/15 px-3 text-xs font-medium text-white/85 transition-colors hover:border-[#13A89E] hover:text-white"
                >
                  Facebook
                </a>
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Health Home Care Services on Instagram"
                  className="inline-flex h-10 items-center justify-center rounded-lg border border-white/15 px-3 text-xs font-medium text-white/85 transition-colors hover:border-[#13A89E] hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href={SITE_CONFIG.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Health Home Care Services on TikTok"
                  className="inline-flex h-10 items-center justify-center rounded-lg border border-white/15 px-3 text-xs font-medium text-white/85 transition-colors hover:border-[#13A89E] hover:text-white"
                >
                  TikTok
                </a>
                <a
                  href={getWhatsAppUrl(undefined, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.floating.whatsappAria}
                  className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-[#13A89E] px-3 text-xs font-semibold text-white transition-colors hover:bg-[#0E877F]"
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/65 sm:flex-row sm:items-center">
          <p>
            {t.footer.copyrightPrefix} {new Date().getFullYear()} {SITE_CONFIG.brandName}.{' '}
            {t.footer.copyrightSuffix}
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="transition-colors hover:text-white">
              {t.footer.privacyPolicy}
            </Link>
            <Link to="/terms" className="transition-colors hover:text-white">
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
