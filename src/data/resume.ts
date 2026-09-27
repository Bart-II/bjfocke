// Single source of truth for the resume content shown on the site.
// Edit this file to update experience, education, skills and so on.

export const profile = {
  name: 'Bart Fokke',
  headline: 'Information Security & Governance',
  subheadline: 'BSc Information Security · Computer Science graduate studies at the University of Twente',
  location: 'Voorschoten, Zuid-Holland, the Netherlands',
  about: [
    'I work at the intersection of information security, governance and policy. I have built incident response processes for the Dutch government and developed cybersecurity capabilities at the NATO Communications and Information Agency.',
    'Alongside a background in security I studied European economics, which shapes how I think about risk, regulation and the organisations behind the technology. I later continued with graduate studies in Computer Science at the University of Twente.',
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/bart-fokke-96167b1b9',
    github: 'https://github.com/Bart-II',
    // TODO: add a public contact email, e.g. 'mailto:you@example.com'
    email: '',
  },
  cv: [
    { label: 'CV (English)', file: 'cv-en.pdf' },
    { label: 'CV (Dutch)', file: 'cv-nl.pdf' },
  ],
};

export interface Role {
  title: string;
  organisation: string;
  period: string;
  /** Short name written next to this role's pen on the event recorder. */
  short: string;
  location?: string;
  summary: string;
}

export const experience: Role[] = [
  {
    title: 'Cybersecurity Capability Development Intern',
    organisation: 'NATO Communications and Information Agency (NCI Agency)',
    period: 'Jul 2023 – Apr 2024',
    short: 'NATO NCI Agency',
    // TODO: describe what you worked on, at the level you are allowed to share.
    summary: 'Graduation internship. Thesis graded 8/10.',
  },
  {
    title: 'Information Security Specialist (intern)',
    organisation: 'Ministry of the Interior – National Office for Identity Data (RvIG)',
    period: 'Aug 2021 – Jan 2022',
    short: 'RvIG security',
    location: 'The Hague',
    summary:
      'Designed and set up a Security Incident Response process and a Self Service Portal tile for reporting security incidents. Contributed to the revision of the information security policy.',
  },
  {
    title: 'Student Ambassador',
    organisation: 'The Hague University of Applied Sciences',
    period: 'Dec 2020 – Feb 2024',
    short: 'Student ambassador',
    location: 'Zoetermeer',
    summary:
      'Guided prospective students through the HBO-ICT specialisations during open days, helped record videos and present livestreams for digital open days, and was part of the social media team.',
  },
];

export interface Study {
  institution: string;
  degree: string;
  period: string;
  /** Short name written next to this study's pen on the event recorder. */
  short: string;
  summary?: string;
}

export const education: Study[] = [
  {
    institution: 'University of Twente',
    degree: 'MSc Computer Science (not completed)',
    period: '2024 – 2026',
    short: 'MSc UTwente',
    summary: 'Completed the pre-master in 2025 and followed MSc coursework. Discontinued in 2026 after relocating.',
  },
  {
    institution: 'University of Amsterdam',
    degree: 'Minor in European Economics',
    period: 'Sep 2022 – Jul 2023',
    short: 'Minor UvA',
    summary: 'Year-long minor covering micro- and macroeconomics, monetary history and political economy.',
  },
  {
    institution: 'The Hague University of Applied Sciences',
    degree: 'BSc Computer and Information Systems Security / Information Assurance',
    period: '2019 – 2024',
    short: 'BSc HHS',
    summary: 'Activities: SIM, Student Ambassador.',
  },
  {
    institution: 'LOI',
    degree: 'Diploma, Programming in Python',
    period: '2019 – 2020',
    short: 'Python LOI',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Security', items: ['Information security policy', 'Incident response', 'OWASP', 'Nmap', 'Wireshark'] },
  { group: 'Programming', items: ['Python', 'SQL', 'Java', 'Bash / shell scripting', 'HTML5', 'CSS'] },
  { group: 'Infrastructure', items: ['Linux', 'Software Defined Networking', 'Git'] },
  { group: 'Ways of working', items: ['Scrum', 'LaTeX'] },
];

// `meter` (0–100) sets the needle on the language meters.
export const languages = [
  { language: 'Dutch', level: 'Native', meter: 100 },
  { language: 'English', level: 'Full professional', meter: 85 },
  { language: 'German', level: 'Basic', meter: 22 },
  { language: 'French', level: 'Basic', meter: 22 },
];

// TODO: replace these placeholders with your own interests.
export const interests = [
  { title: 'Nuclear energy', text: 'Reactors, the engineering behind them and the look of the old control rooms that inspired this site.' },
  { title: 'Economics & policy', text: 'How regulation and economic incentives shape security decisions.' },
  { title: 'Interest placeholder', text: 'Another hobby, sport or topic you follow.' },
];
