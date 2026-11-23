import type { Language } from '../context/LanguageContext';
import { IMAGES } from './services';

export type TeamCategory = 'Doctors' | 'Registered Nurses' | 'Caregivers & Support';

export interface TeamMember {
  id: string;
  category: TeamCategory;
  name: string;
  designation: string;
  qualificationPlaceholder: string;
  experiencePlaceholder: string;
  verificationStatus: string;
  availabilityNote: string;
  focusAreas: string[];
  image: string;
  imageAlt: string;
}

const TEAM_MEMBERS_DATA: Record<Language, TeamMember[]> = {
  en: [
    {
      id: 'nurse-profile-01',
      category: 'Registered Nurses',
      name: '[Nurse Name — Editable Placeholder]',
      designation: 'Registered Nurse · Home Nursing Lead [Editable]',
      qualificationPlaceholder:
        '[Add Verified Nursing Qualification, e.g., B.Sc. Nursing / PCL Nursing & NNC Reg. No.]',
      experiencePlaceholder:
        '[Add Verified Years of Clinical & Home Care Experience]',
      verificationStatus: 'Pending Verified Credential Entry',
      availabilityNote: 'Scheduled Home Nursing Visits',
      focusAreas: ['Vital Signs Monitoring', 'Wound Care Support', 'Post-Surgery Care'],
      image: IMAGES.nursePortrait,
      imageAlt: 'Portrait of a female registered nurse holding a clinical clipboard',
    },
    {
      id: 'team-care-02',
      category: 'Caregivers & Support',
      name: '[Caregiver Name — Editable Placeholder]',
      designation: 'Senior Care & Mobility Attendant [Editable]',
      qualificationPlaceholder:
        '[Add Verified Caregiver Training / Health Assistant Certificate Details]',
      experiencePlaceholder:
        '[Add Verified Years of Elderly & Patient Support Experience]',
      verificationStatus: 'Editable Staff Profile Slot',
      availabilityNote: 'Day & Shift Care Support',
      focusAreas: ['Elderly Care', 'Personal Care Assistance', 'Patient Care at Home'],
      image: IMAGES.elderlyCompanion,
      imageAlt: 'Caregiver supporting an elderly patient walking safely indoors',
    },
    {
      id: 'team-physio-03',
      category: 'Caregivers & Support',
      name: '[Physiotherapy Specialist — Editable Placeholder]',
      designation: 'Home Physiotherapy & Mobility Support [Editable]',
      qualificationPlaceholder:
        '[Add Verified Physiotherapy Degree & Council Registration No.]',
      experiencePlaceholder:
        '[Add Verified Rehabilitation & Home Mobility Experience]',
      verificationStatus: 'Editable Staff Profile Slot',
      availabilityNote: 'By Scheduled Appointment',
      focusAreas: [
        'Physiotherapy Support',
        'Post-Surgery Mobility',
        'Senior Strength Exercises',
      ],
      image: IMAGES.physiotherapy,
      imageAlt:
        'Physiotherapy specialist guiding a senior patient through seated arm mobility exercises',
    },
    {
      id: 'team-doctor-04',
      category: 'Doctors',
      name: '[Consulting Doctor — Available Only When Verified & Scheduled]',
      designation: 'Medical Advisor / Home Visit Physician [Optional Slot]',
      qualificationPlaceholder:
        '[Add Verified MBBS / MD Degree & Nepal Medical Council (NMC) Registration No. Only If Available]',
      experiencePlaceholder:
        '[Add Verified Clinical Practice & Home Consultation Background]',
      verificationStatus: 'Doctor Visit Available Only When Scheduled & Verified',
      availabilityNote: 'On-Request Consultation (Subject to Doctor Availability)',
      focusAreas: [
        'Care Plan Review',
        'Post-Discharge Medical Guidance',
        'Prescription Alignment',
      ],
      image: IMAGES.teamGroup,
      imageAlt: 'Healthcare team professionals standing in a bright reception area',
    },
  ],
  ne: [
    {
      id: 'nurse-profile-01',
      category: 'Registered Nurses',
      name: '[नर्सको नाम — सम्पादनयोग्य स्थान]',
      designation: 'दर्तावाल नर्स · घरमै नर्सिङ प्रमुख [सम्पादनयोग्य]',
      qualificationPlaceholder:
        '[प्रमाणित नर्सिङ योग्यता राख्नुहोस्, जस्तै: B.Sc. Nursing / PCL Nursing र NNC दर्ता नं.]',
      experiencePlaceholder: '[प्रमाणित क्लिनिकल तथा गृहसेवा अनुभव वर्ष राख्नुहोस्]',
      verificationStatus: 'प्रमाणित विवरण प्रविष्टि बाँकी',
      availabilityNote: 'तालिकाबद्ध घरमै नर्सिङ भेट',
      focusAreas: ['भाइटल साइन निगरानी', 'घाउ ड्रेसिङ सहयोग', 'शल्यक्रियापछिको हेरचाह'],
      image: IMAGES.nursePortrait,
      imageAlt: 'क्लिनिकल क्लिपबोर्ड समातेकी दर्तावाल नर्सको पोर्ट्रेट तस्बिर',
    },
    {
      id: 'team-care-02',
      category: 'Caregivers & Support',
      name: '[हेरचाहकर्ताको नाम — सम्पादनयोग्य स्थान]',
      designation: 'ज्येष्ठ नागरिक हेरचाह तथा हिँडडुल सहयोगी [सम्पादनयोग्य]',
      qualificationPlaceholder:
        '[प्रमाणित केयरगिभर तालिम वा स्वास्थ्य सहायक प्रमाणपत्र विवरण राख्नुहोस्]',
      experiencePlaceholder:
        '[ज्येष्ठ नागरिक तथा बिरामी हेरचाहको प्रमाणित अनुभव राख्नुहोस्]',
      verificationStatus: 'सम्पादनयोग्य कर्मचारी परिचय स्थान',
      availabilityNote: 'दिन तथा सिफ्ट हेरचाह सहयोग',
      focusAreas: ['ज्येष्ठ नागरिक हेरचाह', 'व्यक्तिगत सरसफाइ सहयोग', 'बिरामीको हेरचाह'],
      image: IMAGES.elderlyCompanion,
      imageAlt: 'घरभित्र ज्येष्ठ नागरिकलाई सुरक्षित रूपमा हिँड्न सहयोग गर्दै गरेकी हेरचाहकर्ता',
    },
    {
      id: 'team-physio-03',
      category: 'Caregivers & Support',
      name: '[फिजियोथेरापी विशेषज्ञ — सम्पादनयोग्य स्थान]',
      designation: 'घरमै फिजियोथेरापी तथा शारीरिक व्यायाम सहयोग [सम्पादनयोग्य]',
      qualificationPlaceholder:
        '[प्रमाणित फिजियोथेरापी शैक्षिक योग्यता र काउन्सिल दर्ता नं. राख्नुहोस्]',
      experiencePlaceholder: '[पुनर्स्थापना तथा गृह व्यायामको प्रमाणित अनुभव राख्नुहोस्]',
      verificationStatus: 'सम्पादनयोग्य कर्मचारी परिचय स्थान',
      availabilityNote: 'पूर्व–तालिकाबद्ध समयअनुसार',
      focusAreas: [
        'फिजियोथेरापी सहयोग',
        'शल्यक्रियापछिको हिँडडुल',
        'ज्येष्ठ नागरिक व्यायाम',
      ],
      image: IMAGES.physiotherapy,
      imageAlt: 'ज्येष्ठ नागरिकलाई बसेर पाखुराको व्यायाम गराउँदै गरेकी फिजियोथेरापिस्ट',
    },
    {
      id: 'team-doctor-04',
      category: 'Doctors',
      name: '[परामर्श चिकित्सक — प्रमाणित र तालिकाबद्ध हुँदा मात्र उपलब्ध]',
      designation: 'चिकित्सा सल्लाहकार / गृहभेट चिकित्सक [वैकल्पिक स्थान]',
      qualificationPlaceholder:
        '[उपलब्ध भएमा मात्र प्रमाणित MBBS / MD र नेपाल मेडिकल काउन्सिल (NMC) दर्ता नं. राख्नुहोस्]',
      experiencePlaceholder: '[प्रमाणित क्लिनिकल अभ्यास तथा गृह परामर्श अनुभव राख्नुहोस्]',
      verificationStatus: 'चिकित्सक उपलब्ध र प्रमाणित भएमा मात्र गृहभेट सेवा',
      availabilityNote: 'अनुरोधअनुसार परामर्श (चिकित्सक उपलब्धतामा निर्भर)',
      focusAreas: [
        'हेरचाह योजना समीक्षा',
        'डिस्चार्जपछिको चिकित्सकीय सल्लाह',
        'औषधि पर्चा समन्वय',
      ],
      image: IMAGES.teamGroup,
      imageAlt: 'उज्यालो रिसेप्सनमा उभिएका स्वास्थ्यकर्मी टोलीका सदस्यहरू',
    },
  ],
};

export function getTeamMembers(lang: Language): TeamMember[] {
  return TEAM_MEMBERS_DATA[lang];
}
