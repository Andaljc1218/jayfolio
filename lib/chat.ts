import { chatKnowledge } from './constants';

export interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
}

const keywordResponses: Record<string, { title: string; content: string }> = {
  about: { title: 'About Me', content: chatKnowledge.about.content },
  name: { title: 'About Me', content: chatKnowledge.about.content },
  who: { title: 'About Me', content: chatKnowledge.about.content },
  skills: { title: 'Skills', content: chatKnowledge.skills.content },
  tech: { title: 'Skills', content: chatKnowledge.skills.content },
  technology: { title: 'Skills', content: chatKnowledge.skills.content },
  project: { title: 'Projects', content: chatKnowledge.projects.content },
  projects: { title: 'Projects', content: chatKnowledge.projects.content },
  experience: { title: 'Experience', content: chatKnowledge.experience.content },
  work: { title: 'Experience', content: chatKnowledge.experience.content },
  intern: { title: 'Experience', content: chatKnowledge.experience.content },
  education: { title: 'Education', content: chatKnowledge.education.content },
  university: { title: 'Education', content: chatKnowledge.education.content },
  resume: { title: 'Resume', content: chatKnowledge.resume.content },
  download: { title: 'Resume', content: chatKnowledge.resume.content },
  contact: { title: 'Contact', content: chatKnowledge.contact.content },
  email: { title: 'Contact', content: chatKnowledge.contact.content },
  reach: { title: 'Contact', content: chatKnowledge.contact.content },
  hello: { title: 'Hi there!', content: 'Hello! I can tell you about Jaycee&apos;s work, skills, experience, education, or projects. What would you like to know?' },
  hi: { title: 'Hi there!', content: 'Hello! I can tell you about Jaycee&apos;s work, skills, experience, education, or projects. What would you like to know?' },
  help: { title: 'Help', content: 'Try asking about Jaycee&apos;s background, skills, projects, experience, education, or how to contact them.' },
};

export function getResponse(input: string): string {
  const lower = input.toLowerCase();

  for (const [keyword, response] of Object.entries(keywordResponses)) {
    if (lower.includes(keyword)) {
      return response.content;
    }
  }

  return "I'm not sure about that. Try asking about Jaycee's skills, projects, experience, education, or how to contact them.";
}