import type { Faq } from '@/components/cmmc/BuyerPage';

/**
 * CMMC market (location) pages: /cmmc/locations/<slug>.
 *
 * Truthfulness rules for every entry (owner-approved 2026-11-04):
 * - Galaxy works remotely and on site by arrangement from its Fort Washington, Maryland base.
 *   Never claim a local office, a local phone number or "serving X since".
 * - Hubs are well-known public installations and industry clusters, listed for orientation only.
 *   No invented statistics and no client names.
 * - Galaxy advises; C3PAOs certify. No "best", "#1" or "certified CMMC" wording.
 */

export type Hub = { name: string; area: string };

export type Market = {
  slug: string;
  /** Display name, e.g. "San Antonio, TX". Also the breadcrumb label. */
  name: string;
  /** Short name used in running copy, e.g. "San Antonio". */
  short: string;
  /** Home market (DC, Maryland, Virginia): within reach of Fort Washington for on-site work. */
  home: boolean;
  /** Search result title, 60 characters or fewer. */
  title: string;
  /** Meta description, 155 characters or fewer. */
  description: string;
  h1: string;
  /** Answer-first paragraph under the H1. */
  intro: string;
  /** Market-specific paragraphs about the local defense industrial base. */
  body: string[];
  hubs: Hub[];
  /** Market-specific FAQs; the office and advises-not-certifies FAQs are added on every page. */
  faqs: Faq[];
  /** schema.org areaServed for the Service schema. */
  areaServed: object[];
  /** One line for the /cmmc/locations index. */
  line: string;
};

export const LOCATIONS_UPDATED = { iso: '2026-11-04', label: 'November 4, 2026' };

const state = (name: string) => ({ '@type': 'State', name });
const city = (name: string, st: string) => ({ '@type': 'City', name, containedInPlace: state(st) });

const REMOTE_FAQ = (where: string): Faq => ({
  q: `Can you support a ${where} company remotely?`,
  a: 'Yes. Scoping workshops, interviews and evidence review run well by video and secure file share, and on-site time can be arranged when a visit helps.',
});

export const markets: Market[] = [
  // ── Home markets ──
  {
    slug: 'washington-dc',
    name: 'Washington, DC',
    short: 'Washington, DC',
    home: true,
    title: 'CMMC Compliance in Washington, DC | Galaxy Consulting',
    description: 'CMMC compliance help for Washington, DC defense contractors: Level 1 and Level 2 gap assessments, SSP and SPRS support from a veteran-owned RPO.',
    h1: 'CMMC Compliance for Washington, DC Defense Contractors',
    intro: 'Galaxy Consulting helps defense contractors in Washington, DC work out their CMMC level, close their gaps and prepare their Level 1 or Level 2 self-assessment. We are a veteran-owned Cyber-AB Registered Provider Organization (RPO) based in Fort Washington, Maryland, just south of the District, and we work remotely and on site by arrangement.',
    body: [
      'Washington is where much of the Department of Defense’s headquarters work happens, and many of the firms that support it are small professional services, IT, engineering and facilities companies. Their contracts and subcontracts increasingly carry DFARS 252.204-7012 and the CMMC clause, DFARS 252.204-7021.',
      'In the District itself, Joint Base Anacostia-Bolling and the Washington Navy Yard sit alongside federal headquarters across the city, with the Pentagon just over the Potomac in Arlington. For a DC firm, CMMC usually arrives one of two ways: directly in a prime award, or as a flow-down from a larger prime that needs its subcontractors to show they protect Federal Contract Information (FCI) or Controlled Unclassified Information (CUI).',
      'DC contractors often hold several contracts with different clauses at once. The first job is to read those clauses together and set one sensible scope, so you do not build a Level 2 environment where Level 1 is all you need.',
    ],
    hubs: [
      { name: 'The Pentagon (Arlington, VA)', area: 'Department of Defense headquarters' },
      { name: 'Washington Navy Yard', area: 'Naval Sea Systems Command (NAVSEA) headquarters' },
      { name: 'Joint Base Anacostia-Bolling', area: 'Joint Navy and Air Force base; Defense Intelligence Agency headquarters' },
      { name: 'Fort Lesley J. McNair', area: 'Army installation and National Defense University' },
      { name: 'Fort Meade (MD)', area: 'NSA, U.S. Cyber Command and the Defense Information Systems Agency (DISA)' },
    ],
    faqs: [
      {
        q: 'Do DC contractors that only provide professional services need CMMC?',
        a: 'If your DoD contract or subcontract has you handle Federal Contract Information or Controlled Unclassified Information on your own systems, CMMC applies to you whatever service you provide. Level 1 covers FCI and Level 2 covers CUI.',
      },
      {
        q: 'Can you work with our team in person in DC?',
        a: 'Yes, by arrangement. Galaxy Consulting is based in Fort Washington, Maryland, just south of the District, and works on site across DC, Maryland and Northern Virginia as well as remotely.',
      },
    ],
    areaServed: [{ '@type': 'AdministrativeArea', name: 'District of Columbia' }, city('Washington', 'District of Columbia')],
    line: 'Headquarters, program offices and the small firms that support them, close to our Fort Washington base.',
  },
  {
    slug: 'maryland',
    name: 'Maryland',
    short: 'Maryland',
    home: true,
    title: 'CMMC Consultant in Maryland | Fort Washington-Based RPO',
    description: 'Maryland CMMC consultant based in Fort Washington: Level 1 and Level 2 gap assessments, SSP, POA&M and SPRS support for defense contractors statewide.',
    h1: 'CMMC Consulting for Maryland Defense Contractors',
    intro: 'Galaxy Consulting is a veteran-owned Cyber-AB Registered Provider Organization (RPO) based in Fort Washington, Maryland. We help Maryland defense contractors scope their CMMC level, run a gap assessment and prepare their Level 1 or Level 2 self-assessment, working remotely and on site by arrangement.',
    body: [
      'Maryland has one of the densest concentrations of defense and intelligence work in the country. Fort Meade, home to the National Security Agency, U.S. Cyber Command and the Defense Information Systems Agency (DISA), anchors a large cluster of cyber and IT firms along the Baltimore-Washington corridor.',
      'Elsewhere in the state, Naval Air Station Patuxent River supports naval aviation test and evaluation in St. Mary’s County, Aberdeen Proving Ground supports Army test and research in Harford County, and Joint Base Andrews and Naval Surface Warfare Center Indian Head sit close to our own office in Prince George’s and Charles counties.',
      'The suppliers around these installations include engineering, software, manufacturing, construction and facilities firms. Many are small businesses that first meet CMMC through a prime contractor’s flow-down clause and must decide whether they handle FCI only, or CUI as well.',
    ],
    hubs: [
      { name: 'Fort Meade', area: 'NSA, U.S. Cyber Command and DISA' },
      { name: 'Naval Air Station Patuxent River', area: 'Naval aviation research, test and evaluation (NAVAIR)' },
      { name: 'Aberdeen Proving Ground', area: 'Army test, evaluation and research' },
      { name: 'Joint Base Andrews', area: 'Air Force base in Prince George’s County' },
      { name: 'Naval Surface Warfare Center Indian Head', area: 'Navy energetics and explosive ordnance work in Charles County' },
    ],
    faqs: [
      {
        q: 'Where in Maryland does Galaxy Consulting work on site?',
        a: 'Galaxy Consulting is based in Fort Washington, Maryland, and works on site by arrangement across the state, as well as remotely. Southern Maryland, the Baltimore-Washington corridor and the Fort Meade area are all within reach.',
      },
      {
        q: 'We are a small subcontractor near Fort Meade. Where do we start?',
        a: 'Start with your clauses. We read your contract and any flow-downs with you, work out whether you hold FCI or CUI, and set the smallest sensible scope before any gap assessment begins.',
      },
    ],
    areaServed: [state('Maryland')],
    line: 'Our home state: Fort Meade, Pax River, Aberdeen and the Baltimore-Washington corridor.',
  },
  {
    slug: 'virginia',
    name: 'Northern Virginia',
    short: 'Northern Virginia',
    home: true,
    title: 'CMMC Consultant in Northern Virginia | Galaxy Consulting',
    description: 'CMMC consultant for Northern Virginia defense contractors: scoping, Level 1 and Level 2 gap assessments, SSP and SPRS support from a veteran-owned RPO.',
    h1: 'CMMC Consulting for Northern Virginia and Virginia Contractors',
    intro: 'Galaxy Consulting helps Northern Virginia defense contractors determine their CMMC level, run a NIST SP 800-171 gap assessment and prepare their self-assessment. We are a veteran-owned Cyber-AB Registered Provider Organization (RPO) based in Fort Washington, Maryland, across the Potomac, and we work remotely and on site by arrangement.',
    body: [
      'Northern Virginia is home to the Pentagon, Fort Belvoir, the Defense Logistics Agency and the National Geospatial-Intelligence Agency, and to the headquarters of several of the largest defense prime contractors. The corridors through Arlington, Tysons, Reston, Herndon and Chantilly hold government contractors of every size, from global primes to small subcontractors.',
      'That makes CMMC flow-downs a daily fact of life here. A prime that must protect CUI under DFARS 252.204-7012 passes those requirements, and the CMMC level, down to its subcontractors. If you are a small firm on a prime’s team, expect to be asked for your SPRS score and your CMMC status.',
      'Further south, Marine Corps Base Quantico, Naval Surface Warfare Center Dahlgren and the Hampton Roads naval hub around Norfolk support their own supplier bases. We support contractors across Virginia, with on-site work most practical in Northern Virginia.',
    ],
    hubs: [
      { name: 'The Pentagon (Arlington)', area: 'Department of Defense headquarters' },
      { name: 'Fort Belvoir', area: 'Defense Logistics Agency headquarters; NGA campus nearby in Springfield' },
      { name: 'Marine Corps Base Quantico', area: 'Marine Corps training, education and systems acquisition' },
      { name: 'Naval Surface Warfare Center Dahlgren', area: 'Navy weapons and systems research and development' },
      { name: 'Hampton Roads / Naval Station Norfolk', area: 'Major Navy fleet hub, shipbuilding and ship repair' },
    ],
    faqs: [
      {
        q: 'Our prime asked for our SPRS score. What does that mean?',
        a: 'Your SPRS score comes from a self-assessment against the 110 requirements of NIST SP 800-171. It starts at 110 and loses 1, 3 or 5 points for each requirement not met. Primes ask for it to confirm that subcontractors handling CUI meet DFARS 252.204-7019 and 7020.',
      },
      {
        q: 'Do you work on site in Northern Virginia?',
        a: 'Yes, by arrangement. Galaxy Consulting is based in Fort Washington, Maryland, across the Potomac from Northern Virginia, and works on site across Maryland, DC and Northern Virginia as well as remotely.',
      },
    ],
    areaServed: [state('Virginia'), { '@type': 'AdministrativeArea', name: 'Northern Virginia' }],
    line: 'The Pentagon, Fort Belvoir, Quantico and the prime-contractor corridors of Northern Virginia.',
  },

  // ── Demand markets (remote, on site by arrangement) ──
  {
    slug: 'san-antonio-tx',
    name: 'San Antonio, TX',
    short: 'San Antonio',
    home: false,
    title: 'CMMC Compliance Services in San Antonio, TX | Galaxy',
    description: 'CMMC compliance services for San Antonio defense contractors: Level 1 and Level 2 gap assessments, SSP and SPRS support, delivered remotely by an RPO.',
    h1: 'CMMC Compliance Services for San Antonio, Texas Contractors',
    intro: 'Galaxy Consulting provides CMMC compliance services to defense contractors in San Antonio: scoping your CMMC level, a Level 1 or Level 2 gap assessment, your System Security Plan and SPRS support. We are a veteran-owned Cyber-AB Registered Provider Organization (RPO) based in Fort Washington, Maryland, and we work with San Antonio firms remotely and on site by arrangement.',
    body: [
      'San Antonio is one of the largest military communities in the country. Joint Base San Antonio brings together Lackland, Randolph and Fort Sam Houston, and JBSA-Lackland is home to Sixteenth Air Force (Air Forces Cyber), which gives the city a deep cyber and intelligence workforce.',
      'Port San Antonio, on the former Kelly Air Force Base, hosts aerospace maintenance, cybersecurity and technology companies, and Fort Sam Houston is home to Brooke Army Medical Center and Army medical training. Around them is a broad base of IT, engineering, logistics, aircraft maintenance and medical-support contractors.',
      'Many of those firms handle CUI such as technical data, maintenance records or controlled program information, which puts them in CMMC Level 2 scope. Others only handle FCI and need Level 1. Working out which applies is the first step.',
    ],
    hubs: [
      { name: 'Joint Base San Antonio (Lackland, Randolph, Fort Sam Houston)', area: 'Air Force training, cyber and Army medical missions' },
      { name: 'Sixteenth Air Force (Air Forces Cyber), JBSA-Lackland', area: 'Air Force cyber, intelligence and information warfare' },
      { name: 'Port San Antonio', area: 'Aerospace maintenance, cybersecurity and technology campus' },
      { name: 'Brooke Army Medical Center, Fort Sam Houston', area: 'Army medical care and training' },
    ],
    faqs: [
      {
        q: 'Can a CMMC gap assessment for a San Antonio company be done remotely?',
        a: 'Yes. Scoping workshops, interviews and evidence review all run well by video and secure file share. If a walk-through of your facility helps, we can arrange on-site time.',
      },
      {
        q: 'Which CMMC level do San Antonio aerospace and maintenance suppliers need?',
        a: 'It follows the information you handle. If you hold CUI such as controlled technical data, plan for Level 2 and the 110 NIST SP 800-171 requirements. If you only hold FCI, Level 1 and its 17 practices apply.',
      },
    ],
    areaServed: [city('San Antonio', 'Texas'), state('Texas')],
    line: 'Joint Base San Antonio, Air Forces Cyber and the aerospace and cyber firms at Port San Antonio.',
  },
  {
    slug: 'hawaii',
    name: 'Honolulu, Hawaii',
    short: 'Hawaii',
    home: false,
    title: 'CMMC Level 1 & Gap Assessment Services in Honolulu, HI',
    description: 'CMMC Level 1, Level 2 and gap assessment services for Honolulu and Hawaii defense contractors, delivered remotely by a veteran-owned Cyber-AB RPO.',
    h1: 'CMMC Level 1, Level 2 and Gap Assessment Services in Honolulu, Hawaii',
    intro: 'Galaxy Consulting provides CMMC Level 1 and Level 2 services to defense contractors in Honolulu and across Hawaii, starting with a gap assessment that shows where you stand and what to fix first. We are a veteran-owned Cyber-AB Registered Provider Organization (RPO) based in Fort Washington, Maryland, working with Hawaii firms remotely and on site by arrangement.',
    body: [
      'Oahu is the center of U.S. military activity in the Pacific. U.S. Indo-Pacific Command is headquartered at Camp H.M. Smith, and Joint Base Pearl Harbor-Hickam, Pearl Harbor Naval Shipyard, Schofield Barracks and Marine Corps Base Hawaii at Kaneohe Bay together support a large local base of contractors.',
      'Those contractors include construction and facilities firms, ship repair and maintenance companies, IT and communications providers, and professional services firms. Many are small local businesses working as subcontractors to larger primes, and many are meeting CMMC for the first time through a flow-down clause.',
      'For most of them the question is Level 1 or Level 2. A firm that only handles FCI needs the 17 Level 1 practices and an annual self-assessment; a firm that handles CUI, such as drawings or technical data, needs the 110 requirements of Level 2. We schedule remote sessions in Hawaii business hours.',
    ],
    hubs: [
      { name: 'U.S. Indo-Pacific Command (Camp H.M. Smith)', area: 'Combatant command for the Indo-Pacific region' },
      { name: 'Joint Base Pearl Harbor-Hickam', area: 'Joint Navy and Air Force base' },
      { name: 'Pearl Harbor Naval Shipyard', area: 'Navy ship and submarine maintenance and repair' },
      { name: 'Schofield Barracks', area: 'Army installation, home of the 25th Infantry Division' },
      { name: 'Marine Corps Base Hawaii (Kaneohe Bay)', area: 'Marine Corps air and ground units' },
    ],
    faqs: [
      {
        q: 'What do CMMC Level 1 services for a Hawaii contractor include?',
        a: 'A review of your clauses and scope, a gap assessment against the 17 Level 1 practices, help closing the gaps, and support with your annual self-assessment and affirmation in SPRS.',
      },
      {
        q: 'Can you support a Honolulu company across the time difference?',
        a: 'Yes. We schedule workshops and interviews in Hawaii business hours and share evidence over a secure file share. On-site time on Oahu can be arranged when it helps.',
      },
    ],
    areaServed: [city('Honolulu', 'Hawaii'), state('Hawaii')],
    line: 'Honolulu and Oahu: INDOPACOM, Pearl Harbor-Hickam, the shipyard and Schofield Barracks.',
  },
  {
    slug: 'san-diego-ca',
    name: 'San Diego, CA',
    short: 'San Diego',
    home: false,
    title: 'CMMC RPO & Compliance Services in San Diego, CA',
    description: 'CMMC compliance for San Diego defense contractors from a Cyber-AB Registered Provider Organization (RPO): gap assessments, SSP and SPRS help, remote.',
    h1: 'CMMC RPO and Compliance Services for San Diego Contractors',
    intro: 'Galaxy Consulting is a veteran-owned Cyber-AB Registered Provider Organization (RPO) that helps San Diego defense contractors prepare for CMMC: scoping, a Level 1 or Level 2 gap assessment, documentation and self-assessment support. We are based in Fort Washington, Maryland, and work with San Diego firms remotely and on site by arrangement.',
    body: [
      'San Diego is one of the Navy’s most important homes. Naval Base San Diego, Naval Air Station North Island and Naval Base Point Loma are all here, and so is the headquarters of Naval Information Warfare Systems Command (NAVWAR), which acquires the Navy’s communications and information systems.',
      'Around them sit a shipbuilding and ship repair industry on San Diego Bay, an electronics, communications and software cluster that supports NAVWAR, and Marine Corps installations at Camp Pendleton and Miramar. That supplier base reaches from large primes down to small machine shops and engineering firms.',
      'Much of that work involves CUI, which means CMMC Level 2 and the 110 requirements of NIST SP 800-171. An RPO helps you get ready; the official Level 2 certification, when your contract requires one, is conducted by an authorized C3PAO.',
    ],
    hubs: [
      { name: 'Naval Base San Diego', area: 'Principal homeport of the Pacific Fleet' },
      { name: 'Naval Information Warfare Systems Command (NAVWAR)', area: 'Navy communications and information systems acquisition' },
      { name: 'Naval Air Station North Island', area: 'Naval aviation and aircraft carrier homeport' },
      { name: 'Marine Corps Base Camp Pendleton and MCAS Miramar', area: 'Marine Corps ground and aviation units' },
      { name: 'San Diego Bay shipyards', area: 'Navy shipbuilding and ship repair' },
    ],
    faqs: [
      {
        q: 'What does a CMMC RPO do for a San Diego contractor?',
        a: 'An RPO advises and prepares. We help you scope your environment, find and close gaps against NIST SP 800-171, write your SSP and POA&M, and prepare for your self-assessment or C3PAO assessment. We do not conduct the official assessment.',
      },
      {
        q: 'Do NAVWAR suppliers need CMMC Level 2?',
        a: 'Often, because much of that work involves CUI. Your level is set by the information you handle and the clause in your contract, so we start by reading your contract and flow-downs with you.',
      },
    ],
    areaServed: [city('San Diego', 'California'), state('California')],
    line: 'Naval Base San Diego, NAVWAR, North Island and the San Diego Bay shipyards.',
  },
  {
    slug: 'seattle-wa',
    name: 'Seattle, WA',
    short: 'Seattle',
    home: false,
    title: 'CMMC Consultant in Seattle, WA & the Tri-Cities',
    description: 'CMMC consulting for Seattle, Puget Sound and Tri-Cities (Kennewick, Richland) contractors: gap assessments, SSP and SPRS help from a remote Cyber-AB RPO.',
    h1: 'CMMC Consulting for Seattle, Puget Sound and Tri-Cities Contractors',
    intro: 'Galaxy Consulting helps defense contractors in Seattle, the Puget Sound region and the Tri-Cities (Kennewick, Richland and Pasco) prepare for CMMC: scoping, a gap assessment, documentation and self-assessment support. We are a veteran-owned Cyber-AB Registered Provider Organization (RPO) based in Fort Washington, Maryland, working remotely and on site by arrangement.',
    body: [
      'Puget Sound has a large military footprint: Joint Base Lewis-McChord south of Tacoma, Naval Base Kitsap and Puget Sound Naval Shipyard on the Kitsap Peninsula, and Naval Air Station Whidbey Island to the north. Aerospace manufacturing, including Boeing’s Puget Sound operations, supports a deep supplier base of machine shops, composites, electronics and engineering firms.',
      'In eastern Washington, the Tri-Cities are home to Pacific Northwest National Laboratory in Richland, a Department of Energy laboratory, and to the Hanford Site. CMMC is a DoD program, so it reaches Tri-Cities firms through their DoD contracts and subcontracts.',
      'Whether you are a Seattle software firm supporting the Navy or a Kennewick security compliance firm with a DoD subcontract, the first question is the same: what information do you handle, and which CMMC level does that call for?',
    ],
    hubs: [
      { name: 'Joint Base Lewis-McChord', area: 'Major Army and Air Force installation near Tacoma' },
      { name: 'Naval Base Kitsap', area: 'Navy submarine and surface fleet base' },
      { name: 'Puget Sound Naval Shipyard (Bremerton)', area: 'Navy ship and submarine maintenance' },
      { name: 'Naval Air Station Whidbey Island', area: 'Navy electronic attack and patrol aviation' },
      { name: 'Pacific Northwest National Laboratory (Richland)', area: 'Department of Energy national laboratory in the Tri-Cities' },
    ],
    faqs: [
      {
        q: 'Does CMMC apply to Tri-Cities firms that mostly do Department of Energy work?',
        a: 'CMMC is a DoD program, so it applies to your DoD contracts and subcontracts. Department of Energy work has its own requirements. If you hold both, we help you scope the DoD work so CMMC covers what it needs to.',
      },
      REMOTE_FAQ('Seattle-area'),
    ],
    areaServed: [city('Seattle', 'Washington'), city('Kennewick', 'Washington'), city('Richland', 'Washington'), state('Washington')],
    line: 'Seattle and Puget Sound (JBLM, Kitsap, Whidbey) and the Tri-Cities around Kennewick and Richland.',
  },
  {
    slug: 'dallas-fort-worth-tx',
    name: 'Dallas-Fort Worth, TX',
    short: 'Dallas-Fort Worth',
    home: false,
    title: 'CMMC Compliance in Dallas-Fort Worth, TX | Galaxy',
    description: 'CMMC compliance for Dallas-Fort Worth and Austin defense suppliers: Level 1 and Level 2 gap assessments, SSP and SPRS support from a remote Cyber-AB RPO.',
    h1: 'CMMC Compliance for Dallas-Fort Worth Defense Suppliers',
    intro: 'Galaxy Consulting helps Dallas-Fort Worth defense suppliers prepare for CMMC: scoping your level, a Level 1 or Level 2 gap assessment, your SSP and POA&M, and SPRS support. We are a veteran-owned Cyber-AB Registered Provider Organization (RPO) based in Fort Washington, Maryland, and work with Texas firms remotely and on site by arrangement.',
    body: [
      'The Dallas-Fort Worth area is one of the largest aerospace and defense manufacturing centers in the country. Lockheed Martin’s Fort Worth plant builds the F-35, Naval Air Station Joint Reserve Base Fort Worth sits beside it, and Bell, Raytheon and other primes run major operations across the Metroplex.',
      'Behind those primes is a long supply chain of machine shops, electronics makers, composites and software firms. Manufacturing suppliers often handle controlled technical data, drawings and specifications, which is CUI and puts them in CMMC Level 2 scope.',
      'We also support contractors in Austin and elsewhere in Texas remotely. If a prime has sent you a CMMC flow-down or asked for your SPRS score, we start by reading the clause with you.',
    ],
    hubs: [
      { name: 'Lockheed Martin Fort Worth', area: 'F-35 fighter production' },
      { name: 'Naval Air Station Joint Reserve Base Fort Worth', area: 'Joint reserve aviation base' },
      { name: 'Bell (Fort Worth area)', area: 'Military rotorcraft and tiltrotor aircraft' },
      { name: 'Raytheon (North Texas)', area: 'Defense electronics and sensors' },
    ],
    faqs: [
      {
        q: 'Our machine shop makes parts from customer drawings. Do we need Level 2?',
        a: 'Possibly. Controlled technical drawings and specifications are usually CUI, which calls for CMMC Level 2. If your drawings carry CUI markings or your contract includes DFARS 252.204-7012, plan for Level 2.',
      },
      {
        q: 'Do you work with Austin contractors too?',
        a: 'Yes. We support contractors in Austin and across Texas remotely, with on-site time by arrangement.',
      },
    ],
    areaServed: [city('Dallas', 'Texas'), city('Fort Worth', 'Texas'), city('Austin', 'Texas'), state('Texas')],
    line: 'Lockheed Martin Fort Worth, NAS JRB Fort Worth, Bell, Raytheon and their supply chains; Austin too.',
  },
  {
    slug: 'missouri',
    name: 'Missouri',
    short: 'Missouri',
    home: false,
    title: 'CMMC Consultant in Missouri: St. Louis & Kansas City',
    description: 'CMMC consultant for Missouri defense contractors in St. Louis and Kansas City: gap assessments, SSP and SPRS support from a remote, veteran-owned RPO.',
    h1: 'CMMC Consulting for Missouri Contractors in St. Louis and Kansas City',
    intro: 'Galaxy Consulting helps Missouri defense contractors, from St. Louis to Kansas City, scope their CMMC level, run a gap assessment and prepare their Level 1 or Level 2 self-assessment. We are a veteran-owned Cyber-AB Registered Provider Organization (RPO) based in Fort Washington, Maryland, working remotely and on site by arrangement.',
    body: [
      'St. Louis is a major aerospace center: Boeing’s defense business builds military aircraft there, and the National Geospatial-Intelligence Agency runs a large western campus in the city. Across the river in Illinois, Scott Air Force Base is home to U.S. Transportation Command and Air Mobility Command, which draw logistics and IT contractors from across the metro area.',
      'Elsewhere in the state, Whiteman Air Force Base, home of the B-2 bomber, sits east of Kansas City, and Fort Leonard Wood in the Ozarks hosts the Army’s engineer, military police and chemical schools. Kansas City adds its own manufacturing and engineering firms that supply the defense industrial base.',
      'For many Missouri suppliers the question is whether a prime’s flow-down calls for Level 1 or Level 2. We read the clause with you and set the smallest scope that meets it.',
    ],
    hubs: [
      { name: 'Boeing St. Louis', area: 'Military aircraft design and production' },
      { name: 'Scott Air Force Base (IL, St. Louis metro)', area: 'U.S. Transportation Command and Air Mobility Command' },
      { name: 'NGA West (St. Louis)', area: 'National Geospatial-Intelligence Agency campus' },
      { name: 'Whiteman Air Force Base', area: 'B-2 bomber base east of Kansas City' },
      { name: 'Fort Leonard Wood', area: 'Army engineer, military police and CBRN training' },
    ],
    faqs: [
      {
        q: 'We supply a St. Louis prime. Why are they asking about CMMC?',
        a: 'Primes must flow CMMC and DFARS safeguarding requirements down to subcontractors that handle FCI or CUI. They ask so they can confirm their supply chain meets the level the contract requires.',
      },
      REMOTE_FAQ('Kansas City'),
    ],
    areaServed: [state('Missouri'), city('St. Louis', 'Missouri'), city('Kansas City', 'Missouri')],
    line: 'Boeing St. Louis, Scott AFB nearby, NGA West, Whiteman AFB and Fort Leonard Wood.',
  },
  {
    slug: 'colorado',
    name: 'Colorado',
    short: 'Colorado',
    home: false,
    title: 'CMMC Compliance in Colorado: Denver & Colorado Springs',
    description: 'CMMC compliance for Colorado defense and space contractors in Denver and Colorado Springs: gap assessments, SSP and SPRS help from a remote Cyber-AB RPO.',
    h1: 'CMMC Compliance for Colorado Contractors in Denver and Colorado Springs',
    intro: 'Galaxy Consulting helps Colorado defense and space contractors in Denver, Colorado Springs and across the Front Range prepare for CMMC: scoping, a Level 1 or Level 2 gap assessment, documentation and self-assessment support. We are a veteran-owned Cyber-AB Registered Provider Organization (RPO) based in Fort Washington, Maryland, working remotely and on site by arrangement.',
    body: [
      'Colorado is a center of U.S. military space. Peterson and Schriever Space Force Bases in Colorado Springs and Buckley Space Force Base in Aurora carry out satellite operations, missile warning and space domain missions, and Peterson is home to NORAD and U.S. Northern Command. Fort Carson and the U.S. Air Force Academy add Army and Air Force missions.',
      'The Denver area has a large aerospace industry, including Lockheed Martin Space and other spacecraft and satellite makers, with a supply chain of engineering, software, electronics and test firms along the Front Range.',
      'Space and satellite work commonly involves CUI such as controlled technical data, which calls for CMMC Level 2. We help you confirm your level and prepare for it.',
    ],
    hubs: [
      { name: 'Peterson Space Force Base (Colorado Springs)', area: 'NORAD and U.S. Northern Command headquarters; space operations' },
      { name: 'Schriever Space Force Base', area: 'Satellite command and control' },
      { name: 'Buckley Space Force Base (Aurora)', area: 'Missile warning and space-based sensing' },
      { name: 'Fort Carson', area: 'Major Army installation south of Colorado Springs' },
      { name: 'Denver-area aerospace industry', area: 'Spacecraft, satellites and their suppliers' },
    ],
    faqs: [
      {
        q: 'Do space and satellite suppliers in Colorado need CMMC Level 2?',
        a: 'Often, because their work involves controlled technical data, which is CUI. Your level depends on the information you handle and the clause in your contract, so we start there.',
      },
      REMOTE_FAQ('Colorado Springs'),
    ],
    areaServed: [state('Colorado'), city('Denver', 'Colorado'), city('Colorado Springs', 'Colorado')],
    line: 'Peterson, Schriever and Buckley Space Force Bases, Fort Carson and the Denver aerospace industry.',
  },
  {
    slug: 'los-angeles-ca',
    name: 'Los Angeles, CA',
    short: 'Los Angeles',
    home: false,
    title: 'CMMC Compliance in Los Angeles, CA | Galaxy Consulting',
    description: 'CMMC compliance for Los Angeles aerospace and space suppliers: Level 1 and Level 2 gap assessments, SSP and SPRS help from a remote Cyber-AB RPO.',
    h1: 'CMMC Compliance for Los Angeles Aerospace and Defense Suppliers',
    intro: 'Galaxy Consulting helps Los Angeles aerospace, space and defense suppliers prepare for CMMC: scoping, a Level 1 or Level 2 gap assessment, your SSP and POA&M, and self-assessment support. We are a veteran-owned Cyber-AB Registered Provider Organization (RPO) based in Fort Washington, Maryland, working with Southern California firms remotely and on site by arrangement.',
    body: [
      'Los Angeles is one of the oldest and largest aerospace regions in the country. Space Systems Command, which acquires the Space Force’s satellites and launch services, is headquartered at Los Angeles Air Force Base in El Segundo, and Northrop Grumman, Raytheon, Boeing and many space companies have major operations across the South Bay and beyond.',
      'North of the city, Edwards Air Force Base and the Antelope Valley host flight test and aircraft production, and Naval Base Ventura County supports Navy test and engineering to the west. A large base of small suppliers, from machine shops to software firms, feeds these programs.',
      'Aerospace and space work often involves CUI such as controlled technical data, which puts those suppliers in CMMC Level 2 scope. We help you confirm your level and get ready for your assessment.',
    ],
    hubs: [
      { name: 'Space Systems Command, Los Angeles Air Force Base', area: 'Space Force satellite and launch acquisition' },
      { name: 'Edwards Air Force Base', area: 'Air Force flight test' },
      { name: 'Naval Base Ventura County', area: 'Navy test, evaluation and engineering' },
      { name: 'South Bay and Antelope Valley aerospace', area: 'Northrop Grumman, Raytheon, Boeing and space companies' },
    ],
    faqs: [
      {
        q: 'Do Los Angeles aerospace subcontractors need CMMC?',
        a: 'If you handle FCI or CUI on a DoD contract or subcontract, yes. Controlled technical data is usually CUI, which calls for Level 2. FCI alone calls for Level 1.',
      },
      {
        q: 'Can you support a Southern California company remotely?',
        a: 'Yes. We schedule sessions in Pacific time and review evidence over a secure file share. On-site time can be arranged when it helps.',
      },
    ],
    areaServed: [city('Los Angeles', 'California'), state('California')],
    line: 'Space Systems Command at Los Angeles AFB, Edwards and the South Bay aerospace primes.',
  },
  {
    slug: 'arizona',
    name: 'Arizona',
    short: 'Arizona',
    home: false,
    title: 'CMMC Compliance in Arizona: Phoenix & Tucson | Galaxy',
    description: 'CMMC compliance for Arizona defense contractors in Phoenix, Tucson and Sierra Vista: gap assessments, SSP and SPRS support from a remote Cyber-AB RPO.',
    h1: 'CMMC Compliance for Arizona Defense Contractors',
    intro: 'Galaxy Consulting helps Arizona defense contractors in Phoenix, Tucson and Sierra Vista prepare for CMMC: scoping, a Level 1 or Level 2 gap assessment, documentation and self-assessment support. We are a veteran-owned Cyber-AB Registered Provider Organization (RPO) based in Fort Washington, Maryland, working remotely and on site by arrangement.',
    body: [
      'Arizona has a strong mix of bases and defense industry. Luke Air Force Base west of Phoenix trains F-35 pilots, Davis-Monthan Air Force Base in Tucson hosts attack and rescue aircraft and the military’s aircraft storage and regeneration group, and Fort Huachuca near Sierra Vista is home to the Army Intelligence Center of Excellence.',
      'Tucson is home to a major Raytheon missile operation, and the Phoenix area has large aerospace and defense electronics operations. Yuma Proving Ground and Marine Corps Air Station Yuma add test and aviation missions in the west of the state.',
      'Missile, electronics and aerospace suppliers commonly handle CUI, which calls for CMMC Level 2. We help you confirm your level and close the gaps.',
    ],
    hubs: [
      { name: 'Luke Air Force Base', area: 'F-35 pilot training west of Phoenix' },
      { name: 'Davis-Monthan Air Force Base (Tucson)', area: 'Attack and rescue aviation; aircraft storage and regeneration' },
      { name: 'Fort Huachuca (Sierra Vista)', area: 'Army Intelligence Center of Excellence' },
      { name: 'Raytheon (Tucson)', area: 'Missile design and production' },
      { name: 'Yuma Proving Ground and MCAS Yuma', area: 'Army test and Marine Corps aviation' },
    ],
    faqs: [
      {
        q: 'Do Tucson missile and electronics suppliers need CMMC Level 2?',
        a: 'Often, because their work involves CUI such as controlled technical data. Your level is set by the information you handle and the clause in your contract, so we start by reading it with you.',
      },
      REMOTE_FAQ('Arizona'),
    ],
    areaServed: [state('Arizona'), city('Phoenix', 'Arizona'), city('Tucson', 'Arizona')],
    line: 'Luke and Davis-Monthan Air Force Bases, Fort Huachuca and Raytheon Tucson.',
  },
  {
    slug: 'utah',
    name: 'Utah',
    short: 'Utah',
    home: false,
    title: 'CMMC Compliance in Utah: Ogden & Salt Lake City | Galaxy',
    description: 'CMMC compliance for Utah defense contractors around Hill AFB, Ogden and Salt Lake City: gap assessments, SSP and SPRS support from a remote Cyber-AB RPO.',
    h1: 'CMMC Compliance for Utah Contractors in Ogden and Salt Lake City',
    intro: 'Galaxy Consulting helps Utah defense contractors around Hill Air Force Base, Ogden and Salt Lake City prepare for CMMC: scoping, a Level 1 or Level 2 gap assessment, documentation and self-assessment support. We are a veteran-owned Cyber-AB Registered Provider Organization (RPO) based in Fort Washington, Maryland, working remotely and on site by arrangement.',
    body: [
      'Hill Air Force Base near Ogden is one of the largest employers in the state and home to the Ogden Air Logistics Complex, which maintains and modernizes Air Force aircraft and missiles. Northrop Grumman’s work on the Sentinel intercontinental ballistic missile (formerly GBSD) has added a large engineering presence in northern Utah.',
      'West of Salt Lake City, Dugway Proving Ground and Tooele Army Depot support Army test and munitions missions. Along the Wasatch Front, a supply chain of engineering, software, composites and machining firms supports these programs.',
      'Missile, aircraft and sustainment work regularly involves CUI, which calls for CMMC Level 2. Smaller suppliers that only handle FCI need Level 1. We help you work out which applies.',
    ],
    hubs: [
      { name: 'Hill Air Force Base / Ogden Air Logistics Complex', area: 'Aircraft and missile maintenance and modernization' },
      { name: 'Northrop Grumman Sentinel (formerly GBSD)', area: 'Intercontinental ballistic missile program in northern Utah' },
      { name: 'Dugway Proving Ground', area: 'Army chemical and biological defense testing' },
      { name: 'Tooele Army Depot', area: 'Army munitions storage and maintenance' },
    ],
    faqs: [
      {
        q: 'We support Hill AFB sustainment work. Which CMMC level do we need?',
        a: 'It depends on whether you handle FCI only or CUI such as technical orders and engineering data. CUI calls for Level 2. We read your contract and flow-downs with you to confirm.',
      },
      REMOTE_FAQ('Utah'),
    ],
    areaServed: [state('Utah'), city('Ogden', 'Utah'), city('Salt Lake City', 'Utah')],
    line: 'Hill AFB and the Ogden Air Logistics Complex, the Sentinel program, Dugway and Tooele.',
  },
];

export function getMarket(slug: string): Market | undefined {
  return markets.find((m) => m.slug === slug);
}

/** FAQs every market page carries: where Galaxy works from, and advises-not-certifies. */
export function standardFaqs(m: Market): Faq[] {
  const office: Faq = m.home
    ? {
        q: 'Where is Galaxy Consulting based?',
        a: 'Galaxy Consulting is based in Fort Washington, Maryland, in Prince George’s County just south of DC. We work remotely and on site by arrangement across Maryland, DC and Northern Virginia, and remotely with contractors nationwide.',
      }
    : {
        q: `Does Galaxy Consulting have an office in ${m.short}?`,
        a: `No. Galaxy Consulting is based in Fort Washington, Maryland, and has no office or local phone line in ${m.short}. We work with ${m.short} contractors remotely, and on site by arrangement when a visit helps.`,
      };
  return [...m.faqs, office, CERTIFY_FAQ];
}

/** Galaxy advises; C3PAOs certify. On every market page and the index. */
export const CERTIFY_FAQ: Faq = {
  q: 'Can Galaxy Consulting certify my company for CMMC?',
  a: 'No. Galaxy Consulting advises and prepares; it does not certify. As a Registered Provider Organization (RPO) we help you get ready and support your self-assessment. Official CMMC Level 2 certification assessments are conducted by an authorized C3PAO, and Level 3 assessments by DCMA’s DIBCAC.',
};
