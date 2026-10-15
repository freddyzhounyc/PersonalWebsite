export const EMAIL = 'freddyzhou06@gmail.com'
export const GITHUB = 'https://github.com/freddyzhounyc'
export const LINKEDIN = 'https://www.linkedin.com/in/freddyzhou'
export const RESUME = 'Freddy_Zhou_TechnicalResume_SUM2027.pdf'

export interface Experience {
  company: string
  short?: string // label for the tab
  logos?: { src: string; alt: string; bleed?: boolean }[]
  role: string
  meta: string
  range: string
  bullets: string[]
  tags: string[]
}

// Text wrapped in **double asterisks** is rendered as a highlight.
export const experience: Experience[] = [
  {
    company: 'Complication',
    logos: [{ src: 'logos/complication.png', alt: 'Complication logo', bleed: true }],
    role: 'Software Engineering Intern',
    meta: 'Startup · New York, NY',
    range: 'Sep 2026 – Present',
    bullets: [
      'Helping get the ground running for a fast-growing **data infrastructure and analytics** startup as an early software engineering intern.',
    ],
    tags: ['Software Engineering', 'Data Infrastructure', 'Analytics', 'Startups'],
  },
  {
    company: 'StayHome Healthcare',
    logos: [{ src: 'logos/stayhome.png', alt: 'StayHome Healthcare logo', bleed: true }],
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
    logos: [{ src: 'logos/handshake.png', alt: 'Handshake logo', bleed: true }],
    role: 'Software Engineering AI Trainer',
    meta: 'Remote · New York, NY',
    range: 'Jun 2026 – Present',
    bullets: [
      'Evaluated and scored multi-turn code completions from frontier large language models (LLMs) spanning diverse software engineering domains, including frontend and backend development, API integration, algorithm design, and debugging.',
      'Increased the number of tasks added to the production data pipeline through a **10% quality score increase** and **30% approval rate increase** by implementing a systematic approach for producing intricate technical rationales.',
      'Reviewed model-generated completions built with modern web development technologies, including React.js, Next.js, and TypeScript, by assessing technical clarity, technical communication, and response quality.',
    ],
    tags: ['LLM Evaluation', 'React.js', 'Next.js', 'TypeScript', 'Code Review'],
  },
  {
    company: 'Google x Basta',
    logos: [{ src: 'logos/google.png', alt: 'Google logo', bleed: true }],
    role: 'Fellow',
    meta: 'Fellowship · New York, NY',
    range: 'Jul 2026 – Sep 2026',
    bullets: [
      'Selected as **1 of 200 students from 1,500 applicants** for a 10-week mentorship with a Google Software Engineer focused on data structures, algorithms, and technical interviews.',
      'Solved **15+ new advanced data structures and algorithms problems** in 1:1 weekly calls, going deep into a variety of technical concepts.',
      'Reinforced pattern recognition through realistic weekly mock interviews with feedback on algorithmic problem solving and time/space complexity analysis.',
    ],
    tags: ['Algorithms', 'Data Structures', 'Complexity Analysis', 'Mock Interviews'],
  },
]

export interface Project {
  title: string
  subtitle: string
  range: string
  blurb: string
  bullets: string[]
  tags: string[]
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
    icon: 'pulse',
    color: '#a3e635',
  },
]

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
  { id: 'honors', label: 'Honors' },
  { id: 'contact', label: 'Contact' },
] as const

export const advancedCoursework = [
  'AP Calculus BC',
  'AP Computer Science A',
  'AP Environmental Science',
  'AP Microeconomics',
  'AP Biology',
  'AP English Language & Composition',
  'AP United States History',
  'AP Physics 1',
  'AP World History: Modern',
]

export const electives = [
  'Computer Science Academy · 2021–2024',
  'Engineering & Robotics Academy · 2020–2021',
]

export const honors = [
  { icon: '🏅', title: "Dean's List", sub: '2024 – Present', color: '#fbbf24' },
  { icon: '🎖️', title: "President's Education Award", sub: 'Outstanding Academic Excellence', color: '#f472b6' },
  { icon: '📚', title: 'AP Scholar with Honor', sub: 'College Board', color: '#22d3ee' },
  { icon: '🏛️', title: 'ARISTA National Honor Society', sub: 'High school', color: '#a3e635' },
  { icon: '🤝', title: 'Google x Basta Fellow', sub: '1 of 200 selected from 1,500 applicants', color: '#fb923c' },
]
