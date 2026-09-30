export const EMAIL = 'freddyzhou06@gmail.com'
export const GITHUB = 'https://github.com/freddyzhounyc'
export const LINKEDIN = 'https://www.linkedin.com/in/freddyzhou'
export const RESUME = 'Freddy_Zhou_TechnicalResume_SUM2027.pdf'

export interface Experience {
  company: string
  role: string
  meta: string
  range: string
  bullets: string[]
  tags: string[]
}

// Text wrapped in **double asterisks** is rendered as a highlight.
export const experience: Experience[] = [
  {
    company: 'StayHome Healthcare',
    role: 'Software Engineer',
    meta: 'Startup · New York, NY',
    range: 'May 2026 – Present',
    bullets: [
      'Owned end-to-end development of a full stack telehealth system by designing and implementing React client-side features and Spring Boot backend services, building REST APIs, optimizing request caching, and validating API response data.',
      'Eliminated manual build verification by establishing a CI pipeline using GitHub Actions and Docker that runs Gradle builds and **20+ integration tests** on every pull request.',
      'Eliminated server-side session storage by implementing a **stateless JWT-based authentication** service with Spring Security, custom authentication filters, and token-validation business logic.',
    ],
    tags: ['React.js', 'Spring Boot', 'Spring Security', 'JWT', 'GitHub Actions', 'Docker', 'Gradle'],
  },
  {
    company: 'Handshake AI',
    role: 'Software Engineering AI Trainer',
    meta: 'Remote · New York, NY',
    range: 'Jun 2026 – Present',
    bullets: [
      'Evaluated and scored multi-turn code completions from frontier large language models across frontend and backend development, API integration, algorithm design, and debugging.',
      'Increased tasks added to the production data pipeline by achieving a **10% quality score increase** and **30% approval rate increase** through a systematic approach to writing intricate technical rationales.',
      'Reviewed model-generated completions built with React.js, Next.js, and TypeScript, assessing technical clarity, communication, and response quality.',
    ],
    tags: ['LLM Evaluation', 'React.js', 'Next.js', 'TypeScript', 'Code Review'],
  },
  {
    company: 'Google x Basta',
    role: 'Fellow',
    meta: 'New York, NY',
    range: 'Mar 2026 – Present',
    bullets: [
      'Solved **15+ new advanced data structures and algorithms problems** in 1:1 weekly calls with a Google Software Engineer mentor, going deep into a variety of technical concepts.',
      'Reinforced pattern recognition and problem solving through realistic weekly mock interviews with feedback on algorithmic problem solving and time/space complexity analysis.',
    ],
    tags: ['Algorithms', 'Data Structures', 'Complexity Analysis', 'Mock Interviews'],
  },
  {
    company: 'Stony Brook University',
    role: 'Object-Oriented Programming Teaching Assistant',
    meta: 'Stony Brook, NY',
    range: 'Jan 2026 – May 2026',
    bullets: [
      'Facilitated two weekly 90-minute laboratory sessions for **30+ students**, refining course skills through problem sets and hands-on assistance.',
      'Mentored **20+ students** in weekly 4-hour office hours, strengthening foundational object-oriented proficiency and guiding them through complex programming problems.',
    ],
    tags: ['Java', 'OOP', 'Teaching', 'Mentoring'],
  },
]

export interface Project {
  title: string
  subtitle: string
  range: string
  blurb: string
  bullets: string[]
  tags: string[]
  filters: string[]
  icon: 'music' | 'book' | 'pulse'
  color: string
  latency?: { before: number; after: number }
}

export const projects: Project[] = [
  {
    title: 'Playlister',
    subtitle: 'Spotify Clone',
    range: 'Dec 2025 – Mar 2026',
    blurb: 'Full stack music app with a React frontend and Express backend.',
    bullets: [
      'Lets users save **1,000+ songs** while staying fast through optimized Sequelize queries.',
      'Minimized user-induced errors with foolproof UI logic that disables operations in risky scenarios.',
      'Eliminated prop drilling across **3+ component layers** using React context and hooks.',
    ],
    tags: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL'],
    filters: ['React', 'JavaScript', 'PostgreSQL'],
    icon: 'music',
    color: '#f472b6',
  },
  {
    title: 'Library REST API',
    subtitle: 'Spring Boot',
    range: 'Jul 2025 – Aug 2025',
    blurb: 'A layered RESTful API supporting all CRUD operations.',
    bullets: [
      'Achieved over **99% endpoint reliability** through rigorous integration testing.',
      'Cut GET retrieval latency by **88% (44ms → 5ms)** with the pagination design pattern.',
      'Layered architecture (not a monolith) paves the way for a future move to microservices.',
    ],
    tags: ['Java', 'Spring Boot', 'PostgreSQL'],
    filters: ['Java', 'Spring Boot', 'PostgreSQL'],
    icon: 'book',
    color: '#22d3ee',
    latency: { before: 44, after: 5 },
  },
  {
    title: 'Telehealth Platform',
    subtitle: 'StayHome Healthcare',
    range: 'May 2026 – Present',
    blurb: 'Full stack telehealth system built on the job.',
    bullets: [
      'React client features plus Spring Boot REST services with request caching and response validation.',
      'Stateless JWT authentication with custom Spring Security filters.',
      'GitHub Actions + Docker CI running **20+ integration tests** per pull request.',
    ],
    tags: ['React.js', 'Spring Boot', 'Docker', 'GitHub Actions'],
    filters: ['React', 'Spring Boot', 'Java'],
    icon: 'pulse',
    color: '#a3e635',
  },
]

export const projectFilters = ['All', 'React', 'Spring Boot', 'PostgreSQL', 'Java', 'JavaScript']

export const skillGroups: { title: string; skills: string[] }[] = [
  { title: 'Languages', skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'C++', 'C', 'HTML', 'CSS', 'OCaml', 'SQL', 'Swift'] },
  { title: 'Frameworks & Libraries', skills: ['React.js', 'Node.js', 'Spring Boot', 'Express.js', 'Material UI'] },
  { title: 'Technologies & Tools', skills: ['Git', 'GitHub', 'GitHub Actions', 'MySQL', 'PostgreSQL', 'MongoDB', 'Docker', 'Gradle'] },
]

export const coursework = [
  'Software Development',
  'Systems Fundamentals I',
  'Systems Fundamentals II',
  'Analysis of Algorithms',
  'Data Structures & Algorithms',
  'Foundations of Computer Science',
  'Programming Abstractions',
]

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const
