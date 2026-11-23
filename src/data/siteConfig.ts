import type { Language } from '../context/LanguageContext';

export const SITE_CONFIG = {
  brandName: 'Health Home Care Services',
  country: {
    en: 'Nepal',
    ne: 'नेपाल',
  },
  tagline: {
    en: 'Compassionate Care, Right at Your Home.',
    ne: 'आत्मीय स्वास्थ्य हेरचाह, अब तपाईंको घरमै।',
  },
  description: {
    en: 'Home nursing, elderly care, post-surgery recovery, and patient support delivered at your residence in Nepal with clear family communication.',
    ne: 'परिवारसँगको स्पष्ट संवादसहित नेपालमा घरमै नर्सिङ सेवा, ज्येष्ठ नागरिक हेरचाह, शल्यक्रियापछिको स्वास्थ्य लाभ र बिरामी सहायता सेवा।',
  },

  // Clearly marked editable placeholders until official business details are supplied
  contact: {
    headerEmail: 'info@healthhomecare.com',
    headerPhone: '+977-9800000000',
    phoneDisplay: {
      en: '+977-98XXXXXXXX (Editable Placeholder)',
      ne: '+977-98XXXXXXXX (सम्पादनयोग्य स्थान)',
    },
    phoneHref: 'tel:+9779800000000',
    landlineDisplay: {
      en: '+977-01-XXXXXXX (Editable Placeholder)',
      ne: '+977-01-XXXXXXX (सम्पादनयोग्य स्थान)',
    },
    whatsappNumber: '9779800000000',
    whatsappDisplay: {
      en: '+977-98XXXXXXXX (Editable Placeholder)',
      ne: '+977-98XXXXXXXX (सम्पादनयोग्य स्थान)',
    },
    whatsappMessage: {
      en: 'Namaste Health Home Care Services, I would like to inquire about home healthcare support.',
      ne: 'नमस्ते Health Home Care Services, म घरमै स्वास्थ्य हेरचाह सेवाबारे जानकारी लिन चाहन्छु।',
    },
    email: {
      en: 'info@healthhomecareservices.com.np [Editable Placeholder]',
      ne: 'info@healthhomecareservices.com.np [सम्पादनयोग्य स्थान]',
    },
    address: {
      en: '[Street Name, Ward No., City — Kathmandu Valley / Nepal Office Address Placeholder]',
      ne: '[टोल/सडक, वडा नं., सहर — काठमाडौँ उपत्यका / नेपाल कार्यालय ठेगाना राख्ने स्थान]',
    },
    serviceArea: {
      en: 'Kathmandu, Lalitpur, Bhaktapur & Surrounding Areas [Editable Service Area]',
      ne: 'काठमाडौँ, ललितपुर, भक्तपुर तथा आसपासका क्षेत्र [सम्पादनयोग्य सेवा क्षेत्र]',
    },
  },

  businessHours: {
    en: [
      {
        day: 'Sunday – Friday',
        hours: '7:00 AM – 8:00 PM [Editable Hours]',
      },
      {
        day: 'Saturday',
        hours: '8:00 AM – 5:00 PM · Scheduled Visits [Editable Hours]',
      },
      {
        day: 'Coordinator Desk',
        hours: 'Call / WhatsApp Inquiry Support [Editable Hours]',
      },
    ],
    ne: [
      {
        day: 'आइतबार – शुक्रबार',
        hours: 'बिहान ७:०० – बेलुका ८:०० बजे [सम्पादनयोग्य समय]',
      },
      {
        day: 'शनिबार',
        hours: 'बिहान ८:०० – बेलुका ५:०० बजे · तालिकाबद्ध सेवा [सम्पादनयोग्य]',
      },
      {
        day: 'संयोजक डेस्क',
        hours: 'फोन / WhatsApp सोधपुछ सहयोग [सम्पादनयोग्य समय]',
      },
    ],
  },

  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    tiktok: 'https://tiktok.com/',
  },

  mapConfig: {
    latitude: '27.7172',
    longitude: '85.3240',
    embedNotice: {
      en: 'Google Maps embed placeholder. Replace with your verified Google Maps Embed API key or Place URL in site configuration.',
      ne: 'Google Maps इम्बेड स्थान। साइट कन्फिगरेसनमा आफ्नो प्रमाणित Google Maps Embed URL वा स्थान राख्नुहोस्।',
    },
  },

  legalPlaceholders: {
    registrationNotice: {
      en: '[Business Registration & Applicable Healthcare License Numbers — Add Verified Details Here]',
      ne: '[व्यवसाय दर्ता तथा लागू हुने स्वास्थ्य सेवा इजाजत नम्बर — प्रमाणित विवरण यहाँ राख्नुहोस्]',
    },
    lastUpdated: {
      en: '[Month Year — Editable Date]',
      ne: '[महिना वर्ष — सम्पादनयोग्य मिति]',
    },
  },
};

export function getWhatsAppUrl(customText?: string, lang: Language = 'en'): string {
  const text = encodeURIComponent(
    customText || SITE_CONFIG.contact.whatsappMessage[lang]
  );
  return `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${text}`;
}
