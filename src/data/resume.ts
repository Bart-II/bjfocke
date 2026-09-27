// Single source of truth for the resume content shown on the site.
// Edit this file to update experience, education, skills and so on.

export const profile = {
  name: 'Bart Fokke',
  headline: 'Information Security & Governance',
  subheadline: 'MSc Computer Science student at the University of Twente',
  location: 'Voorschoten, Zuid-Holland, the Netherlands',
  about: [
    'I work at the intersection of information security, governance and policy. I have built incident response processes for the Dutch government and developed cybersecurity capabilities at the NATO Communications and Information Agency.',
    'Alongside a background in security I studied European economics, which shapes how I think about risk, regulation and the organisations behind the technology. I am currently completing an MSc in Computer Science at the University of Twente.',
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/bart-fokke-96167b1b9',
    github: 'https://github.com/Bart-II',
    // TODO: add a public contact email, e.g. 'mailto:you@example.com'
    email: '',
  },
  cv: [{ label: 'CV (Dutch)', file: 'cv-nl.pdf' }],
};

export interface Role {
  title: string;
  organisation: string;
  period: string;
  location?: string;
  summary: string;
}

export const experience: Role[] = [
  {
    title: 'Cybersecurity Capability Development Intern',
    organisation: 'NATO Communications and Information Agency (NCI Agency)',
    period: 'Jul 2023 – Apr 2024',
    // TODO: describe what you worked on, at the level you are allowed to share.
    summary: 'Graduation internship. Thesis graded 8/10.',
  },
  {
    title: 'Information Security Specialist (intern)',
    organisation: 'Ministry of the Interior – National Office for Identity Data (RvIG)',
    period: 'Aug 2021 – Jan 2022',
    location: 'The Hague',
    summary:
      'Designed and set up a Security Incident Response process and a Self Service Portal tile for reporting security incidents. Contributed to the revision of the information security policy.',
  },
  {
    title: 'Student Ambassador',
    organisation: 'The Hague University of Applied Sciences',
    period: 'Dec 2020 – Feb 2024',
    location: 'Zoetermeer',
    summary:
      'Guided prospective students through the HBO-ICT specialisations during open days, helped record videos and present livestreams for digital open days, and was part of the social media team.',
  },
];

export interface Study {
  institution: string;
  degree: string;
  period: string;
  summary?: string;
}

export const education: Study[] = [
  {
    institution: 'University of Twente',
    degree: 'MSc Computer Science',
    period: '2024 – 2026',
    summary: 'Pre-master completed in 2025.',
  },
  {
    institution: 'University of Amsterdam',
    degree: 'Minor in European Economics',
    period: 'Sep 2022 – Jul 2023',
    summary: 'Year-long minor covering micro- and macroeconomics, monetary history and political economy.',
  },
  {
    institution: 'The Hague University of Applied Sciences',
    degree: 'BSc Computer and Information Systems Security / Information Assurance',
    period: '2019 – 2024',
    summary: 'Activities: SIM, Student Ambassador.',
  },
  {
    institution: 'LOI',
    degree: 'Diploma, Programming in Python',
    period: '2019 – 2020',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Security', items: ['Information security policy', 'Incident response', 'OWASP', 'Nmap', 'Wireshark'] },
  { group: 'Programming', items: ['Python', 'SQL', 'Java', 'Bash / shell scripting', 'HTML5', 'CSS'] },
  { group: 'Infrastructure', items: ['Linux', 'Software Defined Networking', 'Git'] },
  { group: 'Ways of working', items: ['Scrum', 'LaTeX'] },
];

export const languages = [
  { language: 'Dutch', level: 'Native' },
  { language: 'English', level: 'Full professional' },
  { language: 'German', level: 'Basic' },
  { language: 'French', level: 'Basic' },
];

// TODO: replace these placeholders with your own interests.
export const interests = [
  { title: 'Economics & policy', text: 'How regulation and economic incentives shape security decisions.' },
  { title: 'Interest placeholder', text: 'Describe something you enjoy outside of work or study.' },
  { title: 'Interest placeholder', text: 'Another hobby, sport or topic you follow.' },
];
