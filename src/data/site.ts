export const PORTAL_URL =
  process.env["NEXT_PUBLIC_PORTAL_URL"] || "http://localhost:3000";
export const PORTAL_LOGIN_URL = `${PORTAL_URL}/login`;
export const PORTAL_REGISTER_URL = `${PORTAL_URL}/register`;

export const COMPANY = {
  name: "Swift Doc",
  legal: "Swift Doc Documentation Services Ltd",
  tagline: "Streamlining Your Documentation With Ease",
  phone: "+254 729 732 142",
  phoneHref: "tel:+254729732142",
  whatsapp: "https://wa.me/254729732142",
  email: "swiftdoc@gmail.com",
  secondaryEmail: "info@swiftdoc.co.ke",
  postalBox: "P.O. BOX 47239 - 00100",
  address: "Unga House, Muthithi Road - Westlands, Nairobi, Kenya",
  building: "Unga House, Muthithi Road - Westlands",
  portalUrl: PORTAL_URL,
  portalLoginUrl: PORTAL_LOGIN_URL,
  portalRegisterUrl: PORTAL_REGISTER_URL,
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday & Public Holidays", time: "Closed (WhatsApp desk open)" },
  ],
};

export type ServiceItem = {
  name: string;
  turnaround: string;
  detail: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  audience: string;
  authority: string;
  items: ServiceItem[];
  requirements: string[];
};

export const SERVICES: ServiceCategory[] = [
  {
    slug: "business-registration",
    title: "Business Registration",
    short: "Incorporation, business names and annual returns",
    summary:
      "From a sole proprietorship trading name to a limited company with a full shareholding structure, we prepare, lodge and follow through every filing on the Business Registration Service portal until the certificate is in your hands.",
    audience: "Founders, SMEs, professional partnerships and holding companies",
    authority: "Business Registration Service (BRS) · eCitizen",
    items: [
      {
        name: "Company Incorporation",
        turnaround: "3–7 working days",
        detail:
          "Private limited company with CR12, memorandum and articles drafted for your shareholding.",
      },
      {
        name: "Business Name Registration",
        turnaround: "1–3 working days",
        detail: "Trading name search, reservation and registration certificate.",
      },
      {
        name: "Annual Returns Filing",
        turnaround: "2–4 working days",
        detail: "Statutory annual returns, including late-filing rectification.",
      },
      {
        name: "CR12 Processing",
        turnaround: "1–3 working days",
        detail: "Official confirmation of directors and shareholders for banks and tenders.",
      },
      {
        name: "Company Changes & Resolutions",
        turnaround: "3–10 working days",
        detail: "Director changes, share transfers, address and name changes.",
      },
      {
        name: "Branch & Foreign Company Registration",
        turnaround: "10–21 working days",
        detail: "Registration of foreign companies operating in Kenya.",
      },
    ],
    requirements: [
      "Copy of ID or passport for every director and shareholder",
      "KRA PIN certificates for all Kenyan directors",
      "Passport-size photographs",
      "Three preferred company or business names",
      "Physical address, plot or building details and postal address",
    ],
  },
  {
    slug: "kra-tax-services",
    title: "KRA & Tax Services",
    short: "PIN registration, VAT, compliance certificates and returns",
    summary:
      "Tax compliance decides whether you win a contract, clear goods or renew a licence. We handle registrations, ledger clean-ups and the annual filing cycle so your compliance certificate is never the reason a deal stalls.",
    audience: "Individuals, employers, importers and companies bidding for work",
    authority: "Kenya Revenue Authority · iTax",
    items: [
      {
        name: "KRA PIN Registration",
        turnaround: "Same day",
        detail: "New individual or company PIN with iTax credentials.",
      },
      {
        name: "KRA PIN Update & Recovery",
        turnaround: "Same day – 2 days",
        detail: "Email changes, lost credentials, obligation corrections.",
      },
      {
        name: "VAT Registration",
        turnaround: "1–3 working days",
        detail: "Obligation activation and eTIMS onboarding guidance.",
      },
      {
        name: "Tax Compliance Certificate",
        turnaround: "1–5 working days",
        detail: "Includes ledger reconciliation where arrears block issuance.",
      },
      {
        name: "Individual & Company Returns",
        turnaround: "Same day",
        detail: "Annual returns, nil returns and amended returns.",
      },
      {
        name: "Penalty & Ledger Resolution",
        turnaround: "5–21 working days",
        detail: "Waiver applications and objection support.",
      },
    ],
    requirements: [
      "National ID or passport and KRA PIN where already issued",
      "Access to the registered email or phone number",
      "Financial statements or payroll data for filing periods",
      "Company registration certificate for entity registrations",
    ],
  },
  {
    slug: "passport-immigration",
    title: "Passport & Immigration",
    short: "Passports, eTA, permits, residency and citizenship",
    summary:
      "Immigration files fail on detail. Our team reviews every supporting document against current Directorate of Immigration requirements before submission, books your biometrics appointment and tracks the file to collection.",
    audience: "Travellers, expatriate employees, diaspora Kenyans, students and families",
    authority: "Directorate of Immigration Services · eCitizen",
    items: [
      {
        name: "Passport Application & Tracking",
        turnaround: "10–21 working days",
        detail:
          "First issue applications, appointment booking, biometrics preparation and tracking.",
      },
      {
        name: "Passport Renewal & Replacement",
        turnaround: "7–15 working days",
        detail: "Expired, damaged and lost passport replacement with police abstract.",
      },
      {
        name: "Kenya Electronic Travel Authorisation (eTA)",
        turnaround: "Same day – 3 days",
        detail: "Official entry authorisation to enter Kenya for international travellers.",
      },
      {
        name: "Visitor Visa & Pass Extensions",
        turnaround: "3–7 working days",
        detail: "Extension of tourist visits and entry passes at Nyayo House.",
      },
      {
        name: "Work Permits (Class A–M)",
        turnaround: "30–90 working days",
        detail: "Application, justification letters, investment proof and permit renewals.",
      },
      {
        name: "Permanent Residency Applications",
        turnaround: "60–180 working days",
        detail:
          "PR applications for investors, work permit holders and spouses of Kenyan citizens.",
      },
      {
        name: "Citizenship & Dual Citizenship Declaration",
        turnaround: "60–180 working days",
        detail:
          "Kenyan citizenship applications, regaining citizenship and dual citizenship registration.",
      },
      {
        name: "Student & Dependant Passes",
        turnaround: "21–60 working days",
        detail: "Institution and family sponsorship documentation.",
      },
      {
        name: "Special Pass & Alien Card",
        turnaround: "14–30 working days",
        detail: "Short-term authorisation and foreign national registration.",
      },
    ],
    requirements: [
      "Original national ID, birth certificate or passport copy",
      "Parents' or guardians' ID copies where applicable",
      "Recent passport photographs on white background",
      "Police abstract for lost documents",
      "Employment contract, investment proof or admission letter for permits and passes",
    ],
  },
  {
    slug: "civil-registration",
    title: "Civil Registration",
    short: "Birth, death, marriage, deed poll and certificate replacement",
    summary:
      "Civil records underpin school admissions, inheritance, travel and pensions. We trace, correct, replace and legalise records held by the Civil Registration Services and the Registrar of Marriages.",
    audience: "Individuals, families, estates, couples and legal representatives",
    authority: "Civil Registration Services · Registrar of Marriages · Office of the AG",
    items: [
      {
        name: "Birth Certificate Application",
        turnaround: "7–21 working days",
        detail: "New applications including late registration.",
      },
      {
        name: "Death Certificate",
        turnaround: "7–21 working days",
        detail: "Registration and certified copies for succession matters.",
      },
      {
        name: "Marriage Certificate Registration",
        turnaround: "14–30 working days",
        detail: "Civil, customary, Christian and Islamic marriage registration.",
      },
      {
        name: "Certificate of No Impediment to Marriage",
        turnaround: "14–30 working days",
        detail:
          "Official marital status search and clearance certificate for overseas or civil weddings.",
      },
      {
        name: "Marriage Certificate Verification & Search",
        turnaround: "5–14 working days",
        detail: "Official registry confirmation for courts, embassies and immigration files.",
      },
      {
        name: "Deed Poll & Change of Name",
        turnaround: "14–30 working days",
        detail:
          "Drafting deed poll, swearing before Commissioner for Oaths, registration and Kenya Gazette publication.",
      },
      {
        name: "Certificate Replacement",
        turnaround: "10–30 working days",
        detail: "Lost or damaged certificate re-issue with records search.",
      },
      {
        name: "Record Correction & Amendment",
        turnaround: "21–45 working days",
        detail: "Name, date and parentage corrections.",
      },
    ],
    requirements: [
      "Birth notification or hospital records where available",
      "Parents' identification documents",
      "Sworn affidavit for late registration or change of name",
      "Police abstract for lost certificates",
    ],
  },
  {
    slug: "ntsa-motor-vehicle",
    title: "NTSA & Motor Vehicle",
    short: "Driving licences, TIMS, transfers and searches",
    summary:
      "Every NTSA transaction now runs through TIMS, and one mismatched detail can freeze a transfer for weeks. We register accounts, reconcile records and complete transfers, renewals and searches on your behalf.",
    audience: "Motorists, dealerships, logistics fleets and buyers",
    authority: "National Transport and Safety Authority · TIMS",
    items: [
      {
        name: "Smart Driving Licence & Endorsements",
        turnaround: "7–21 working days",
        detail:
          "New smart DL issuance, class endorsements (PSV, commercial, heavy) and conversion from the red book.",
      },
      {
        name: "Driving Licence Renewal",
        turnaround: "1–7 working days",
        detail: "1, 3 and 5-year renewals including class additions.",
      },
      {
        name: "TIMS Account Registration",
        turnaround: "Same day – 3 days",
        detail: "Individual and corporate TIMS onboarding and record linking.",
      },
      {
        name: "Logbook Transfer",
        turnaround: "3–14 working days",
        detail: "Buyer and seller coordination through to new logbook issuance.",
      },
      {
        name: "Duplicate Logbook",
        turnaround: "14–30 working days",
        detail: "Replacement of lost or damaged logbooks.",
      },
      {
        name: "Vehicle Search & Inspection Booking",
        turnaround: "Same day",
        detail: "Ownership verification before purchase and inspection scheduling.",
      },
    ],
    requirements: [
      "National ID and KRA PIN",
      "Original logbook for transfers",
      "Sale agreement and transfer forms signed by both parties",
      "Passport photograph for licence issuance",
    ],
  },
  {
    slug: "clearance-vetting",
    title: "Clearance & Vetting",
    short: "Police clearance, good conduct, HELB and SHA/NHIF",
    summary:
      "Employers, embassies and boards increasingly demand clearance evidence. We prepare fingerprint appointments, track certificate issuance and resolve the mismatches that cause rejections.",
    audience: "Job seekers, migrants, contractors, employees and graduates",
    authority: "Directorate of Criminal Investigations · HELB · Social Health Authority (SHA)",
    items: [
      {
        name: "Police Clearance Certificate",
        turnaround: "10–21 working days",
        detail: "Application, fingerprint booking and collection.",
      },
      {
        name: "Certificate of Good Conduct",
        turnaround: "10–21 working days",
        detail: "Including expedited processing for travel deadlines.",
      },
      {
        name: "HELB Compliance Certificate",
        turnaround: "1–7 working days",
        detail: "Clearance certificates for employment and tenders.",
      },
      {
        name: "SHA / NHIF Registration & Compliance",
        turnaround: "1–3 working days",
        detail:
          "Social Health Authority individual onboarding, dependent linking and employer compliance.",
      },
      {
        name: "HELB Loan Application Support",
        turnaround: "Per cycle",
        detail: "First-time and subsequent application preparation.",
      },
      {
        name: "HELB Statement & Repayment Setup",
        turnaround: "1–5 working days",
        detail: "Statements, defaulter resolution and repayment plans.",
      },
      {
        name: "Background Verification Packs",
        turnaround: "5–14 working days",
        detail: "Bundled clearance documents for onboarding.",
      },
    ],
    requirements: [
      "Original national ID and a copy",
      "KRA PIN certificate",
      "Institution admission or graduation details for HELB matters",
      "Payment receipts where applications were previously started",
    ],
  },
  {
    slug: "ngo-society-registration",
    title: "NGO & Society Registration",
    short: "NGOs, societies, trusts, CBOs and foundations",
    summary:
      "Non-profit registration is a governance exercise as much as a filing one. We draft constitutions, structure boards and manage the regulator's queries until your organisation is registered and reporting properly.",
    audience: "NGOs, faith organisations, welfare groups, trusts and foundations",
    authority: "NGO Co-ordination Board · Registrar of Societies · Ministry of Labour",
    items: [
      {
        name: "NGO Registration",
        turnaround: "60–120 working days",
        detail: "Full application, constitution drafting and board vetting support.",
      },
      {
        name: "Society Registration",
        turnaround: "30–60 working days",
        detail: "Clubs, associations, welfare and faith-based societies.",
      },
      {
        name: "CBO Registration",
        turnaround: "14–30 working days",
        detail: "County-level community based organisation registration.",
      },
      {
        name: "Trust Registration & Incorporation",
        turnaround: "45–120 working days",
        detail: "Trust deed drafting and incorporation under the Trustees Act.",
      },
      {
        name: "Annual Returns & Compliance",
        turnaround: "5–14 working days",
        detail: "Regulator reporting, audited returns and change of officials.",
      },
      {
        name: "Constitution & Governance Drafting",
        turnaround: "5–10 working days",
        detail: "Bespoke constitutions aligned to regulator templates.",
      },
    ],
    requirements: [
      "Identification for all proposed officials",
      "Three proposed organisation names",
      "Draft objectives and proposed activities",
      "Minutes of the founding meeting",
      "Physical address and contact details",
    ],
  },
  {
    slug: "tenders-compliance",
    title: "Tenders & Compliance",
    short: "AGPO, NCA, EPRA, permits and county licensing",
    summary:
      "Bid documents are won or lost on completeness. We assemble compliant tender files, maintain your regulatory registrations and diarise every renewal so a lapsed licence never disqualifies you.",
    audience: "Contractors, suppliers, consultancies and licensed operators",
    authority: "PPRA · AGPO · NCA · EPRA · County governments",
    items: [
      {
        name: "Tender Documentation",
        turnaround: "2–7 working days",
        detail: "Full bid document compilation, formatting and submission.",
      },
      {
        name: "AGPO Registration",
        turnaround: "3–10 working days",
        detail: "Youth, women and PWD access to government procurement.",
      },
      {
        name: "NCA Contractor Registration",
        turnaround: "21–60 working days",
        detail: "New registration, upgrades and annual practising licences.",
      },
      {
        name: "EPRA Licensing",
        turnaround: "21–60 working days",
        detail: "Energy sector licences, permits and renewals.",
      },
      {
        name: "Business Permits & County Licensing",
        turnaround: "3–14 working days",
        detail: "Single business permits, health and fire compliance.",
      },
      {
        name: "KEBS & Import/Export Documentation",
        turnaround: "5–30 working days",
        detail: "Standardisation marks, PVoC and export paperwork.",
      },
    ],
    requirements: [
      "Certificate of incorporation and CR12",
      "Valid tax compliance certificate",
      "Audited accounts and bank references",
      "Professional certificates for technical staff",
      "Previous contract award letters where required",
    ],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    short: "Trademarks, copyright and industrial design",
    summary:
      "A brand you have not registered is a brand you can lose. We run availability searches, file applications and monitor the journal so your marks and creative work stay protected.",
    audience: "Brand owners, creatives, publishers and manufacturers",
    authority: "Kenya Industrial Property Institute · Kenya Copyright Board",
    items: [
      {
        name: "Trademark Search",
        turnaround: "3–7 working days",
        detail: "Official availability and conflict search report.",
      },
      {
        name: "Trademark Registration",
        turnaround: "8–14 months",
        detail: "Filing, journal publication monitoring and certificate issuance.",
      },
      {
        name: "Trademark Renewal & Assignment",
        turnaround: "14–60 working days",
        detail: "Ten-year renewals, transfers and licensing records.",
      },
      {
        name: "Copyright Registration",
        turnaround: "14–30 working days",
        detail: "Literary, musical, audiovisual and software works.",
      },
      {
        name: "Industrial Design Registration",
        turnaround: "3–9 months",
        detail: "Protection of product shape, pattern and ornamentation.",
      },
      {
        name: "Patent Filing Support",
        turnaround: "Case by case",
        detail: "Preliminary searches and filing coordination with agents.",
      },
    ],
    requirements: [
      "Clear representation of the mark, logo or work",
      "List of goods and services classes",
      "Applicant identification or company documents",
      "Declaration of ownership or authorship",
    ],
  },
  {
    slug: "authentication-legalisation",
    title: "Authentication & Legalisation",
    short: "Notarisation, affidavits, translation and embassy legalisation",
    summary:
      "Documents crossing borders need a chain of certification that holds up abroad. We manage notarisation, Ministry of Foreign Affairs authentication and embassy legalisation end to end.",
    audience: "Students abroad, migrants, exporters and multinational employers",
    authority: "Office of the Attorney General · Ministry of Foreign Affairs · Embassies",
    items: [
      {
        name: "Document Authentication",
        turnaround: "5–14 working days",
        detail: "Ministry of Foreign Affairs authentication of Kenyan documents.",
      },
      {
        name: "Embassy Legalisation",
        turnaround: "7–21 working days",
        detail: "Consular legalisation for destination-country use.",
      },
      {
        name: "Notarisation & Commissioning",
        turnaround: "Same day",
        detail: "Commissioner for Oaths and notary public services.",
      },
      {
        name: "Affidavits & Statutory Declarations",
        turnaround: "Same day",
        detail: "Drafting and commissioning of sworn statements.",
      },
      {
        name: "Certified True Copies",
        turnaround: "Same day",
        detail: "Certification of academic, corporate and personal documents.",
      },
      {
        name: "Certified Translation",
        turnaround: "2–7 working days",
        detail: "Sworn translation into and out of major languages.",
      },
    ],
    requirements: [
      "Original documents for sighting",
      "Identification of the document holder",
      "Destination country and intended use",
      "Any embassy-specific forms already issued to you",
    ],
  },
];

export const STATS = [
  {
    value: 65,
    suffix: "+",
    label: "Specialised filing categories",
    note: "Covering all major Kenyan registries",
  },
  {
    value: 42000,
    suffix: "+",
    label: "Documents processed",
    note: "Across national and county offices",
  },
  {
    value: 6500,
    suffix: "+",
    label: "Businesses registered",
    note: "Sole proprietors to group holdings",
  },
  {
    value: 98,
    suffix: "%",
    label: "First-submission acceptance",
    note: "Rolling 24-month average",
  },
];

export const INDUSTRIES = [
  { name: "Construction & Infrastructure", note: "NCA grades, tender packs, AGPO" },
  { name: "Healthcare & Pharmacy", note: "Facility licensing, board registrations" },
  { name: "Logistics & Transport", note: "TIMS, fleet records, permits" },
  { name: "Education & Training", note: "Institution registration, HELB, translations" },
  { name: "Hospitality & Tourism", note: "County permits, health compliance" },
  { name: "Agribusiness & Export", note: "KEBS, PVoC, export documentation" },
  { name: "Professional Services", note: "Partnerships, practising certificates" },
  { name: "Non-profit & Development", note: "NGO Board, societies, trusts" },
];

export const PROCESS = [
  {
    step: "01",
    title: "Consultation",
    body: "A 15-minute call or office visit where we establish exactly what you need, what the regulator will demand and what it will cost. No obligation, no vague quotations.",
    duration: "Day 0",
  },
  {
    step: "02",
    title: "Document audit",
    body: "We list every supporting document, check each against current requirements, and flag the gaps before they turn into a rejection. This is where most applications quietly fail.",
    duration: "Day 1",
  },
  {
    step: "03",
    title: "Preparation & filing",
    body: "Forms are completed, fees are paid against official receipts, and the file is lodged with the relevant authority under a reference we share with you.",
    duration: "Day 2–4",
  },
  {
    step: "04",
    title: "Follow-through",
    body: "We physically follow the file, respond to queries, and update you at every status change. You never have to guess where your application sits.",
    duration: "Ongoing",
  },
  {
    step: "05",
    title: "Handover",
    body: "Original documents are handed over in person or by tracked courier, with certified digital copies archived securely for your future filings.",
    duration: "On issue",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "We had failed twice on our own. Swift Doc rebuilt the file, told us plainly what was missing, and the certificate came through in nine days.",
    name: "Wanjiru Kamau",
    role: "Managing Director, Tila Interiors Ltd",
    service: "Company Incorporation",
  },
  {
    quote:
      "Our work permit renewals used to consume an entire month of HR time each year. They now run in the background and we simply receive the approvals.",
    name: "Daniel Otieno",
    role: "Head of People, Lakeside Logistics",
    service: "Work Permits",
  },
  {
    quote:
      "I needed a good conduct certificate and authenticated academic papers for a job in Doha, on a two-week deadline. Everything arrived with four days to spare.",
    name: "Faith Chebet",
    role: "Registered Nurse",
    service: "Clearance & Authentication",
  },
];

export const FAQS = [
  {
    q: "Are you affiliated with the government?",
    a: "No. We are a private documentation services firm. We prepare, lodge and follow up applications on your behalf using the same official channels — eCitizen, iTax, TIMS and the relevant registries. All government fees are paid directly against official receipts, which we hand over to you.",
  },
  {
    q: "How is your fee structured?",
    a: "Every engagement is quoted in two parts: the statutory government fee, and our professional fee for preparation and follow-through. You receive that breakdown in writing before we begin, and it does not change unless the scope changes.",
  },
  {
    q: "Do I have to visit your offices?",
    a: "Not usually. Most files can be handled remotely with scanned documents and a WhatsApp or email exchange. Biometrics, fingerprinting and certain interviews require your personal attendance, and we book those appointments for you.",
  },
  {
    q: "How do you protect my documents?",
    a: "Physical originals are logged, stored in a secured safe and released only against signature. Digital copies are encrypted, access-controlled and retained only for the period necessary for your filings. We never share client documents with third parties without written instruction.",
  },
  {
    q: "What if my application is rejected?",
    a: "We diagnose the reason, correct the file and resubmit at no additional professional fee where the fault lies with our preparation. Where the regulator changes a requirement mid-process, we advise you immediately and quote any additional statutory cost.",
  },
  {
    q: "Can you handle urgent deadlines?",
    a: "Often, yes. Some processes have statutory minimum timelines that no one can shorten, and we will tell you that honestly rather than take your money. Where expedited channels exist, we use them.",
  },
  {
    q: "Do you work with clients outside Nairobi?",
    a: "Yes. A large share of our clients are in other counties or in the diaspora. Documents move by tracked courier and all communication happens digitally.",
  },
  {
    q: "Can you handle Deed Poll (legal change of name) and marriage clearances?",
    a: "Yes. We draft the Deed Poll, coordinate witnessing before a Commissioner for Oaths, register the deed with the Registrar of Documents, and publish the notice in the Kenya Gazette. We also process Certificates of No Impediment to Marriage and official marriage registry searches.",
  },
  {
    q: "How do Kenya eTA, work permits, permanent residency and dual citizenship work?",
    a: "We manage the entire immigration filing cycle with the Directorate of Immigration Services (Nyayo House). For international visitors we process Kenya Electronic Travel Authorisations (eTA); for expats, investors and diaspora Kenyans we handle Class A–M work permits, visitor pass extensions, permanent residency applications and dual citizenship declarations.",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "company-registration-kenya-checklist",
    title: "Registering a company in Kenya: the checklist that prevents rejection",
    excerpt:
      "Most incorporation applications are returned for the same handful of reasons. Here is the document set we assemble before a single form is lodged.",
    category: "Business Registration",
    date: "2026-07-18",
    readTime: "7 min read",
    body: [
      "Company incorporation in Kenya is administratively simple and procedurally unforgiving. The Business Registration Service will return a file for a mismatched PIN name, an unclear identification scan or a name that conflicts with an existing mark — and each return costs you days.",
      "Start with three name options, ordered by preference. Names that describe a regulated activity, imply a government connection, or closely resemble an existing registration will be refused. Run the search before you print letterheads.",
      "Every director and shareholder needs a legible identification document, a KRA PIN certificate whose registered name matches that identification exactly, a passport photograph and a signed consent to act. Foreign directors additionally need a certified passport copy and, in most cases, an alien identification number.",
      "Finally, decide the shareholding structure before filing, not after. Changing shares later is a separate filing with its own fee and timeline, and banks will query a structure that has been amended within weeks of incorporation.",
    ],
  },
  {
    slug: "tax-compliance-certificate-blocked",
    title: "Why your Tax Compliance Certificate keeps failing",
    excerpt:
      "A TCC request is refused because of what sits in your iTax ledger, not because of the request itself. Read the ledger first.",
    category: "KRA & Tax",
    date: "2026-06-30",
    readTime: "6 min read",
    body: [
      "A Tax Compliance Certificate is generated automatically when your ledger is clean. If it is not being issued, something on the ledger is unresolved — and re-applying does not change that.",
      "The most common causes are dormant obligations that were never de-registered, nil returns that were never filed for periods when the business was inactive, and penalties accrued on an obligation the taxpayer did not know was active.",
      "Pull a full ledger statement for every obligation before doing anything else. Reconcile payments to the correct period. Where penalties are genuinely disputable, an objection or waiver application is the route — not another certificate request.",
      "Plan for this well before a tender deadline. Ledger clean-ups routinely take two to three weeks; the certificate itself takes minutes.",
    ],
  },
  {
    slug: "passport-application-timelines-2026",
    title: "Passport applications in 2026: realistic timelines and what delays them",
    excerpt:
      "Booking the appointment is the easy part. These are the details that quietly add weeks to a passport file.",
    category: "Immigration",
    date: "2026-06-12",
    readTime: "5 min read",
    body: [
      "The published processing window for a first-issue Kenyan passport does not begin at application; it begins at successful biometric capture. Anything that delays capture delays the entire file.",
      "Name inconsistencies between the birth certificate, national identification and application form are the single largest cause of delay. Resolve those first, through a civil registration amendment if necessary.",
      "Lost passport replacements require a police abstract and, frequently, an interview. Build an additional two weeks into any travel plan that depends on one.",
      "Collect promptly. Uncollected passports are returned to central storage, and retrieving them is slower than the original issuance.",
    ],
  },
  {
    slug: "agpo-registration-guide",
    title: "AGPO registration: unlocking the 30% procurement reservation",
    excerpt:
      "Youth, women and persons with disability qualify for a reserved share of government procurement. The registration itself is straightforward — staying eligible is not.",
    category: "Tenders",
    date: "2026-05-27",
    readTime: "8 min read",
    body: [
      "The Access to Government Procurement Opportunities programme reserves thirty per cent of public procurement spend for enterprises owned by youth, women or persons with disability. Registration produces a certificate that procuring entities verify directly.",
      "Eligibility rests on ownership and management composition, and it is verified against your CR12. A shareholding change can silently disqualify you mid-contract.",
      "You will need a valid tax compliance certificate, a business registration certificate, a CR12 for limited companies, and identification for all owners. Certificates are issued for two years and lapse without notice.",
      "Registration is only the entry ticket. Winning requires a complete, well-formatted bid file with current statutory attachments — which is where most first-time AGPO suppliers lose.",
    ],
  },
  {
    slug: "logbook-transfer-tims",
    title: "Transferring a logbook on TIMS without losing three weeks",
    excerpt:
      "Vehicle transfers stall on record mismatches between buyer, seller and the NTSA database. Check these before money changes hands.",
    category: "NTSA",
    date: "2026-05-09",
    readTime: "6 min read",
    body: [
      "A TIMS transfer requires both parties to hold active, correctly linked TIMS accounts. If the seller's account was created with a different identification number than the one on the logbook, the transfer cannot be initiated at all.",
      "Run a vehicle search before paying. It reveals the registered owner, any recorded encumbrance and whether the record carries a caveat.",
      "Once initiated, the seller must approve the transfer in their account. Buyers regularly discover at this point that the seller has lost access to the phone number tied to the account.",
      "Confirm insurance and inspection status separately. A clean transfer on a vehicle that fails inspection is not a completed purchase.",
    ],
  },
  {
    slug: "document-authentication-abroad",
    title: "Getting Kenyan documents accepted abroad",
    excerpt:
      "Notarisation, authentication and legalisation are three different steps. Skipping one means the document is refused at the other end.",
    category: "Authentication",
    date: "2026-04-21",
    readTime: "5 min read",
    body: [
      "A Kenyan academic transcript is not automatically valid abroad. It generally requires certification by the issuing institution, notarisation, authentication by the Ministry of Foreign Affairs, and finally legalisation by the destination country's mission in Nairobi.",
      "Each step depends on the previous one being executed correctly, and each mission has its own presentation rules — margin stamps, translation requirements, and fee payment channels differ substantially.",
      "Kenya is not party to the Apostille Convention in the way many applicants assume, so an apostille alone is frequently insufficient. Confirm the destination requirement before starting.",
      "Allow four to six weeks for a full chain, longer where sworn translation is involved.",
    ],
  },
];

export const NAV = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/about" },
  { label: "Insights", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;
