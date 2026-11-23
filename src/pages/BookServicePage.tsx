import { useEffect, useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  AlertCircle,
  Clock,
  Loader2,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { getServices, getServiceBySlug } from '../data/services';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { getUiText } from '../data/translations';

interface BookingFormState {
  fullName: string;
  phone: string;
  email: string;
  serviceSlug: string;
  patientAge: string;
  preferredDate: string;
  timeSlotIndex: number;
  address: string;
  message: string;
}

type BookingErrorKey =
  | 'fullName'
  | 'phone'
  | 'email'
  | 'service'
  | 'age'
  | 'dateRequired'
  | 'datePast'
  | 'time'
  | 'address';

type BookingErrorMap = Partial<Record<keyof BookingFormState, BookingErrorKey>>;

interface SubmittedRequest {
  referenceId: string;
  submittedAt: string;
  serviceSlug: string;
  serviceTitleFallback: string;
  fullName: string;
  preferredDate: string;
  timeSlotIndex: number;
  address: string;
}

const STORAGE_KEY = 'hhcs_pending_bookings_v1';

export function BookServicePage() {
  const [searchParams] = useSearchParams();
  const preselectedSlug = searchParams.get('service') || '';
  const { lang } = useLanguage();
  const t = getUiText(lang);
  const copy = t.bookPage;
  const services = getServices(lang);

  const [form, setForm] = useState<BookingFormState>({
    fullName: '',
    phone: '',
    email: '',
    serviceSlug: services.some((s) => s.slug === preselectedSlug)
      ? preselectedSlug
      : services[0].slug,
    patientAge: '',
    preferredDate: '',
    timeSlotIndex: 0,
    address: '',
    message: '',
  });

  const [errors, setErrors] = useState<BookingErrorMap>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [storageFailed, setStorageFailed] = useState(false);
  const [submittedRequest, setSubmittedRequest] = useState<SubmittedRequest | null>(
    null
  );
  const [recentRequests, setRecentRequests] = useState<SubmittedRequest[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? (JSON.parse(saved) as SubmittedRequest[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (preselectedSlug && services.some((s) => s.slug === preselectedSlug)) {
      setForm((prev) => ({ ...prev, serviceSlug: preselectedSlug }));
    }
  }, [preselectedSlug, services]);

  const selectedService =
    services.find((s) => s.slug === form.serviceSlug) || services[0];

  const todayIso = new Date().toISOString().split('T')[0];

  const validate = (): BookingErrorMap => {
    const next: BookingErrorMap = {};

    if (form.fullName.trim().length < 2) {
      next.fullName = 'fullName';
    }

    const cleanedPhone = form.phone.replace(/[\s\-()]/g, '');
    if (!/^\+?[0-9]{7,15}$/.test(cleanedPhone)) {
      next.phone = 'phone';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'email';
    }

    if (!form.serviceSlug) {
      next.serviceSlug = 'service';
    }

    const ageNum = Number(form.patientAge);
    if (!form.patientAge.trim() || Number.isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
      next.patientAge = 'age';
    }

    if (!form.preferredDate) {
      next.preferredDate = 'dateRequired';
    } else if (form.preferredDate < todayIso) {
      next.preferredDate = 'datePast';
    }

    if (form.timeSlotIndex < 0 || form.timeSlotIndex >= copy.timeSlots.length) {
      next.timeSlotIndex = 'time';
    }

    if (form.address.trim().length < 5) {
      next.address = 'address';
    }

    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setHasSubmitError(false);
    setStorageFailed(false);

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setHasSubmitError(true);
      return;
    }

    setIsSubmitting(true);

    window.setTimeout(() => {
      try {
        const record: SubmittedRequest = {
          referenceId: `REQ-${Date.now().toString().slice(-6)}`,
          submittedAt: new Date().toLocaleString(),
          serviceSlug: selectedService.slug,
          serviceTitleFallback: selectedService.title,
          fullName: form.fullName.trim(),
          preferredDate: form.preferredDate,
          timeSlotIndex: form.timeSlotIndex,
          address: form.address.trim(),
        };

        const updatedHistory = [record, ...recentRequests].slice(0, 5);
        setRecentRequests(updatedHistory);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
        setSubmittedRequest(record);
        setIsSubmitting(false);
      } catch {
        setStorageFailed(true);
        setIsSubmitting(false);
      }
    }, 550);
  };

  const resetForNewBooking = () => {
    setSubmittedRequest(null);
    setErrors({});
    setHasSubmitError(false);
    setStorageFailed(false);
    setForm((prev) => ({
      ...prev,
      fullName: '',
      phone: '',
      email: '',
      patientAge: '',
      preferredDate: '',
      address: '',
      message: '',
    }));
  };

  const getLocalizedServiceTitle = (slug: string, fallback: string) => {
    return getServiceBySlug(slug, lang)?.title || fallback;
  };

  const getLocalizedTimeSlot = (idx: number) => {
    return copy.timeSlots[idx] ?? copy.timeSlots[0];
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

      {/* Main Content */}
      <section className="bg-white py-14 lg:py-18">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left: Form or Pending Approval Confirmation */}
            <div className="lg:col-span-8">
              {submittedRequest ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-2xl border border-[#0877C9]/25 bg-[#F3F8FC] p-6 sm:p-8"
                >
                  <div className="flex items-start gap-3.5">
                    <Clock
                      className="mt-1 h-7 w-7 shrink-0 text-[#0877C9]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#0877C9]">
                        {copy.statusLabel} {copy.pendingApprovalLabel}
                      </p>
                      <h2 className="mt-1 font-display text-2xl font-bold text-[#17324D]">
                        {copy.confirmedTitle}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-[#17324D]/80">
                        {copy.confirmedThankYouPrefix} {submittedRequest.fullName}
                        {copy.confirmedThankYouMiddle}
                        <strong className="font-semibold text-[#17324D]">
                          {copy.confirmedStrong}
                        </strong>
                        {copy.confirmedThankYouEnd}
                      </p>
                    </div>
                  </div>

                  <dl className="mt-6 grid gap-4 rounded-xl border border-[#17324D]/10 bg-white p-5 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="text-xs text-[#17324D]/60">{copy.refLabel}</dt>
                      <dd className="mt-0.5 font-semibold text-[#17324D] tabular-nums">
                        {submittedRequest.referenceId}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#17324D]/60">
                        {copy.serviceLabel}
                      </dt>
                      <dd className="mt-0.5 font-semibold text-[#17324D]">
                        {getLocalizedServiceTitle(
                          submittedRequest.serviceSlug,
                          submittedRequest.serviceTitleFallback
                        )}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#17324D]/60">
                        {copy.dateWindowLabel}
                      </dt>
                      <dd className="mt-0.5 font-medium text-[#17324D] tabular-nums">
                        {submittedRequest.preferredDate} ·{' '}
                        {getLocalizedTimeSlot(submittedRequest.timeSlotIndex)}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#17324D]/60">
                        {copy.locationLabel}
                      </dt>
                      <dd className="mt-0.5 font-medium text-[#17324D]">
                        {submittedRequest.address}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={getWhatsAppUrl(
                        `${copy.whatsappBookingMsgPrefix} ${submittedRequest.referenceId} ${copy.whatsappBookingMsgFor} ${getLocalizedServiceTitle(
                          submittedRequest.serviceSlug,
                          submittedRequest.serviceTitleFallback
                        )} (${copy.whatsappBookingMsgOn} ${submittedRequest.preferredDate}).`,
                        lang
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#13A89E] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0E877F]"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      <span>{copy.followUpWhatsapp}</span>
                    </a>
                    <button
                      type="button"
                      onClick={resetForNewBooking}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#17324D]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#17324D] transition-colors hover:border-[#0877C9] hover:text-[#0877C9]"
                    >
                      {copy.submitAnother}
                    </button>
                  </div>
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

                  {(hasSubmitError || storageFailed) && (
                    <div
                      role="alert"
                      className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
                    >
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                      <span>
                        {storageFailed ? copy.storageError : copy.errorSummary}
                      </span>
                    </div>
                  )}

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    {/* Full Name */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="booking-full-name"
                        className="block text-sm font-semibold text-[#17324D]"
                      >
                        {copy.fields.fullName}
                      </label>
                      <input
                        id="booking-full-name"
                        type="text"
                        value={form.fullName}
                        onChange={(e) =>
                          setForm({ ...form, fullName: e.target.value })
                        }
                        placeholder={copy.fields.fullNamePlaceholder}
                        aria-invalid={Boolean(errors.fullName)}
                        className="mt-1.5 min-h-[46px] w-full rounded-lg border border-[#17324D]/20 px-4 py-2.5 text-sm text-[#17324D] placeholder:text-[#17324D]/40 focus:border-[#0877C9] focus:outline-none"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs font-medium text-red-700">
                          {copy.validation[errors.fullName]}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="booking-phone"
                        className="block text-sm font-semibold text-[#17324D]"
                      >
                        {copy.fields.phone}
                      </label>
                      <input
                        id="booking-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder={copy.fields.phonePlaceholder}
                        aria-invalid={Boolean(errors.phone)}
                        className="mt-1.5 min-h-[46px] w-full rounded-lg border border-[#17324D]/20 px-4 py-2.5 text-sm text-[#17324D] placeholder:text-[#17324D]/40 focus:border-[#0877C9] focus:outline-none"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs font-medium text-red-700">
                          {copy.validation[errors.phone]}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="booking-email"
                        className="block text-sm font-semibold text-[#17324D]"
                      >
                        {copy.fields.email}
                      </label>
                      <input
                        id="booking-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder={copy.fields.emailPlaceholder}
                        aria-invalid={Boolean(errors.email)}
                        className="mt-1.5 min-h-[46px] w-full rounded-lg border border-[#17324D]/20 px-4 py-2.5 text-sm text-[#17324D] placeholder:text-[#17324D]/40 focus:border-[#0877C9] focus:outline-none"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs font-medium text-red-700">
                          {copy.validation[errors.email]}
                        </p>
                      )}
                    </div>

                    {/* Select Service */}
                    <div>
                      <label
                        htmlFor="booking-service"
                        className="block text-sm font-semibold text-[#17324D]"
                      >
                        {copy.fields.service}
                      </label>
                      <select
                        id="booking-service"
                        value={form.serviceSlug}
                        onChange={(e) =>
                          setForm({ ...form, serviceSlug: e.target.value })
                        }
                        aria-invalid={Boolean(errors.serviceSlug)}
                        className="mt-1.5 min-h-[46px] w-full rounded-lg border border-[#17324D]/20 bg-white px-4 py-2.5 text-sm text-[#17324D] focus:border-[#0877C9] focus:outline-none"
                      >
                        {services.map((service) => (
                          <option key={service.slug} value={service.slug}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                      {errors.serviceSlug && (
                        <p className="mt-1 text-xs font-medium text-red-700">
                          {copy.validation[errors.serviceSlug]}
                        </p>
                      )}
                    </div>

                    {/* Patient Age */}
                    <div>
                      <label
                        htmlFor="booking-age"
                        className="block text-sm font-semibold text-[#17324D]"
                      >
                        {copy.fields.age}
                      </label>
                      <input
                        id="booking-age"
                        type="number"
                        min={1}
                        max={120}
                        value={form.patientAge}
                        onChange={(e) =>
                          setForm({ ...form, patientAge: e.target.value })
                        }
                        placeholder={copy.fields.agePlaceholder}
                        aria-invalid={Boolean(errors.patientAge)}
                        className="mt-1.5 min-h-[46px] w-full rounded-lg border border-[#17324D]/20 px-4 py-2.5 text-sm text-[#17324D] tabular-nums placeholder:text-[#17324D]/40 focus:border-[#0877C9] focus:outline-none"
                      />
                      {errors.patientAge && (
                        <p className="mt-1 text-xs font-medium text-red-700">
                          {copy.validation[errors.patientAge]}
                        </p>
                      )}
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label
                        htmlFor="booking-date"
                        className="block text-sm font-semibold text-[#17324D]"
                      >
                        {copy.fields.date}
                      </label>
                      <input
                        id="booking-date"
                        type="date"
                        min={todayIso}
                        value={form.preferredDate}
                        onChange={(e) =>
                          setForm({ ...form, preferredDate: e.target.value })
                        }
                        aria-invalid={Boolean(errors.preferredDate)}
                        className="mt-1.5 min-h-[46px] w-full rounded-lg border border-[#17324D]/20 px-4 py-2.5 text-sm text-[#17324D] tabular-nums focus:border-[#0877C9] focus:outline-none"
                      />
                      {errors.preferredDate && (
                        <p className="mt-1 text-xs font-medium text-red-700">
                          {copy.validation[errors.preferredDate]}
                        </p>
                      )}
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label
                        htmlFor="booking-time"
                        className="block text-sm font-semibold text-[#17324D]"
                      >
                        {copy.fields.time}
                      </label>
                      <select
                        id="booking-time"
                        value={form.timeSlotIndex}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            timeSlotIndex: Number(e.target.value),
                          })
                        }
                        aria-invalid={Boolean(errors.timeSlotIndex)}
                        className="mt-1.5 min-h-[46px] w-full rounded-lg border border-[#17324D]/20 bg-white px-4 py-2.5 text-sm text-[#17324D] focus:border-[#0877C9] focus:outline-none"
                      >
                        {copy.timeSlots.map((slot, idx) => (
                          <option key={slot} value={idx}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      {errors.timeSlotIndex && (
                        <p className="mt-1 text-xs font-medium text-red-700">
                          {copy.validation[errors.timeSlotIndex]}
                        </p>
                      )}
                    </div>

                    {/* Location / Address */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="booking-address"
                        className="block text-sm font-semibold text-[#17324D]"
                      >
                        {copy.fields.address}
                      </label>
                      <input
                        id="booking-address"
                        type="text"
                        value={form.address}
                        onChange={(e) =>
                          setForm({ ...form, address: e.target.value })
                        }
                        placeholder={copy.fields.addressPlaceholder}
                        aria-invalid={Boolean(errors.address)}
                        className="mt-1.5 min-h-[46px] w-full rounded-lg border border-[#17324D]/20 px-4 py-2.5 text-sm text-[#17324D] placeholder:text-[#17324D]/40 focus:border-[#0877C9] focus:outline-none"
                      />
                      {errors.address && (
                        <p className="mt-1 text-xs font-medium text-red-700">
                          {copy.validation[errors.address]}
                        </p>
                      )}
                    </div>

                    {/* Additional Message */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="booking-message"
                        className="block text-sm font-semibold text-[#17324D]"
                      >
                        {copy.fields.message}
                      </label>
                      <textarea
                        id="booking-message"
                        rows={4}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        placeholder={copy.fields.messagePlaceholder}
                        className="mt-1.5 w-full rounded-lg border border-[#17324D]/20 px-4 py-2.5 text-sm text-[#17324D] placeholder:text-[#17324D]/40 focus:border-[#0877C9] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-6 border-t border-[#17324D]/10 pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#0877C9] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#065FA1] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2
                            className="h-4 w-4 animate-spin"
                            aria-hidden="true"
                          />
                          <span>{copy.submitting}</span>
                        </>
                      ) : (
                        <span>{copy.submitBtn}</span>
                      )}
                    </button>
                    <p className="mt-3 text-xs text-[#17324D]/65">
                      {copy.submitDisclaimer}
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Right Sidebar */}
            <aside className="space-y-6 lg:col-span-4">
              <div className="rounded-2xl border border-[#17324D]/10 bg-[#F3F8FC] p-6">
                <p className="text-xs font-semibold text-[#13A89E]">
                  {copy.sidebarOverview}
                </p>
                <h2 className="mt-1 font-display text-lg font-bold text-[#17324D]">
                  {selectedService.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#17324D]/75">
                  {selectedService.shortDescription}
                </p>

                <div className="mt-4 space-y-2 border-t border-[#17324D]/10 pt-4 text-xs">
                  <p className="font-semibold text-[#0877C9] tabular-nums">
                    {selectedService.nprEstimate}
                  </p>
                  <p className="text-[#17324D]/70">
                    {selectedService.availabilityNote}
                  </p>
                </div>

                <Link
                  to={`/services/${selectedService.slug}`}
                  className="mt-4 inline-block text-xs font-semibold text-[#0877C9] hover:underline"
                >
                  {copy.readFullDetails}
                </Link>
              </div>

              <div className="rounded-2xl border border-[#17324D]/10 bg-white p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#0877C9]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-base font-semibold text-[#17324D]">
                      {copy.approvalTitle}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#17324D]/75">
                      {copy.approvalBody}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-2.5 border-t border-[#17324D]/10 pt-4">
                  <a
                    href={SITE_CONFIG.contact.phoneHref}
                    className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg border border-[#17324D]/15 px-4 py-2 text-xs font-semibold text-[#17324D] transition-colors hover:border-[#0877C9] hover:text-[#0877C9]"
                  >
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{copy.callCoordinator}</span>
                  </a>
                  <a
                    href={getWhatsAppUrl(undefined, lang)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg bg-[#13A89E] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0E877F]"
                  >
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{copy.messageWhatsapp}</span>
                  </a>
                </div>
              </div>

              {recentRequests.length > 0 && (
                <div className="rounded-2xl border border-[#17324D]/10 bg-white p-6">
                  <h3 className="font-display text-sm font-bold text-[#17324D]">
                    {copy.submittedRequestsTitle}
                  </h3>
                  <ul className="mt-3 divide-y divide-[#17324D]/10 text-xs">
                    {recentRequests.map((req) => (
                      <li key={req.referenceId} className="py-2.5 first:pt-0 last:pb-0">
                        <p className="font-semibold text-[#17324D]">
                          {getLocalizedServiceTitle(
                            req.serviceSlug,
                            req.serviceTitleFallback
                          )}{' '}
                          ·{' '}
                          <span className="tabular-nums text-[#0877C9]">
                            {req.referenceId}
                          </span>
                        </p>
                        <p className="mt-0.5 text-[#17324D]/65 tabular-nums">
                          {req.preferredDate} · {copy.pendingApprovalLabel}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
