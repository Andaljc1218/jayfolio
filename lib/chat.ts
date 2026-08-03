import { chatKnowledge } from './constants';

export interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
}

export interface ChatSuggestion {
  label: string;
  query: string;
}

export const chatSuggestions: ChatSuggestion[] = [
  { label: 'Projects', query: 'Tell me about your projects' },
  { label: 'Experience', query: 'What is your work experience?' },
  { label: 'Education', query: 'Where did you study?' },
  { label: 'Tech Stack', query: 'What technologies do you use?' },
  { label: 'Resume', query: 'Can I download your resume?' },
  { label: 'Contact', query: 'How can I contact you?' },
];

const keywordResponses: Record<string, { title: string; content: string }> = {
  about: { title: 'About Me', content: chatKnowledge.about.content },
  name: { title: 'About Me', content: chatKnowledge.about.content },
  who: { title: 'About Me', content: chatKnowledge.about.content },
  focus: { title: 'About Me', content: chatKnowledge.about.content },
  skills: { title: 'Skills', content: chatKnowledge.skills.content },
  tech: { title: 'Skills', content: chatKnowledge.skills.content },
  technology: { title: 'Skills', content: chatKnowledge.skills.content },
  stack: { title: 'Skills', content: chatKnowledge.skills.content },
  project: { title: 'Projects', content: chatKnowledge.projects.content },
  projects: { title: 'Projects', content: chatKnowledge.projects.content },
  foundit: { title: 'FoundIT', content: chatKnowledge.projects.content },
  experience: { title: 'Experience', content: chatKnowledge.experience.content },
  work: { title: 'Experience', content: chatKnowledge.experience.content },
  intern: { title: 'Experience', content: chatKnowledge.experience.content },
  education: { title: 'Education', content: chatKnowledge.education.content },
  university: { title: 'Education', content: chatKnowledge.education.content },
  study: { title: 'Education', content: chatKnowledge.education.content },
  resume: { title: 'Resume', content: chatKnowledge.resume.content },
  download: { title: 'Resume', content: chatKnowledge.resume.content },
  contact: { title: 'Contact', content: chatKnowledge.contact.content },
  email: { title: 'Contact', content: chatKnowledge.contact.content },
  reach: { title: 'Contact', content: chatKnowledge.contact.content },
  hello: {
    title: 'Hi there!',
    content:
      "Hello! I'm Jaja. I can tell you about Jaycee's projects, experience, education, tech stack, resume, or how to contact them. What would you like to know?",
  },
  hi: {
    title: 'Hi there!',
    content:
      "Hello! I'm Jaja. I can tell you about Jaycee's projects, experience, education, tech stack, resume, or how to contact them. What would you like to know?",
  },
};

export function getResponse(input: string): string {
  const lower = input.toLowerCase();

  for (const [keyword, response] of Object.entries(keywordResponses)) {
    if (lower.includes(keyword)) {
      return response.content;
    }
  }

  return "I'm not sure about that. Try asking about Jaycee's skills, projects, experience, education, resume, or how to contact them.";
}
