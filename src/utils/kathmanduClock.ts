import NepaliDate from 'nepali-date-converter';
import type { Language } from '../context/LanguageContext';

const NEPALI_DIGITS = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

const NEPALI_MONTHS = [
  'बैशाख',
  'जेठ',
  'असार',
  'साउन',
  'भदौ',
  'असोज',
  'कात्तिक',
  'मंसिर',
  'पुस',
  'माघ',
  'फागुन',
  'चैत',
] as const;

const NEPALI_WEEKDAYS = [
  'आइतबार',
  'सोमबार',
  'मंगलबार',
  'बुधबार',
  'बिहीबार',
  'शुक्रबार',
  'शनिबार',
] as const;

const ENGLISH_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

const ENGLISH_WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const;

export function toNepaliDigits(input: string | number): string {
  return String(input).replace(/\d/g, (digit) => NEPALI_DIGITS[Number(digit)] ?? digit);
}

interface KathmanduParts {
  year: number;
  month: number; // 1..12
  day: number; // 1..31
  weekdayIndex: number; // 0 (Sun) .. 6 (Sat)
  hour24: number; // 0..23
  minute: number; // 0..59
  second: number; // 0..59
}

const ktmFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Kathmandu',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  weekday: 'short',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

const WEEKDAY_MAP: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

function getKathmanduParts(now: Date): KathmanduParts {
  const parts = ktmFormatter.formatToParts(now);
  const lookup: Record<string, string> = {};
  for (const part of parts) {
    if (part.type !== 'literal') {
      lookup[part.type] = part.value;
    }
  }

  const rawHour = Number(lookup.hour || '0');
  const hour24 = rawHour === 24 ? 0 : rawHour;

  return {
    year: Number(lookup.year),
    month: Number(lookup.month),
    day: Number(lookup.day),
    weekdayIndex: WEEKDAY_MAP[lookup.weekday || 'Sun'] ?? 0,
    hour24,
    minute: Number(lookup.minute || '0'),
    second: Number(lookup.second || '0'),
  };
}

export interface FormattedKathmanduDateTime {
  dateText: string;
  timeText: string;
}

export function formatKathmanduDateTime(
  now: Date,
  lang: Language
): FormattedKathmanduDateTime {
  const ktm = getKathmanduParts(now);

  // 12-hour clock formatting
  const isPm = ktm.hour24 >= 12;
  const hour12 = ktm.hour24 % 12 === 0 ? 12 : ktm.hour24 % 12;
  const hh = String(hour12).padStart(2, '0');
  const mm = String(ktm.minute).padStart(2, '0');
  const ss = String(ktm.second).padStart(2, '0');

  if (lang === 'en') {
    const weekday = ENGLISH_WEEKDAYS[ktm.weekdayIndex];
    const monthName = ENGLISH_MONTHS[ktm.month - 1];
    const dateText = `${weekday}, ${ktm.day} ${monthName} ${ktm.year}`;
    const timeText = `${hh}:${mm}:${ss} ${isPm ? 'PM' : 'AM'}`;
    return { dateText, timeText };
  }

  // Accurate Gregorian -> Bikram Sambat conversion using Kathmandu wall-clock date at noon
  const bsDate = new NepaliDate(new Date(ktm.year, ktm.month - 1, ktm.day, 12, 0, 0));
  const bsYear = toNepaliDigits(bsDate.getYear());
  const bsMonth = NEPALI_MONTHS[bsDate.getMonth()];
  const bsDay = toNepaliDigits(bsDate.getDate());
  const bsWeekday = NEPALI_WEEKDAYS[bsDate.getDay()];

  const dateText = `${bsYear} ${bsMonth} ${bsDay}, ${bsWeekday}`;
  const nepaliPeriod = isPm ? 'अपराह्न' : 'पूर्वाह्न';
  const timeText = `${toNepaliDigits(hh)}:${toNepaliDigits(mm)}:${toNepaliDigits(ss)} ${nepaliPeriod}`;

  return { dateText, timeText };
}
