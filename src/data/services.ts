import type { Language } from '../context/LanguageContext';

export type ServiceCategory =
  | 'Clinical Nursing'
  | 'Daily & Senior Care'
  | 'Recovery & Rehab'
  | 'Extended Support';

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface HealthcareService {
  slug: string;
  index: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  nprEstimate: string;
  availabilityNote: string;
  verificationScope: string;
  benefits: string[];
  whoCanBenefit: string[];
  howItWorks: { step: string; detail: string }[];
  faqs: ServiceFaq[];
}

export const IMAGES = {
  hero: '/src/assets/images/hero_home_care_1795427655337.jpg',
  nursingVitals: '/src/assets/images/service_nursing_vitals_1795427654545.jpg',
  elderlyCompanion: '/src/assets/images/service_elderly_companion_1795427654724.jpg',
  postSurgery: '/src/assets/images/service_post_surgery_1795427654048.jpg',
  physiotherapy: '/src/assets/images/service_physiotherapy_1795427653943.jpg',
  medicationCare: '/src/assets/images/service_medication_care_1795427654814.jpg',
  teamGroup: '/src/assets/images/team_care_professionals_1795427654299.jpg',
  nursePortrait: '/src/assets/images/team_nurse_portrait_1795427653915.jpg',
};

const SERVICES_EN: HealthcareService[] = [
  {
    slug: 'home-nursing-care',
    index: '01.',
    title: 'Home Nursing Care',
    category: 'Clinical Nursing',
    categoryLabel: 'Clinical Nursing',
    shortDescription:
      'Attentive nursing visits and ongoing clinical support in the comfort and privacy of your family home.',
    fullDescription:
      'Home Nursing Care brings structured clinical nursing attention directly to the patient’s residence in Nepal. Designed to reduce the stress of frequent hospital travel, our nursing support covers routine health observations, doctor-prescribed nursing care routines, hygiene maintenance, and clear progress reporting for family members.',
    image: IMAGES.nursingVitals,
    imageAlt:
      'Nurse checking blood pressure and clinical observations for a patient at home',
    nprEstimate: 'NPR [1,500 – 2,500] per visit · [Editable Rate Placeholder]',
    availabilityNote: 'Scheduled day visits & shift options subject to nurse availability',
    verificationScope:
      'Clinical procedures are carried out strictly according to valid physician prescriptions and verified nursing staff credentials.',
    benefits: [
      'Reduces unnecessary hospital commute and waiting room fatigue for recovering patients',
      'Maintains familiar family surroundings that support emotional comfort and rest',
      'Provides structured shift notes and clear updates for family caregivers',
      'Follows sterile hygiene protocols adapted for residential rooms',
    ],
    whoCanBenefit: [
      'Patients discharged from hospital requiring continued nursing observation',
      'Individuals managing chronic health conditions under a doctor’s care plan',
      'Bedbound or mobility-limited patients needing regular clinical assistance',
      'Families seeking dependable support while balancing work responsibilities',
    ],
    howItWorks: [
      {
        step: 'Care Requirement Review',
        detail:
          'Share your loved one’s current prescription, doctor instructions, and preferred schedule through our booking request form.',
      },
      {
        step: 'Coordinator Verification',
        detail:
          'Our care coordinator verifies nursing staff availability, confirms clinical scope, and shares the exact NPR fee estimate.',
      },
      {
        step: 'Scheduled Home Visit',
        detail:
          'An assigned nurse arrives on schedule with essential care supplies and follows the agreed care routine.',
      },
      {
        step: 'Family Progress Update',
        detail:
          'Observations and visit notes are shared clearly with the primary family contact after care.',
      },
    ],
    faqs: [
      {
        question: 'Do I need a doctor’s prescription for clinical nursing procedures?',
        answer:
          'Yes. Any prescribed clinical nursing procedure, injection, or specialized dressing requires a current physician’s written prescription for patient safety.',
      },
      {
        question: 'How is the NPR service fee determined?',
        answer:
          'Fees depend on visit duration, shift type, location within Nepal, and specific care needs. Exact NPR pricing is confirmed by our coordinator before any booking is approved.',
      },
    ],
  },
  {
    slug: 'elderly-care',
    index: '02.',
    title: 'Elderly Care',
    category: 'Daily & Senior Care',
    categoryLabel: 'Daily & Senior Care',
    shortDescription:
      'Respectful companionship, safe mobility support, and daily routine assistance tailored for older adults.',
    fullDescription:
      'Our Elderly Care service focuses on preserving dignity, safety, and daily comfort for senior family members at home. Caregivers assist with safe walking, mealtime support, hydration reminders, gentle daily routines, and meaningful companionship—helping seniors remain independent in their own home.',
    image: IMAGES.elderlyCompanion,
    imageAlt:
      'Home caregiver safely walking alongside an elderly grandfather in a bright hallway',
    nprEstimate: 'NPR [1,200 – 2,200] per shift · [Editable Rate Placeholder]',
    availabilityNote: 'Half-day, full-day, and ongoing care plans subject to coordinator confirmation',
    verificationScope:
      'Non-medical senior support and companionship; escalated to qualified nursing staff if clinical observation is requested.',
    benefits: [
      'Promotes fall prevention and safer movement around stairs and hallways',
      'Supports consistent meal, hydration, and daily rest schedules',
      'Provides warm, respectful companionship to ease isolation at home',
      'Gives peace of mind to family members living nearby or abroad',
    ],
    whoCanBenefit: [
      'Older adults living independently or with busy working families in Nepal',
      'Seniors experiencing mild balance challenges or age-related fatigue',
      'Elderly parents whose adult children live abroad and want regular local check-ins',
    ],
    howItWorks: [
      {
        step: 'Routine Discussion',
        detail:
          'Tell us about your elder’s daily habits, dietary preferences, language needs, and mobility level.',
      },
      {
        step: 'Caregiver Matching',
        detail:
          'We match an available caregiver suited to the schedule and confirm NPR shift rates prior to approval.',
      },
      {
        step: 'Consistent Home Support',
        detail:
          'Your caregiver assists with safe mobility, daily living comfort, and attentive companionship.',
      },
    ],
    faqs: [
      {
        question: 'Can families living abroad arrange Elderly Care for parents in Nepal?',
        answer:
          'Yes. You can submit a booking request online and coordinate directly with our team via phone, email, or WhatsApp for scheduling and updates.',
      },
      {
        question: 'Does Elderly Care include heavy household cleaning?',
        answer:
          'Caregivers focus strictly on the senior’s personal comfort, safety, mobility, and immediate care area—not general domestic housekeeping.',
      },
    ],
  },
  {
    slug: 'patient-care-at-home',
    index: '03.',
    title: 'Patient Care at Home',
    category: 'Daily & Senior Care',
    categoryLabel: 'Daily & Senior Care',
    shortDescription:
      'Dedicated bedside assistance and attentive comfort care for patients recovering or resting at home.',
    fullDescription:
      'Patient Care at Home bridges the gap between hospital discharge and full everyday independence. Whether a patient needs attentive bedside assistance, help repositioning comfortably in bed, feeding support, or observation during recovery, our care team provides calm, reliable support tailored to household routines.',
    image: IMAGES.hero,
    imageAlt:
      'Healthcare worker comforting and supporting an elderly patient seated in a sunlit living room',
    nprEstimate: 'NPR [1,400 – 2,400] per shift · [Editable Rate Placeholder]',
    availabilityNote: 'Day and night shift coverage subject to staff schedule confirmation',
    verificationScope:
      'Caregivers work within defined non-invasive patient support guidelines unless paired with a verified nurse.',
    benefits: [
      'Continuous bedside attentiveness without the disruption of an unfamiliar ward',
      'Helps prevent discomfort through safe positioning and mobility assistance',
      'Coordinates smoothly with family members and attending physicians',
    ],
    whoCanBenefit: [
      'Patients transitioning home after a hospital stay',
      'Individuals experiencing prolonged illness or weakness requiring bedside support',
      'Families needing respite during long-term home care',
    ],
    howItWorks: [
      {
        step: 'Patient Overview',
        detail: 'Submit patient age, mobility status, and preferred care hours.',
      },
      {
        step: 'Plan & Rate Approval',
        detail: 'Receive coordinator confirmation with assigned shift schedule and NPR pricing.',
      },
      {
        step: 'Attentive Bedside Care',
        detail: 'Compassionate in-home support begins at the confirmed date and time.',
      },
    ],
    faqs: [
      {
        question: 'How soon can Patient Care at Home start after submitting a request?',
        answer:
          'All requests undergo coordinator review first to confirm suitable staff availability. No visit is considered confirmed until our team contacts you.',
      },
    ],
  },
  {
    slug: 'post-surgery-care',
    index: '04.',
    title: 'Post-Surgery Care',
    category: 'Recovery & Rehab',
    categoryLabel: 'Recovery & Rehab',
    shortDescription:
      'Structured recovery assistance following surgery, supporting hygiene, mobility, and discharge instructions.',
    fullDescription:
      'The days immediately following surgery are critical for safe healing. Our Post-Surgery Care service supports patients in following their surgeon’s discharge instructions at home—assisting with safe movement, hygiene, comfort monitoring, and timely alerts to the family if symptoms require medical review.',
    image: IMAGES.postSurgery,
    imageAlt:
      'Healthcare professional preparing clean sterile supplies beside a recovering patient in bed',
    nprEstimate: 'NPR [1,800 – 3,000] per visit/shift · [Editable Rate Placeholder]',
    availabilityNote: 'Scheduled post-discharge visits confirmed after reviewing discharge summary',
    verificationScope:
      'All post-operative nursing tasks follow the operating surgeon’s discharge summary and verified staff scope.',
    benefits: [
      'Supports careful adherence to hospital discharge instructions at home',
      'Minimizes physical strain during the early stages of surgical recovery',
      'Maintains clean, hygienic recovery surroundings to lower avoidable risks',
    ],
    whoCanBenefit: [
      'Patients recovering from orthopedic, abdominal, or general surgical procedures',
      'Older adults returning home after inpatient surgery who need assistance getting in and out of bed',
      'Families unsure how to safely manage post-operative daily care at home',
    ],
    howItWorks: [
      {
        step: 'Discharge Summary Review',
        detail:
          'Share your hospital discharge instructions so we understand post-operative precautions.',
      },
      {
        step: 'Staff Assignment',
        detail:
          'Our coordinator verifies appropriate nursing or caregiver availability and NPR rate.',
      },
      {
        step: 'Guided Home Recovery',
        detail:
          'Structured support helps the patient rest, hydrate, and move safely as advised by their doctor.',
      },
    ],
    faqs: [
      {
        question: 'Should we have the hospital discharge summary ready?',
        answer:
          'Yes. Having the discharge sheet and current prescription ready helps our coordinator match the right level of post-surgery support.',
      },
    ],
  },
  {
    slug: 'physiotherapy-support',
    index: '05.',
    title: 'Physiotherapy Support',
    category: 'Recovery & Rehab',
    categoryLabel: 'Recovery & Rehab',
    shortDescription:
      'Guided in-home mobility exercises and functional movement assistance for steadier recovery.',
    fullDescription:
      'Physiotherapy Support brings structured movement and mobility sessions directly to the patient’s living room. Avoiding stressful travel across traffic when movement is painful, sessions focus on gentle range-of-motion exercises, strength rebuilding, posture guidance, and safer everyday transfers.',
    image: IMAGES.physiotherapy,
    imageAlt:
      'Physiotherapist guiding a senior patient through gentle seated arm mobility exercises at home',
    nprEstimate: 'NPR [1,500 – 2,500] per session · [Editable Rate Placeholder]',
    availabilityNote: 'Session availability confirmed with verified rehabilitation personnel',
    verificationScope:
      'Rehabilitation exercises are conducted strictly within the attending physician’s clearance and verified practitioner qualifications.',
    benefits: [
      'Eliminates painful travel to clinics for patients with limited mobility',
      'Adapts exercises directly to your home stairs, chairs, and living layout',
      'Encourages steady consistency in recovery routines',
    ],
    whoCanBenefit: [
      'Patients rebuilding strength after joint injury, fracture, or surgery',
      'Seniors experiencing stiffness, joint discomfort, or reduced balance',
      'Individuals needing guided home exercise consistency following medical clearance',
    ],
    howItWorks: [
      {
        step: 'Mobility Inquiry',
        detail: 'Share recovery goals and any orthopedic or physician notes when booking.',
      },
      {
        step: 'Schedule & Fee Confirmation',
        detail: 'Coordinator confirms session availability and per-visit NPR fee.',
      },
      {
        step: 'In-Home Guided Session',
        detail: 'Safe, paced exercises practiced comfortably in your home space.',
      },
    ],
    faqs: [
      {
        question: 'How long does a typical home physiotherapy support session last?',
        answer:
          'Session duration depends on patient stamina and care plan, typically 40–60 minutes as agreed during booking confirmation.',
      },
    ],
  },
  {
    slug: 'personal-care-assistance',
    index: '06.',
    title: 'Personal Care Assistance',
    category: 'Daily & Senior Care',
    categoryLabel: 'Daily & Senior Care',
    shortDescription:
      'Gentle, dignified help with bathing, grooming, dressing, and everyday personal hygiene.',
    fullDescription:
      'Personal Care Assistance helps individuals who find everyday hygiene tasks physically challenging. Our caregivers provide patient, privacy-respecting assistance with sponge baths, grooming, dressing, toileting support, and keeping bedding fresh—always prioritizing the patient’s comfort and dignity.',
    image: IMAGES.elderlyCompanion,
    imageAlt:
      'Attentive caregiver providing respectful daily support to an older family member',
    nprEstimate: 'NPR [1,100 – 1,900] per visit/shift · [Editable Rate Placeholder]',
    availabilityNote: 'Morning and evening personal care windows available upon request',
    verificationScope:
      'Delivered by trained home care attendants with strict respect for personal privacy and cultural sensitivity.',
    benefits: [
      'Preserves personal cleanliness, skin comfort, and self-esteem',
      'Reduces slip and fall risks in wet bathroom environments',
      'Relieves physical strain on family caregivers',
    ],
    whoCanBenefit: [
      'Seniors with arthritis, weakness, or balance concerns',
      'Patients recovering from surgery or injury with limited arm or leg mobility',
      'Bedridden individuals needing regular bed-bath and linen care',
    ],
    howItWorks: [
      {
        step: 'Preference Selection',
        detail: 'Specify preferred timing and caregiver gender preference if needed.',
      },
      {
        step: 'Coordinator Approval',
        detail: 'We confirm staff match and NPR rate before scheduling.',
      },
      {
        step: 'Respectful Assistance',
        detail: 'Careful, unhurried personal hygiene support at home.',
      },
    ],
    faqs: [
      {
        question: 'Can we request a female or male caregiver for personal care?',
        answer:
          'Yes. You may note your preference in the booking form, and our coordinator will match staff availability accordingly.',
      },
    ],
  },
  {
    slug: 'medication-assistance',
    index: '07.',
    title: 'Medication Assistance',
    category: 'Clinical Nursing',
    categoryLabel: 'Clinical Nursing',
    shortDescription:
      'Organized pill scheduling, timely dosage reminders, and adherence logs aligned with prescriptions.',
    fullDescription:
      'Managing multiple prescriptions at different times of day can easily become overwhelming for patients and busy families. Our Medication Assistance service helps organize daily pill boxes strictly according to the doctor’s written prescription, provides timely reminders, and maintains an accurate intake log.',
    image: IMAGES.medicationCare,
    imageAlt:
      'Nurse organizing daily pill box and reviewing handwritten medication schedule on a wooden table',
    nprEstimate: 'NPR [1,000 – 1,600] per visit · [Editable Rate Placeholder]',
    availabilityNote: 'Standalone check-in visits or combined with daily care shifts',
    verificationScope:
      'Staff never alter or prescribe medications; assistance strictly follows valid doctor prescriptions.',
    benefits: [
      'Reduces missed doses or accidental double dosing',
      'Keeps an organized written log for upcoming doctor follow-ups',
      'Supports safer nutrition timing alongside prescribed medicines',
    ],
    whoCanBenefit: [
      'Older adults managing several daily prescriptions',
      'Patients with memory difficulty or complex post-hospital medication schedules',
      'Working families wanting dependable verification of daily doses',
    ],
    howItWorks: [
      {
        step: 'Prescription Review',
        detail: 'Keep the current doctor prescription and medicine packs ready for review.',
      },
      {
        step: 'Schedule Organization',
        detail: 'Daily morning, afternoon, and evening doses are clearly organized and tracked.',
      },
      {
        step: 'Consistent Reminders & Logs',
        detail: 'Timely support and clear notes for family peace of mind.',
      },
    ],
    faqs: [
      {
        question: 'Can Health Home Care Services prescribe or change medicines?',
        answer:
          'No. We strictly assist patients in following the valid written prescriptions issued by their licensed physician.',
      },
    ],
  },
  {
    slug: 'vital-signs-monitoring',
    index: '08.',
    title: 'Vital Signs Monitoring',
    category: 'Clinical Nursing',
    categoryLabel: 'Clinical Nursing',
    shortDescription:
      'Regular home checks of blood pressure, pulse, temperature, and oxygen saturation with clear logs.',
    fullDescription:
      'Routine Vital Signs Monitoring allows families and attending doctors to observe trends without frequent clinic trips. During each visit, essential readings—such as blood pressure, heart rate, body temperature, respiratory rate, and SpO2—are recorded carefully in a structured chart for medical review.',
    image: IMAGES.nursingVitals,
    imageAlt:
      'Nurse measuring patient blood pressure and recording vital signs in a home setting',
    nprEstimate: 'NPR [800 – 1,400] per visit · [Editable Rate Placeholder]',
    availabilityNote: 'Single visits or recurring morning/evening monitoring schedules',
    verificationScope:
      'Readings are documented accurately and escalated promptly to the family or physician if outside normal ranges.',
    benefits: [
      'Tracks consistent daily health readings in a calm, resting home state',
      'Produces neat written records helpful for doctor consultations',
      'Helps families identify concerning changes early so medical advice can be sought',
    ],
    whoCanBenefit: [
      'Patients monitoring blood pressure, fever recovery, or respiratory wellness',
      'Seniors needing routine weekly or daily health check-ins at home',
      'Post-discharge patients requiring regular clinical observation',
    ],
    howItWorks: [
      {
        step: 'Select Monitoring Frequency',
        detail: 'Choose a single assessment or recurring daily/weekly schedule.',
      },
      {
        step: 'Coordinator Confirmation',
        detail: 'Confirm visit window and NPR pricing with our desk.',
      },
      {
        step: 'Recorded Readings',
        detail: 'Readings are measured calmly and logged for you and your doctor.',
      },
    ],
    faqs: [
      {
        question: 'Do we receive a copy of the vital signs log?',
        answer:
          'Yes. Every reading is recorded clearly with date and time so you can share it directly with your doctor.',
      },
    ],
  },
  {
    slug: 'wound-care-support',
    index: '09.',
    title: 'Wound Care Support',
    category: 'Recovery & Rehab',
    categoryLabel: 'Recovery & Rehab',
    shortDescription:
      'Clean, hygienic dressing changes and recovery observation following your doctor’s protocol.',
    fullDescription:
      'Proper wound hygiene at home helps protect healing tissue and minimize preventable complications. Delivered by qualified nursing personnel strictly under a physician’s written care plan, Wound Care Support includes sterile dressing changes, gentle cleaning, and attentive observation for signs requiring doctor follow-up.',
    image: IMAGES.postSurgery,
    imageAlt:
      'Nurse in mask and gloves preparing sterile wound care dressing supplies beside a patient bed',
    nprEstimate: 'NPR [1,400 – 2,400] per visit · [Editable Rate Placeholder]',
    availabilityNote: 'Scheduled dressing visits confirmed after reviewing physician orders',
    verificationScope:
      'Performed exclusively by verified nursing personnel following a valid doctor’s dressing instruction.',
    benefits: [
      'Uses clean, hygienic dressing techniques inside the patient’s home',
      'Prevents exhausting travel for patients with painful or sensitive wounds',
      'Monitors healing progress and alerts families promptly if redness or discomfort arises',
    ],
    whoCanBenefit: [
      'Post-operative patients needing scheduled sterile dressing changes',
      'Individuals with minor pressure areas or slow-healing skin needing regular clean care',
      'Patients instructed by their doctor to continue outpatient dressing care at home',
    ],
    howItWorks: [
      {
        step: 'Share Doctor Dressing Orders',
        detail: 'Provide the physician’s wound care instructions when requesting a visit.',
      },
      {
        step: 'Nurse Assignment & NPR Quote',
        detail: 'Coordinator confirms nurse availability, supplies needed, and NPR visit fee.',
      },
      {
        step: 'Hygienic Dressing Care',
        detail: 'Careful cleaning and fresh dressing completed comfortably at home.',
      },
    ],
    faqs: [
      {
        question: 'Are sterile dressing consumables included in the visit fee?',
        answer:
          'Standard consumables vs. specialized dressings are clarified transparently in NPR by our coordinator before confirming your visit.',
      },
    ],
  },
  {
    slug: '24-7-care-support',
    index: '10.',
    title: '24/7 Care Support',
    category: 'Extended Support',
    categoryLabel: 'Extended Support',
    shortDescription:
      'Round-the-clock rotational home care coverage, available strictly subject to verified staff availability.',
    fullDescription:
      'For families requiring continuous day-and-night attendance for a high-need senior or recovering loved one, 24/7 Care Support coordinates rotational care shifts at home. Because continuous coverage depends on verified staff scheduling and patient clinical needs, every 24/7 arrangement is individually assessed and confirmed by our care coordinator.',
    image: IMAGES.medicationCare,
    imageAlt:
      'Healthcare caregiver reviewing care schedule and medications for continuous home support',
    nprEstimate: 'Custom NPR Rotational Shift Plan · [Confirmed Upon Assessment]',
    availabilityNote:
      'Available only upon verified staff availability and formal coordinator approval',
    verificationScope:
      '24/7 coverage is never guaranteed automatically online; our coordinator confirms rotational staffing, shift handovers, and care scope before approval.',
    benefits: [
      'Provides continuous day and night attendance through structured staff rotations',
      'Ensures overnight safety for patients who need assistance turning, hydrating, or moving',
      'Supports family caregivers who need sustainable rest during extended recovery',
    ],
    whoCanBenefit: [
      'Patients with intensive recovery or mobility needs requiring overnight supervision',
      'Elderly family members who cannot safely be left unattended at night',
      'Families seeking coordinated multi-shift care arrangements in Nepal',
    ],
    howItWorks: [
      {
        step: 'Submit Extended Care Request',
        detail:
          'Outline patient needs, room setup, and required duration in the booking form.',
      },
      {
        step: 'Staff Availability Verification',
        detail:
          'Our coordinator checks rotational team availability and conducts a care assessment.',
      },
      {
        step: 'Formal Approval & NPR Schedule',
        detail:
          'Once approved by both the family and our coordinator, rotational shifts begin as scheduled.',
      },
    ],
    faqs: [
      {
        question: 'Is 24/7 Care Support immediately confirmed when I submit the form?',
        answer:
          'No. Because 24/7 rotational care requires verifying multiple staff shifts, our coordinator will review availability and contact you to confirm before any booking is finalized.',
      },
    ],
  },
];

const SERVICES_NE: HealthcareService[] = [
  {
    slug: 'home-nursing-care',
    index: '०१.',
    title: 'घरमै नर्सिङ सेवा',
    category: 'Clinical Nursing',
    categoryLabel: 'क्लिनिकल नर्सिङ',
    shortDescription:
      'परिवार र घरकै गोपनीयतामा ध्यानपूर्वक नर्सिङ गृहभेट तथा निरन्तर क्लिनिकल हेरचाह।',
    fullDescription:
      'घरमै नर्सिङ सेवाले नेपालस्थित बिरामीको निवासमै व्यवस्थित क्लिनिकल नर्सिङ सहयोग पुर्‍याउँछ। बारम्बार अस्पताल धाउँदा हुने थकान र तनाव कम गर्दै यस सेवाअन्तर्गत नियमित स्वास्थ्य अवलोकन, चिकित्सकले लेखेका नर्सिङ प्रक्रिया, सरसफाइ र परिवारलाई स्पष्ट प्रगति जानकारी समेटिन्छ।',
    image: IMAGES.nursingVitals,
    imageAlt: 'घरमै बिरामीको रक्तचाप नाप्दै र स्वास्थ्य अवस्था जाँच्दै गरेकी नर्स',
    nprEstimate: 'NPR [१,५०० – २,५००] प्रति भेट · [सम्पादनयोग्य दर]',
    availabilityNote: 'नर्सको उपलब्धताअनुसार निर्धारित दिनभेट र सिफ्ट सेवा',
    verificationScope:
      'सबै क्लिनिकल प्रक्रियाहरू चिकित्सकको वैध लिखित पर्चा र प्रमाणित नर्सिङ जनशक्तिको योग्यताअनुसार मात्र गरिन्छ।',
    benefits: [
      'स्वास्थ्य लाभ गरिरहेका बिरामीका लागि अनावश्यक अस्पताल यात्रा र पर्खाइ घटाउँछ',
      'परिचित पारिवारिक वातावरण कायम राखी मानसिक सहजता र आराम प्रदान गर्छ',
      'परिवारका सदस्यहरूका लागि स्पष्ट सिफ्ट नोट र नियमित अद्यावधिक उपलब्ध गराउँछ',
      'घरायसी कोठाअनुकूल सफा र निसंक्रमित हेरचाह मापदण्ड पालना गरिन्छ',
    ],
    whoCanBenefit: [
      'अस्पतालबाट डिस्चार्ज भएपछि निरन्तर नर्सिङ निगरानी चाहिने बिरामीहरू',
      'चिकित्सकको योजनाअनुसार दीर्घकालीन स्वास्थ्य अवस्था व्यवस्थापन गरिरहेका व्यक्तिहरू',
      'ओछ्यानमा रहेका वा हिँडडुल सीमित भएका बिरामीहरू',
      'कामकाजी व्यस्तताबीच भरपर्दो गृहसेवा खोजिरहेका परिवारहरू',
    ],
    howItWorks: [
      {
        step: 'हेरचाह आवश्यकता समीक्षा',
        detail:
          'बुकिङ फारममार्फत हालको चिकित्सकको पर्चा, निर्देशन र उपयुक्त समय पठाउनुहोस्।',
      },
      {
        step: 'संयोजक प्रमाणीकरण',
        detail:
          'हाम्रो संयोजकले नर्स उपलब्धता जाँच गरी सेवा दायरा र यकिन NPR शुल्क जानकारी दिन्छन्।',
      },
      {
        step: 'निर्धारित गृहभेट',
        detail:
          'तोकिएकी नर्स आवश्यक सामग्रीसहित समयमा घरमा पुगेर सहमतिअनुसार सेवा प्रदान गर्छिन्।',
      },
      {
        step: 'परिवारलाई प्रगति जानकारी',
        detail:
          'सेवापछि स्वास्थ्य अवलोकन र नोटहरू परिवारको मुख्य सम्पर्क व्यक्तिलाई स्पष्ट दिइन्छ।',
      },
    ],
    faqs: [
      {
        question: 'के क्लिनिकल नर्सिङ प्रक्रियाका लागि चिकित्सकको पर्चा आवश्यक पर्छ?',
        answer:
          'पर्दछ। बिरामीको सुरक्षाका लागि सुई, विशेष ड्रेसिङ वा अन्य निर्धारित नर्सिङ प्रक्रियाका लागि चिकित्सकको अद्यावधिक लिखित पर्चा अनिवार्य छ।',
      },
      {
        question: 'NPR सेवा शुल्क कसरी तय गरिन्छ?',
        answer:
          'शुल्क भेटको अवधि, सिफ्टको प्रकार, नेपालभित्रको स्थान र आवश्यकताअनुसार तय हुन्छ। बुकिङ स्वीकृत हुनुअघि नै संयोजकले यकिन NPR शुल्क जानकारी गराउनुहुन्छ।',
      },
    ],
  },
  {
    slug: 'elderly-care',
    index: '०२.',
    title: 'ज्येष्ठ नागरिक हेरचाह',
    category: 'Daily & Senior Care',
    categoryLabel: 'दैनिक तथा ज्येष्ठ नागरिक हेरचाह',
    shortDescription:
      'घरमै वृद्ध आमाबुवाका लागि सम्मानजनक साथ, सुरक्षित हिँडडुल सहयोग र दैनिक दिनचर्या सहायता।',
    fullDescription:
      'हाम्रो ज्येष्ठ नागरिक हेरचाह सेवा वृद्ध परिवार सदस्यहरूको मर्यादा, सुरक्षा र दैनिक सहजता जोगाउनमा केन्द्रित छ। हेरचाहकर्ताहरूले सुरक्षित हिँडडुल, खाना खुवाउन सहयोग, पानी पिउने सम्झना, नियमित दिनचर्या र आत्मीय साथ प्रदान गरी ज्येष्ठ नागरिकलाई आफ्नै घरमा सहज जीवनयापन गर्न मद्दत गर्दछन्।',
    image: IMAGES.elderlyCompanion,
    imageAlt: 'उज्यालो करिडोरमा ज्येष्ठ नागरिक बाजेलाई सुरक्षित रूपमा हिँड्न सहयोग गर्दै गरेकी हेरचाहकर्ता',
    nprEstimate: 'NPR [१,२०० – २,२००] प्रति सिफ्ट · [सम्पादनयोग्य दर]',
    availabilityNote: 'आधा दिन, पूरा दिन वा निरन्तर हेरचाह योजना संयोजकको सहमतिअनुसार',
    verificationScope:
      'गैर–चिकित्सकीय ज्येष्ठ नागरिक सहायता तथा साथ; क्लिनिकल अवलोकन आवश्यक परेमा योग्य नर्ससँग समन्वय गरिन्छ।',
    benefits: [
      'भर्‍याङ र कोठामा लड्ने जोखिम कम गरी सुरक्षित हिँडडुलमा सहयोग पुर्‍याउँछ',
      'नियमित खाना, पानी र आरामको तालिका कायम राख्न मद्दत गर्छ',
      'घरमा एक्लोपन कम गर्न न्यानो र सम्मानजनक साथ प्रदान गर्छ',
      'नजिक वा विदेशमा रहेका परिवारजनलाई मानसिक निश्चिन्तता दिन्छ',
    ],
    whoCanBenefit: [
      'नेपालमा एक्लै वा कामकाजी परिवारसँग बसिरहेका ज्येष्ठ नागरिकहरू',
      'सन्तुलनमा हल्का कठिनाइ वा उमेरजन्य थकान महसुस गरिरहेका वृद्धजन',
      'विदेशमा रहेका सन्तानले नेपालमा रहेका आमाबुवाका लागि नियमित हेरचाह चाहँदा',
    ],
    howItWorks: [
      {
        step: 'दैनिक बानी र आवश्यकता छलफल',
        detail:
          'तपाईंका अभिभावकको दैनिक बानी, खानपान, भाषा र हिँडडुल अवस्थाबारे जानकारी दिनुहोस्।',
      },
      {
        step: 'हेरचाहकर्ता छनोट',
        detail:
          'समय र आवश्यकताअनुकूल उपलब्ध हेरचाहकर्ता मिलाई स्वीकृतिअघि नै NPR दर यकिन गरिन्छ।',
      },
      {
        step: 'निरन्तर गृह सहयोग',
        detail:
          'हेरचाहकर्ताले सुरक्षित हिँडडुल, दैनिक सहजता र आत्मीय साथमा सहयोग गर्दछन्।',
      },
    ],
    faqs: [
      {
        question: 'विदेशमा रहेका परिवारले नेपालमा रहेका आमाबुवाका लागि यो सेवा बुक गर्न सक्छन्?',
        answer:
          'सक्नुहुन्छ। तपाईं अनलाइन फारम भरेर फोन, इमेल वा WhatsApp मार्फत समयतालिका र अपडेटका लागि हाम्रो टोलीसँग समन्वय गर्न सक्नुहुन्छ।',
      },
      {
        question: 'के ज्येष्ठ नागरिक हेरचाहमा घरको सामान्य सरसफाइ पनि पर्छ?',
        answer:
          'हेरचाहकर्ताहरू पूर्ण रूपमा ज्येष्ठ नागरिकको व्यक्तिगत आराम, सुरक्षा, हिँडडुल र हेरचाह क्षेत्रमा मात्र केन्द्रित हुन्छन्; घरायसी कामका लागि होइन।',
      },
    ],
  },
  {
    slug: 'patient-care-at-home',
    index: '०३.',
    title: 'बिरामीको हेरचाह',
    category: 'Daily & Senior Care',
    categoryLabel: 'दैनिक तथा ज्येष्ठ नागरिक हेरचाह',
    shortDescription:
      'घरमै आराम वा स्वास्थ्य लाभ गरिरहेका बिरामीका लागि समर्पित ओछ्यानछेउ सहायता र सहज हेरचाह।',
    fullDescription:
      'बिरामीको हेरचाह सेवाले अस्पताल डिस्चार्ज र पूर्ण आत्मनिर्भरता बीचको दूरीलाई सहज बनाउँछ। ओछ्यानमा कोल्टे फेर्न सहयोग, खुवाउने सहायता, सहजता अनुगमन वा दीर्घकालीन रोगमा नजिकको हेरचाह जे आवश्यक होस्, हाम्रो टोलीले घरायसी दिनचर्याअनुसार शान्त र भरपर्दो सहयोग प्रदान गर्दछ।',
    image: IMAGES.hero,
    imageAlt: 'बैठक कोठामा बसेकी ज्येष्ठ बिरामीलाई सान्त्वना र हेरचाह दिँदै गरेकी स्वास्थ्यकर्मी',
    nprEstimate: 'NPR [१,४०० – २,४००] प्रति सिफ्ट · [सम्पादनयोग्य दर]',
    availabilityNote: 'दिन तथा रात्रि सिफ्ट जनशक्ति तालिका पुष्टिअनुसार उपलब्ध',
    verificationScope:
      'प्रमाणित नर्ससँग नजोडिएसम्म हेरचाहकर्ताहरू तोकिएको गैर–आक्रामक बिरामी सहायता सीमाभित्र रहन्छन्।',
    benefits: [
      'अपरिचित अस्पताल वार्डको असहजताबिना घरमै निरन्तर हेरचाह',
      'सुरक्षित पोजिसनिङ र हिँडडुल सहयोगद्वारा शारीरिक असहजता कम गर्छ',
      'परिवारजन र उपचाररत चिकित्सकसँग सहज समन्वय',
    ],
    whoCanBenefit: [
      'अस्पताल बसाइपछि घर फर्किरहेका बिरामीहरू',
      'लामो अस्वस्थता वा कमजोरीका कारण ओछ्यानछेउ सहयोग चाहिने व्यक्तिहरू',
      'दीर्घकालीन घरमै हेरचाहमा परिवारलाई विश्राम र सहायता चाहिँदा',
    ],
    howItWorks: [
      {
        step: 'बिरामीको विवरण',
        detail: 'बिरामीको उमेर, हिँडडुल स्थिति र आवश्यक हेरचाह घण्टा पठाउनुहोस्।',
      },
      {
        step: 'योजना र शुल्क स्वीकृति',
        detail: 'तोकिएको सिफ्ट तालिका र NPR शुल्कसहित संयोजकबाट पुष्टि प्राप्त गर्नुहोस्।',
      },
      {
        step: 'आत्मीय ओछ्यानछेउ हेरचाह',
        detail: 'निश्चित मिति र समयमा घरमै हेरचाह सुरु हुन्छ।',
      },
    ],
    faqs: [
      {
        question: 'अनुरोध पठाएको कति समयमा सेवा सुरु गर्न सकिन्छ?',
        answer:
          'सबै अनुरोधहरू पहिले संयोजकले जनशक्ति उपलब्धता जाँच गरी समीक्षा गर्दछन्। हाम्रो टोलीले सम्पर्क गरी पुष्टि नगरेसम्म सेवा निश्चित मानिँदैन।',
      },
    ],
  },
  {
    slug: 'post-surgery-care',
    index: '०४.',
    title: 'शल्यक्रियापछिको हेरचाह',
    category: 'Recovery & Rehab',
    categoryLabel: 'पुनर्स्थापना तथा उपचार सहयोग',
    shortDescription:
      'शल्यक्रियापछि सरसफाइ, सुरक्षित हिँडडुल र अस्पताल डिस्चार्ज निर्देशन पालनामा व्यवस्थित सहयोग।',
    fullDescription:
      'शल्यक्रियापछिका सुरुवाती दिनहरू सुरक्षित घाउ निको हुन अत्यन्त महत्त्वपूर्ण हुन्छन्। हाम्रो शल्यक्रियापछिको हेरचाह सेवाले बिरामीलाई घरमै शल्यचिकित्सकको डिस्चार्ज सल्लाह पालना गर्न, सुरक्षित उठबस गर्न, सरसफाइ कायम राख्न र कुनै लक्षण देखिएमा परिवारलाई समयमै सचेत गराउन सहयोग गर्दछ।',
    image: IMAGES.postSurgery,
    imageAlt: 'ओछ्यानमा आराम गरिरहेकी बिरामीको छेउमा सफा ड्रेसिङ सामग्री तयार पार्दै गरेकी नर्स',
    nprEstimate: 'NPR [१,८०० – ३,०००] प्रति भेट/सिफ्ट · [सम्पादनयोग्य दर]',
    availabilityNote: 'अस्पताल डिस्चार्ज सारांश हेरेपछि निर्धारित गृहभेट निश्चित गरिन्छ',
    verificationScope:
      'शल्यक्रियापछिका सबै नर्सिङ कार्यहरू शल्यचिकित्सकको डिस्चार्ज सारांश र प्रमाणित कर्मचारी दायराअनुसार गरिन्छ।',
    benefits: [
      'घरमै अस्पताल डिस्चार्ज निर्देशनहरूको सावधानीपूर्वक पालना गराउन मद्दत गर्छ',
      'प्रारम्भिक स्वास्थ्य लाभका क्रममा शारीरिक दबाब र जोखिम कम गर्छ',
      'संक्रमणको जोखिम घटाउन सफा र स्वास्थ्यकर वातावरण कायम राख्छ',
    ],
    whoCanBenefit: [
      'हाडजोर्नी, पेट वा सामान्य शल्यक्रियापछि स्वास्थ्य लाभ गरिरहेका बिरामीहरू',
      'शल्यक्रियापछि ओछ्यानबाट उठबस गर्न सहयोग चाहिने ज्येष्ठ नागरिकहरू',
      'घरमै शल्यक्रियापछिको दैनिक हेरचाह कसरी सुरक्षित गर्ने भन्नेमा अन्योलमा रहेका परिवारहरू',
    ],
    howItWorks: [
      {
        step: 'डिस्चार्ज सारांश समीक्षा',
        detail:
          'शल्यक्रियापछिका सावधानी बुझ्न अस्पतालको डिस्चार्ज निर्देशन साझा गर्नुहोस्।',
      },
      {
        step: 'जनशक्ति खटनपटन',
        detail:
          'संयोजकले उपयुक्त नर्स वा हेरचाहकर्ताको उपलब्धता र NPR शुल्क पुष्टि गर्दछन्।',
      },
      {
        step: 'निर्देशित गृह स्वास्थ्य लाभ',
        detail:
          'चिकित्सकको सल्लाहअनुसार आराम, झोलिलो आहार र सुरक्षित हिँडडुलमा सहयोग।',
      },
    ],
    faqs: [
      {
        question: 'के अस्पतालको डिस्चार्ज सारांश तयार राख्नुपर्छ?',
        answer:
          'पर्दछ। डिस्चार्ज कागज र हालको औषधि पर्चा तयार राख्दा संयोजकलाई सही स्तरको हेरचाह मिलाउन मद्दत पुग्छ।',
      },
    ],
  },
  {
    slug: 'physiotherapy-support',
    index: '०५.',
    title: 'फिजियोथेरापी सहयोग',
    category: 'Recovery & Rehab',
    categoryLabel: 'पुनर्स्थापना तथा उपचार सहयोग',
    shortDescription:
      'स्थिर स्वास्थ्य लाभका लागि घरकै कोठामा निर्देशित हिँडडुल तथा शारीरिक व्यायाम सहायता।',
    fullDescription:
      'फिजियोथेरापी सहयोगले व्यवस्थित शारीरिक चाल र व्यायाम सत्र सिधै बिरामीको बैठक कोठामा ल्याउँछ। दुखाइ भएको बेला ट्राफिकमा क्लिनिक धाउनुपर्ने झन्झटबिना नै जोर्नी चलाउने हल्का व्यायाम, शक्ति पुनर्निर्माण, बसाइ–उठाइको सन्तुलन र सुरक्षित हिँडडुल अभ्यासमा ध्यान दिइन्छ।',
    image: IMAGES.physiotherapy,
    imageAlt: 'घरमै ज्येष्ठ नागरिकलाई बसेर पाखुरा चलाउने व्यायाम सिकाउँदै गरेकी फिजियोथेरापिस्ट',
    nprEstimate: 'NPR [१,५०० – २,५००] प्रति सत्र · [सम्पादनयोग्य दर]',
    availabilityNote: 'प्रमाणित पुनर्स्थापना जनशक्ति उपलब्धताअनुसार सत्र निश्चित गरिन्छ',
    verificationScope:
      'व्यायाम अभ्यासहरू उपचाररत चिकित्सकको स्वीकृति र प्रमाणित विशेषज्ञको योग्यताअनुसार मात्र गराइन्छ।',
    benefits: [
      'कमजोर वा हिँडडुल कठिन भएका बिरामीका लागि क्लिनिक जाने कष्ट हटाउँछ',
      'तपाईंको घरकै कुर्सी, भर्‍याङ र कोठाअनुसार व्यायाम अनुकूलन गरिन्छ',
      'नियमित पुनर्स्थापना अभ्यासमा निरन्तरता कायम राख्न मद्दत गर्छ',
    ],
    whoCanBenefit: [
      'जोर्नी चोट, भाँचिएको हड्डी वा शल्यक्रियापछि शक्ति फर्काइरहेका बिरामीहरू',
      'जोर्नी कडा हुने, दुखाइ वा सन्तुलन कमी अनुभव गरिरहेका ज्येष्ठ नागरिकहरू',
      'चिकित्सकको अनुमतिपछि घरमै नियमित व्यायाम मार्गदर्शन चाहिने व्यक्तिहरू',
    ],
    howItWorks: [
      {
        step: 'व्यायाम अनुरोध',
        detail: 'बुक गर्दा स्वास्थ्य लाभ लक्ष्य र चिकित्सकको नोट साझा गर्नुहोस्।',
      },
      {
        step: 'समय र शुल्क पुष्टि',
        detail: 'संयोजकले सत्र उपलब्धता र प्रति भेट NPR शुल्क यकिन गर्दछन्।',
      },
      {
        step: 'घरमै निर्देशित सत्र',
        detail: 'घरकै सुरक्षित स्थानमा बिस्तारै र सहज तरिकाले व्यायाम अभ्यास।',
      },
    ],
    faqs: [
      {
        question: 'घरमै फिजियोथेरापी सहयोग सत्र कति समयको हुन्छ?',
        answer:
          'बिरामीको क्षमता र योजनाअनुसार बुकिङ निश्चित गर्दा तय भएबमोजिम सामान्यतया ४०–६० मिनेटको हुन्छ।',
      },
    ],
  },
  {
    slug: 'personal-care-assistance',
    index: '०६.',
    title: 'व्यक्तिगत सरसफाइ सहयोग',
    category: 'Daily & Senior Care',
    categoryLabel: 'दैनिक तथा ज्येष्ठ नागरिक हेरचाह',
    shortDescription:
      'नुहाउने, कपडा फेर्ने, कपाल कोर्ने र दैनिक सरसफाइमा नम्र तथा सम्मानजनक सहायता।',
    fullDescription:
      'व्यक्तिगत सरसफाइ सहयोगले दैनिक सरसफाइका कार्यहरू शारीरिक रूपमा कठिन भएका व्यक्तिहरूलाई मद्दत गर्दछ। हाम्रा हेरचाहकर्ताहरूले स्पन्ज बाथ, सरसफाइ, कपडा लगाउने, शौचालय सहयोग र ओछ्यान सफा राख्ने कार्यमा बिरामीको गोपनीयता र आत्मसम्मानलाई पहिलो प्राथमिकता दिन्छन्।',
    image: IMAGES.elderlyCompanion,
    imageAlt: 'ज्येष्ठ परिवार सदस्यलाई सम्मानजनक दैनिक सहयोग गर्दै गरेकी हेरचाहकर्ता',
    nprEstimate: 'NPR [१,१०० – १,९००] प्रति भेट/सिफ्ट · [सम्पादनयोग्य दर]',
    availabilityNote: 'बिहान र बेलुकाको व्यक्तिगत हेरचाह समय अनुरोधअनुसार उपलब्ध',
    verificationScope:
      'तालिमप्राप्त हेरचाहकर्ताद्वारा व्यक्तिगत गोपनीयता र सांस्कृतिक संवेदनशीलताको पूर्ण सम्मानसहित प्रदान गरिन्छ।',
    benefits: [
      'व्यक्तिगत स्वच्छता, छालाको सुरक्षा र आत्मसम्मान जोगाउँछ',
      'चिसो बाथरुममा चिप्लिने र लड्ने जोखिम घटाउँछ',
      'परिवारका हेरचाहकर्ताहरूको शारीरिक भार कम गर्छ',
    ],
    whoCanBenefit: [
      'बाथ, कमजोरी वा सन्तुलन समस्या भएका ज्येष्ठ नागरिकहरू',
      'शल्यक्रिया वा चोटका कारण हातखुट्टा चलाउन कठिन भएका बिरामीहरू',
      'ओछ्यानमै सरसफाइ र तन्ना फेर्न सहयोग चाहिने बिरामीहरू',
    ],
    howItWorks: [
      {
        step: 'प्राथमिकता छनोट',
        detail: 'आवश्यक समय र महिला वा पुरुष हेरचाहकर्ता प्राथमिकता उल्लेख गर्नुहोस्।',
      },
      {
        step: 'संयोजक स्वीकृति',
        detail: 'तालिका गर्नुअघि जनशक्ति र NPR दर पुष्टि गरिन्छ।',
      },
      {
        step: 'मर्यादित सहायता',
        detail: 'घरमै धैर्यपूर्वक र सम्मानजनक व्यक्तिगत सरसफाइ सहयोग।',
      },
    ],
    faqs: [
      {
        question: 'के हामी व्यक्तिगत हेरचाहका लागि महिला वा पुरुष हेरचाहकर्ता रोज्न सक्छौँ?',
        answer:
          'सक्नुहुन्छ। बुकिङ फारममा आफ्नो प्राथमिकता लेख्न सक्नुहुन्छ, र संयोजकले उपलब्धताअनुसार मिलाउनुहुनेछ।',
      },
    ],
  },
  {
    slug: 'medication-assistance',
    index: '०७.',
    title: 'औषधि सेवन सहायता',
    category: 'Clinical Nursing',
    categoryLabel: 'क्लिनिकल नर्सिङ',
    shortDescription:
      'चिकित्सकको पर्चाअनुसार व्यवस्थित पिल–बक्स मिलाउने, समयमा सम्झाउने र सेवन अभिलेख राख्ने सेवा।',
    fullDescription:
      'दिनको फरक–फरक समयमा धेरै औषधि खानुपर्ने हुँदा बिरामी र व्यस्त परिवारका लागि व्यवस्थापन कठिन हुन सक्छ। हाम्रो औषधि सेवन सहायता सेवाले चिकित्सकको लिखित पर्चाअनुसार दैनिक औषधि बट्टा मिलाउन, समयमै सम्झाउन र सही सेवन अभिलेख राख्न मद्दत गर्दछ।',
    image: IMAGES.medicationCare,
    imageAlt: 'काठको टेबलमा दैनिक औषधिको बट्टा र हस्तलिखित औषधि तालिका मिलाउँदै गरेकी नर्स',
    nprEstimate: 'NPR [१,००० – १,६००] प्रति भेट · [सम्पादनयोग्य दर]',
    availabilityNote: 'छुट्टै जाँच भेट वा दैनिक हेरचाह सिफ्टसँग जोडेर उपलब्ध',
    verificationScope:
      'कर्मचारीले कहिल्यै औषधि परिवर्तन वा सिफारिस गर्दैनन्; सहायता पूर्ण रूपमा वैध चिकित्सकको पर्चाअनुसार हुन्छ।',
    benefits: [
      'औषधि छुट्ने वा झुक्किएर दोहोरो खाने जोखिम कम गर्छ',
      'आगामी चिकित्सक भेटका लागि व्यवस्थित लिखित अभिलेख तयार राख्छ',
      'निर्धारित औषधिसँगै सही खानपान समय मिलाउन सहयोग गर्छ',
    ],
    whoCanBenefit: [
      'दैनिक धेरै औषधि सेवन गरिरहेका ज्येष्ठ नागरिकहरू',
      'स्मरणशक्ति कमजोरी वा अस्पतालपछिको जटिल औषधि तालिका भएका बिरामीहरू',
      'दैनिक औषधि मात्रा ठीक छ भनी ढुक्क हुन चाहने कामकाजी परिवारहरू',
    ],
    howItWorks: [
      {
        step: 'पर्चा समीक्षा',
        detail: 'समीक्षाका लागि हालको चिकित्सक पर्चा र औषधिका प्याकेट तयार राख्नुहोस्।',
      },
      {
        step: 'तालिका व्यवस्थापन',
        detail: 'बिहान, दिउँसो र बेलुकाको मात्रा स्पष्ट मिलाई अभिलेख गरिन्छ।',
      },
      {
        step: 'नियमित सम्झना र लग',
        detail: 'समयमै सहयोग र परिवारका लागि स्पष्ट अभिलेख।',
      },
    ],
    faqs: [
      {
        question: 'के Health Home Care Services ले नयाँ औषधि लेख्न वा परिवर्तन गर्न सक्छ?',
        answer:
          'सक्दैन। हामी केवल इजाजतप्राप्त चिकित्सकले लेखिदिएको वैध लिखित पर्चा पालना गर्न मात्र सहयोग गर्दछौँ।',
      },
    ],
  },
  {
    slug: 'vital-signs-monitoring',
    index: '०८.',
    title: 'भाइटल साइन निगरानी',
    category: 'Clinical Nursing',
    categoryLabel: 'क्लिनिकल नर्सिङ',
    shortDescription:
      'स्पष्ट अभिलेखसहित घरमै रक्तचाप, नाडी, तापक्रम र अक्सिजन मात्राको नियमित जाँच।',
    fullDescription:
      'नियमित भाइटल साइन निगरानीले परिवार र उपचाररत चिकित्सकलाई बारम्बार क्लिनिक नजाईकनै स्वास्थ्य अवस्थाको उतारचढाव बुझ्न मद्दत गर्छ। प्रत्येक भेटमा रक्तचाप, मुटुको धड्कन, शरीरको तापक्रम, श्वासप्रश्वास गति र SpO2 सावधानीपूर्वक मापन गरी व्यवस्थित चार्टमा लेखिन्छ।',
    image: IMAGES.nursingVitals,
    imageAlt: 'घरमै बिरामीको रक्तचाप नापेर भाइटल साइन अभिलेख राख्दै गरेकी नर्स',
    nprEstimate: 'NPR [८०० – १,४००] प्रति भेट · [सम्पादनयोग्य दर]',
    availabilityNote: 'एकपटकको जाँच वा नियमित बिहान/बेलुका निगरानी तालिका',
    verificationScope:
      'मापनहरू यथार्थ रूपले अभिलेख गरिन्छन् र सामान्य सीमाभन्दा बाहिर देखिएमा तुरुन्त परिवार वा चिकित्सकलाई जानकारी दिइन्छ।',
    benefits: [
      'घरको शान्त र आरामदायी अवस्थामा नियमित स्वास्थ्य मापन गर्छ',
      'चिकित्सक परामर्शका लागि उपयोगी सफा लिखित अभिलेख तयार पार्छ',
      'कुनै असामान्य परिवर्तन छिट्टै पहिचान गरी चिकित्सकीय सल्लाह लिन मद्दत गर्छ',
    ],
    whoCanBenefit: [
      'रक्तचाप, ज्वरो वा श्वासप्रश्वास अवस्था निगरानी गरिरहेका बिरामीहरू',
      'घरमै साप्ताहिक वा दैनिक स्वास्थ्य जाँच चाहिने ज्येष्ठ नागरिकहरू',
      'डिस्चार्जपछि नियमित क्लिनिकल अवलोकन चाहिने बिरामीहरू',
    ],
    howItWorks: [
      {
        step: 'निगरानी आवृत्ति छान्नुहोस्',
        detail: 'एकपटकको जाँच वा दैनिक/साप्ताहिक तालिका रोज्नुहोस्।',
      },
      {
        step: 'संयोजक पुष्टि',
        detail: 'हाम्रो डेस्कबाट भेट समय र NPR शुल्क पुष्टि गर्नुहोस्।',
      },
      {
        step: 'अभिलेखित मापन',
        detail: 'शान्तपूर्वक मापन गरी तपाईं र चिकित्सकका लागि अभिलेख राखिन्छ।',
      },
    ],
    faqs: [
      {
        question: 'के हामीले भाइटल साइन अभिलेखको प्रतिलिपि पाउँछौँ?',
        answer:
          'पाउनुहुन्छ। मिति र समयसहित प्रत्येक मापन स्पष्ट लेखिन्छ ताकि तपाईंले सिधै आफ्नो चिकित्सकलाई देखाउन सक्नुहोस्।',
      },
    ],
  },
  {
    slug: 'wound-care-support',
    index: '०९.',
    title: 'घाउ ड्रेसिङ सहयोग',
    category: 'Recovery & Rehab',
    categoryLabel: 'पुनर्स्थापना तथा उपचार सहयोग',
    shortDescription:
      'तपाईंको चिकित्सकको निर्देशनअनुसार सफा, निसंक्रमित ड्रेसिङ परिवर्तन र घाउ अवलोकन सेवा।',
    fullDescription:
      'घरमै घाउको सही सरसफाइले तन्तु निको हुन र अनावश्यक जटिलता रोक्न मद्दत गर्छ। चिकित्सकको लिखित हेरचाह योजनाअनुसार योग्य नर्सिङ जनशक्तिद्वारा मात्र प्रदान गरिने घाउ ड्रेसिङ सहयोगमा सफा ड्रेसिङ परिवर्तन, कोमल सफाइ र चिकित्सकीय जाँच चाहिने संकेतको अवलोकन समावेश हुन्छ।',
    image: IMAGES.postSurgery,
    imageAlt: 'मास्क र पञ्जा लगाएकी नर्स बिरामीको ओछ्यानछेउ सफा घाउ ड्रेसिङ सामग्री मिलाउँदै',
    nprEstimate: 'NPR [१,४०० – २,४००] प्रति भेट · [सम्पादनयोग्य दर]',
    availabilityNote: 'चिकित्सकको निर्देशन हेरेपछि निर्धारित ड्रेसिङ भेट निश्चित गरिन्छ',
    verificationScope:
      'चिकित्सकको वैध ड्रेसिङ निर्देशनअनुसार प्रमाणित नर्सिङ जनशक्तिद्वारा मात्र गरिन्छ।',
    benefits: [
      'बिरामीको घरभित्रै सफा र निसंक्रमित ड्रेसिङ विधि प्रयोग गर्छ',
      'दुखाइ वा संवेदनशील घाउ भएका बिरामीलाई क्लिनिक जाने थकानबाट जोगाउँछ',
      'निको हुने क्रम अवलोकन गरी रातोपन वा असहजता देखिएमा परिवारलाई तुरुन्त सचेत गराउँछ',
    ],
    whoCanBenefit: [
      'निर्धारित सफा ड्रेसिङ परिवर्तन चाहिने शल्यक्रियापछिका बिरामीहरू',
      'बेडसोर वा ढिलो निको हुने छालाको नियमित सफा हेरचाह चाहिने व्यक्तिहरू',
      'चिकित्सकले घरमै ड्रेसिङ निरन्तर गर्न सल्लाह दिएका बिरामीहरू',
    ],
    howItWorks: [
      {
        step: 'चिकित्सकको ड्रेसिङ आदेश पठाउनुहोस्',
        detail: 'भेट अनुरोध गर्दा चिकित्सकको घाउ हेरचाह निर्देशन उपलब्ध गराउनुहोस्।',
      },
      {
        step: 'नर्स र NPR शुल्क पुष्टि',
        detail: 'संयोजकले नर्स उपलब्धता, आवश्यक सामग्री र NPR भेट शुल्क यकिन गर्दछन्।',
      },
      {
        step: 'सफा ड्रेसिङ हेरचाह',
        detail: 'घरमै आरामदायी अवस्थामा सावधानीपूर्वक सफाइ र नयाँ ड्रेसिङ।',
      },
    ],
    faqs: [
      {
        question: 'के ड्रेसिङका सफा सामग्री भेट शुल्कमा समावेश हुन्छन्?',
        answer:
          'सामान्य सामग्री र विशेष ड्रेसिङ सामग्रीको विवरण बुकिङ निश्चित गर्नुअघि संयोजकले NPR मा स्पष्ट जानकारी गराउनुहुन्छ।',
      },
    ],
  },
  {
    slug: '24-7-care-support',
    index: '१०.',
    title: '२४/७ हेरचाह सहयोग',
    category: 'Extended Support',
    categoryLabel: 'विस्तारित हेरचाह',
    shortDescription:
      'प्रमाणित जनशक्ति उपलब्धताअनुसार मात्र उपलब्ध हुने दिन–रात रोटेशनल घरमै हेरचाह।',
    fullDescription:
      'उच्च आवश्यकता भएका ज्येष्ठ नागरिक वा स्वास्थ्य लाभ गरिरहेका प्रियजनका लागि निरन्तर दिन–रात उपस्थिति चाहिने परिवारलाई २४/७ हेरचाह सहयोगले घरमै रोटेशनल सिफ्ट समन्वय गर्दछ। निरन्तर सेवा प्रमाणित जनशक्ति तालिका र बिरामीको अवस्थामा निर्भर हुने भएकाले प्रत्येक २४/७ व्यवस्थाको व्यक्तिगत मूल्याङ्कन गरी संयोजकले मात्र पुष्टि गर्दछन्।',
    image: IMAGES.medicationCare,
    imageAlt: 'निरन्तर गृहसेवाका लागि हेरचाह तालिका र औषधि विवरण समीक्षा गर्दै गरेकी स्वास्थ्यकर्मी',
    nprEstimate: 'आवश्यकताअनुसार NPR रोटेशनल योजना · [मूल्याङ्कनपछि यकिन गरिने]',
    availabilityNote:
      'प्रमाणित जनशक्ति उपलब्धता र औपचारिक संयोजक स्वीकृतिपछि मात्र उपलब्ध',
    verificationScope:
      '२४/७ सेवा अनलाइनबाट स्वतः ग्यारेन्टी गरिँदैन; स्वीकृतिअघि संयोजकले रोटेशनल जनशक्ति, सिफ्ट हस्तान्तरण र दायरा यकिन गर्दछन्।',
    benefits: [
      'व्यवस्थित सिफ्ट रोटेशनमार्फत दिन र रात निरन्तर उपस्थिति प्रदान गर्छ',
      'राति कोल्टे फेर्न, पानी दिन वा हिँडडुल गर्न सहयोग चाहिने बिरामीको सुरक्षा सुनिश्चित गर्छ',
      'लामो स्वास्थ्य लाभका क्रममा परिवारका सदस्यलाई आवश्यक आराम दिलाउँछ',
    ],
    whoCanBenefit: [
      'रात्रि निगरानी चाहिने गहन स्वास्थ्य लाभ वा सीमित हिँडडुल भएका बिरामीहरू',
      'राति एक्लै छोड्न सुरक्षित नहुने ज्येष्ठ नागरिकहरू',
      'नेपालमा बहु–सिफ्ट हेरचाह व्यवस्था खोजिरहेका परिवारहरू',
    ],
    howItWorks: [
      {
        step: 'विस्तारित हेरचाह अनुरोध पठाउनुहोस्',
        detail:
          'बुकिङ फारममा बिरामीको आवश्यकता, कोठा व्यवस्था र आवश्यक अवधि लेख्नुहोस्।',
      },
      {
        step: 'जनशक्ति उपलब्धता जाँच',
        detail:
          'हाम्रो संयोजकले रोटेशनल टोली उपलब्धता जाँच गरी हेरचाह मूल्याङ्कन गर्दछन्।',
      },
      {
        step: 'औपचारिक स्वीकृति र NPR तालिका',
        detail:
          'परिवार र संयोजक दुवैको सहमतिपछि निर्धारित तालिकाअनुसार सिफ्ट सुरु हुन्छ।',
      },
    ],
    faqs: [
      {
        question: 'फारम पठाउनेबित्तिकै के २४/७ हेरचाह सेवा तुरुन्त निश्चित हुन्छ?',
        answer:
          'हुँदैन। २४/७ रोटेशनल सेवाका लागि बहु–सिफ्ट जनशक्ति मिलाउनुपर्ने भएकाले संयोजकले उपलब्धता जाँच गरी सम्पर्क गरेपछि मात्र बुकिङ अन्तिम हुन्छ।',
      },
    ],
  },
];

export function getServices(lang: Language): HealthcareService[] {
  return lang === 'ne' ? SERVICES_NE : SERVICES_EN;
}

export function getServiceBySlug(
  slug: string | undefined,
  lang: Language = 'en'
): HealthcareService | undefined {
  return getServices(lang).find((s) => s.slug === slug);
}
