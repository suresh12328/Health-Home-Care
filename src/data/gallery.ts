import type { Language } from '../context/LanguageContext';
import { IMAGES } from './services';

export type GalleryCategory =
  | 'All'
  | 'Home Nursing Care'
  | 'Elderly Care'
  | 'Healthcare Professionals'
  | 'Patient Support'
  | 'Home Healthcare Activities';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  caption: string;
  context: string;
  image: string;
  imageAlt: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  'Home Nursing Care',
  'Elderly Care',
  'Healthcare Professionals',
  'Patient Support',
  'Home Healthcare Activities',
];

const GALLERY_ITEMS_DATA: Record<Language, GalleryItem[]> = {
  en: [
    {
      id: 'gal-1',
      title: 'Compassionate Senior Living Room Check-In',
      category: 'Elderly Care',
      caption:
        'Attentive conversation and gentle health check-in for an elderly family member at home.',
      context: 'Elderly Care · Home Visit',
      image: IMAGES.hero,
      imageAlt:
        'Compassionate nurse speaking warmly with an elderly Nepali grandmother in a sunlit living room',
    },
    {
      id: 'gal-2',
      title: 'Blood Pressure & Vital Signs Check',
      category: 'Home Nursing Care',
      caption:
        'Routine blood pressure monitoring and careful health chart documentation during a scheduled home visit.',
      context: 'Clinical Nursing · Vital Signs',
      image: IMAGES.nursingVitals,
      imageAlt: 'Nurse measuring patient blood pressure in a bright home environment',
    },
    {
      id: 'gal-3',
      title: 'Assisted Hallway Mobility Support',
      category: 'Patient Support',
      caption:
        'Safe walking assistance to build daily confidence and reduce fall hazards inside the home.',
      context: 'Patient Support · Mobility',
      image: IMAGES.elderlyCompanion,
      imageAlt:
        'Caregiver walking carefully alongside an elderly grandfather in a home hallway',
    },
    {
      id: 'gal-4',
      title: 'Sterile Post-Surgery Dressing Preparation',
      category: 'Home Nursing Care',
      caption:
        'Hygienic preparation of sterile dressing supplies beside a recovering patient’s bed.',
      context: 'Post-Surgery · Wound Hygiene',
      image: IMAGES.postSurgery,
      imageAlt: 'Nurse preparing sterile wound care supplies beside a patient bed',
    },
    {
      id: 'gal-5',
      title: 'Guided Seated Rehabilitation Exercise',
      category: 'Home Healthcare Activities',
      caption:
        'Gentle range-of-motion shoulder and arm exercise guided safely in the living room.',
      context: 'Physiotherapy Support · Home Rehab',
      image: IMAGES.physiotherapy,
      imageAlt: 'Physiotherapist guiding an older adult through seated shoulder exercises',
    },
    {
      id: 'gal-6',
      title: 'Daily Prescription & Pill Box Organization',
      category: 'Home Healthcare Activities',
      caption:
        'Organizing weekly prescription compartments and maintaining a clear dosage checklist.',
      context: 'Medication Assistance · Safety Log',
      image: IMAGES.medicationCare,
      imageAlt:
        'Nurse organizing daily pill box and written medication schedule at a table',
    },
    {
      id: 'gal-7',
      title: 'Coordinated Healthcare Care Team',
      category: 'Healthcare Professionals',
      caption:
        'Our multidisciplinary care coordinators and nursing specialists preparing daily home care schedules.',
      context: 'Care Coordination · Team',
      image: IMAGES.teamGroup,
      imageAlt: 'Three welcoming healthcare professionals in neat blue and teal uniforms',
    },
    {
      id: 'gal-8',
      title: 'Dedicated Clinical Care Documentation',
      category: 'Healthcare Professionals',
      caption:
        'Reviewing patient care plans and family handover checklists prior to scheduled home visits.',
      context: 'Nursing Coordination · Documentation',
      image: IMAGES.nursePortrait,
      imageAlt: 'Registered nurse holding a patient care clipboard in a bright clinic corridor',
    },
  ],
  ne: [
    {
      id: 'gal-1',
      title: 'बैठक कोठामा ज्येष्ठ नागरिकसँग आत्मीय स्वास्थ्य भेट',
      category: 'Elderly Care',
      caption:
        'घरकै सहज वातावरणमा ज्येष्ठ नागरिक सदस्यसँग आत्मीय संवाद र स्वास्थ्य अवस्था जाँच।',
      context: 'ज्येष्ठ नागरिक हेरचाह · गृहभेट',
      image: IMAGES.hero,
      imageAlt: 'उज्यालो बैठक कोठामा ज्येष्ठ आमासँग आत्मीय संवाद गर्दै गरेकी नर्स',
    },
    {
      id: 'gal-2',
      title: 'रक्तचाप तथा भाइटल साइन जाँच',
      category: 'Home Nursing Care',
      caption:
        'तालिकाबद्ध गृहभेटका क्रममा नियमित रक्तचाप मापन र स्वास्थ्य चार्ट अभिलेख।',
      context: 'क्लिनिकल नर्सिङ · भाइटल साइन',
      image: IMAGES.nursingVitals,
      imageAlt: 'उज्यालो घरको कोठामा बिरामीको रक्तचाप नाप्दै गरेकी नर्स',
    },
    {
      id: 'gal-3',
      title: 'घरभित्र सुरक्षित हिँडडुल सहायता',
      category: 'Patient Support',
      caption:
        'लड्ने जोखिम कम गर्न र आत्मविश्वास बढाउन करिडोरमा सुरक्षित हिँडडुल सहयोग।',
      context: 'बिरामी सहायता · हिँडडुल',
      image: IMAGES.elderlyCompanion,
      imageAlt: 'ज्येष्ठ नागरिक बाजेलाई घरको बाटोमा हात समातेर हिँडाउँदै गरेकी हेरचाहकर्ता',
    },
    {
      id: 'gal-4',
      title: 'शल्यक्रियापछिको सफा ड्रेसिङ तयारी',
      category: 'Home Nursing Care',
      caption:
        'स्वास्थ्य लाभ गरिरहेका बिरामीको ओछ्यानछेउमा सफा र निसंक्रमित ड्रेसिङ सामग्रीको तयारी।',
      context: 'शल्यक्रियापछि · घाउ सरसफाइ',
      image: IMAGES.postSurgery,
      imageAlt: 'बिरामीको ओछ्यानछेउमा सफा ड्रेसिङ सामग्री मिलाउँदै गरेकी नर्स',
    },
    {
      id: 'gal-5',
      title: 'बसेर गरिने निर्देशित पुनर्स्थापना व्यायाम',
      category: 'Home Healthcare Activities',
      caption:
        'बैठक कोठामै सुरक्षित तरिकाले काँध र पाखुरा चलाउने हल्का फिजियोथेरापी अभ्यास।',
      context: 'फिजियोथेरापी सहयोग · गृह व्यायाम',
      image: IMAGES.physiotherapy,
      imageAlt: 'ज्येष्ठ नागरिकलाई बसेर काँधको व्यायाम सिकाउँदै गरेकी फिजियोथेरापिस्ट',
    },
    {
      id: 'gal-6',
      title: 'दैनिक औषधि तालिका र पिल–बक्स व्यवस्थापन',
      category: 'Home Healthcare Activities',
      caption:
        'चिकित्सकको पर्चाअनुसार साप्ताहिक औषधि बट्टा मिलाउने र स्पष्ट मात्रा तालिका तयार पार्ने कार्य।',
      context: 'औषधि सहायता · सुरक्षा अभिलेख',
      image: IMAGES.medicationCare,
      imageAlt: 'टेबलमा औषधिको बट्टा र लिखित औषधि तालिका मिलाउँदै गरेकी नर्स',
    },
    {
      id: 'gal-7',
      title: 'समन्वित स्वास्थ्य हेरचाह टोली',
      category: 'Healthcare Professionals',
      caption:
        'दैनिक गृहसेवा तालिका तयार पार्दै गरेका हेरचाह संयोजक र नर्सिङ विशेषज्ञहरूको टोली।',
      context: 'हेरचाह समन्वय · टोली',
      image: IMAGES.teamGroup,
      imageAlt: 'नीलो र हरियो मेडिकल पोसाकमा रहेका तीन स्वास्थ्यकर्मीहरू',
    },
    {
      id: 'gal-8',
      title: 'व्यवस्थित क्लिनिकल हेरचाह अभिलेख',
      category: 'Healthcare Professionals',
      caption:
        'निर्धारित गृहभेटअघि बिरामीको हेरचाह योजना र परिवार हस्तान्तरण सूची समीक्षा गर्दै।',
      context: 'नर्सिङ समन्वय · अभिलेख',
      image: IMAGES.nursePortrait,
      imageAlt: 'क्लिनिक करिडोरमा बिरामी हेरचाह क्लिपबोर्ड बोकेकी दर्तावाल नर्स',
    },
  ],
};

export function getGalleryItems(lang: Language): GalleryItem[] {
  return GALLERY_ITEMS_DATA[lang];
}
