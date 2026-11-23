import type { Language } from '../context/LanguageContext';

export const TRUST_PILLARS_DATA = {
  en: [
    {
      index: '01.',
      title: 'Verified Care Scope',
      description:
        'Care services are matched strictly to staff training, valid physician prescriptions, and transparent scope.',
    },
    {
      index: '02.',
      title: 'Nepal-Focused Home Care',
      description:
        'Culturally respectful bedside and senior care tailored for multi-generational homes in Nepal.',
    },
    {
      index: '03.',
      title: 'Clear NPR Estimates',
      description:
        'Every booking receives an upfront NPR fee explanation from our coordinator before confirmation.',
    },
    {
      index: '04.',
      title: 'Coordinator Approval First',
      description:
        'Bookings are reviewed personally to verify staff availability—never auto-confirmed without a real match.',
    },
  ],
  ne: [
    {
      index: '०१.',
      title: 'प्रमाणित सेवा दायरा',
      description:
        'जनशक्तिको तालिम, चिकित्सकको वैध पर्चा र स्पष्ट सेवा दायराअनुसार मात्र हेरचाह मिलाइन्छ।',
    },
    {
      index: '०२.',
      title: 'नेपाली घरपरिवारमैत्री सेवा',
      description:
        'नेपालका संयुक्त तथा आधुनिक घरपरिवारको सांस्कृतिक मर्यादालाई सम्मान गर्दै बिरामी र ज्येष्ठ नागरिक हेरचाह।',
    },
    {
      index: '०३.',
      title: 'स्पष्ट NPR शुल्क अनुमान',
      description:
        'कुनै पनि बुकिङ निश्चित हुनुअघि संयोजकबाट अग्रिम रूपमा NPR शुल्क जानकारी गराइन्छ।',
    },
    {
      index: '०४.',
      title: 'संयोजकको स्वीकृति पहिले',
      description:
        'जनशक्ति उपलब्धता यकिन नगरी बुकिङ स्वतः निश्चित गरिँदैन; प्रत्येक अनुरोध संयोजकले जाँच गर्दछन्।',
    },
  ],
};

export const WHY_CHOOSE_POINTS_DATA = {
  en: [
    {
      title: 'Respectful Dignity in Familiar Surroundings',
      detail:
        'Recovering or aging at home preserves emotional comfort, family closeness, and familiar daily routines.',
    },
    {
      title: 'Hygienic & Safety-First Protocols',
      detail:
        'Clean hand hygiene, organized medication logs, and careful fall-prevention awareness on every visit.',
    },
    {
      title: 'Direct Family Communication',
      detail:
        'Clear updates for local family members and relatives abroad via phone, email, or WhatsApp.',
    },
    {
      title: 'Honest Credential Transparency',
      detail:
        'We only list verified practitioner profiles and never overstate medical approvals or unverified qualifications.',
    },
  ],
  ne: [
    {
      title: 'परिचित घरमै मर्यादित हेरचाह',
      detail:
        'घरमै स्वास्थ्य लाभ वा वृद्धावस्था बिताउँदा मानसिक सहजता, परिवारको न्यानोपन र दैनिक लय कायम रहन्छ।',
    },
    {
      title: 'सरसफाइ र सुरक्षामा प्राथमिकता',
      detail:
        'प्रत्येक गृहभेटमा हातको सरसफाइ, व्यवस्थित औषधि अभिलेख र लड्नबाट जोगाउने सावधानी अपनाइन्छ।',
    },
    {
      title: 'परिवारसँग प्रत्यक्ष संवाद',
      detail:
        'घरमा रहेका परिवार तथा विदेशमा रहेका आफन्तलाई फोन, इमेल वा WhatsApp मार्फत स्पष्ट जानकारी दिइन्छ।',
    },
    {
      title: 'योग्यतामा इमानदार पारदर्शिता',
      detail:
        'हामी प्रमाणित स्वास्थ्यकर्मी विवरण मात्र प्रस्तुत गर्दछौँ र अपुष्ट स्वीकृति वा योग्यताको दाबी गर्दैनौँ।',
    },
  ],
};

export const HOW_IT_WORKS_STEPS_DATA = {
  en: [
    {
      step: '01',
      title: 'Share Your Care Request',
      description:
        'Complete our online booking form or message us on WhatsApp with patient age, location in Nepal, and needed service.',
    },
    {
      step: '02',
      title: 'Coordinator Review',
      description:
        'Our care coordinator reviews your notes, checks staff availability, and verifies any required doctor prescription.',
    },
    {
      step: '03',
      title: 'Confirm Schedule & NPR Fee',
      description:
        'We contact your family to confirm exact visit timings and transparent NPR pricing before finalizing the booking.',
    },
    {
      step: '04',
      title: 'Compassionate Care at Home',
      description:
        'Your assigned nurse or caregiver arrives at your doorstep to deliver attentive, respectful home care.',
    },
  ],
  ne: [
    {
      step: '०१',
      title: 'सेवा अनुरोध पठाउनुहोस्',
      description:
        'बिरामीको उमेर, नेपालको ठेगाना र आवश्यक सेवासहित अनलाइन बुकिङ फारम भर्नुहोस् वा WhatsApp मा सन्देश पठाउनुहोस्।',
    },
    {
      step: '०२',
      title: 'संयोजक समीक्षा',
      description:
        'हाम्रो हेरचाह संयोजकले तपाईंको विवरण जाँच गरी जनशक्ति उपलब्धता र आवश्यक चिकित्सकको पर्चा यकिन गर्दछन्।',
    },
    {
      step: '०३',
      title: 'समय र NPR शुल्क निश्चित',
      description:
        'बुकिङ फाइनल गर्नुअघि परिवारसँग यकिन सेवा समय र पारदर्शी NPR शुल्कबारे सहमति गरिन्छ।',
    },
    {
      step: '०४',
      title: 'घरमै आत्मीय हेरचाह सुरु',
      description:
        'तोकिएका नर्स वा हेरचाहकर्ता तपाईंको घरमा पुगेर ध्यानपूर्वक र सम्मानजनक हेरचाह प्रदान गर्दछन्।',
    },
  ],
};

export const FEEDBACK_SLOTS_DATA = {
  en: [
    {
      slotLabel: 'Verified Family Review Slot 01 · Editable Placeholder',
      quote:
        '[Insert authentic feedback from a verified family or patient who used Home Nursing Care or Post-Surgery Support, with permission.]',
      attribution: '[Family Member Name · City in Nepal]',
      serviceTag: 'Home Nursing Care',
    },
    {
      slotLabel: 'Verified Family Review Slot 02 · Editable Placeholder',
      quote:
        '[Insert verified testimonial regarding Elderly Care, mobility support, or caregiver communication once supplied by the organization.]',
      attribution: '[Family Member Name · City in Nepal]',
      serviceTag: 'Elderly Care',
    },
    {
      slotLabel: 'Verified Family Review Slot 03 · Editable Placeholder',
      quote:
        '[Insert verified feedback about Physiotherapy Support, Medication Assistance, or transparent NPR coordination.]',
      attribution: '[Family Member Name · City in Nepal]',
      serviceTag: 'Physiotherapy Support',
    },
  ],
  ne: [
    {
      slotLabel: 'प्रमाणित परिवार समीक्षा स्थान ०१ · सम्पादनयोग्य',
      quote:
        '[घरमै नर्सिङ सेवा वा शल्यक्रियापछिको सहयोग लिएका प्रमाणित परिवार वा बिरामीको अनुमतिसहित वास्तविक प्रतिक्रिया यहाँ राख्नुहोस्।]',
      attribution: '[परिवार सदस्यको नाम · सहर, नेपाल]',
      serviceTag: 'घरमै नर्सिङ सेवा',
    },
    {
      slotLabel: 'प्रमाणित परिवार समीक्षा स्थान ०२ · सम्पादनयोग्य',
      quote:
        '[ज्येष्ठ नागरिक हेरचाह, हिँडडुल सहयोग वा हेरचाहकर्ताको व्यवहारसम्बन्धी संस्थाद्वारा प्राप्त प्रमाणित अनुभव यहाँ राख्नुहोस्।]',
      attribution: '[परिवार सदस्यको नाम · सहर, नेपाल]',
      serviceTag: 'ज्येष्ठ नागरिक हेरचाह',
    },
    {
      slotLabel: 'प्रमाणित परिवार समीक्षा स्थान ०३ · सम्पादनयोग्य',
      quote:
        '[फिजियोथेरापी सहयोग, औषधि सहायता वा पारदर्शी NPR शुल्क समन्वयबारे प्रमाणित प्रतिक्रिया यहाँ राख्नुहोस्।]',
      attribution: '[परिवार सदस्यको नाम · सहर, नेपाल]',
      serviceTag: 'फिजियोथेरापी सहयोग',
    },
  ],
};

export const HOME_FAQS_DATA = {
  en: [
    {
      question: 'How does the booking approval process work?',
      answer:
        'When you submit the Book a Service form, your request enters "Pending Approval" status. A care coordinator reviews the patient’s needs, checks qualified staff availability, and confirms the schedule and exact NPR fee with you by phone or WhatsApp before finalizing.',
    },
    {
      question: 'How is pricing calculated and what currency do you use?',
      answer:
        'All service estimates and invoices are provided transparently in Nepalese Rupees (NPR). Final pricing depends on the service type, visit duration, shift hours, and travel location, and is always confirmed upfront prior to service start.',
    },
    {
      question: 'Do you require a doctor’s prescription for nursing procedures?',
      answer:
        'Yes. Clinical tasks such as prescribed wound dressings, injections, or post-operative nursing procedures require a valid, up-to-date prescription or discharge summary from a licensed physician.',
    },
    {
      question: 'Is 24/7 Care Support always available?',
      answer:
        '24/7 rotational home care is offered strictly subject to verified staff availability and an initial care assessment. Please submit an inquiry so our coordinator can check current shift capacity.',
    },
    {
      question: 'Can Nepalis living abroad book home care for elderly parents in Nepal?',
      answer:
        'Yes. You can submit a request online from anywhere, provide a local contact number at the residence in Nepal, and coordinate scheduling and NPR payment details directly with our desk.',
    },
  ],
  ne: [
    {
      question: 'बुकिङ स्वीकृति प्रक्रिया कसरी काम गर्छ?',
      answer:
        'तपाईंले सेवा बुकिङ फारम पठाएपछि अनुरोध "स्वीकृति बाँकी" अवस्थामा दर्ता हुन्छ। हेरचाह संयोजकले बिरामीको आवश्यकता र योग्य जनशक्ति उपलब्धता जाँच गरी बुकिङ फाइनल गर्नुअघि फोन वा WhatsApp मार्फत समय र यकिन NPR शुल्क निश्चित गर्नुहुन्छ।',
    },
    {
      question: 'शुल्क कसरी निर्धारण गरिन्छ र कुन मुद्रामा बिलिङ हुन्छ?',
      answer:
        'सबै सेवा शुल्क अनुमान र बिलिङ पारदर्शी रूपमा नेपाली रुपैयाँ (NPR) मा गरिन्छ। अन्तिम शुल्क सेवाको प्रकार, समय अवधि, सिफ्ट र स्थानअनुसार तय हुन्छ र सेवा सुरु हुनुअघि नै जानकारी दिइन्छ।',
    },
    {
      question: 'के नर्सिङ प्रक्रियाका लागि चिकित्सकको पर्चा अनिवार्य छ?',
      answer:
        'हो। घाउ ड्रेसिङ, सुई वा शल्यक्रियापछिका क्लिनिकल नर्सिङ प्रक्रियाका लागि इजाजतप्राप्त चिकित्सकको अद्यावधिक लिखित पर्चा वा अस्पताल डिस्चार्ज सारांश अनिवार्य हुन्छ।',
    },
    {
      question: 'के २४/७ हेरचाह सेवा सधैँ उपलब्ध हुन्छ?',
      answer:
        '२४/७ रोटेशनल हेरचाह सेवा प्रमाणित जनशक्ति उपलब्धता र प्रारम्भिक मूल्याङ्कनका आधारमा मात्र प्रदान गरिन्छ। कृपया हालको सिफ्ट क्षमता जाँच गर्न अनुरोध पठाउनुहोस्।',
    },
    {
      question: 'विदेशमा रहेका नेपालीहरूले नेपालमा रहेका बुवाआमाका लागि सेवा बुक गर्न सक्छन्?',
      answer:
        'सक्नुहुन्छ। तपाईं संसारको जुनसुकै ठाउँबाट अनलाइन अनुरोध पठाउन, नेपालस्थित घरको स्थानीय सम्पर्क नम्बर दिन र समयतालिका तथा NPR भुक्तानीबारे हाम्रो डेस्कसँग समन्वय गर्न सक्नुहुन्छ।',
    },
  ],
};

export function getHomeContent(lang: Language) {
  return {
    trustPillars: TRUST_PILLARS_DATA[lang],
    whyChoosePoints: WHY_CHOOSE_POINTS_DATA[lang],
    howItWorksSteps: HOW_IT_WORKS_STEPS_DATA[lang],
    feedbackSlots: FEEDBACK_SLOTS_DATA[lang],
    homeFaqs: HOME_FAQS_DATA[lang],
  };
}
