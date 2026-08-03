import type { Project, Experience, Education, SkillCategory } from './types';

export const projects: Project[] = [
  {
    slug: 'foundit',
    title: 'FoundIT',
    description:
      'A job matching platform connecting students with internship opportunities. Built with Next.js and PostgreSQL.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    year: '2025',
    status: 'Completed',
    role: 'Full Stack Developer',
    thumbnail: '/images/projects/foundit.svg',
    github: 'https://github.com/Andaljc1218/foundit',
    demo: '',
    featured: true,
    href: '/projects/foundit',
  },
  {
    slug: 'jayfolio-v3',
    title: 'JayFolio V3',
    description:
      'A premium portfolio redesign with cinematic motion, dual-theme system, and award-winning UI/UX.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    year: '2026',
    status: 'Ongoing',
    role: 'Designer & Developer',
    thumbnail: '/images/projects/jayfolio-v3.svg',
    github: 'https://github.com/Andaljc1218/jayfolio',
    demo: 'https://jayfolio.vercel.app',
    featured: true,
    href: '/projects/jayfolio-v3',
  },
  {
    slug: 'eco-map',
    title: 'EcoMap',
    description:
      'An Environmental Waste Management and Tracking System for efficient waste management and community coordination.',
    tech: ['PHP', 'HTML', 'CSS', 'MySQL', 'XAMPP'],
    year: '2024',
    status: 'Completed',
    role: 'Full Stack Developer',
    thumbnail: '/images/projects/eco-map.svg',
    github: 'https://github.com/Andaljc1218',
    demo: '',
    featured: true,
    href: '/projects/eco-map',
  },
  {
    slug: 'flash-q',
    title: 'FLASH-Q',
    description:
      'A console-based Java flashcard quiz system for learning and self-assessment.',
    tech: ['Java', 'OOP', 'Console'],
    year: '2024',
    status: 'Completed',
    role: 'Sole Developer',
    thumbnail: '/images/projects/flash-q.svg',
    github: 'https://github.com/Andaljc1218',
    demo: '',
    featured: true,
    href: '/projects/flash-q',
  },
];

export const experiences: Experience[] = [
  {
    period: '2026 – Present',
    title: 'Software Engineering Intern',
    company: 'MindTech Synergy',
    location: 'Remote',
    responsibilities: [
      'Develop web applications using Laravel and PHP',
      'Maintain and optimize backend systems',
      'Collaborate with team using Git workflows',
      'Implement new features and bug fixes',
      'Participate in the full software development lifecycle',
    ],
  },
];

export const educationData: Education[] = [
  {
    period: '2023 – Present',
    degree: 'Bachelor of Science in Computer Science',
    school: 'Batangas State University',
    location: 'Batangas City',
    coursework: [
      'Software Engineering',
      'Database Systems',
      'Web Development',
      'Operating Systems',
      'Data Structures',
      'Algorithms',
      'Object-Oriented Programming',
      'Computer Networks',
    ],
    awards: ["Dean's List — 2024", "Dean's List — 2025"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    label: 'Backend',
    items: ['Laravel', 'PHP', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'MySQL'],
  },
  {
    label: 'Languages',
    items: ['Java', 'PHP', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Docker', 'Postman', 'Figma', 'Vercel', 'XAMPP', 'Composer', 'NPM'],
  },
];
