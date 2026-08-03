export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  year: string;
  status: string;
  role: string;
  thumbnail: string;
  github?: string;
  demo?: string;
  featured: boolean;
  href: string;
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  location: string;
  responsibilities: string[];
}

export interface Education {
  period: string;
  degree: string;
  school: string;
  location: string;
  coursework: string[];
  awards?: string[];
}

export interface SkillCategory {
  label: string;
  items: string[];
}
