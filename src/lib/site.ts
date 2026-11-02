/**
 * Company identifiers shown on the site. Leave a value empty until the owner supplies it:
 * empty values are never rendered (no placeholders on the live site).
 */
export const SITE_URL = 'https://www.galaxyconsultingllc.com';

export const company = {
  /** SAM.gov CAGE code (owner to supply). */
  cage: '',
  /** SAM.gov Unique Entity ID (owner to supply). */
  uei: '',
  /** NAICS codes Galaxy works under. */
  naics: [
    { code: '541512', label: 'Computer Systems Design Services' },
    { code: '541519', label: 'Other Computer Related Services' },
    { code: '541611', label: 'Administrative & General Management Consulting' },
    { code: '541690', label: 'Other Scientific & Technical Consulting' },
  ],
} as const;

/** Breadcrumb names by path segment prefix. Missing paths fall back to a title-cased segment. */
export const CRUMB_NAMES: Record<string, string> = {
  '/cmmc': 'CMMC',
  '/cmmc/level-1': 'Level 1',
  '/cmmc/level-2': 'Level 2',
  '/cmmc/services': 'Services',
  '/cmmc/faq': 'FAQ',
  '/cmmc/resources': 'Resources',
  '/cmmc/level-2-assessment-cost': 'Level 2 Assessment Cost',
  '/cmmc/c3pao-vs-rpo': 'C3PAO vs RPO',
  '/cmmc/assessment-checklist': 'Assessment Checklist',
  '/cmmc/sprs-score': 'SPRS Score Calculator',
  '/cmmc/dfars-7012-7019-7020-7021': 'DFARS 7012 / 7019 / 7020 / 7021',
  '/cmmc/maryland-dc-virginia': 'Maryland, DC & Virginia',
  '/cmmc/nist-800-171-gap-assessment': 'NIST 800-171 Gap Assessment',
  '/cmmc/construction-facilities-contractors': 'Construction & Facilities',
  '/insights': 'Insights',
  '/insights/cmmc-phase-2-suspension': 'CMMC Phase 2 Suspension',
  '/insights/cmmc-sprs-annual-affirmation': 'SPRS Annual Affirmation',
  '/insights/nist-800-171-gap-assessment': 'NIST 800-171 Gap Assessment',
  '/insights/cmmc-level-2-self-assessment-guide': 'Level 2 Self-Assessment Guide',
  '/insights/what-is-a-cmmc-rpo': 'What Is a CMMC RPO',
  '/insights/cmmc-in-solicitations': 'CMMC in Solicitations',
  '/about': 'About',
  '/certifications': 'Credentials',
  '/past-performance': 'Past Performance',
  '/contact': 'Contact',
  '/services': 'Services',
  '/services/cybersecurity': 'Cybersecurity',
  '/services/it-infrastructure': 'IT Infrastructure',
  '/services/program-management': 'Program Management',
  '/privacy-policy': 'Privacy Policy',
};
