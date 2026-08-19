export type VisaGroup = "commonwealth" | "international" | "kenya";

export interface VisaCategory {
  slug: string;
  name: string;
  shortDescription: string;
  typicalPurpose: string;
  estimatedTurnaround: string;
  audience: string;
  keyRequirements: string[];
  commonMistakes: string[];
  swiftDocRole: string;
  officialRole: string;
  featured?: boolean;
}

export interface VisaCountry {
  slug: string;
  name: string;
  code: string;
  group: VisaGroup;
  groupLabel: string;
  missionName: string;
  missionType: "High Commission" | "Embassy" | "Immigration Department" | "Consulate General";
  missionCity?: string;
  applicationCenter: string;
  officialAuthority: {
    name: string;
    url?: string;
  };
  tagline: string;
  description: string;
  whoIsItFor: string;
  categories: VisaCategory[];
  supportServices: string[];
  requiredDocumentGuidance: string[];
  biometricsInterviewInfo: string;
  commonMistakes: string[];
  whatSwiftDocHandles: string[];
  whatEmbassyDecides: string[];
  faqs: { q: string; a: string }[];
  relatedCountries: string[];
  disclaimer: string;
}

export const VISA_PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation & Category Selection",
    duration: "Initial step",
    body: "We assess your travel purpose, duration, destination embassy rules and profile to identify the appropriate visa subclass before fees are committed.",
  },
  {
    step: "02",
    title: "Eligibility & Requirement Review",
    duration: "Pre-audit",
    body: "A comprehensive document checklist is tailored to your employment, financial, marital and sponsorship status to ensure full compliance.",
  },
  {
    step: "03",
    title: "Supporting Document Organization",
    duration: "Preparation",
    body: "We review bank statements, employer letters, tax returns, invitation letters, hotel bookings and itinerary records to ensure consistency across the file.",
  },
  {
    step: "04",
    title: "Application Form Assistance",
    duration: "Drafting",
    body: "Our team assists with precise data entry across official government portals (e.g. UKVI, CEAC DS-160, IRCC, France-Visas, eCitizen) eliminating conflicting records.",
  },
  {
    step: "05",
    title: "Quality & Compliance Audit",
    duration: "Second review",
    body: "A senior document consultant conducts a line-by-line audit of your entire dossier against the specific embassy's current policy guidelines.",
  },
  {
    step: "06",
    title: "Appointment & Biometric Scheduling",
    duration: "Submission prep",
    body: "We guide you through booking submission slots at official visa application centers (e.g. VFS Global, TLScontact, Tasheer) and provide biometric briefing.",
  },
  {
    step: "07",
    title: "Application Tracking & Monitoring",
    duration: "Post-submission",
    body: "We track the progress of your application through official tracking channels and assist if additional documentation or clarifications are requested.",
  },
  {
    step: "08",
    title: "Decision Notification & Passport Retrieval",
    duration: "Final stage",
    body: "We notify you upon consular determination and guide you through passport collection, courier tracking, and entry requirement verification.",
  },
] as const;

export const STANDARD_VISA_DISCLAIMER =
  "Visa decisions are made solely by the relevant embassy, high commission, consulate or immigration authority. Swift Doc provides professional application preparation, document auditing and administrative support and does not guarantee visa approval.";

export const VISA_GROUPS = [
  {
    id: "commonwealth" as const,
    label: "Commonwealth & High Commission Services",
    description:
      "Full application preparation and biometric submission guidance for Commonwealth member states with High Commissions in Nairobi.",
  },
  {
    id: "international" as const,
    label: "Other International Visa Services",
    description:
      "Comprehensive visa dossier preparation for the United States, Schengen member states, East Asia, and the Middle East.",
  },
  {
    id: "kenya" as const,
    label: "Kenya Visa & Immigration Services",
    description:
      "Inbound electronic travel authorizations (eTA), East Africa Tourist Visas, Kenyan work permits, special passes, and residency services.",
  },
];

export const VISA_COUNTRIES: VisaCountry[] = [
  // -------------------------------------------------------------
  // GROUP A: COMMONWEALTH / HIGH COMMISSION SERVICES
  // -------------------------------------------------------------
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    code: "GB",
    group: "commonwealth",
    groupLabel: "Commonwealth & High Commission Services",
    missionName: "British High Commission Nairobi / UK Visas and Immigration (UKVI)",
    missionType: "High Commission",
    applicationCenter: "VFS Global Visa Application Centre, Nairobi",
    officialAuthority: {
      name: "UK Visas and Immigration (UKVI)",
      url: "https://www.gov.uk/browse/visas-immigration",
    },
    tagline: "Standard Visitor, Student, Skilled Worker & Family Visa Preparation",
    description:
      "Comprehensive application support for UK entry clearance from Kenya. We assist with Gov.uk online application forms, financial evidence curation, employment verification, and VFS Global appointment booking.",
    whoIsItFor:
      "Kenyan citizens and legal residents travelling to England, Scotland, Wales or Northern Ireland for tourism, business meetings, higher education, employment or joining family members.",
    categories: [
      {
        slug: "visitor",
        name: "Standard Visitor Visa (6 Months / 2, 5, 10 Years)",
        shortDescription: "Tourism, family visits, business meetings, conferences, and short medical treatments.",
        typicalPurpose: "Short-term travel up to 6 months per visit.",
        estimatedTurnaround: "Standard: ~3–6 weeks; Priority options subject to UKVI availability.",
        audience: "Tourists, business professionals, conference delegates, and family visitors.",
        keyRequirements: [
          "Valid Kenyan passport with at least 1 blank page",
          "6 months certified bank statements demonstrating origin of funds",
          "Employment letter, leave approval letter, or business registration (CR12/PIN)",
          "Detailed travel itinerary and accommodation arrangements",
          "Invitation letter and UK host proof of accommodation/legal status (if visiting family/friends)",
        ],
        commonMistakes: [
          "Unexplained large deposits into bank accounts ('funds parking')",
          "Discrepancies between salary on pay slips and deposits on bank statements",
          "Vague itineraries without verifiable travel purpose",
          "Failure to disclose previous visa refusals from any country",
        ],
        swiftDocRole: "Financial evidence audit, Gov.uk form compilation, document indexing, and VFS booking.",
        officialRole: "UKVI Entry Clearance Officers evaluate eligibility and make final decisions.",
        featured: true,
      },
      {
        slug: "student",
        name: "Student Visa (formerly Tier 4)",
        shortDescription: "Undergraduate, postgraduate, and accredited foundation degree studies in the UK.",
        typicalPurpose: "Full-time higher education courses at licensed UK sponsor institutions.",
        estimatedTurnaround: "Standard: ~3 weeks after biometrics.",
        audience: "Kenyan students holding an unconditional offer from a licensed UK higher education institution.",
        keyRequirements: [
          "Valid Confirmation of Acceptance for Studies (CAS) reference number",
          "Evidence of maintenance funds held for a consecutive 28-day period (tuition balance + living costs)",
          "Academic certificates and English proficiency records as referenced in CAS",
          "Valid Tuberculosis (TB) test certificate from an IOM approved clinic in Nairobi",
          "ATAS certificate where required for sensitive scientific/technical subjects",
        ],
        commonMistakes: [
          "Holding maintenance funds for less than the strict 28-day maturation period",
          "Presenting financial accounts that do not strictly qualify under UKVI rules (e.g. non-regulated funds)",
          "Submitting TB certificates from unapproved medical facilities",
        ],
        swiftDocRole: "CAS compliance audit, 28-day financial balance verification, TB appointment guidance, and visa dossier packaging.",
        officialRole: "UKVI verifies sponsor status and immigration rules compliance.",
        featured: true,
      },
      {
        slug: "work",
        name: "Skilled Worker & Health and Care Worker Visa",
        shortDescription: "Employment with a licensed UK employer holding a Certificate of Sponsorship.",
        typicalPurpose: "Full-time professional employment in eligible UK occupations.",
        estimatedTurnaround: "Standard: ~3–4 weeks.",
        audience: "Professionals with a confirmed job offer from a UK Home Office licensed sponsor.",
        keyRequirements: [
          "Valid Certificate of Sponsorship (CoS) reference",
          "Appropriate salary meeting the relevant Home Office threshold",
          "Proof of English language proficiency (SELT IELTS / UK ENIC certified degree)",
          "TB test certificate and Police Clearance Certificate (Good Conduct)",
          "Maintenance funds evidence unless sponsor certifies maintenance",
        ],
        commonMistakes: [
          "Incompatible job SOC code with salary minimum thresholds",
          "Unapproved English test providers",
          "Omission of required criminal record certificates",
        ],
        swiftDocRole: "CoS verification review, documentation packaging, Good Conduct apostille/authentication coordination, and submission scheduling.",
        officialRole: "Home Office assesses employer sponsorship validity and applicant background.",
      },
      {
        slug: "family",
        name: "Family & Spouse Settlement Visa",
        shortDescription: "Joining a British citizen or settled partner/spouse for long-term residence in the UK.",
        typicalPurpose: "Settlement and reunion with spouse, civil partner, or parent in the UK.",
        estimatedTurnaround: "Standard: ~12–24 weeks.",
        audience: "Partners and dependents of British citizens or persons with settled status in the UK.",
        keyRequirements: [
          "Proof of genuine and subsisting relationship (marriage certificate, photos, communications)",
          "Evidence of meeting the UK minimum income requirement (sponsor payslips, P60, employer letter)",
          "Adequate accommodation evidence in the UK (property inspection/tenancy)",
          "Approved A1/A2 English language certificate",
          "TB test clearance from IOM Nairobi",
        ],
        commonMistakes: [
          "Insufficient documentary evidence of joint commitments",
          "Failure to meet specified financial evidence formats under Appendix FM-SE",
        ],
        swiftDocRole: "Dossier collation, Appendix FM document indexing, and submission support.",
        officialRole: "UKVI settlement caseworkers assess relationship validity and financial thresholds.",
      },
      {
        slug: "transit",
        name: "Direct Airside Transit Visa (DATV) / Visitor in Transit",
        shortDescription: "Transiting through a UK airport en route to a third destination.",
        typicalPurpose: "Connecting flights through UK territory.",
        estimatedTurnaround: "Standard: ~3 weeks.",
        audience: "Travellers holding onward flight tickets through the UK who do not qualify for transit exemption.",
        keyRequirements: [
          "Confirmed onward flight booking within 48 hours",
          "Valid visa or entry permit for the destination country",
          "Evidence of transit exemption if claiming exemption",
        ],
        commonMistakes: ["Applying for DATV when landside transit (border crossing) is required for baggage transfer"],
        swiftDocRole: "Itinerary assessment, transit rule verification, and form completion.",
        officialRole: "UKVI evaluates onward transit legitimacy.",
      },
    ],
    supportServices: [
      "Gov.uk visa application account setup & data entry guidance",
      "Financial documentation audit (bank statements, business accounts, investments)",
      "Employment and sponsorship verification letter structuring",
      "IOM Nairobi TB testing appointment guidance",
      "VFS Global Nairobi biometric appointment booking and priority selection",
      "Document scanning, indexing, and digital upload to VFS portal",
      "Pre-submission compliance review against current UKVI policy",
    ],
    requiredDocumentGuidance: [
      "Original passport with at least 6 months validity from intended travel date",
      "Official 6 months bank statements with bank stamp on each page",
      "Letter of employment on company letterhead with salary, role, and leave approval",
      "Detailed itinerary with hotel reservations or host invitation letter",
      "Certified copy of host's British passport or BRP if staying with family/friends",
    ],
    biometricsInterviewInfo:
      "All applicants must attend VFS Global at Parklands/Westlands, Nairobi for digital photograph and fingerprint collection. UKVI may occasionally invite applicants for a credibility interview via video link.",
    commonMistakes: [
      "Lump-sum bank deposits made shortly before application without verifiable origin",
      "Contradictory information between application form answers and supporting letters",
      "Submitting downloaded uncertified internet bank statements",
      "Failing to declare previous travel history or previous entry refusals worldwide",
    ],
    whatSwiftDocHandles: [
      "End-to-end dossier review and requirements checklist customization",
      "Accurate completion of online application forms on official portals",
      "Document structuring, digital uploading and indexing to VFS Global systems",
      "Preparation guidance for submission day and biometric appointment",
    ],
    whatEmbassyDecides: [
      "Granting or refusal of the visa application",
      "Duration, validity, and conditions of the entry clearance",
      "Processing timeline variability and requests for additional documentation",
    ],
    faqs: [
      {
        q: "How far in advance should I apply for a UK visa from Kenya?",
        a: "You can apply up to 3 months before your planned travel date for visitor visas and up to 6 months before for student visas. We recommend beginning your document preparation at least 6–8 weeks in advance.",
      },
      {
        q: "Do I need a Tuberculosis (TB) test for a short-term UK visitor visa?",
        a: "No. TB testing is generally required only for visits exceeding 6 months (such as Student, Skilled Worker, and Settlement visas). Standard visitor visas under 6 months do not require a TB certificate.",
      },
      {
        q: "Can Swift Doc guarantee that my UK visa will be approved?",
        a: "No. Visa decisions are made exclusively by UKVI Entry Clearance Officers. Swift Doc guarantees thorough preparation, compliance checks, and error-free compilation to present your application in the strongest possible manner.",
      },
    ],
    relatedCountries: ["canada", "australia", "united-states", "france", "germany"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },

  // Canada
  {
    slug: "canada",
    name: "Canada",
    code: "CA",
    group: "commonwealth",
    groupLabel: "Commonwealth & High Commission Services",
    missionName: "High Commission of Canada in Kenya / IRCC",
    missionType: "High Commission",
    applicationCenter: "VFS Global Canada Visa Application Centre (CVAC), Nairobi",
    officialAuthority: {
      name: "Immigration, Refugees and Citizenship Canada (IRCC)",
      url: "https://www.canada.ca/en/services/immigration-citizenship.html",
    },
    tagline: "Visitor Visa (TRV), Study Permit, Work Permit & Express Entry Support",
    description:
      "Expert assistance with Canadian immigration and temporary resident applications on the IRCC Portal. We assist with Statement of Purpose drafting, financial ties documentation, and CVAC Nairobi biometric instructions.",
    whoIsItFor:
      "Kenyan travellers, students, skilled workers, and families seeking Temporary Resident Visas (TRV), Canadian Study Permits, work authorizations, or permanent residency consultation.",
    categories: [
      {
        slug: "visitor",
        name: "Temporary Resident Visa (TRV / Visitor Visa)",
        shortDescription: "Tourism, family visits, business meetings, and conference participation in Canada.",
        typicalPurpose: "Short-term travel up to 6 months per entry.",
        estimatedTurnaround: "Subject to IRCC processing queues in Nairobi/online portal.",
        audience: "Tourists, conference delegates, and family members visiting Canadian citizens/residents.",
        keyRequirements: [
          "Valid Kenyan passport",
          "Proof of financial sufficiency (certified bank statements, employment pay slips)",
          "Clear ties to Kenya (property, business registration, family ties, ongoing employment)",
          "Detailed travel itinerary and purpose letter (Statement of Purpose)",
          "Letter of invitation from Canadian host with proof of status (PR/Citizenship) and Notice of Assessment (NOA)",
        ],
        commonMistakes: [
          "Failure to prove strong socio-economic ties to Kenya",
          "Generic purpose letters without clear day-to-day itineraries",
          "Unverifiable financial support letters without actual bank evidence",
        ],
        swiftDocRole: "Statement of Purpose review, proof of ties indexing, IRCC Portal submission, and biometrics booking.",
        officialRole: "IRCC Visa Officers make independent determinations based on the Immigration and Refugee Protection Act (IRPA).",
        featured: true,
      },
      {
        slug: "study",
        name: "Study Permit & Student Direct Support",
        shortDescription: "Post-secondary and higher education studies at Canadian Designated Learning Institutions (DLIs).",
        typicalPurpose: "Academic courses exceeding 6 months at recognized Canadian universities/colleges.",
        estimatedTurnaround: "Varies by season; typically 6–12 weeks.",
        audience: "Students with a Letter of Acceptance (LOA) and Provincial Attestation Letter (PAL) from a DLI.",
        keyRequirements: [
          "Official Letter of Acceptance (LOA) and valid PAL from Canadian DLI",
          "Proof of tuition payment and living expense funds (Guaranteed Investment Certificate GIC or certified sponsor accounts)",
          "Well-structured Study Plan explaining course relevance to career trajectory in Kenya",
          "Academic transcripts, certificates, and IELTS/PTE/TOEFL scores",
          "Police Clearance Certificate and Upfront Medical Exam by approved panel physician",
        ],
        commonMistakes: [
          "Weak Study Plan failing to justify academic progression or return to home country",
          "Inadequate demonstration of funds for subsequent years of study",
        ],
        swiftDocRole: "Study Plan structuring, PAL/LOA validation audit, financial dossier compilation, and IRCC account management.",
        officialRole: "IRCC evaluates student bona fides and admissibility.",
        featured: true,
      },
      {
        slug: "work",
        name: "Work Permit (LMIA & LMIA-Exempt)",
        shortDescription: "Temporary employment in Canada under employer-specific or open work permits.",
        typicalPurpose: "Full-time work under Labour Market Impact Assessment (LMIA) or Global Skills.",
        estimatedTurnaround: "Varies by permit category and global processing streams.",
        audience: "Workers holding an approved LMIA or LMIA-exempt job offer from a Canadian employer.",
        keyRequirements: [
          "Copy of positive LMIA decision or LMIA exemption number",
          "Official job offer letter and employment contract",
          "Proof of professional qualifications, reference letters, and CV",
          "Police certificate and medical examination",
        ],
        commonMistakes: ["Mismatch between applicant work experience letters and Canadian NOC code duties"],
        swiftDocRole: "Credential and employment history verification, portal packaging, and CVAC appointment coordination.",
        officialRole: "IRCC verifies labor market validity and applicant qualification.",
      },
      {
        slug: "permanent-residence",
        name: "Permanent Residence Documentation Support (Express Entry / PNP)",
        shortDescription: "Document readiness for Express Entry, Provincial Nominee Programs (PNP), and family sponsorship.",
        typicalPurpose: "Long-term immigration and settlement in Canada.",
        estimatedTurnaround: "Multi-stage process based on CRS score draws.",
        audience: "Skilled professionals, tradespeople, and nominees invited to apply for Canadian PR.",
        keyRequirements: [
          "Educational Credential Assessment (ECA) report (e.g. WES)",
          "Language test results (IELTS General or CELPIP)",
          "Detailed reference letters matching National Occupational Classification (NOC) requirements",
          "Proof of settlement funds for family size",
          "Police certificates for all countries resided in for over 6 months",
        ],
        commonMistakes: [
          "Reference letters lacking mandatory details (hours, salary, job duties)",
          "Expired language tests or ECA evaluations",
        ],
        swiftDocRole: "ECA guidance, reference letter compliance review, proof of funds verification, and e-APR document auditing.",
        officialRole: "IRCC conducts security, medical, and statutory background assessments.",
      },
      {
        slug: "transit",
        name: "Transit Visa",
        shortDescription: "Transiting through a Canadian airport for under 48 hours.",
        typicalPurpose: "Connecting flights through Canada to a third country.",
        estimatedTurnaround: "~2–4 weeks.",
        audience: "Kenyan passport holders travelling through Canada with no visa exemption.",
        keyRequirements: [
          "Valid passport",
          "Confirmed flight itinerary showing transit under 48 hours",
          "Valid visa for destination country (e.g. USA, Caribbean)",
        ],
        commonMistakes: ["Applying without valid entry permission for destination country"],
        swiftDocRole: "Itinerary review and rapid IRCC submission.",
        officialRole: "IRCC confirms transit eligibility.",
      },
    ],
    supportServices: [
      "IRCC secure portal account creation and profile setup",
      "Statement of Purpose (SOP) and Letter of Explanation structuring",
      "Proof of financial sufficiency and source-of-funds organization",
      "Proof of ties to Kenya dossier compilation",
      "Panel physician medical examination booking guidance",
      "VFS Global CVAC Nairobi biometric scheduling and tracking",
      "Post-submission webform inquiry assistance",
    ],
    requiredDocumentGuidance: [
      "Original Kenyan passport",
      "6 months bank statements with verifiable transaction history",
      "Title deeds, vehicle logbooks, business CR12, or employment contract proving ties to Kenya",
      "Comprehensive Letter of Explanation detailing exact travel plan",
      "Invitation letter and Canadian host status proofs",
    ],
    biometricsInterviewInfo:
      "Biometrics (digital photo and fingerprints) are mandatory and taken at VFS Global CVAC, Nairobi upon receipt of the official Biometric Instruction Letter (BIL) from IRCC. Biometrics remain valid for 10 years.",
    commonMistakes: [
      "Submitting templated or generic Statements of Purpose copied from the internet",
      "Failing to provide evidence for family and financial ties to Kenya",
      "Unexplained bank account spikes immediately prior to application",
    ],
    whatSwiftDocHandles: [
      "Thorough eligibility assessment and customized document checklists",
      "High-level review of explanation letters, travel plans, and financial ties",
      "Accurate IRCC application form completion and digital file packaging",
      "Biometrics appointment booking and submission guidance",
    ],
    whatEmbassyDecides: [
      "Final grant or refusal of Temporary Resident Visas and Study/Work Permits",
      "Validity dates and single vs. multiple entry status",
      "Processing speed and requests for additional documentation",
    ],
    faqs: [
      {
        q: "What is a Statement of Purpose (SOP) for Canada and why is it critical?",
        a: "An SOP is a formal letter explaining who you are, why you are visiting Canada, how you will finance your stay, and why you will return to Kenya before your visa expires. It is one of the most important components of an IRCC application.",
      },
      {
        q: "How long are Canadian biometrics valid?",
        a: "Once completed at a Visa Application Centre, your biometrics are valid for 10 years for subsequent temporary resident applications.",
      },
    ],
    relatedCountries: ["united-kingdom", "united-states", "australia", "germany"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },

  // Australia
  {
    slug: "australia",
    name: "Australia",
    code: "AU",
    group: "commonwealth",
    groupLabel: "Commonwealth & High Commission Services",
    missionName: "Australian High Commission Nairobi / Department of Home Affairs",
    missionType: "High Commission",
    applicationCenter: "Australian Biometric Collection Centre (ABCC) / VFS Global Nairobi",
    officialAuthority: {
      name: "Department of Home Affairs",
      url: "https://immi.homeaffairs.gov.au",
    },
    tagline: "Visitor (Subclass 600), Student (Subclass 500) & Skilled Migration Support",
    description:
      "End-to-end guidance on Australian ImmiAccount applications, Genuine Temporary Entrant / Genuine Student requirement compliance, and ABCC Nairobi biometric appointments.",
    whoIsItFor:
      "Kenyans travelling to Australia for tourism, business visitor activities, university and vocational studies, or skilled migration opportunities.",
    categories: [
      {
        slug: "visitor",
        name: "Visitor Visa (Subclass 600 - Tourist & Business Streams)",
        shortDescription: "Tourism, visiting friends and family, and short-term business visitor activities in Australia.",
        typicalPurpose: "Stays of 3, 6, or 12 months.",
        estimatedTurnaround: "Standard: ~3–6 weeks via ImmiAccount.",
        audience: "Holidaymakers, conference attendees, and family visitors.",
        keyRequirements: [
          "Valid passport",
          "Demonstration of Genuine Temporary Entrant (GTE) intent",
          "Proof of sufficient funds (bank statements, pay slips, tax filings)",
          "Letter of employment, approved leave, or business ownership proofs",
          "Travel itinerary and host invitation details if applicable",
        ],
        commonMistakes: ["Insufficient evidence of intention to return to Kenya at the conclusion of the visit"],
        swiftDocRole: "ImmiAccount compilation, genuine temporary visitor declaration structuring, and document uploading.",
        officialRole: "Department of Home Affairs delegates evaluate applications.",
        featured: true,
      },
      {
        slug: "student",
        name: "Student Visa (Subclass 500)",
        shortDescription: "Full-time study at registered Australian universities, TAFE, and language institutes (CRICOS).",
        typicalPurpose: "Undergraduate, postgraduate, and vocational diploma programs.",
        estimatedTurnaround: "Standard: ~4–8 weeks.",
        audience: "Students enrolled in a CRICOS-registered Australian educational institution.",
        keyRequirements: [
          "Confirmation of Enrolment (CoE) from an Australian education provider",
          "Genuine Student (GS) statement with clear educational and career justifications",
          "Financial capacity evidence covering tuition, living expenses, and travel costs",
          "Overseas Student Health Cover (OSHC)",
          "English language proficiency test (IELTS / PTE Academic / TOEFL iBT)",
        ],
        commonMistakes: ["Submitting generic Genuine Student statements without course-to-career connection"],
        swiftDocRole: "Genuine Student statement guidance, CoE auditing, financial verification, and health insurance coordination.",
        officialRole: "Home Affairs assesses student bona fides and migration risk.",
        featured: true,
      },
      {
        slug: "skilled",
        name: "Skilled & Work Visas (Subclasses 482, 189, 190)",
        shortDescription: "Employer nomination and points-tested skilled migration to Australia.",
        typicalPurpose: "Professional employment and permanent skilled migration.",
        estimatedTurnaround: "Varies significantly by subclass.",
        audience: "Qualified professionals with occupations on the relevant Australian Skilled Occupation List.",
        keyRequirements: [
          "Positive Skills Assessment from relevant assessing authority (e.g. VETASSESS, ACS, Engineers Australia)",
          "Expression of Interest (EOI) in SkillSelect",
          "English language test scores at Competent or Proficient level",
          "Police Clearance Certificates and health assessments",
        ],
        commonMistakes: ["Submitting unverified employment references to assessing authorities"],
        swiftDocRole: "Skills assessment dossier collation, reference letter auditing, and police clearance processing.",
        officialRole: "Home Affairs assesses points qualification and state nominations.",
      },
      {
        slug: "partner",
        name: "Partner & Family Visas (Subclasses 309/100, 300)",
        shortDescription: "Joining an Australian citizen, permanent resident, or eligible NZ citizen partner.",
        typicalPurpose: "Partner migration and prospective marriage.",
        estimatedTurnaround: "Long-term processing queue.",
        audience: "Spouses, de facto partners, and fiancés of Australian citizens/residents.",
        keyRequirements: [
          "Evidence of genuine and continuing relationship across 4 pillars (financial, nature of household, social, commitment)",
          "Sponsor character clearance",
          "Statutory declarations and witness statements (Form 888)",
        ],
        commonMistakes: ["Failing to provide concrete evidence across all four relationship pillars"],
        swiftDocRole: "Relationship evidence compilation, 4-pillar portfolio organization, and ImmiAccount uploading.",
        officialRole: "Home Affairs assesses relationship genuineness.",
      },
      {
        slug: "transit",
        name: "Transit Visa (Subclass 771)",
        shortDescription: "Transit through Australia for up to 72 hours.",
        typicalPurpose: "Connecting flights through Australia to Pacific destinations.",
        estimatedTurnaround: "~2–3 weeks.",
        audience: "Passengers with confirmed onward tickets requiring transit through Australia.",
        keyRequirements: ["Confirmed onward ticket within 72 hours", "Entry permission for final destination country"],
        commonMistakes: ["Applying without valid destination visa"],
        swiftDocRole: "Itinerary verification and application submission.",
        officialRole: "Home Affairs evaluates transit compliance.",
      },
    ],
    supportServices: [
      "ImmiAccount creation and category identification",
      "Genuine Temporary Entrant (GTE) and Genuine Student (GS) declaration drafting guidance",
      "Financial evidence structuring and source-of-funds verification",
      "ABCC Nairobi biometric appointment scheduling",
      "Panel physician health assessment eMedical coordination",
      "Document translation and certification verification",
    ],
    requiredDocumentGuidance: [
      "Valid passport",
      "6 months bank statements with bank certification",
      "Employment verification letter with salary and leave details",
      "Comprehensive statement detailing itinerary and purpose",
      "Invitation letter and Australian host status proof where applicable",
    ],
    biometricsInterviewInfo:
      "Applicants in Kenya must provide biometrics at the Australian Biometric Collection Centre (VFS Global Nairobi) after receiving the official Requirement to Provide Biometrics letter from Home Affairs.",
    commonMistakes: [
      "Failing to detail why the applicant must return to Kenya",
      "Providing uncertified copies of official certificates",
    ],
    whatSwiftDocHandles: [
      "Comprehensive ImmiAccount form preparation and digital upload",
      "Pre-submission compliance auditing against Home Affairs criteria",
      "Biometric and medical appointment logistics",
    ],
    whatEmbassyDecides: [
      "Grant or refusal of Australian visas",
      "Length of stay and visa conditions (such as 'No Further Stay' condition 8503)",
    ],
    faqs: [
      {
        q: "Is the Australian visa label stamped in my passport?",
        a: "No. Australia issues electronic visas (eVisas). Your visa is linked digitally to your passport number in the Australian immigration system.",
      },
    ],
    relatedCountries: ["united-kingdom", "canada", "united-states", "japan"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },

  // India
  {
    slug: "india",
    name: "India",
    code: "IN",
    group: "commonwealth",
    groupLabel: "Commonwealth & High Commission Services",
    missionName: "High Commission of India Nairobi",
    missionType: "High Commission",
    applicationCenter: "VFS Global Indian Visa Application Centre, Nairobi",
    officialAuthority: {
      name: "High Commission of India, Nairobi / Bureau of Immigration",
      url: "https://indianvisaonline.gov.in",
    },
    tagline: "Medical, Business, Tourist, Student & Conference Visa Support",
    description:
      "Professional support for Kenyan patients seeking medical treatment in India, business professionals travelling for trade, students, and tourists.",
    whoIsItFor:
      "Kenyan citizens and residents travelling to India for medical consultations and surgeries, commercial trade, university education, religious tourism, or conferences.",
    categories: [
      {
        slug: "medical",
        name: "Medical Visa (MED & MED X)",
        shortDescription: "Specialised medical treatment, surgical procedures, and accompanying medical attendants.",
        typicalPurpose: "Hospital treatment in accredited Indian medical facilities.",
        estimatedTurnaround: "Standard: ~3–7 working days.",
        audience: "Patients referred to Indian hospitals and their nominated family attendants.",
        keyRequirements: [
          "Valid Kenyan passport with at least 6 months validity",
          "Official medical referral letter from a recognized hospital/doctor in Kenya",
          "Official acceptance letter and cost estimate from an accredited hospital in India",
          "Proof of financial capability to cover treatment and living costs",
          "Yellow fever vaccination certificate",
        ],
        commonMistakes: ["Mismatch between Kenyan doctor referral recommendation and Indian hospital acceptance specialty"],
        swiftDocRole: "Medical letter alignment audit, online visa portal completion, VFS priority booking, and Yellow Fever verification.",
        officialRole: "High Commission of India consular desk grants medical visas.",
        featured: true,
      },
      {
        slug: "business",
        name: "Business Visa (B-Visa)",
        shortDescription: "Commercial trade, purchasing machinery/goods, technical meetings, and business negotiations.",
        typicalPurpose: "Corporate visits, supplier audits, and import/export arrangements.",
        estimatedTurnaround: "Standard: ~5–10 working days.",
        audience: "Kenyan business owners, directors, procurement heads, and traders.",
        keyRequirements: [
          "Formal invitation letter from the host company in India on official letterhead",
          "Letter of introduction from the Kenyan employer or company CR12/Certificate of Incorporation",
          "Proof of financial standing (company bank statements)",
          "Details of business activities and itinerary in India",
        ],
        commonMistakes: ["Omission of Indian company registration/PAN reference in the invitation letter"],
        swiftDocRole: "Business documentation review, invitation letter verification, and consular submission support.",
        officialRole: "Consular officers review commercial legitimacy.",
        featured: true,
      },
      {
        slug: "tourist",
        name: "Tourist Visa (Regular & e-Visa)",
        shortDescription: "Recreation, sightseeing, casual visits to friends and family, and short spiritual retreats.",
        typicalPurpose: "Holiday and personal travel up to 30/90/180 days.",
        estimatedTurnaround: "Regular: ~5–8 days; e-Visa (when applicable): ~72 hours.",
        audience: "Tourists and holidaymakers exploring India.",
        keyRequirements: [
          "Valid passport",
          "Proof of financial standing",
          "Confirmed return flight itinerary and hotel bookings",
          "Recent passport-size photographs matching Indian consular dimensions (2x2 inch, white background)",
        ],
        commonMistakes: ["Submitting incorrect photo dimensions (standard Kenyan passport photos are rejected)"],
        swiftDocRole: "Photo compliance check, online portal filing, and appointment processing.",
        officialRole: "Indian authorities grant tourist clearance.",
      },
      {
        slug: "student",
        name: "Student Visa",
        shortDescription: "Enrolment in recognized Indian universities, colleges, and polytechnics.",
        typicalPurpose: "Higher education courses in engineering, medicine, pharmacy, IT, and humanities.",
        estimatedTurnaround: "~1–3 weeks.",
        audience: "Kenyan students with provisional or firm admission in India.",
        keyRequirements: [
          "Official admission letter from recognized Indian educational institution",
          "Proof of sufficient financial support for tuition and maintenance",
          "Original academic certificates and transcripts",
        ],
        commonMistakes: ["Applying with unaccredited private training institutions"],
        swiftDocRole: "Admission verification, financial sponsor documentation, and submission logistics.",
        officialRole: "High Commission verifies university recognition.",
      },
      {
        slug: "conference",
        name: "Conference Visa",
        shortDescription: "Attending international workshops, seminars, and academic summits organized in India.",
        typicalPurpose: "Official delegate and speaker participation.",
        estimatedTurnaround: "~7–14 days.",
        audience: "Academics, researchers, government delegates, and industry representatives.",
        keyRequirements: [
          "Official invitation from conference organizers in India",
          "Administrative clearances from Ministry of External Affairs (MEA) and Ministry of Home Affairs (MHA) India (obtained by organizers)",
          "Employer deputation letter from Kenya",
        ],
        commonMistakes: ["Applying without the organizer's MEA/MHA nodal clearance letters"],
        swiftDocRole: "Clearance letter audit and prompt consular filing.",
        officialRole: "Indian consular authorities issue conference clearances.",
      },
    ],
    supportServices: [
      "Indian Visa Online portal application filing",
      "Medical referral dossier alignment and hospital invitation verification",
      "Indian consular photo specification formatting (2x2 inch / 51x51mm)",
      "VFS Global India Visa Application Centre appointment booking in Nairobi",
      "Physical document dossier arrangement according to consular order",
      "Yellow Fever card and travel insurance advisory",
    ],
    requiredDocumentGuidance: [
      "Passport valid for at least 6 months with 2 blank pages",
      "Two recent 2x2 inch photographs on a white background",
      "3–6 months bank statements",
      "Relevant referral or invitation letters",
      "Yellow Fever vaccination certificate",
    ],
    biometricsInterviewInfo:
      "Physical submission of passport and biometrics is completed at VFS Global Nairobi. Consular officers at the High Commission may request personal appearance if clarification is required.",
    commonMistakes: [
      "Uploading low-resolution or shadowed photographs",
      "Differences in spelling between passport details and invitation letters",
    ],
    whatSwiftDocHandles: [
      "Correct online form submission on official Government of India portal",
      "Photo re-sizing and dimensional verification",
      "VFS appointment booking and submission checklist coordination",
    ],
    whatEmbassyDecides: [
      "Visa issuance, single vs. multiple entry, and period of validity",
    ],
    faqs: [
      {
        q: "What is the key requirement for a Medical Visa to India?",
        a: "You must have an official referral letter from a Kenyan doctor/hospital and a corresponding acceptance letter from an accredited Indian hospital stating the diagnosis and estimated treatment cost.",
      },
    ],
    relatedCountries: ["south-africa", "united-arab-emirates", "united-kingdom", "china"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },

  // South Africa
  {
    slug: "south-africa",
    name: "South Africa",
    code: "ZA",
    group: "commonwealth",
    groupLabel: "Commonwealth & High Commission Services",
    missionName: "South African High Commission Nairobi",
    missionType: "High Commission",
    applicationCenter: "VFS Global South Africa Visa Application Centre, Nairobi",
    officialAuthority: {
      name: "Department of Home Affairs South Africa",
      url: "http://www.dha.gov.za",
    },
    tagline: "Visitor, Business, Study, Medical & Critical Skills Visa Support",
    description:
      "Complete preparation for South African entry clearance from Kenya. We ensure strict adherence to South African Department of Home Affairs financial thresholds, employer letters, and VFS Nairobi submission standards.",
    whoIsItFor:
      "Kenyan citizens and residents travelling to South Africa for holidays, commercial trade, university study, specialized medical treatment, or temporary employment.",
    categories: [
      {
        slug: "visitor",
        name: "Visitor's Visa (Section 11(1))",
        shortDescription: "Tourism, visiting friends or family, and short holiday stays.",
        typicalPurpose: "Visits up to 90 days.",
        estimatedTurnaround: "Standard: ~10–15 working days after VFS submission.",
        audience: "Holiday travellers and family visitors.",
        keyRequirements: [
          "Valid passport with at least 30 days validity after intended departure and 2 blank pages",
          "3 months bank statements with official bank stamp",
          "Proof of employment and approved leave letter from employer",
          "Confirmed flight itinerary and hotel booking or certified host invitation with proof of SA ID/residence",
          "Yellow fever certificate (if applicable/transiting endemic areas)",
        ],
        commonMistakes: ["Submitting host invitation letters that have not been certified at a South African Police Service (SAPS) station"],
        swiftDocRole: "Bank statement compliance check, invitation letter audit, VFS booking, and document collation.",
        officialRole: "South African High Commission consular officials adjudicate applications.",
        featured: true,
      },
      {
        slug: "business",
        name: "Business Visitor Visa",
        shortDescription: "Attending business meetings, trade events, negotiations, and board conferences.",
        typicalPurpose: "Short-term commercial engagements up to 90 days.",
        estimatedTurnaround: "~10–15 working days.",
        audience: "Business executives, consultants, and trade delegates.",
        keyRequirements: [
          "Formal invitation letter from South African host company with company registration details",
          "Letter of support from Kenyan employer explaining the business mission",
          "Proof of financial responsibility for the trip",
        ],
        commonMistakes: ["Failing to specify the nature of the business and contact details of South African counterparts"],
        swiftDocRole: "Corporate letter formatting audit and VFS dossier submission packaging.",
        officialRole: "Consular officers verify business credentials.",
      },
      {
        slug: "study",
        name: "Study Visa (Section 13)",
        shortDescription: "Pursuing primary, secondary, or tertiary education at recognized South African institutions.",
        typicalPurpose: "Academic studies exceeding 3 months.",
        estimatedTurnaround: "~4–8 weeks.",
        audience: "Students admitted to South African universities and colleges.",
        keyRequirements: [
          "Official Letter of Acceptance from South African learning institution",
          "Proof of medical cover registered with the SA Council for Medical Schemes",
          "Proof of financial sufficiency for tuition and living expenses",
          "Police clearance certificate (Good Conduct) from Kenya",
          "Radiological and medical reports on DHA prescribed forms",
        ],
        commonMistakes: ["Submitting international travel insurance instead of South African registered medical scheme cover"],
        swiftDocRole: "Medical scheme verification, DHA medical report form check, and study permit file compilation.",
        officialRole: "Department of Home Affairs approves study visas.",
      },
      {
        slug: "medical",
        name: "Medical Treatment Visa",
        shortDescription: "Specialised medical consultations and treatment in South African hospitals.",
        typicalPurpose: "Medical treatment exceeding 3 months.",
        estimatedTurnaround: "~2–3 weeks.",
        audience: "Patients receiving treatment in South Africa.",
        keyRequirements: [
          "Letter from Kenyan physician confirming medical necessity",
          "Letter from South African medical institution confirming treatment details and costs",
          "Proof of financial means to settle all medical expenses",
        ],
        commonMistakes: ["Incomplete medical financial guarantees"],
        swiftDocRole: "Medical dossier review and consular submission preparation.",
        officialRole: "Consular authorities issue medical permits.",
      },
      {
        slug: "transit",
        name: "Transit Visa",
        shortDescription: "Transiting through South African airports to neighbouring Southern African nations.",
        typicalPurpose: "Airport transit connections.",
        estimatedTurnaround: "~7–10 working days.",
        audience: "Passengers connecting flights through OR Tambo / Cape Town to third countries.",
        keyRequirements: [
          "Confirmed onward ticket within 24 hours",
          "Entry visa for final destination country",
        ],
        commonMistakes: ["Applying without destination country visa confirmation"],
        swiftDocRole: "Transit route verification and file submission.",
        officialRole: "Home Affairs confirms transit eligibility.",
      },
    ],
    supportServices: [
      "South Africa visa application form (DHA-84 / BI-84) completion",
      "Financial evidence check against South African consular guidelines",
      "SAPS host invitation certification advisory",
      "VFS Global South Africa appointment scheduling in Nairobi",
      "Prescribed DHA Medical and Radiological report forms guidance",
      "Document dossier indexing and submission tracking",
    ],
    requiredDocumentGuidance: [
      "Passport valid for at least 30 days beyond departure from South Africa",
      "3 months certified bank statements",
      "Signed and stamped employer letter on company letterhead",
      "Detailed itinerary and hotel bookings or SAPS-certified host invitation letter",
      "Two passport-size photographs on a white background",
    ],
    biometricsInterviewInfo:
      "All applicants must appear in person at VFS Global Nairobi to submit physical documents and have biometrics captured. The High Commission reserves the right to request personal interviews.",
    commonMistakes: [
      "Unstamped bank statements",
      "Host invitation letters lacking proof of host's South African ID or valid permit",
    ],
    whatSwiftDocHandles: [
      "Form completion, document verification, and VFS booking",
      "Pre-submission compliance review to minimize rejection risk",
    ],
    whatEmbassyDecides: [
      "Issuance of visa, duration of stay, and condition endorsements",
    ],
    faqs: [
      {
        q: "Do Kenyan passport holders require a visa to visit South Africa?",
        a: "Kenyan ordinary passport holders may be eligible for visa-free entry for short holiday stays up to 90 days per calendar year under bilateral agreements, subject to official immigration rules at ports of entry. For stays exceeding this, business engagements, work, study, or special categories, a visa is required.",
      },
    ],
    relatedCountries: ["united-kingdom", "india", "nigeria", "tanzania", "rwanda"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },

  // Nigeria
  {
    slug: "nigeria",
    name: "Nigeria",
    code: "NG",
    group: "commonwealth",
    groupLabel: "Commonwealth & High Commission Services",
    missionName: "Nigeria High Commission Nairobi",
    missionType: "High Commission",
    applicationCenter: "Nigeria High Commission Consular Section, Nairobi / OIS Services",
    officialAuthority: {
      name: "Nigeria Immigration Service (NIS)",
      url: "https://immigration.gov.ng",
    },
    tagline: "Tourist, Business, Subject to Regularization (STR) & Transit Visa Support",
    description:
      "Comprehensive assistance with Nigerian visa applications via the Nigeria Immigration Service (NIS) portal, Letter of Invitation (LoI) compliance, and consular submission in Nairobi.",
    whoIsItFor:
      "Kenyan business executives, contractors, tourists, and expatriates travelling to Lagos, Abuja, Port Harcourt, and other Nigerian states.",
    categories: [
      {
        slug: "business",
        name: "Business Visa (F4A / Single & Multiple Entry)",
        shortDescription: "Commercial meetings, contract negotiations, board meetings, and technical reviews.",
        typicalPurpose: "Short-term business engagements up to 90 days.",
        estimatedTurnaround: "~5–10 working days.",
        audience: "Business professionals, executives, and trade delegates.",
        keyRequirements: [
          "Valid passport with at least 6 months validity",
          "Formal Letter of Invitation from a Nigerian registered company accepting full immigration responsibility",
          "Certificate of Incorporation (CAC) of the host Nigerian company",
          "Letter of introduction from Kenyan employer",
          "Evidence of sufficient funds (bank statements)",
          "Confirmed return flight itinerary and hotel reservation",
        ],
        commonMistakes: ["Submitting host invitation letters without the Nigerian Corporate Affairs Commission (CAC) certificate"],
        swiftDocRole: "CAC and LoI verification, NIS portal data entry, payment processing guidance, and consular dossier compilation.",
        officialRole: "Nigeria High Commission consular desk grants visa entry.",
        featured: true,
      },
      {
        slug: "tourist",
        name: "Tourist / Visitor Visa",
        shortDescription: "Visiting friends, family, cultural festivals, and recreational tourism in Nigeria.",
        typicalPurpose: "Holiday stays up to 90 days.",
        estimatedTurnaround: "~5–10 working days.",
        audience: "Tourists and family visitors.",
        keyRequirements: [
          "Valid passport",
          "Letter of invitation from Nigerian host with host national ID/passport",
          "Proof of accommodation and financial support",
          "Yellow fever vaccination certificate",
        ],
        commonMistakes: ["Failing to attach host identity documents"],
        swiftDocRole: "Portal application and document checklist verification.",
        officialRole: "Immigration officers adjudicate entry.",
      },
      {
        slug: "str",
        name: "Subject to Regularization (STR) / Temporary Work Permit",
        shortDescription: "Employment and specialized expatriate assignments with companies in Nigeria.",
        typicalPurpose: "Long-term employment leading to CERPAC residency.",
        estimatedTurnaround: "~2–4 weeks.",
        audience: "Professionals taking up employment under approved Expatriate Quotas in Nigeria.",
        keyRequirements: [
          "Formal letter of appointment and acceptance of employment",
          "Expatriate Quota Approval from the Nigerian Ministry of Interior",
          "Academic certificates and professional credentials (authenticated)",
          "Police Clearance Certificate (Good Conduct)",
        ],
        commonMistakes: ["Applying without valid Expatriate Quota slots"],
        swiftDocRole: "Expatriate quota audit, credential authentication coordination, and consular file setup.",
        officialRole: "Nigeria Immigration Service approves STR entry.",
      },
      {
        slug: "transit",
        name: "Transit Visa",
        shortDescription: "Transiting through Nigerian international airports.",
        typicalPurpose: "Transit connections under 48 hours.",
        estimatedTurnaround: "~3–5 working days.",
        audience: "Passengers on connecting flights through Lagos or Abuja.",
        keyRequirements: ["Confirmed onward ticket", "Valid visa for destination country"],
        commonMistakes: ["Applying without valid destination visa"],
        swiftDocRole: "Itinerary review and portal submission.",
        officialRole: "Consular staff issue transit permission.",
      },
    ],
    supportServices: [
      "NIS (Nigeria Immigration Service) portal account registration and form completion",
      "Corporate Affairs Commission (CAC) and Letter of Invitation compliance audit",
      "Payment processing and consular receipt generation guidance",
      "Physical dossier submission preparation for the High Commission in Nairobi",
      "Yellow Fever card and health compliance verification",
    ],
    requiredDocumentGuidance: [
      "Valid passport with at least 6 months validity and 2 blank pages",
      "Two passport-size photos with white background",
      "Letter of invitation with CAC certificate",
      "Letter of introduction from Kenyan employer",
      "Certified bank statements",
      "Yellow Fever vaccination certificate",
    ],
    biometricsInterviewInfo:
      "Physical submission and biometrics are conducted at the Nigeria High Commission consular section or authorized centre in Nairobi.",
    commonMistakes: [
      "Unclear corporate letters lacking explicit acceptance of immigration responsibility",
      "Expired Yellow Fever vaccination certificates",
    ],
    whatSwiftDocHandles: [
      "Accurate portal application filing and documentation verification",
      "Host CAC and invitation letter compliance check",
    ],
    whatEmbassyDecides: [
      "Visa issuance, entry type, and duration of stay",
    ],
    faqs: [
      {
        q: "What is the most critical document for a Nigerian Business Visa?",
        a: "A formal Letter of Invitation from the host company in Nigeria accompanied by a clear copy of their Corporate Affairs Commission (CAC) Certificate of Incorporation.",
      },
    ],
    relatedCountries: ["south-africa", "tanzania", "uganda", "rwanda", "united-kingdom"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },

  // Tanzania
  {
    slug: "tanzania",
    name: "Tanzania",
    code: "TZ",
    group: "commonwealth",
    groupLabel: "Commonwealth & High Commission Services",
    missionName: "Tanzania High Commission Nairobi",
    missionType: "High Commission",
    applicationCenter: "Tanzania Immigration e-Visa Portal / High Commission Nairobi",
    officialAuthority: {
      name: "Tanzania Immigration Department",
      url: "https://visa.immigration.go.tz",
    },
    tagline: "Tourist, Business, Transit & Cross-Border Advisory Services",
    description:
      "Expert assistance with Tanzanian electronic visa (e-Visa) applications, business entry permits, cross-border road/air travel documentation, and EAC immigration compliance.",
    whoIsItFor:
      "Kenyan business owners, consultants, technical specialists, foreign residents, and tourists travelling across the Namanga, Isebania, Holili borders or flying into Dar es Salaam, Kilimanjaro, and Zanzibar.",
    categories: [
      {
        slug: "ordinary-tourist",
        name: "Ordinary / Tourist Visa (Non-EAC & Foreign Residents in Kenya)",
        shortDescription: "Holiday, leisure, visiting relatives, and tourism in mainland Tanzania and Zanzibar.",
        typicalPurpose: "Tourism and leisure visits up to 90 days.",
        estimatedTurnaround: "~3–7 working days via e-Visa portal.",
        audience: "Foreign residents living in Kenya and international tourists transiting through Nairobi to Tanzania.",
        keyRequirements: [
          "Valid passport with at least 6 months validity",
          "Return flight ticket or cross-border travel details",
          "Hotel reservation or host invitation",
          "Yellow fever vaccination certificate",
        ],
        commonMistakes: ["Uploading blurry passport bio-data pages or unapproved photo formats"],
        swiftDocRole: "e-Visa portal submission, photo compliance, and border entry requirement advisory.",
        officialRole: "Tanzania Immigration Department approves e-Visas.",
        featured: true,
      },
      {
        slug: "business",
        name: "Business Visa (Short-Term Special Pass / Business Entry)",
        shortDescription: "Conducting temporary business, auditing, machinery maintenance, consulting, and trade meetings.",
        typicalPurpose: "Short-term assignments and commercial business engagements up to 90 days.",
        estimatedTurnaround: "~5–10 working days.",
        audience: "Kenyan and expatriate professionals undertaking short assignments in Tanzania.",
        keyRequirements: [
          "Letter of invitation from the host company registered in Tanzania",
          "Tanzanian Certificate of Incorporation / TIN / Business Licence of host company",
          "Letter of introduction from Kenyan employer detailing assignment purpose",
          "Valid passport and professional credentials",
        ],
        commonMistakes: ["Attempting to conduct commercial or consultancy work on a tourist visa at border points"],
        swiftDocRole: "Business invitation audit, short-term assignment permit verification, and portal filing.",
        officialRole: "Tanzania Immigration assesses business entry eligibility.",
        featured: true,
      },
      {
        slug: "transit",
        name: "Transit Visa",
        shortDescription: "Passing through Tanzania to neighbouring countries (e.g. Zambia, Malawi, Mozambique).",
        typicalPurpose: "Connecting overland or air transit up to 7 days.",
        estimatedTurnaround: "~3–5 working days.",
        audience: "Travellers crossing through Tanzania.",
        keyRequirements: ["Onward ticket or vehicle cross-border documents", "Valid entry visa for destination country"],
        commonMistakes: ["Staying beyond the 7-day transit limit"],
        swiftDocRole: "Itinerary review and application support.",
        officialRole: "Immigration officers issue transit clearance.",
      },
    ],
    supportServices: [
      "Tanzania e-Visa portal application filing and document formatting",
      "Business permit and host company documentation verification",
      "Cross-border COMESA yellow card and vehicle documentation guidance",
      "Yellow Fever health requirement verification",
      "Zanzibar mandatory travel insurance advisory",
    ],
    requiredDocumentGuidance: [
      "Passport valid for at least 6 months",
      "Passport-size photo with blue/light background (as specified on portal)",
      "Return travel itinerary",
      "Relevant host or business invitation documents",
      "Yellow Fever card",
    ],
    biometricsInterviewInfo:
      "Most standard applications are processed online via the official e-Visa portal. Border biometric capture occurs at ports of entry (JKIA, Namanga, Isebania, Dar es Salaam, Zanzibar).",
    commonMistakes: [
      "Failing to declare professional equipment when travelling for business",
      "Omitting required yellow fever vaccination records",
    ],
    whatSwiftDocHandles: [
      "Accurate e-Visa portal entry and file management",
      "Advisory on EAC free movement regulations versus temporary work permits",
    ],
    whatEmbassyDecides: [
      "Approval of e-Visa grant notices and entry conditions",
    ],
    faqs: [
      {
        q: "Do Kenyan citizens require a visa to enter Tanzania for tourism?",
        a: "Kenyan citizens travelling on a Kenyan passport do not require a tourist visa under EAC protocols (valid passport or temporary permit required). However, Kenyan professionals performing paid work, consultancy, or auditing in Tanzania must obtain the appropriate Business Visa / Short-Term Pass.",
      },
    ],
    relatedCountries: ["uganda", "rwanda", "south-africa", "kenya"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },

  // Uganda
  {
    slug: "uganda",
    name: "Uganda",
    code: "UG",
    group: "commonwealth",
    groupLabel: "Commonwealth & High Commission Services",
    missionName: "Uganda High Commission Nairobi",
    missionType: "High Commission",
    applicationCenter: "Uganda Electronic Visa/Permit Application System (DCIC)",
    officialAuthority: {
      name: "Directorate of Citizenship and Immigration Control (DCIC)",
      url: "https://visas.immigration.go.ug",
    },
    tagline: "Tourist, Business, Student, East Africa Tourist Visa & Work Permit Support",
    description:
      "Full assistance with Uganda e-Immigration portal applications, East Africa Tourist Visas (EATV), business entry permits, and student passes.",
    whoIsItFor:
      "Kenyan business people, consultants, foreign residents, students, and international tourists travelling between Nairobi, Entebbe, Kampala, and Jinja.",
    categories: [
      {
        slug: "tourist",
        name: "Uganda Ordinary Tourist Visa (Foreign Residents & International Travellers)",
        shortDescription: "Tourism, visiting friends, and family travel in Uganda.",
        typicalPurpose: "Short-term stays up to 90 days.",
        estimatedTurnaround: "~2–5 working days via e-Immigration portal.",
        audience: "Non-EAC foreign residents living in Kenya and international tourists.",
        keyRequirements: [
          "Valid passport with at least 6 months validity",
          "Recent passport photo",
          "Yellow fever vaccination certificate (mandatory for all travellers to Uganda)",
          "Travel itinerary or return ticket",
        ],
        commonMistakes: ["Failing to upload a valid Yellow Fever certificate (mandatory for application approval)"],
        swiftDocRole: "e-Portal submission, image formatting, and approval letter monitoring.",
        officialRole: "DCIC Kampala issues electronic approval letters.",
        featured: true,
      },
      {
        slug: "east-africa-tourist-visa",
        name: "East Africa Tourist Visa (Uganda First)",
        shortDescription: "Joint tourist visa for multiple entry into Uganda, Kenya, and Rwanda.",
        typicalPurpose: "Multi-country travel across EAC region for 90 days.",
        estimatedTurnaround: "~3–7 working days.",
        audience: "International tourists starting their regional journey in Uganda.",
        keyRequirements: [
          "Valid passport",
          "Travel itinerary covering Uganda, Kenya, and Rwanda",
          "Return ticket and accommodation bookings",
          "Yellow fever certificate",
        ],
        commonMistakes: ["Applying to Uganda when Kenya or Rwanda is the first port of entry"],
        swiftDocRole: "Itinerary routing review and correct issuing country portal application.",
        officialRole: "Issuing EAC member state grants the EATV.",
        featured: true,
      },
      {
        slug: "business",
        name: "Business Entry & Special Pass",
        shortDescription: "Commercial assignments, consulting, installations, and short-term technical projects.",
        typicalPurpose: "Short-term business engagements up to 90 days.",
        estimatedTurnaround: "~3–7 working days.",
        audience: "Business executives, engineers, and consultants.",
        keyRequirements: [
          "Letter of invitation from registered Ugandan host company",
          "Uganda Registration Services Bureau (URSB) certificate of host",
          "Letter of introduction from Kenyan employer",
          "Professional qualifications",
        ],
        commonMistakes: ["Attempting commercial activities without a proper business entry authorization"],
        swiftDocRole: "Corporate letter audit, URSB verification, and DCIC portal filing.",
        officialRole: "DCIC assesses business entry.",
      },
      {
        slug: "student",
        name: "Student Pass",
        shortDescription: "Studies at Makerere University, Kampala International University, and other accredited institutions.",
        typicalPurpose: "Academic studies exceeding 3 months.",
        estimatedTurnaround: "~2–4 weeks.",
        audience: "Students enrolled in Ugandan universities and colleges.",
        keyRequirements: [
          "Admission letter from Ugandan educational institution",
          "Valid passport and academic records",
          "Proof of financial support",
          "Yellow fever certificate and Police Clearance",
        ],
        commonMistakes: ["Applying without official university clearance"],
        swiftDocRole: "Student dossier packaging and submission tracking.",
        officialRole: "DCIC issues student passes.",
      },
    ],
    supportServices: [
      "Uganda e-Immigration system data entry and portal management",
      "Yellow Fever card and health compliance auditing",
      "East Africa Tourist Visa (EATV) routing optimization",
      "Business and Special Pass document preparation",
      "Approval letter verification for airport and border clearance",
    ],
    requiredDocumentGuidance: [
      "Valid passport with at least 6 months validity",
      "Mandatory Yellow Fever vaccination card",
      "Clear passport-size photograph",
      "Relevant host or accommodation documents",
    ],
    biometricsInterviewInfo:
      "Pre-approval is issued online. Final biometric verification and visa sticker stamping take place at Entebbe International Airport or Busia/Malaba border posts.",
    commonMistakes: [
      "Uploading low-resolution or illegible Yellow Fever certificate scans",
    ],
    whatSwiftDocHandles: [
      "Correct online filing and document optimization",
      "Monitoring approval letters from the DCIC portal",
    ],
    whatEmbassyDecides: [
      "Final issuance of entry approval and duration of stay",
    ],
    faqs: [
      {
        q: "Is a Yellow Fever certificate compulsory for entry into Uganda?",
        a: "Yes. Uganda strictly enforces mandatory Yellow Fever vaccination for all incoming travellers. The certificate must be uploaded during online application and presented at ports of entry.",
      },
    ],
    relatedCountries: ["tanzania", "rwanda", "kenya", "south-africa"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },

  // Rwanda
  {
    slug: "rwanda",
    name: "Rwanda",
    code: "RW",
    group: "commonwealth",
    groupLabel: "Commonwealth & High Commission Services",
    missionName: "Rwanda High Commission Nairobi",
    missionType: "High Commission",
    applicationCenter: "Directorate General of Immigration and Emigration (DGIE) / Irembo Portal",
    officialAuthority: {
      name: "Directorate General of Immigration and Emigration (DGIE)",
      url: "https://www.migration.gov.rw",
    },
    tagline: "Tourist, Conference, Business, East Africa Tourist Visa & Transit Support",
    description:
      "Seamless application support for entry clearance, conference visas, East Africa Tourist Visas, and business permits into Kigali and across Rwanda.",
    whoIsItFor:
      "Kenyan business executives, conference delegates attending Kigali Convention Centre events, foreign residents, and international tourists exploring Rwanda.",
    categories: [
      {
        slug: "tourist",
        name: "Tourist Visa (V1 - Holiday & Visit)",
        shortDescription: "Tourism, visiting friends and family, and leisure in Rwanda.",
        typicalPurpose: "Holiday stays up to 30 or 90 days.",
        estimatedTurnaround: "~2–4 working days.",
        audience: "Holidaymakers and foreign residents in Kenya travelling to Rwanda.",
        keyRequirements: [
          "Valid passport with at least 6 months validity",
          "Return flight ticket or entry itinerary",
          "Hotel reservation or host invitation letter",
          "Recent passport photo",
        ],
        commonMistakes: ["Applying on unverified third-party websites instead of official channels"],
        swiftDocRole: "Portal application verification and entry requirement check.",
        officialRole: "DGIE Kigali issues entry clearance.",
        featured: true,
      },
      {
        slug: "conference",
        name: "Conference Visa (V11 - Meetings, Incentives, Conferences, Exhibitions)",
        shortDescription: "Attending international summits, conferences, and expos in Kigali.",
        typicalPurpose: "Event delegate and speaker participation.",
        estimatedTurnaround: "~2–4 working days.",
        audience: "Conference delegates, speakers, and exhibitors.",
        keyRequirements: [
          "Official invitation or accreditation letter from the conference organizer in Rwanda",
          "Valid passport",
          "Confirmed flight details and accommodation",
        ],
        commonMistakes: ["Submitting personal letters instead of official event organizer accreditation"],
        swiftDocRole: "Conference accreditation audit and expedited filing support.",
        officialRole: "DGIE approves conference entry.",
        featured: true,
      },
      {
        slug: "business",
        name: "Business Visa (V8 - Prospecting Business / Investment)",
        shortDescription: "Exploring investment opportunities, trade partnerships, and corporate meetings in Rwanda.",
        typicalPurpose: "Short-term business engagements up to 90 days.",
        estimatedTurnaround: "~3–5 working days.",
        audience: "Investors, entrepreneurs, and company representatives.",
        keyRequirements: [
          "Letter of introduction from employer in Kenya",
          "Invitation letter from Rwandan host or Rwanda Development Board (RDB) reference",
          "Valid passport and business credentials",
        ],
        commonMistakes: ["Failing to attach RDB or host company details"],
        swiftDocRole: "Business documentation review and portal submission.",
        officialRole: "DGIE evaluates commercial purposes.",
      },
      {
        slug: "transit",
        name: "Transit Visa (V2)",
        shortDescription: "Transiting through Kigali International Airport or overland to DRC/Burundi.",
        typicalPurpose: "Transit up to 72 hours.",
        estimatedTurnaround: "~1–3 working days.",
        audience: "Travellers connecting through Rwanda.",
        keyRequirements: ["Confirmed onward ticket", "Valid entry permission for destination country"],
        commonMistakes: ["Transit time exceeding 72 hours"],
        swiftDocRole: "Itinerary review and filing.",
        officialRole: "DGIE issues transit permits.",
      },
    ],
    supportServices: [
      "Irembo and DGIE portal application management",
      "Conference and MICE delegate accreditation verification",
      "East Africa Tourist Visa (EATV - Rwanda First) coordination",
      "Business and investor entry advisory in partnership with RDB guidelines",
    ],
    requiredDocumentGuidance: [
      "Passport valid for at least 6 months",
      "Passport-size photo with white background",
      "Relevant invitation or conference registration letter",
      "Flight and hotel reservations",
    ],
    biometricsInterviewInfo:
      "Biometric capture and visa endorsements take place at Kigali International Airport or border posts upon arrival.",
    commonMistakes: [
      "Confusion between EAC citizen free movement and foreign national visa requirements",
    ],
    whatSwiftDocHandles: [
      "Online visa application processing and verification",
      "Compliance audit against official Rwandan immigration rules",
    ],
    whatEmbassyDecides: [
      "Entry authorization and stay duration",
    ],
    faqs: [
      {
        q: "Do Kenyan citizens require a visa to visit Rwanda?",
        a: "No. Kenyan citizens can travel to Rwanda visa-free using a valid Kenyan passport or Kenyan National ID card under EAC bilateral agreements. Foreign residents living in Kenya require a visa or e-Visa.",
      },
    ],
    relatedCountries: ["uganda", "tanzania", "kenya", "south-africa"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },

  // -------------------------------------------------------------
  // GROUP B: OTHER INTERNATIONAL VISA SERVICES
  // -------------------------------------------------------------
  {
    slug: "united-states",
    name: "United States",
    code: "US",
    group: "international",
    groupLabel: "Other International Visa Services",
    missionName: "Embassy of the United States, Nairobi",
    missionType: "Embassy",
    applicationCenter: "Consular Section, U.S. Embassy Nairobi (Gigiri) / Official Appointment Portal",
    officialAuthority: {
      name: "U.S. Department of State - Bureau of Consular Affairs",
      url: "https://travel.state.gov",
    },
    tagline: "B1/B2 Visitor, F1 Student, H1B/Work & J1 Exchange Visa Preparation",
    description:
      "Meticulous DS-160 online application form assistance, MRV fee payment guidance, interview scheduling at the Gigiri Embassy, and comprehensive Section 214(b) ties-to-Kenya interview coaching.",
    whoIsItFor:
      "Kenyan citizens and residents applying for non-immigrant visas to the United States for business, tourism, medical care, university studies, exchange programs, or specialized employment.",
    categories: [
      {
        slug: "b1-b2",
        name: "B1/B2 Visitor Visa (Business & Tourism)",
        shortDescription: "Tourism, visiting family, business meetings, medical care, and professional conferences in the US.",
        typicalPurpose: "Temporary visits up to 6 months per entry.",
        estimatedTurnaround: "Appointment wait times vary based on U.S. Embassy consular capacity.",
        audience: "Holiday travellers, business executives, conference attendees, and family visitors.",
        keyRequirements: [
          "Accurately completed Form DS-160 confirmation barcode",
          "Valid Kenyan passport with at least 6 months validity beyond intended stay",
          "MRV visa fee receipt",
          "Appointment confirmation letter",
          "Evidence of strong economic, familial, and social ties to Kenya (Section 214(b) compliance)",
          "51x51mm (2x2 inch) passport photograph meeting strict U.S. State Department specifications",
        ],
        commonMistakes: [
          "Inaccuracies or incomplete employment/education history on Form DS-160",
          "Failing to adequately prepare for the brief in-person consular interview",
          "Bringing unauthorized electronic devices or large bags to the Gigiri Embassy",
          "Relying on generic invitation letters rather than personal economic ties",
        ],
        swiftDocRole: "DS-160 line-by-line preparation, MRV fee payment guidance, interview calendar monitoring, and mock interview briefing.",
        officialRole: "U.S. Consular Officers make independent determinations under the Immigration and Nationality Act (INA).",
        featured: true,
      },
      {
        slug: "student",
        name: "F1 / M1 Academic & Vocational Student Visa",
        shortDescription: "Undergraduate, graduate, doctoral, and vocational degree programs at accredited US institutions.",
        typicalPurpose: "Full-time academic study at SEVP-certified schools.",
        estimatedTurnaround: "Expedited student appointment slots subject to consular availability.",
        audience: "Students admitted to U.S. colleges/universities with an official Form I-20.",
        keyRequirements: [
          "Official Form I-20 issued by SEVP-certified U.S. institution",
          "I-901 SEVIS fee receipt",
          "Form DS-160 confirmation and MRV fee payment",
          "Evidence of sufficient liquid funds covering at least the first year of tuition and living expenses",
          "Academic transcripts, standardized test scores (SAT/GRE/GMAT/TOEFL/IELTS), and high school certificates",
        ],
        commonMistakes: [
          "Unconvincing explanation of university choice and future career plans in Kenya",
          "Inability to explain the source of sponsor funds during the interview",
        ],
        swiftDocRole: "I-20 validation, SEVIS I-901 fee payment assistance, DS-160 compilation, and student interview preparation.",
        officialRole: "Consular officers evaluate academic credibility and intent to return.",
        featured: true,
      },
      {
        slug: "work",
        name: "H-1B, L-1, O-1 & Temporary Work Visas",
        shortDescription: "Speciality occupations, intra-company transferees, and extraordinary ability employment in the US.",
        typicalPurpose: "Temporary professional employment under an approved USCIS petition.",
        estimatedTurnaround: "Based on petition approval and interview appointment availability.",
        audience: "Professionals with an approved Form I-797 Notice of Action from USCIS.",
        keyRequirements: [
          "Form I-797 Notice of Action approval receipt number",
          "Complete petition copy filed by U.S. employer",
          "DS-160 form confirmation and MRV fee receipt",
          "Original degree certificates and professional CV",
        ],
        commonMistakes: ["Mismatch between DS-160 entries and USCIS I-129 petition records"],
        swiftDocRole: "Petition consistency audit, DS-160 filing, and consular interview scheduling.",
        officialRole: "Consular officers verify USCIS petition authenticity.",
      },
      {
        slug: "exchange",
        name: "J-1 Exchange Visitor Visa",
        shortDescription: "Fulbright scholars, research fellows, trainees, interns, and au pairs.",
        typicalPurpose: "Cultural and educational exchange programs.",
        estimatedTurnaround: "Subject to program start date and interview availability.",
        audience: "Participants in approved U.S. exchange visitor programs holding Form DS-2019.",
        keyRequirements: [
          "Form DS-2019 (Certificate of Eligibility for Exchange Visitor Status)",
          "I-901 SEVIS fee payment receipt",
          "Form DS-160 and MRV fee confirmation",
          "Proof of English proficiency and financial support",
        ],
        commonMistakes: ["Failing to understand the 2-year home-country physical presence requirement (Section 212(e))"],
        swiftDocRole: "DS-2019 review, SEVIS payment assistance, DS-160 completion, and interview briefing.",
        officialRole: "Consular officers determine program eligibility.",
      },
    ],
    supportServices: [
      "Comprehensive Form DS-160 preparation and review",
      "MRV visa application fee payment facilitation guidance",
      "U.S. Embassy appointment scheduling and calendar monitoring",
      "I-901 SEVIS fee payment for F-1 and J-1 applicants",
      "Section 214(b) interview readiness and question briefing",
      "2x2 inch (51x51mm) photo compliance check against State Department standards",
      "Document portfolio arrangement for interview day at Gigiri",
    ],
    requiredDocumentGuidance: [
      "Valid passport with at least 6 months validity beyond travel date",
      "DS-160 confirmation page with clear barcode",
      "Official appointment confirmation printout",
      "One 2x2 inch printed color photo on white background (no eyeglasses allowed)",
      "Financial evidence (bank statements, pay slips, business ownership records)",
      "Proof of employment, property ownership, and family ties in Kenya",
    ],
    biometricsInterviewInfo:
      "All non-immigrant visa applicants between ages 14 and 79 must appear in person for an interview and ten-print digital fingerprint collection at the U.S. Embassy in Gigiri, Nairobi.",
    commonMistakes: [
      "Providing inconsistent information between the DS-160 and verbal interview answers",
      "Failing to articulate ties to Kenya during the brief 2–3 minute interview",
      "Wearing eyeglasses in the visa photograph (prohibited under US rules)",
    ],
    whatSwiftDocHandles: [
      "Flawless DS-160 form drafting and error elimination",
      "Appointment booking management on the official consular scheduling system",
      "Detailed interview preparation strategy based on Section 214(b) guidelines",
    ],
    whatEmbassyDecides: [
      "Sole legal authority to approve or refuse visas under the U.S. Immigration and Nationality Act",
      "Issuance of 221(g) administrative processing requests if required",
    ],
    faqs: [
      {
        q: "What is Section 214(b) of the U.S. Immigration and Nationality Act?",
        a: "Under U.S. law, every applicant for a B1/B2 visitor visa is presumed to have immigrant intent until they convince the consular officer during the interview that they have strong, compelling ties (employment, property, family) that will force them to return home after their visit.",
      },
      {
        q: "Are eyeglasses allowed in U.S. visa photos?",
        a: "No. Eyeglasses are strictly prohibited in U.S. visa photos. Photos with glasses will cause your application to be rejected on interview day.",
      },
    ],
    relatedCountries: ["united-kingdom", "canada", "australia", "germany", "france"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },

  // France
  {
    slug: "france",
    name: "France",
    code: "FR",
    group: "international",
    groupLabel: "Other International Visa Services",
    missionName: "Embassy of France in Kenya",
    missionType: "Embassy",
    applicationCenter: "TLScontact Visa Application Centre, Nairobi",
    officialAuthority: {
      name: "France-Visas / Ministry of the Interior",
      url: "https://france-visas.gouv.fr",
    },
    tagline: "Schengen Short-Stay (Type C), Long-Stay (Type D) & Student Visa Support",
    description:
      "Complete preparation for France-Visas online declarations, Schengen insurance compliance, financial dossier structuring, and TLScontact Nairobi biometric appointments.",
    whoIsItFor:
      "Kenyan citizens and residents travelling to Paris, French regions, or French overseas territories for tourism, trade fairs, business, university education, or family visits.",
    categories: [
      {
        slug: "schengen",
        name: "Short-Stay Schengen Visa (Type C - Tourism & Business)",
        shortDescription: "Travel to France and unrestricted travel across all 29 Schengen member states.",
        typicalPurpose: "Tourism, business meetings, trade expos, and family visits up to 90 days in any 180-day period.",
        estimatedTurnaround: "Standard: ~15 calendar days after TLScontact appointment.",
        audience: "Holidaymakers, corporate delegates attending trade expos, and family visitors.",
        keyRequirements: [
          "France-Visas completed application form and receipt",
          "Valid passport with at least 3 months validity beyond departure from Schengen area",
          "Schengen travel medical insurance covering minimum €30,000 including medical repatriation",
          "Proof of financial sufficiency (certified 3–6 months bank statements, pay slips)",
          "Flight reservations (round-trip) and confirmed hotel bookings or Attestation d'Accueil (host certificate)",
          "Letter of employment and leave approval or business registration (CR12)",
        ],
        commonMistakes: [
          "Submitting insurance with sub-limits or less than €30,000 emergency coverage",
          "Applying to France when France is not the main destination (Schengen country of longest stay)",
          "Submitting an invitation from a French private host without the official Mairie-certified 'Attestation d'Accueil'",
        ],
        swiftDocRole: "France-Visas form completion, Schengen insurance verification, main destination audit, and TLScontact booking.",
        officialRole: "French Embassy Consular Section adjudicates Schengen visa eligibility.",
        featured: true,
      },
      {
        slug: "student",
        name: "Long-Stay Student Visa (Type D - VLS-TS)",
        shortDescription: "Degree and master's programs at French universities and Grandes Écoles.",
        typicalPurpose: "Higher education studies exceeding 90 days.",
        estimatedTurnaround: "~3–6 weeks.",
        audience: "Students holding acceptance letters from French higher education institutions.",
        keyRequirements: [
          "Campus France Kenya (Etudes en France) authentication certificate",
          "Official admission letter from French educational institution",
          "Proof of financial resources (minimum €615/month or equivalent bank guarantee)",
          "Proof of accommodation in France for at least the first 3 months",
        ],
        commonMistakes: ["Applying at TLScontact before completing the mandatory Campus France interview process"],
        swiftDocRole: "Campus France file alignment, financial guarantee structuring, and TLS file collation.",
        officialRole: "French consular authorities issue Long-Stay VLS-TS visas.",
        featured: true,
      },
      {
        slug: "business",
        name: "Business & Professional Mission",
        shortDescription: "Attending trade fairs (e.g. SIAL, Paris Air Show), corporate meetings, and technical partnerships.",
        typicalPurpose: "Commercial missions up to 90 days.",
        estimatedTurnaround: "~15 calendar days.",
        audience: "Business executives, trade delegates, and technical professionals.",
        keyRequirements: [
          "Formal invitation letter from host company in France",
          "Employer letter of guarantee from Kenya",
          "Trade fair badge or exhibitor confirmation",
        ],
        commonMistakes: ["Failing to demonstrate clear commercial links between Kenyan and French entities"],
        swiftDocRole: "Commercial invitation audit and TLS submission preparation.",
        officialRole: "Consular officers review business bona fides.",
      },
    ],
    supportServices: [
      "France-Visas official portal registration and form generation",
      "Schengen-compliant travel insurance verification (€30,000 minimum)",
      "Main destination rule audit across multi-country Schengen itineraries",
      "TLScontact Nairobi appointment booking and document scanning guidance",
      "Attestation d'Accueil host requirement verification",
      "Pre-submission quality audit against French consular requirements",
    ],
    requiredDocumentGuidance: [
      "Valid passport issued within the last 10 years with 2 blank pages",
      "Two recent passport photos meeting ICAO/Schengen standards (35x45mm, grey/light blue background)",
      "Completed and signed France-Visas form and submission receipt",
      "Schengen travel insurance certificate covering all 29 member states",
      "3–6 months certified bank statements",
      "Confirmed flight booking and accommodation evidence",
    ],
    biometricsInterviewInfo:
      "All applicants must attend TLScontact Nairobi for biometric capture (photo and fingerprints). Biometrics remain valid in the European Visa Information System (VIS) for 59 months.",
    commonMistakes: [
      "Violating the Schengen 'Main Destination' rule by applying at the French Embassy when more days are spent in another member state",
      "Unverified hotel booking cancellations prior to visa decision",
    ],
    whatSwiftDocHandles: [
      "Accurate compilation of the France-Visas dossier",
      "Ensuring all financial and itinerary evidence complies with the Schengen Visa Code",
    ],
    whatEmbassyDecides: [
      "Granting of Schengen entry, single/multiple entry status, and duration of stay",
    ],
    faqs: [
      {
        q: "What is the Schengen 'Main Destination' rule?",
        a: "Under the Schengen Visa Code, you must apply at the embassy of the country that constitutes your main destination in terms of length or purpose of stay. If visiting multiple countries equally, you apply at the country of first entry.",
      },
    ],
    relatedCountries: ["germany", "belgium", "czech-republic", "united-kingdom", "united-states"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },

  // Germany
  {
    slug: "germany",
    name: "Germany",
    code: "DE",
    group: "international",
    groupLabel: "Other International Visa Services",
    missionName: "Embassy of the Federal Republic of Germany, Nairobi",
    missionType: "Embassy",
    applicationCenter: "TLScontact Visa Application Centre, Nairobi / German Embassy Consular Section",
    officialAuthority: {
      name: "Federal Foreign Office (Auswärtiges Amt)",
      url: "https://www.auswaertiges-amt.de",
    },
    tagline: "Schengen C, National D (Student, Work, Ausbildung & Opportunity Card)",
    description:
      "Precision document preparation for German Schengen visas (Type C), National long-stay visas (Type D), Blocked Account (Sperrkonto) verifications, and Opportunity Card (Chancenkarte) files.",
    whoIsItFor:
      "Kenyans travelling to Germany for trade fairs, tourism, university study, vocational training (Ausbildung), Opportunity Card job seeking, or family reunion.",
    categories: [
      {
        slug: "schengen",
        name: "Schengen Visa (Type C - Trade Fair, Business & Tourism)",
        shortDescription: "Short-term travel to Germany and across the Schengen zone.",
        typicalPurpose: "Trade fairs (Messe), business negotiations, conferences, and tourism up to 90 days.",
        estimatedTurnaround: "~15 calendar days after biometric submission.",
        audience: "Trade fair exhibitors, business professionals, and holidaymakers.",
        keyRequirements: [
          "VIDEX online application form printout with barcodes",
          "Valid passport with at least 3 months validity beyond Schengen departure",
          "Compliant Schengen health insurance (€30,000 cover, no deductible)",
          "Trade fair pass / exhibitor badge or German business partner invitation",
          "Certified 3 months personal/company bank statements",
          "Proof of employment, leave authorization, and ties to Kenya",
        ],
        commonMistakes: ["Submitting VIDEX forms with barcode clipping or invalid photo formatting"],
        swiftDocRole: "VIDEX portal completion, trade fair credential audit, and TLS booking.",
        officialRole: "German Embassy visa section evaluates applications.",
        featured: true,
      },
      {
        slug: "student",
        name: "National Visa for University Studies (Type D)",
        shortDescription: "Undergraduate, postgraduate, and preparatory college (Studienkolleg) studies.",
        typicalPurpose: "Long-term higher education in Germany.",
        estimatedTurnaround: "~4–8 weeks.",
        audience: "Students holding admission from a German university.",
        keyRequirements: [
          "Admission letter (Zulassungsbescheid) or conditional admission from German university",
          "Proof of financial resources (Blocked Account 'Sperrkonto' with prescribed monthly funds or official Verpflichtungserklärung)",
          "Certified academic certificates and transcripts (KCSE, Bachelor's degree)",
          "Proof of German or English language proficiency as required by course",
          "Letter of Motivation explaining study goals and career plan",
        ],
        commonMistakes: ["Insufficient funds deposited in the German Blocked Account"],
        swiftDocRole: "Blocked Account guidance, Motivation Letter structuring, and National Visa appointment preparation.",
        officialRole: "German Embassy and relevant local immigration authority (Ausländerbehörde) approve National Visas.",
        featured: true,
      },
      {
        slug: "work",
        name: "Opportunity Card (Chancenkarte) & Skilled Work Visa",
        shortDescription: "Points-based job search in Germany and employment under skilled worker provisions.",
        typicalPurpose: "Job seeking up to 1 year or immediate employment.",
        estimatedTurnaround: "~6–10 weeks.",
        audience: "Qualified professionals meeting points criteria (qualifications, German/English skills, experience, age).",
        keyRequirements: [
          "Recognized foreign professional or academic qualification (Anabin / ZAB evaluation)",
          "Opportunity Card points scorecard proof",
          "Proof of living expense funds (Blocked Account)",
          "Language certificates (German A1–B2 or English B2)",
        ],
        commonMistakes: ["Submitting qualifications not verified on the Anabin database or via ZAB"],
        swiftDocRole: "Points assessment pre-audit, ZAB/Anabin verification assistance, and dossier assembly.",
        officialRole: "Federal Foreign Office and Federal Employment Agency (BA) determine eligibility.",
      },
      {
        slug: "family-reunion",
        name: "Family Reunion Visa (Ehegattennachzug)",
        shortDescription: "Joining a spouse or parent residing in Germany.",
        typicalPurpose: "Long-term settlement with family members in Germany.",
        estimatedTurnaround: "~8–16 weeks.",
        audience: "Spouses and minor children of German citizens or foreign residents in Germany.",
        keyRequirements: [
          "Original certified marriage certificate (with verification procedure if requested)",
          "Goethe-Institut German A1 language certificate (for spouse)",
          "Proof of living space and income of sponsor in Germany",
        ],
        commonMistakes: ["Failing to present authentic certified civil status records"],
        swiftDocRole: "Civil status document legalisation coordination, A1 proof audit, and file packaging.",
        officialRole: "Ausländerbehörde in Germany approves family reunion.",
      },
    ],
    supportServices: [
      "VIDEX online form completion and barcode optimization",
      "Blocked Account (Sperrkonto) opening and funding guidance",
      "Anabin database qualification recognition verification",
      "Motivation Letter review for student and Opportunity Card applicants",
      "TLScontact and German Embassy appointment scheduling",
      "Schengen insurance compliance auditing",
    ],
    requiredDocumentGuidance: [
      "Passport valid for at least 3 months after Schengen departure with 2 blank pages",
      "Biometric photos matching German specifications (35x45mm, neutral expression)",
      "Printed VIDEX forms with clear barcodes",
      "3 months certified bank statements",
      "Proof of accommodation, flights, and comprehensive insurance",
    ],
    biometricsInterviewInfo:
      "Schengen visas are submitted via TLScontact Nairobi. National visas (Type D) are submitted in person at the German Embassy Consular Section on Riverside Drive, Nairobi with an interview.",
    commonMistakes: [
      "Failing to provide a clear, individualized motivation letter for National Visa applications",
      "Presenting uncertified copies of academic credentials",
    ],
    whatSwiftDocHandles: [
      "VIDEX application accuracy and barcode integrity",
      "Checklist collation according to German Embassy information sheets (Merkblätter)",
    ],
    whatEmbassyDecides: [
      "Grant or refusal of visas and authorization of stay",
    ],
    faqs: [
      {
        q: "What is a German Blocked Account (Sperrkonto)?",
        a: "A Blocked Account is a special bank account in Germany where international students and job seekers deposit required living funds. A fixed monthly amount is released once in Germany to prove financial independence.",
      },
    ],
    relatedCountries: ["france", "belgium", "czech-republic", "united-kingdom", "united-states"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },

  // Belgium
  {
    slug: "belgium",
    name: "Belgium",
    code: "BE",
    group: "international",
    groupLabel: "Other International Visa Services",
    missionName: "Embassy of Belgium in Nairobi",
    missionType: "Embassy",
    applicationCenter: "TLScontact Visa Application Centre, Nairobi",
    officialAuthority: {
      name: "FPS Foreign Affairs / Immigration Office (Doz)",
      url: "https://dofi.ibz.be",
    },
    tagline: "Schengen Short-Stay (Type C) & Long-Stay D (Study, Work, Family)",
    description:
      "Comprehensive assistance for Belgian Schengen visas, EU/diplomatic mission visits to Brussels, higher education study permits, and family reunification files.",
    whoIsItFor:
      "Kenyan business executives, delegates visiting EU/ACP institutions in Brussels, university students, and tourists.",
    categories: [
      {
        slug: "schengen",
        name: "Schengen Visa (Type C - Business, EU Mission & Tourism)",
        shortDescription: "Short-term entry to Belgium and the Schengen area.",
        typicalPurpose: "Institutional meetings in Brussels, trade, conferences, and holiday visits up to 90 days.",
        estimatedTurnaround: "~15 calendar days.",
        audience: "Diplomatic delegates, business professionals, and tourists.",
        keyRequirements: [
          "Visa On Web (VOW) online application form",
          "Valid passport with at least 3 months validity beyond Schengen departure",
          "Schengen travel insurance (€30,000 cover)",
          "Official invitation from Belgian host company / international institution in Brussels",
          "Proof of sufficient financial means (€45/day if hosted, €95/day in hotel)",
          "Proof of employment and ties to Kenya",
        ],
        commonMistakes: ["Failing to demonstrate the specific financial thresholds established by Belgian immigration"],
        swiftDocRole: "Visa On Web form completion, institution letter review, and TLS booking.",
        officialRole: "Belgian Immigration Office (Office des Étrangers) determines visa grants.",
        featured: true,
      },
      {
        slug: "student",
        name: "Long-Stay Student Visa (Type D)",
        shortDescription: "Studies at KU Leuven, Ghent University, ULB, and other Belgian universities.",
        typicalPurpose: "Higher education exceeding 90 days.",
        estimatedTurnaround: "~4–8 weeks.",
        audience: "Students enrolled in Belgian higher education institutions.",
        keyRequirements: [
          "Certificate of registration or admission from Belgian university",
          "Proof of solvency (Annex 32 financial sponsorship commitment or blocked account)",
          "Medical certificate from Embassy-designated physician",
          "Police Clearance Certificate authenticated by MFA Kenya",
        ],
        commonMistakes: ["Annex 32 sponsor lacking required income proof under Belgian law"],
        swiftDocRole: "Annex 32 audit, medical appointment coordination, and file submission.",
        officialRole: "Belgian Immigration Office in Brussels approves student files.",
      },
    ],
    supportServices: [
      "Visa On Web (VOW) portal completion",
      "Schengen insurance verification",
      "Annex 32 financial commitment guidance",
      "TLScontact Nairobi appointment coordination",
      "Document legalisation and apostille support",
    ],
    requiredDocumentGuidance: [
      "Passport valid for at least 3 months after Schengen exit",
      "Two passport photos meeting Schengen criteria",
      "3 months certified bank statements",
      "Confirmed return flights and accommodation",
      "Formal invitation letters",
    ],
    biometricsInterviewInfo:
      "Biometric collection is conducted at TLScontact Nairobi for short and long-stay visas.",
    commonMistakes: [
      "Insufficient evidence of accommodation in Brussels or other Belgian cities",
    ],
    whatSwiftDocHandles: [
      "Portal accuracy and dossier arrangement according to Belgian consular checklist",
    ],
    whatEmbassyDecides: [
      "Visa grant and duration of stay",
    ],
    faqs: [
      {
        q: "How long does a Belgian student visa take to process?",
        a: "Student visas requiring referral to the Immigration Office in Brussels typically take 4–8 weeks. We advise starting preparation immediately upon receiving university admission.",
      },
    ],
    relatedCountries: ["france", "germany", "czech-republic", "united-kingdom"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },

  // Czech Republic
  {
    slug: "czech-republic",
    name: "Czech Republic",
    code: "CZ",
    group: "international",
    groupLabel: "Other International Visa Services",
    missionName: "Embassy of the Czech Republic in Nairobi",
    missionType: "Embassy",
    applicationCenter: "VFS Global Visa Application Centre, Nairobi / Czech Embassy",
    officialAuthority: {
      name: "Ministry of Foreign Affairs / Ministry of the Interior",
      url: "https://mzv.gov.cz/nairobi",
    },
    tagline: "Schengen C (Prague Tourism & Business) & Long-Stay D / Employee Card Support",
    description:
      "Dedicated document preparation for Czech Schengen visas, university studies in Prague/Brno, and Employee Card employment applications.",
    whoIsItFor:
      "Kenyan tourists visiting Prague and Central Europe, business delegates, and students attending Czech universities.",
    categories: [
      {
        slug: "schengen",
        name: "Schengen Visa (Type C - Tourism, Business, Culture)",
        shortDescription: "Short-term travel to the Czech Republic and the Schengen area.",
        typicalPurpose: "Tourism, commercial meetings, and cultural visits up to 90 days.",
        estimatedTurnaround: "~15 calendar days.",
        audience: "Holidaymakers and business delegates.",
        keyRequirements: [
          "Completed Schengen visa application form",
          "Valid passport with at least 3 months validity beyond Schengen departure",
          "Schengen travel insurance (€30,000 minimum)",
          "Proof of accommodation and flight reservation",
          "Certified bank statements for the past 3 months",
          "Employer letter and proof of ties to Kenya",
        ],
        commonMistakes: ["Failing to provide verified hotel bookings across the full itinerary"],
        swiftDocRole: "Form filing, itinerary check, and VFS booking.",
        officialRole: "Czech Embassy Consular Section adjudicates applications.",
        featured: true,
      },
      {
        slug: "long-term",
        name: "Long-Term Visa & Employee Card (Type D)",
        shortDescription: "University studies and specialized employment in the Czech Republic.",
        typicalPurpose: "Stays exceeding 90 days.",
        estimatedTurnaround: "~60–90 days.",
        audience: "Students and workers with Czech job contracts.",
        keyRequirements: [
          "Proof of purpose (university acceptance or employment contract)",
          "Proof of accommodation in the Czech Republic verified by landlord",
          "Proof of funds in personal bank account",
          "Police Clearance Certificate translated into Czech and superlegalized",
        ],
        commonMistakes: ["Submitting police clearances without required Czech official translation and superlegalization"],
        swiftDocRole: "Superlegalization coordination, translation assistance, and embassy appointment booking.",
        officialRole: "Ministry of the Interior (OAMP) in Prague makes final determinations.",
      },
    ],
    supportServices: [
      "Schengen application form completion",
      "Superlegalization and document legalisation guidance",
      "VFS Global / Czech Embassy appointment scheduling",
      "Schengen travel insurance verification",
    ],
    requiredDocumentGuidance: [
      "Passport valid for at least 3 months past Schengen exit",
      "Two passport photos",
      "3 months certified bank statements",
      "Confirmed flight itinerary and hotel bookings",
    ],
    biometricsInterviewInfo:
      "Short-stay visas are submitted at VFS Global Nairobi. Long-term visas and Employee Cards require personal appearance at the Czech Embassy on Tende Drive, Lavington, Nairobi.",
    commonMistakes: [
      "Unverified travel insurance policies lacking repatriation coverage",
    ],
    whatSwiftDocHandles: [
      "Document auditing and checklist alignment with Czech consular standards",
    ],
    whatEmbassyDecides: [
      "Visa issuance and entry conditions",
    ],
    faqs: [
      {
        q: "What is document superlegalization for the Czech Republic?",
        a: "Superlegalization is the process where a Kenyan document is first authenticated by the Ministry of Foreign Affairs in Nairobi and then officially stamped by the Czech Embassy before it is recognized for long-term visa purposes.",
      },
    ],
    relatedCountries: ["germany", "france", "belgium", "united-kingdom"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },

  // China
  {
    slug: "china",
    name: "China",
    code: "CN",
    group: "international",
    groupLabel: "Other International Visa Services",
    missionName: "Embassy of the People's Republic of China in Kenya",
    missionType: "Embassy",
    applicationCenter: "Chinese Visa Application Service Center (CVASC), Nairobi",
    officialAuthority: {
      name: "Department of Consular Affairs of the Ministry of Foreign Affairs",
      url: "https://www.visaforchina.cn",
    },
    tagline: "M (Business / Canton Fair), L (Tourism), X (Student), Z (Work) Visa Support",
    description:
      "Specialized visa support for Kenyan traders, importers, and delegates attending the Canton Fair, business negotiations in Guangzhou/Yiwu/Shanghai, and university studies across China.",
    whoIsItFor:
      "Kenyan business owners, wholesale importers, conference attendees, university students, and tourists travelling to mainland China.",
    categories: [
      {
        slug: "business",
        name: "M Visa (Commercial Trade & Canton Fair)",
        shortDescription: "Business visits, factory audits, procurement, and trade fairs (Canton Fair, Yiwu Fair).",
        typicalPurpose: "Commercial trade visits up to 30, 60, or 90 days per entry.",
        estimatedTurnaround: "Standard: ~4 working days; Express options subject to CVASC availability.",
        audience: "Traders, importers, factory auditors, and business executives.",
        keyRequirements: [
          "COVA online visa application form and confirmation page",
          "Valid passport with at least 6 months validity and 2 blank pages",
          "Official Invitation Letter (TE / Duly Authorized Unit invitation or standard business invitation from registered Chinese company)",
          "Chinese company business licence (copy)",
          "Letter of introduction from Kenyan company with CR12 and KRA PIN",
          "6 months certified bank statements",
        ],
        commonMistakes: [
          "Submitting invitation letters lacking mandatory company seal/stamp (Chop) and inviter ID details",
          "Incomplete employment history on the COVA online form",
        ],
        swiftDocRole: "COVA form completion, Chinese invitation letter and company licence audit, and CVASC submission scheduling.",
        officialRole: "Chinese Embassy Consular Section adjudicates visa issuance.",
        featured: true,
      },
      {
        slug: "tourist",
        name: "L Visa (Tourism & Sightseeing)",
        shortDescription: "Sightseeing, holiday travel, and visiting friends in China.",
        typicalPurpose: "Tourism up to 30 days per entry.",
        estimatedTurnaround: "~4–5 working days.",
        audience: "Holiday travellers and tourists.",
        keyRequirements: [
          "COVA online form confirmation",
          "Valid passport",
          "Round-trip air tickets and confirmed hotel reservations across the full itinerary",
          "6 months certified bank statements demonstrating financial capability",
        ],
        commonMistakes: ["Itineraries lacking internal transport bookings for multi-city travel"],
        swiftDocRole: "COVA application completion, itinerary review, and appointment packaging.",
        officialRole: "Consular officers review tourist applications.",
        featured: true,
      },
      {
        slug: "student",
        name: "X1 / X2 Student Visa",
        shortDescription: "Long-term (X1 > 180 days) and short-term (X2 <= 180 days) academic studies in China.",
        typicalPurpose: "Undergraduate, master's, doctoral, and Chinese language programs.",
        estimatedTurnaround: "~4–7 working days.",
        audience: "Students admitted to Chinese universities and scholarship recipients.",
        keyRequirements: [
          "Original Admission Notice from Chinese university",
          "Original Form JW201 or Form JW202 (Visa Application for Study in China)",
          "Foreigner Physical Examination Record signed by approved hospital",
          "Police Clearance Certificate (Good Conduct)",
        ],
        commonMistakes: ["Failing to present original JW201/JW202 forms"],
        swiftDocRole: "JW form validation, medical report verification, and CVASC filing.",
        officialRole: "Chinese Embassy grants student entry.",
      },
      {
        slug: "work",
        name: "Z Visa (Work / Employment)",
        shortDescription: "Full-time employment and commercial assignments in China.",
        typicalPurpose: "Employment leading to Chinese residence permit.",
        estimatedTurnaround: "~4–7 working days.",
        audience: "Professionals holding official Chinese work permit notifications.",
        keyRequirements: [
          "Notification Letter of Foreigner's Work Permit issued by State Administration of Foreign Experts Affairs",
          "Valid passport",
          "Authenticated academic credentials and police clearance",
        ],
        commonMistakes: ["Applying without the official government Work Permit Notification"],
        swiftDocRole: "Work permit notification audit and CVASC file packaging.",
        officialRole: "Consular authorities issue Z work visas.",
      },
    ],
    supportServices: [
      "COVA (China Online Visa Application) system form completion",
      "Chinese business invitation letter and official company stamp (Chop) verification",
      "AVAS appointment scheduling at CVASC Nairobi",
      "Photo specification review (33x48mm, white background, specific head measurements)",
      "Physical dossier compilation for submission at the Chinese Visa Centre in Nairobi",
    ],
    requiredDocumentGuidance: [
      "Original passport with at least 6 months validity and 2 blank pages",
      "Photocopy of passport bio-data page and previous Chinese visas",
      "COVA confirmation page and printed application form",
      "Recent 33x48mm color photograph on white background",
      "Official invitation letters and host company business licence",
      "Certified 6 months bank statements",
    ],
    biometricsInterviewInfo:
      "Applicants between ages 14 and 70 must submit documents and have ten-fingerprint biometrics captured in person at the Chinese Visa Application Service Center (CVASC) at Lonrho House / authorized centre in Nairobi.",
    commonMistakes: [
      "Submitting business invitation letters without the mandatory official red company stamp (Chop)",
      "Photographs failing Chinese dimensional standards (ears must be visible, no jewelry)",
    ],
    whatSwiftDocHandles: [
      "Error-free COVA online application entry",
      "Verification of Chinese partner company credentials and invitation letters",
    ],
    whatEmbassyDecides: [
      "Visa approval, entry count (single, double, multiple), and duration of stay",
    ],
    faqs: [
      {
        q: "What is an official Chinese company 'Chop' and why is it required?",
        a: "A 'Chop' is the official registered round seal of a Chinese company. Chinese consular authorities require business invitation letters to bear this official red seal alongside an authorized signature to verify corporate authenticity.",
      },
    ],
    relatedCountries: ["united-arab-emirates", "japan", "india", "united-states"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },

  // United Arab Emirates
  {
    slug: "united-arab-emirates",
    name: "United Arab Emirates",
    code: "AE",
    group: "international",
    groupLabel: "Other International Visa Services",
    missionName: "Embassy of the United Arab Emirates, Nairobi / GDRFA / ICP",
    missionType: "Embassy",
    applicationCenter: "Official UAE GDRFA / ICP Electronic Visa Systems",
    officialAuthority: {
      name: "Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) / GDRFA Dubai",
      url: "https://icp.gov.ae",
    },
    tagline: "Dubai Tourist (30/60 Days), Visit, Business & Transit e-Visa Support",
    description:
      "Rapid electronic visa preparation for Dubai, Abu Dhabi, Sharjah, and all Emirates. We assist with tourist entry permits, commercial visit visas, investor files, and transit authorizations.",
    whoIsItFor:
      "Kenyan tourists, holidaymakers visiting Dubai, business people sourcing goods, conference delegates, and transit passengers.",
    categories: [
      {
        slug: "tourist",
        name: "Tourist Visa (30 Days / 60 Days - Single & Multiple Entry)",
        shortDescription: "Holiday, leisure, shopping, and tourism across Dubai, Abu Dhabi, and all Emirates.",
        typicalPurpose: "Tourism and recreational visits.",
        estimatedTurnaround: "Standard: ~24 to 72 hours.",
        audience: "Holiday travellers, families, and shoppers.",
        keyRequirements: [
          "Clear scanned copy of Kenyan passport bio-data page (minimum 6 months validity)",
          "Passport-size photo with white background (digital scan)",
          "Confirmed return flight ticket and hotel reservation in the UAE",
          "Yellow fever card (as required for international travel)",
        ],
        commonMistakes: ["Uploading dark or cropped passport bio-data scans leading to automated OCR rejection"],
        swiftDocRole: "High-resolution document scanning, security pre-check, and electronic portal submission.",
        officialRole: "GDRFA Dubai / ICP immigration authorities issue electronic entry permits.",
        featured: true,
      },
      {
        slug: "business",
        name: "Business / Investor Entry Permit",
        shortDescription: "Exploring company formation in UAE free zones, trade meetings, and commercial partnerships.",
        typicalPurpose: "Business establishment and trade visits.",
        estimatedTurnaround: "~2–4 working days.",
        audience: "Entrepreneurs, trade delegates, and corporate directors.",
        keyRequirements: [
          "Passport copy with at least 6 months validity",
          "Letter of introduction or UAE free zone / mainland business registration documents",
          "Return ticket and accommodation details",
        ],
        commonMistakes: ["Failing to match visitor identity with corporate license records"],
        swiftDocRole: "Commercial document verification and entry permit application.",
        officialRole: "UAE immigration authorities issue business permits.",
        featured: true,
      },
      {
        slug: "transit",
        name: "Transit Visa (48 Hours / 96 Hours)",
        shortDescription: "Connecting through Dubai International Airport (DXB) or Abu Dhabi (AUH) with a short stopover.",
        typicalPurpose: "Layover sightseeing and connecting travel.",
        estimatedTurnaround: "~24–48 hours.",
        audience: "Travellers transiting through UAE airlines (Emirates, flydubai, Etihad).",
        keyRequirements: [
          "Confirmed onward flight ticket to third destination within 48 or 96 hours",
          "Passport valid for at least 6 months",
          "Valid visa for destination country",
        ],
        commonMistakes: ["Overstaying the strict 48/96 hour limit"],
        swiftDocRole: "Stopover verification and rapid transit visa processing.",
        officialRole: "GDRFA/ICP grants transit clearance.",
      },
    ],
    supportServices: [
      "Official UAE electronic portal filing (GDRFA / ICP channels)",
      "High-resolution digital document formatting and OCR optimization",
      "Dubai/Abu Dhabi travel insurance verification",
      "Overstay fine prevention advisory and visa extension guidance",
      "OK to Board verification with operating airlines",
    ],
    requiredDocumentGuidance: [
      "Color scan of passport bio-data page with at least 6 months validity",
      "Recent passport-style photograph on a white background",
      "Confirmed round-trip flight booking",
      "Hotel booking voucher or host Emirates ID copy",
    ],
    biometricsInterviewInfo:
      "UAE tourist visas are 100% electronic (e-Visas). No physical appearance or embassy interview is required in Nairobi. Biometric iris/facial scans are conducted upon arrival at UAE airports.",
    commonMistakes: [
      "Submitting low-quality smartphone photos of passport pages",
      "Failing to confirm 'OK to Board' status with airlines prior to departure",
    ],
    whatSwiftDocHandles: [
      "Fast electronic submission on accredited UAE immigration channels",
      "Document resolution enhancement and pre-clearance checks",
    ],
    whatEmbassyDecides: [
      "Immigration security clearance and entry permit approval",
    ],
    faqs: [
      {
        q: "How fast is a Dubai tourist visa processed for Kenyan passport holders?",
        a: "Most electronic tourist visas are processed within 24 to 72 hours on working days. We recommend applying at least 5–7 days before departure.",
      },
      {
        q: "Do I need a physical visa stamped in my passport for Dubai?",
        a: "No. The UAE issues an electronic entry permit (PDF) which you print and present alongside your passport at airline check-in and Dubai immigration counters.",
      },
    ],
    relatedCountries: ["saudi-arabia", "china", "india", "united-kingdom", "south-africa"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },

  // Saudi Arabia
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    code: "SA",
    group: "international",
    groupLabel: "Other International Visa Services",
    missionName: "Royal Embassy of Saudi Arabia in Nairobi",
    missionType: "Embassy",
    applicationCenter: "Tasheer Visa Service Center, Nairobi / MOFA Saudi Arabia",
    officialAuthority: {
      name: "Ministry of Foreign Affairs (MOFA) / Ministry of Hajj and Umrah",
      url: "https://www.mofa.gov.sa",
    },
    tagline: "Umrah, Business Visit, Commercial, Work & Family Visit Support",
    description:
      "Expert facilitation for Saudi electronic visas, Nusuk Umrah registrations, MOFA commercial visit endorsements, Tasheer Nairobi biometric appointments, and embassy legalisations.",
    whoIsItFor:
      "Kenyan pilgrims performing Umrah or Hajj, business delegates attending trade events in Riyadh and Jeddah, and professionals undertaking commercial assignments.",
    categories: [
      {
        slug: "umrah",
        name: "Umrah & Religious Tourist Visa",
        shortDescription: "Performing Umrah pilgrimage in Makkah and visiting the Prophet's Mosque in Madinah.",
        typicalPurpose: "Pilgrimage and religious tourism.",
        estimatedTurnaround: "~2–5 working days.",
        audience: "Kenyan pilgrims and Muslim community members.",
        keyRequirements: [
          "Valid Kenyan passport with at least 6 months validity",
          "Digital passport photograph with white background",
          "Confirmed flight itinerary and hotel bookings in Makkah/Madinah",
          "Mandatory health insurance covering COVID-19 and emergency medical care in KSA",
          "Meningitis and Yellow Fever vaccination certificates",
        ],
        commonMistakes: ["Failing to obtain mandatory health insurance through official Saudi channels"],
        swiftDocRole: "MOFA/Nusuk portal filing, insurance generation, vaccination verification, and Tasheer booking.",
        officialRole: "Ministry of Hajj and Umrah / MOFA approves pilgrimage entry.",
        featured: true,
      },
      {
        slug: "business",
        name: "Business Visit Visa (Commercial / Investor)",
        shortDescription: "Attending business meetings, negotiations, corporate conferences, and industrial projects in Saudi Arabia.",
        typicalPurpose: "Commercial engagements up to 90 days or 1 year multiple entry.",
        estimatedTurnaround: "~3–7 working days.",
        audience: "Business executives, consultants, and trade delegations.",
        keyRequirements: [
          "Electronic MOFA Business Invitation Letter issued by Saudi host company / Chamber of Commerce",
          "Letter of introduction from Kenyan employer certified by Kenya National Chamber of Commerce & Industry (KNCCI)",
          "Commercial Registration (CR) copy of the Saudi host entity",
          "Valid passport with at least 6 months validity",
        ],
        commonMistakes: ["Submitting employer letters without the mandatory KNCCI certification stamp"],
        swiftDocRole: "KNCCI certification coordination, MOFA invitation verification, and Tasheer submission.",
        officialRole: "Saudi Embassy consular section issues business endorsements.",
        featured: true,
      },
      {
        slug: "work",
        name: "Work Visa (Employment Stamping)",
        shortDescription: "Official employment visa stamping for professionals contracted in Saudi Arabia.",
        typicalPurpose: "Long-term employment under Saudi work contract.",
        estimatedTurnaround: "~2–4 weeks.",
        audience: "Professionals with approved Saudi work visas (Ta'sheera).",
        keyRequirements: [
          "Electronic Visa authorization (Wakalah) from Saudi employer",
          "Signed employment contract attested by Saudi Chamber of Commerce and MOFA",
          "Medical Fitness Certificate from an accredited GAMCA medical centre in Nairobi",
          "Police Clearance Certificate authenticated by MFA Kenya",
          "Attested academic certificates and professional credentials",
        ],
        commonMistakes: ["Undergoing medical exams at non-GAMCA approved clinics"],
        swiftDocRole: "GAMCA appointment guidance, MFA document legalisation, and Tasheer submission management.",
        officialRole: "Saudi Embassy consular section stamps work visas.",
      },
      {
        slug: "family-visit",
        name: "Family Visit Visa",
        shortDescription: "Visiting immediate family members residing and working in Saudi Arabia.",
        typicalPurpose: "Family visits up to 90 days or extendable multiple entry.",
        estimatedTurnaround: "~3–7 working days.",
        audience: "Spouses, children, and parents of Saudi residents.",
        keyRequirements: [
          "MOFA Family Visit Visa document approved by the Ministry of Foreign Affairs in KSA",
          "Proof of relationship (certified marriage or birth certificates)",
          "Valid passport and medical insurance",
        ],
        commonMistakes: ["Mismatch between family names on civil records and resident Iqama"],
        swiftDocRole: "Relationship record verification and Tasheer appointment management.",
        officialRole: "MOFA grants family visit approval.",
      },
    ],
    supportServices: [
      "Saudi MOFA electronic visa portal registration",
      "Nusuk Umrah permit integration and insurance generation",
      "Tasheer Visa Service Center appointment booking in Nairobi",
      "KNCCI business letter attestation and Ministry of Foreign Affairs legalisation",
      "GAMCA medical examination appointment coordination",
    ],
    requiredDocumentGuidance: [
      "Original passport with at least 6 months validity and 2 blank pages",
      "Two passport photos on a white background",
      "Official MOFA electronic invitation number",
      "Attested employer letter with KNCCI stamp (for business visas)",
      "Vaccination certificates (Meningitis and Yellow Fever)",
    ],
    biometricsInterviewInfo:
      "All physical visa submissions (Business, Work, Family Visit) require appointment and biometric collection at the Tasheer Visa Service Center (VFS Tasheer) at Ananas Centre / Westlands, Nairobi.",
    commonMistakes: [
      "Attempting to submit business files without KNCCI chamber attestation",
      "Expired MOFA invitation authorization validity",
    ],
    whatSwiftDocHandles: [
      "Comprehensive verification of MOFA invitation numbers",
      "KNCCI chamber attestation and MFA legalisation processing",
      "Tasheer appointment scheduling and document indexing",
    ],
    whatEmbassyDecides: [
      "Visa issuance, number of entries, and permitted duration of stay",
    ],
    faqs: [
      {
        q: "What is Tasheer in Nairobi?",
        a: "Tasheer (formerly VFS Tasheer) is the official visa service centre authorized by the Ministry of Foreign Affairs of Saudi Arabia to handle biometric enrollment and document submission for visas in Kenya.",
      },
    ],
    relatedCountries: ["united-arab-emirates", "india", "china", "united-kingdom"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },

  // Japan
  {
    slug: "japan",
    name: "Japan",
    code: "JP",
    group: "international",
    groupLabel: "Other International Visa Services",
    missionName: "Embassy of Japan in Kenya",
    missionType: "Embassy",
    applicationCenter: "Consular Section, Embassy of Japan in Nairobi (Upper Hill) / VFS Global Nairobi",
    officialAuthority: {
      name: "Ministry of Foreign Affairs of Japan (MOFA)",
      url: "https://www.mofa.go.jp",
    },
    tagline: "Tourist, Business, Student, Work & Transit Visa Support",
    description:
      "Precision application preparation for Japanese temporary visitor visas, business delegation files, Certificate of Eligibility (COE) endorsements, and consular submission in Nairobi.",
    whoIsItFor:
      "Kenyan business executives, tech professionals, university researchers, tourists, and cultural delegates travelling to Tokyo, Osaka, Kyoto, and across Japan.",
    categories: [
      {
        slug: "tourist",
        name: "Temporary Visitor Visa (Tourism & Sightseeing)",
        shortDescription: "Tourism, sightseeing, visiting acquaintances, and cultural exploration in Japan.",
        typicalPurpose: "Holiday visits up to 15, 30, or 90 days.",
        estimatedTurnaround: "Standard: ~5–7 working days after consular submission.",
        audience: "Holiday travellers and tourists.",
        keyRequirements: [
          "Completed Japanese visa application form with photo affixed",
          "Valid Kenyan passport with at least 6 months validity",
          "Detailed 'Schedule of Stay' (Itinerary in Japan) detailing daily activities, accommodations, and contacts",
          "6 months certified bank statements demonstrating financial capability",
          "Letter of employment, approved leave letter, and pay slips or company CR12",
          "Confirmed flight itinerary reservations",
        ],
        commonMistakes: [
          "Submitting vague 'Schedule of Stay' forms without specific daily locations, hotel names, and telephone numbers",
          "Photographs not meeting Japanese consular dimensional criteria (45x35mm, white background, taken within 6 months)",
        ],
        swiftDocRole: "Schedule of Stay structuring, financial evidence audit, and consular dossier compilation.",
        officialRole: "Embassy of Japan Consular Section reviews and approves visas.",
        featured: true,
      },
      {
        slug: "business",
        name: "Business Affairs & Commercial Mission",
        shortDescription: "Commercial meetings, technical discussions, procurement, trade fairs, and contract signings.",
        typicalPurpose: "Short-term business engagements up to 90 days.",
        estimatedTurnaround: "~5–7 working days.",
        audience: "Business executives, engineers, and government delegates.",
        keyRequirements: [
          "Official Letter of Reason for Invitation (Shouheiriyuusho) from Japanese host company",
          "Schedule of Stay form completed by Japanese host",
          "Letter of Guarantee (Mimoto hoshousho) or certified Japanese company registration (Tokibo Touhon) / Corporate Overview",
          "Letter of introduction from Kenyan employer",
          "Valid passport and financial proofs",
        ],
        commonMistakes: [
          "Omission of the Japanese host company official seal (Inkan/Hanko) on the Letter of Reason for Invitation",
        ],
        swiftDocRole: "Japanese host document compliance check, translation audit, and consular file setup.",
        officialRole: "Consular officers verify business bona fides.",
        featured: true,
      },
      {
        slug: "coe",
        name: "Work & Student Visa with Certificate of Eligibility (COE)",
        shortDescription: "Employment, highly skilled professionals, researchers, and university studies in Japan.",
        typicalPurpose: "Long-term residence under approved COE.",
        estimatedTurnaround: "~5 working days after COE submission.",
        audience: "Individuals holding an original or electronic Certificate of Eligibility from Japanese Immigration.",
        keyRequirements: [
          "Original or electronic Certificate of Eligibility (COE) issued by Immigration Services Agency of Japan",
          "Completed visa application form",
          "Valid passport and recent passport photograph",
        ],
        commonMistakes: ["Submitting visa applications after the 3-month validity window of the COE has lapsed"],
        swiftDocRole: "COE validation, form completion, and expedited consular submission.",
        officialRole: "Embassy of Japan issues long-term visa stamps.",
      },
      {
        slug: "transit",
        name: "Transit Visa",
        shortDescription: "Connecting through Tokyo Haneda (HND) or Narita (NRT) airports with short layover.",
        typicalPurpose: "Transit up to 15 days.",
        estimatedTurnaround: "~5 working days.",
        audience: "Travellers transiting Japan to North America or the Pacific.",
        keyRequirements: [
          "Confirmed onward flight ticket",
          "Valid visa for destination country",
          "Proof of sufficient funds for transit stay",
        ],
        commonMistakes: ["Applying without destination country entry clearance"],
        swiftDocRole: "Itinerary review and submission assistance.",
        officialRole: "Consular officers evaluate transit requests.",
      },
    ],
    supportServices: [
      "Official Japanese application form completion and photo formatting (45x35mm)",
      "Daily Schedule of Stay (Taizai Yoteihyo) formulation and compliance check",
      "Japanese host Letter of Invitation (Shouheiriyuusho) and Guarantee verification",
      "Certificate of Eligibility (COE) expedited visa stamping support",
      "Submission dossier indexing according to Japanese Embassy consular guidelines",
    ],
    requiredDocumentGuidance: [
      "Original passport with at least 6 months validity and 2 blank pages",
      "One 45x35mm passport photo on white background (taken within 6 months)",
      "Printed and completed official Schedule of Stay document",
      "Certified 6 months bank statements with bank stamp",
      "Employment letter with exact job title, salary, and leave dates",
      "Flight reservations and hotel vouchers",
    ],
    biometricsInterviewInfo:
      "Applications are submitted through the Consular Section of the Embassy of Japan on Mara Road, Upper Hill, Nairobi or authorized submission desks. Consular officers may contact applicants for telephone or in-person interviews.",
    commonMistakes: [
      "Submitting an incomplete Schedule of Stay lacking specific addresses or daily contacts",
      "Discrepancies in dates between flight reservations, hotel vouchers, and application forms",
    ],
    whatSwiftDocHandles: [
      "Detailed review of the Schedule of Stay against Japanese consular expectations",
      "Ensuring all Japanese host documents carry required corporate seals",
    ],
    whatEmbassyDecides: [
      "Issuance of visa, duration of stay, and single/double entry status",
    ],
    faqs: [
      {
        q: "What is a 'Schedule of Stay' for a Japanese visa?",
        a: "A Schedule of Stay is a mandatory daily itinerary form detailing your exact activities, hotel names, addresses, and phone numbers for each day you plan to be in Japan. General summaries are rejected by the embassy.",
      },
    ],
    relatedCountries: ["china", "united-states", "united-kingdom", "australia"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },

  // -------------------------------------------------------------
  // GROUP C: KENYA VISA & IMMIGRATION SERVICES
  // -------------------------------------------------------------
  {
    slug: "kenya",
    name: "Kenya",
    code: "KE",
    group: "kenya",
    groupLabel: "Kenya Visa & Immigration Services",
    missionName: "Directorate of Immigration Services / Ministry of Interior",
    missionType: "Immigration Department",
    applicationCenter: "Official Kenya Electronic Travel Authorisation (eTA) Portal / eCitizen / Nyayo House",
    officialAuthority: {
      name: "Directorate of Immigration Services (State Department for Immigration)",
      url: "https://immigration.go.ke",
    },
    tagline: "Kenya eTA, East Africa Tourist Visa, Work Permits (Class A-M), Special Passes & Alien Cards",
    description:
      "Comprehensive inbound immigration assistance for foreign visitors, expatriates, investors, NGOs, and multinational companies. We prepare Kenya eTA authorizations, Class D/G/I work permits, Special Passes, and Alien ID registrations at Nyayo House.",
    whoIsItFor:
      "International travellers visiting Kenya, foreign professionals employed by Kenyan companies, international investors, NGO staff, expatriate spouses, and students.",
    categories: [
      {
        slug: "eta",
        name: "Kenya Electronic Travel Authorisation (eTA)",
        shortDescription: "Mandatory digital entry authorization for all foreign visitors entering Kenya by air, sea, or land.",
        typicalPurpose: "Tourism, visiting family, transit, and short business meetings.",
        estimatedTurnaround: "Standard: ~24 to 72 hours via official eTA portal.",
        audience: "All international visitors travelling to Kenya (excluding exempt nationalities under bilateral treaties).",
        keyRequirements: [
          "Valid passport with at least 6 months validity and blank page",
          "Recent passport photo or clear selfie",
          "Confirmed flight ticket / travel itinerary",
          "Proof of accommodation (hotel booking confirmation or invitation letter with host Kenyan ID/Passport/Alien Card)",
          "Yellow fever vaccination certificate (for travellers from or transiting endemic zones)",
        ],
        commonMistakes: [
          "Entering passport numbers or expiry dates with typos on the digital portal",
          "Applying on fraudulent copycat websites charging inflated fees",
          "Uploading unreadable hotel booking confirmations",
        ],
        swiftDocRole: "Official eTA portal submission, biometric photo compliance verification, itinerary review, and expedited tracking.",
        officialRole: "Directorate of Immigration Services grants electronic entry clearance.",
        featured: true,
      },
      {
        slug: "east-africa-tourist-visa",
        name: "East Africa Tourist Visa (Kenya First)",
        shortDescription: "Joint multiple-entry visa allowing travel across Kenya, Uganda, and Rwanda for 90 days.",
        typicalPurpose: "Cross-border tourism across East Africa.",
        estimatedTurnaround: "~3–7 working days.",
        audience: "International tourists starting their regional East African trip in Kenya.",
        keyRequirements: [
          "Valid passport with at least 6 months validity",
          "Detailed travel itinerary covering Kenya, Uganda, and Rwanda",
          "Return ticket and accommodation bookings in all three countries",
        ],
        commonMistakes: ["Leaving the three-country territory (EATV expires automatically if you leave the EAC zone)"],
        swiftDocRole: "Regional itinerary review and correct issuing authority filing.",
        officialRole: "Kenyan Immigration issues the joint regional visa.",
        featured: true,
      },
      {
        slug: "work-permits",
        name: "Kenyan Work Permits (Class D, Class G, Class I & Special Passes)",
        shortDescription: "Statutory work authorization for expatriate employees (Class D), investors (Class G), and NGO workers (Class I).",
        typicalPurpose: "Legal employment and business operation in Kenya.",
        estimatedTurnaround: "Special Pass: ~2–3 weeks; Long-Term Permit: ~6–12 weeks.",
        audience: "Expatriate executives, foreign investors, NGO personnel, and their corporate employers.",
        keyRequirements: [
          "Completed Form 25 (Work Permit Application) via eCitizen Electronic Foreign Nationals System (eFNS)",
          "Cover letter from Kenyan employer / corporate sponsor explaining necessity of expatriate expertise",
          "Curriculum Vitae and verified academic / professional certificates",
          "Kenyan Understudy training program commitment and understudy national ID / CV",
          "Company registration documents (CR12, KRA PIN, Tax Compliance Certificate)",
          "Proof of capital investment (minimum $100,000 for Class G Investor Permits)",
          "Clearance from relevant regulatory body (e.g. Engineers Board, Medical Board, NGO Coordination Board)",
        ],
        commonMistakes: [
          "Failing to document a genuine Kenyan understudy succession plan",
          "Submitting applications with expired corporate Tax Compliance Certificates",
        ],
        swiftDocRole: "eFNS file compilation, understudy plan structuring, board approval tracking, and Nyayo House follow-up.",
        officialRole: "Immigration Permit Determination Committee reviews and grants permits.",
        featured: true,
      },
      {
        slug: "special-pass",
        name: "Special Pass (Short-Term Work Authorization)",
        shortDescription: "Temporary authorization for foreign experts undertaking assignments up to 3 months (renewable once).",
        typicalPurpose: "Short-term technical installations, consulting, audits, and training.",
        estimatedTurnaround: "~10–15 working days.",
        audience: "Foreign specialists on temporary assignment in Kenya.",
        keyRequirements: [
          "Letter of request from Kenyan sponsoring organization",
          "Applicant CV and professional credentials",
          "Valid passport copy and company registration details",
        ],
        commonMistakes: ["Working in Kenya without a Special Pass while waiting for a long-term Class D permit"],
        swiftDocRole: "Rapid Special Pass dossier preparation, eFNS lodgement, and approval retrieval.",
        officialRole: "Directorate of Immigration Services issues Special Passes.",
      },
      {
        slug: "residence-alien-card",
        name: "Alien Card & Permanent Residence Support",
        shortDescription: "Foreign National Registration (Alien ID Card), Dependent Passes, and Permanent Residency.",
        typicalPurpose: "Legal residency and local identification for foreign nationals residing in Kenya.",
        estimatedTurnaround: "Alien Card: ~3–6 weeks after biometrics.",
        audience: "Foreign residents holding valid work permits, spouses, and permanent residents.",
        keyRequirements: [
          "Valid passport and approved work permit / dependent pass endorsement",
          "Two passport-size photos",
          "Biometric enrollment at Nyayo House or County Immigration offices",
          "Proof of local residence address",
        ],
        commonMistakes: ["Failing to register for an Alien Card within 90 days of arriving on a long-term permit (statutory offense)"],
        swiftDocRole: "Alien card application lodgement, biometric scheduling at Nyayo House, and card collection.",
        officialRole: "Directorate of Immigration Services issues Alien ID Cards.",
      },
    ],
    supportServices: [
      "Official Kenya eTA portal electronic application and status tracking",
      "eFNS (Electronic Foreign Nationals Services) account management and work permit lodgement",
      "Expatriate Understudy Program framework and documentation development",
      "Class D, Class G, and Class I work permit dossier assembly and committee tracking",
      "Special Pass temporary work authorization processing",
      "Foreign National Registration (Alien Card) and Dependent Pass facilitation at Nyayo House",
      "Referred visa and special security vetting consultation",
    ],
    requiredDocumentGuidance: [
      "Valid passport with at least 6 months validity",
      "For eTA: Travel itinerary, accommodation voucher / host invitation, and yellow fever card",
      "For Work Permits: Certified academic certificates, police clearance, employer letter, CR12, and KRA Tax Compliance",
      "For Investors: Proof of capital transfer into Kenya ($100,000 minimum) and bank reference",
    ],
    biometricsInterviewInfo:
      "eTA applications are processed digitally. Long-term work permit holders and Alien Card applicants must attend biometric enrollment and passport endorsement at Nyayo House, Nairobi or Regional Immigration Offices.",
    commonMistakes: [
      "Assuming foreign experts can work on a visitor eTA without a Special Pass",
      "Delaying Alien Card registration beyond the mandatory 90-day statutory window",
    ],
    whatSwiftDocHandles: [
      "End-to-end eFNS and eTA application preparation and compliance auditing",
      "Interfacing with the Directorate of Immigration Services at Nyayo House for permit processing and tracking",
    ],
    whatEmbassyDecides: [
      "Approval of entry authorizations, work permit grants, and statutory validity periods",
    ],
    faqs: [
      {
        q: "What is the difference between a Kenya eTA and a Kenyan Work Permit?",
        a: "A Kenya eTA is an electronic travel authorization solely for temporary tourism, family visits, or short business meetings; it strictly prohibits employment. A Work Permit (Class D/G/I) or Special Pass is statutory legal authorization issued under the Kenya Citizenship and Immigration Act permitting foreign nationals to engage in paid employment, trade, or professional work in Kenya.",
      },
      {
        q: "How long is a Kenya Special Pass valid?",
        a: "A Special Pass is issued for a maximum of 3 months and may be renewed once for an additional 3 months (maximum 6 months total) while a long-term work permit is being processed or for short-term project assignments.",
      },
    ],
    relatedCountries: ["uganda", "tanzania", "rwanda", "united-kingdom", "united-states"],
    disclaimer: STANDARD_VISA_DISCLAIMER,
  },
];

export function getVisaCountriesByGroup(group: VisaGroup): VisaCountry[] {
  return VISA_COUNTRIES.filter((c) => c.group === group);
}

export function getVisaCountry(slug: string): VisaCountry | undefined {
  return VISA_COUNTRIES.find((c) => c.slug === slug);
}

export function getVisaCategory(countrySlug: string, categorySlug: string): { country: VisaCountry; category: VisaCategory } | undefined {
  const country = getVisaCountry(countrySlug);
  if (!country) return undefined;
  const category = country.categories.find((cat) => cat.slug === categorySlug);
  if (!category) return undefined;
  return { country, category };
}

export function getAllVisaCategories(): { country: VisaCountry; category: VisaCategory }[] {
  return VISA_COUNTRIES.flatMap((country) =>
    country.categories.map((category) => ({ country, category }))
  );
}

export function getRelatedVisaCountries(country: VisaCountry, limit = 4): VisaCountry[] {
  return VISA_COUNTRIES.filter((c) => c.slug !== country.slug && country.relatedCountries.includes(c.slug)).slice(0, limit);
}
