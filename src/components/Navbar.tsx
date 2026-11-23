import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Activity,
  Calendar,
  CalendarDays,
  ChevronDown,
  Clock,
  HeartPulse,
  Mail,
  Menu,
  Phone,
  Pill,
  Stethoscope,
  Users,
  X,
} from 'lucide-react';
import logoHealthHomeCare from '../assets/logo_health_home_care.png';
import { SITE_CONFIG } from '../data/siteConfig';
import { getServices } from '../data/services';
import { useLanguage } from '../context/LanguageContext';
import { getUiText } from '../data/translations';
import { LanguageSwitcher } from './LanguageSwitcher';
import { formatKathmanduDateTime } from '../utils/kathmanduClock';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [now, setNow] = useState<Date>(() => new Date());
  const { pathname } = useLocation();
  const { lang } = useLanguage();
  const t = getUiText(lang);
  const services = getServices(lang);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNow(new Date());
    const intervalId = window.setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  const { dateText, timeText } = formatKathmanduDateTime(now, lang);

  const mainNavLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services, hasDropdown: true },
    { to: '/team', label: t.nav.team },
    { to: '/gallery', label: t.nav.gallery },
    { to: '/contact', label: t.nav.contact },
  ];

  const stripLinks = [
    {
      to: '/services/home-nursing-care',
      label: t.nav.stripLinks.homeNursing,
      icon: HeartPulse,
    },
    {
      to: '/services/elderly-care',
      label: t.nav.stripLinks.elderlyCare,
      icon: Users,
    },
    {
      to: '/services/post-surgery-care',
      label: t.nav.stripLinks.postSurgery,
      icon: Stethoscope,
    },
    {
      to: '/services/physiotherapy-support',
      label: t.nav.stripLinks.physiotherapy,
      icon: Activity,
    },
    {
      to: '/services/medication-assistance',
      label: t.nav.stripLinks.medication,
      icon: Pill,
    },
    {
      to: '/services/vital-signs-monitoring',
      label: t.nav.stripLinks.vitals,
      icon: Activity,
    },
    {
      to: '/services/24-7-care-support',
      label: t.nav.stripLinks.care247,
      icon: Clock,
    },
  ];

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="relative z-40 bg-white shadow-sm lg:sticky lg:top-0">
      {/* 1. TOP CONTACT INFORMATION BAR (#0877C9) */}
      <div
        className="bg-[#0877C9] text-white"
        style={{
          fontFamily:
            lang === 'ne'
              ? '"Noto Sans Devanagari", system-ui, sans-serif'
              : '"Inter", system-ui, sans-serif',
        }}
      >
        <div className="mx-auto flex min-h-[42px] max-w-[1320px] flex-wrap items-center justify-between gap-x-3 gap-y-1.5 px-4 py-1.5 text-[11px] sm:px-6 sm:text-xs xl:px-8 xl:text-[13px]">
          {/* Left-to-Right Group: 1. Date | 2. Live Time | 3. Email | 4. Phone */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 lg:flex-nowrap lg:gap-x-3 xl:gap-x-3.5">
            {/* 1. Current Date (Calendar Icon) */}
            <div className="inline-flex items-center gap-1.5 whitespace-nowrap font-medium text-white">
              <CalendarDays className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{dateText}</span>
            </div>

            <span aria-hidden="true" className="h-3.5 w-px bg-white/35" />

            {/* 2. Current Live Time (Clock Icon) */}
            <div
              aria-label="Nepal Standard Time"
              className="inline-flex items-center gap-1.5 whitespace-nowrap font-medium text-white tabular-nums"
            >
              <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{timeText}</span>
            </div>

            <span
              aria-hidden="true"
              className="hidden h-3.5 w-px bg-white/35 sm:inline-block"
            />

            {/* 3. Email Address (Email Icon) */}
            <a
              href={`mailto:${SITE_CONFIG.contact.headerEmail}`}
              className="inline-flex items-center gap-1.5 whitespace-nowrap font-medium text-white transition-opacity hover:opacity-85"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{SITE_CONFIG.contact.headerEmail}</span>
            </a>

            <span
              aria-hidden="true"
              className="hidden h-3.5 w-px bg-white/35 sm:inline-block"
            />

            {/* 4. Phone Number (Phone Icon) */}
            <a
              href={`tel:${SITE_CONFIG.contact.headerPhone.replace(/[^+\d]/g, '')}`}
              className="inline-flex items-center gap-1.5 whitespace-nowrap font-medium text-white tabular-nums transition-opacity hover:opacity-85"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{SITE_CONFIG.contact.headerPhone}</span>
            </a>
          </div>

          {/* Right Group: 5. Social Media Icons | 6. English / नेपाली Language Switcher */}
          <div className="flex shrink-0 items-center gap-2.5 xl:gap-3">
            <div className="hidden items-center gap-1.5 sm:flex xl:gap-2">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Health Home Care Services on Facebook"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0877C9] transition-transform duration-150 hover:scale-105"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.2-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v2.2H8v3h2.5V21h3z" />
                </svg>
              </a>

              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Health Home Care Services on Instagram"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0877C9] transition-transform duration-150 hover:scale-105"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <rect width="16" height="16" x="4" y="4" rx="4" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="16.5" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>

              <a
                href={SITE_CONFIG.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Health Home Care Services on TikTok"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0877C9] transition-transform duration-150 hover:scale-105"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.34 0 .66.06.96.16V8.98a6.35 6.35 0 0 0-.96-.08A6.33 6.33 0 0 0 3 15.23 6.33 6.33 0 0 0 9.33 21.56a6.33 6.33 0 0 0 6.34-6.33V8.7a8.18 8.18 0 0 0 4.76 1.52V6.78a4.85 4.85 0 0 1-.84-.09z" />
                </svg>
              </a>
            </div>

            <span
              aria-hidden="true"
              className="hidden h-4 w-px bg-white/35 sm:inline-block"
            />

            <LanguageSwitcher variant="topbar" />
          </div>
        </div>
      </div>

      {/* 2. MAIN WHITE HEADER */}
      <div className="border-b border-[#17324D]/10 bg-white">
        <div className="mx-auto flex min-h-[78px] max-w-[1320px] items-center justify-between gap-4 px-4 py-2.5 sm:min-h-[88px] sm:px-6 lg:px-8">
          {/* Left: Exact Uploaded Logo Artwork */}
          <Link
            to="/"
            aria-label={SITE_CONFIG.brandName}
            className="flex shrink-0 items-center"
          >
            <img
              src={logoHealthHomeCare}
              alt="Health Home Care Services — Care at Home, Health for Life"
              className="h-12 w-auto object-contain sm:h-14 lg:h-[66px]"
            />
          </Link>

          {/* Center: Desktop Navigation Menu */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-5 lg:flex xl:gap-7"
          >
            {mainNavLinks.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.to}
                  ref={dropdownRef}
                  className="relative flex items-center"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `inline-flex items-center gap-1 whitespace-nowrap border-b-2 py-2 text-sm font-medium transition-colors duration-150 ${
                        isActive || pathname.startsWith('/services')
                          ? 'border-[#0877C9] text-[#0877C9]'
                          : 'border-transparent text-[#17324D] hover:text-[#0877C9]'
                      }`
                    }
                  >
                    <span>{item.label}</span>
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => setServicesOpen((prev) => !prev)}
                    aria-expanded={servicesOpen}
                    aria-label={t.nav.services}
                    className="ml-0.5 inline-flex h-7 w-5 items-center justify-center text-[#17324D] transition-colors hover:text-[#0877C9]"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-150 ${
                        servicesOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {servicesOpen && (
                    <div className="absolute left-0 top-full z-50 mt-0.5 w-64 rounded-xl border border-[#17324D]/10 bg-white py-2 shadow-lg">
                      {services.map((svc) => (
                        <Link
                          key={svc.slug}
                          to={`/services/${svc.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-2 text-xs font-medium text-[#17324D]/85 transition-colors hover:bg-[#F3F8FC] hover:text-[#0877C9]"
                        >
                          {svc.title}
                        </Link>
                      ))}
                      <div className="mt-1 border-t border-[#17324D]/10 pt-1">
                        <Link
                          to="/services"
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-2 text-xs font-semibold text-[#0877C9] hover:bg-[#F3F8FC]"
                        >
                          {t.nav.allServicesLabel} →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `whitespace-nowrap border-b-2 py-2 text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? 'border-[#0877C9] text-[#0877C9]'
                        : 'border-transparent text-[#17324D] hover:text-[#0877C9]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Right: Prominent Teal Book Now Button + Mobile Hamburger */}
          <div className="flex shrink-0 items-center gap-2.5">
            <Link
              to="/book"
              className="hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-[#13A89E] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-[#0E877F] lg:inline-flex"
            >
              <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{t.nav.bookNow}</span>
            </Link>

            <Link
              to="/book"
              aria-label={t.nav.bookNow}
              className="inline-flex min-h-[40px] items-center gap-1.5 whitespace-nowrap rounded-lg bg-[#13A89E] px-3 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#0E877F] sm:px-4 sm:text-sm lg:hidden"
            >
              <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">{t.nav.bookNow}</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#17324D]/15 text-[#17324D] transition-colors hover:bg-[#F3F8FC] lg:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3. FULL-WIDTH DEEP-BLUE NAVIGATION STRIP (Bir Hospital Reference Style) */}
      <nav
        aria-label="Healthcare Services Navigation"
        className="hidden bg-gradient-to-r from-[#0877C9] via-[#0B66C2] to-[#1455B8] text-white lg:block"
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-stretch justify-between divide-x divide-white/20 border-x border-white/15">
            {stripLinks.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex flex-1 items-center justify-center gap-2 whitespace-nowrap px-3 py-3 text-[13px] font-medium transition-colors duration-150 ${
                      isActive
                        ? 'bg-[#1455B8] text-white shadow-inner'
                        : 'text-white/95 hover:bg-white/15 hover:text-white'
                    }`
                  }
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="truncate">{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Hamburger Menu */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="border-t border-[#17324D]/10 bg-white px-4 pb-6 pt-3 shadow-lg lg:hidden"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {mainNavLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#F3F8FC] text-[#0877C9]'
                      : 'text-[#17324D]/85 hover:bg-[#F3F8FC] hover:text-[#0877C9]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Department Shortcuts */}
          <div className="mt-3 border-t border-[#17324D]/10 pt-3">
            <p className="px-3 pb-2 text-xs font-semibold text-[#0877C9]">
              {t.nav.services}
            </p>
            <div className="grid grid-cols-2 gap-1.5 px-1">
              {stripLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `flex min-h-[40px] items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium transition-colors ${
                        isActive
                          ? 'bg-[#0877C9] text-white'
                          : 'bg-[#F3F8FC] text-[#17324D] hover:bg-[#0877C9]/10'
                      }`
                    }
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span className="truncate">{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2.5 border-t border-[#17324D]/10 pt-4">
            <div className="flex items-center justify-between px-1 pb-1">
              <span className="text-xs font-medium text-[#17324D]/65">
                {t.nav.languageLabel}
              </span>
              <LanguageSwitcher variant="light" />
            </div>

            <Link
              to="/book"
              className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#13A89E] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0E877F]"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>{t.nav.bookNow}</span>
            </Link>

            <a
              href={`tel:${SITE_CONFIG.contact.headerPhone.replace(/[^+\d]/g, '')}`}
              className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-[#17324D]/15 bg-[#F3F8FC] px-4 py-2.5 text-sm font-medium text-[#17324D]"
            >
              <Phone className="h-4 w-4 text-[#0877C9]" aria-hidden="true" />
              <span className="tabular-nums">{SITE_CONFIG.contact.headerPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
