import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { getUiText } from '../data/translations';

interface ContactFormState {
  name: string;
  contactInfo: string;
  subject: string;
  message: string;
}

type ContactErrors = Partial<Record<keyof ContactFormState, keyof ContactFormState>>;

export function ContactPage() {
  const { lang } = useLanguage();
  const t = getUiText(lang);
  const copy = t.contactPage;

  const [form, setForm] = useState<ContactFormState>({
    name: '',
    contactInfo: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);

  const validate = (): ContactErrors => {
    const next: ContactErrors = {};
    if (form.name.trim().length < 2) {
      next.name = 'name';
    }
    if (form.contactInfo.trim().length < 5) {
      next.contactInfo = 'contactInfo';
    }
    if (form.subject.trim().length < 3) {
      next.subject = 'subject';
    }
    if (form.message.trim().length < 10) {
      next.message = 'message';
    }
    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSentMessage(true);
    }, 500);
  };

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
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="bg-white py-14 lg:py-18">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left Column */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-2xl border border-[#17324D]/10 bg-[#F3F8FC] p-6">
                <h2 className="font-display text-lg font-bold text-[#17324D]">
                  {copy.directDetailsTitle}
                </h2>

                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#0877C9]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-medium text-[#17324D]/60">
                        {copy.phoneLabel}
                      </p>
                      <a
                        href={SITE_CONFIG.contact.phoneHref}
                        className="font-semibold text-[#17324D] tabular-nums hover:text-[#0877C9]"
                      >
                        {SITE_CONFIG.contact.phoneDisplay[lang]}
                      </a>
                      <p className="mt-0.5 text-xs text-[#17324D]/65 tabular-nums">
                        {SITE_CONFIG.contact.landlineDisplay[lang]}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Mail
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#0877C9]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-medium text-[#17324D]/60">
                        {copy.emailLabel}
                      </p>
                      <p className="break-all font-semibold text-[#17324D]">
                        {SITE_CONFIG.contact.email[lang]}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#0877C9]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-medium text-[#17324D]/60">
                        {copy.addressLabel}
                      </p>
                      <p className="font-medium text-[#17324D]">
                        {SITE_CONFIG.contact.address[lang]}
                      </p>
                      <p className="mt-1 text-xs text-[#17324D]/65">
                        {copy.coveragePrefix}{' '}
                        {SITE_CONFIG.contact.serviceArea[lang]}
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-[#17324D]/10 pt-5">
                  <a
                    href={getWhatsAppUrl(undefined, lang)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-[#13A89E] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0E877F]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>{copy.whatsappChat}</span>
                  </a>
                  <a
                    href={SITE_CONFIG.contact.phoneHref}
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#17324D]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#17324D] transition-colors hover:border-[#0877C9] hover:text-[#0877C9]"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>{copy.callNow}</span>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="rounded-2xl border border-[#17324D]/10 bg-white p-6">
                <div className="flex items-center gap-2.5">
                  <Clock className="h-5 w-5 text-[#0877C9]" aria-hidden="true" />
                  <h2 className="font-display text-lg font-bold text-[#17324D]">
                    {copy.hoursTitle}
                  </h2>
                </div>
                <dl className="mt-4 divide-y divide-[#17324D]/10 text-sm">
                  {SITE_CONFIG.businessHours[lang].map((row) => (
                    <div
                      key={row.day}
                      className="flex flex-col justify-between gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-center"
                    >
                      <dt className="font-semibold text-[#17324D]">{row.day}</dt>
                      <dd className="text-[#17324D]/75 tabular-nums">{row.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Google Maps Integration Placeholder */}
              <div className="overflow-hidden rounded-2xl border border-dashed border-[#0877C9]/35 bg-[#F3F8FC] p-6">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#0877C9]"
                    aria-hidden="true"
                  />
                  <div>
                    <h2 className="font-display text-base font-bold text-[#17324D]">
                      {copy.mapTitle}
                    </h2>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#17324D]/75">
                      {SITE_CONFIG.mapConfig.embedNotice[lang]}
                    </p>
                    <p className="mt-3 text-xs font-medium text-[#17324D]/65 tabular-nums">
                      {copy.mapCoordsPrefix} {SITE_CONFIG.mapConfig.latitude}° N,{' '}
                      {SITE_CONFIG.mapConfig.longitude}° E {copy.mapCoordsSuffix}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              {sentMessage ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-2xl border border-[#13A89E]/30 bg-[#F3F8FC] p-8"
                >
                  <CheckCircle2
                    className="h-8 w-8 text-[#13A89E]"
                    aria-hidden="true"
                  />
                  <h2 className="mt-3 font-display text-2xl font-bold text-[#17324D]">
                    {copy.sentTitle}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#17324D]/80">
                    {copy.sentBody}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSentMessage(false);
                      setForm({
                        name: '',
                        contactInfo: '',
                        subject: '',
                        message: '',
                      });
                    }}
                    className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#0877C9] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#065FA1]"
                  >
                    {copy.sendAnother}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-2xl border border-[#17324D]/10 bg-white p-6 sm:p-8"
                >
                  <h2 className="font-display text-xl font-bold text-[#17324D]">
                    {copy.formTitle}
                  </h2>
                  <p className="mt-1 text-sm text-[#17324D]/70">
                    {copy.formSubtitle}
                  </p>

                  {Object.keys(errors).length > 0 && (
                    <div
                      role="alert"
                      className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
                    >
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                      <span>{copy.formErrorSummary}</span>
                    </div>
                  )}

                  <div className="mt-6 space-y-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-semibold text-[#17324D]"
                      >
                        {copy.fields.name}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder={copy.fields.namePlaceholder}
                        aria-invalid={Boolean(errors.name)}
                        className="mt-1.5 min-h-[46px] w-full rounded-lg border border-[#17324D]/20 px-4 py-2.5 text-sm text-[#17324D] placeholder:text-[#17324D]/40 focus:border-[#0877C9] focus:outline-none"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs font-medium text-red-700">
                          {copy.validation[errors.name]}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-info"
                        className="block text-sm font-semibold text-[#17324D]"
                      >
                        {copy.fields.contactInfo}
                      </label>
                      <input
                        id="contact-info"
                        type="text"
                        value={form.contactInfo}
                        onChange={(e) =>
                          setForm({ ...form, contactInfo: e.target.value })
                        }
                        placeholder={copy.fields.contactInfoPlaceholder}
                        aria-invalid={Boolean(errors.contactInfo)}
                        className="mt-1.5 min-h-[46px] w-full rounded-lg border border-[#17324D]/20 px-4 py-2.5 text-sm text-[#17324D] placeholder:text-[#17324D]/40 focus:border-[#0877C9] focus:outline-none"
                      />
                      {errors.contactInfo && (
                        <p className="mt-1 text-xs font-medium text-red-700">
                          {copy.validation[errors.contactInfo]}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-sm font-semibold text-[#17324D]"
                      >
                        {copy.fields.subject}
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder={copy.fields.subjectPlaceholder}
                        aria-invalid={Boolean(errors.subject)}
                        className="mt-1.5 min-h-[46px] w-full rounded-lg border border-[#17324D]/20 px-4 py-2.5 text-sm text-[#17324D] placeholder:text-[#17324D]/40 focus:border-[#0877C9] focus:outline-none"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-xs font-medium text-red-700">
                          {copy.validation[errors.subject]}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-semibold text-[#17324D]"
                      >
                        {copy.fields.message}
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder={copy.fields.messagePlaceholder}
                        aria-invalid={Boolean(errors.message)}
                        className="mt-1.5 w-full rounded-lg border border-[#17324D]/20 px-4 py-2.5 text-sm text-[#17324D] placeholder:text-[#17324D]/40 focus:border-[#0877C9] focus:outline-none"
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs font-medium text-red-700">
                          {copy.validation[errors.message]}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#0877C9] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#065FA1] disabled:opacity-70 sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        <span>{copy.sending}</span>
                      </>
                    ) : (
                      <span>{copy.sendBtn}</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
