import type { ReactNode } from "react";
import type { SVGProps } from "react";

export function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function TechIcon({ name }: { name: string }) {
  const icons: Record<string, ReactNode> = {
    React: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" opacity="0.2" />
        <path
          d="M12 17.5c-2.33 0-4.31-1.47-5-3.66 1.09-.6 2.45-.94 3.95-.94s2.86.34 3.95.94c-.69 2.19-2.67 3.66-5 3.66z"
          opacity="0.2"
        />
        <path d="M7 12s2-1 5-1 5 1 5 1-2 1-5 1-5-1-5-1z" />
        <path d="M7 8s2 1 5 1 5-1 5-1-2-2-5-2-5 2-5 2z" />
        <path d="M7 16s2 1 5 1 5-1 5-1-2 0-5 0-5 0-5 0z" />
        <path d="M2 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
        <path d="M20 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.3 10.3H13V6h9v9h-5v-4.3c-.3.3-.7.6-1.2.8l-1.5 1.5c1.4.6 3.1 1 4.9 1 2.8 0 5-2.2 5-5 0-1.4-.6-2.7-1.5-3.7-.9 0-1.9-.1-2.7-.2z" />
        <path d="M6.5 9c-.8 0-1.5.7-1.5 1.5S5.7 12 6.5 12s1.5-.7 1.5-1.5S7.3 9 6.5 9zM6.5 5c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
        <circle cx="6.5" cy="8" r="2" />
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M6 2C3.79 2 2 3.79 2 6v12c0 2.21 1.79 4 4 4h3.93c.83-.83.95-1.04.95-1.43V15c0-.28.04-.39.15-.65-2.19-.85-3.84-2.97-3.84-5.35 0-.05.03-.11.07-.15-1.44-.58-2.37-2.13-2.37-3.92 0-.52.13-1 .37-1.7h.03c-.22.65-.37 1.33-.37 2.02 0 2.24 1.76 4.07 4 4.07h.26c1.62-2.54 3.52-4.54 6.12-5.5-.13-.2-.26-.39-.26-.61 0-.19.07-.37.19-.5-.11-.04-.22-.09-.35-.09-2.21 0-4-1.79-4-4s1.79-4 4-4c1.66 0 3.07 1.01 3.71 2.41A7.96 7.96 0 0 1 18 2c1.66 0 3.07 1.01 3.71 2.41A8.96 8.96 0 0 1 22 14v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v8"
          opacity="0.5"
        />
      </svg>
    ),
    JavaScript: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.4 2h6.1c1.5 0 2.6.8 2.6 2.3v2.5c0 .9-.4 1.5-1.2 1.9-.8.4-1.8.5-2.9.5v3.2c0 4.4 2.6 6.8 6.4 6.8h6.4v-2.8H12c-.7 0-1-.2-1-.8v-2.6h8.1V11c0-3.2 1.9-5.1 4.8-5.1v-.3c0-1.5-.8-2.6-2.3-2.6h-6.1V4.3c0-.7.4-1.1 1-1.1h.1V2h-1.6v1H9.7c-.5 0-.8-.4-.8-.8V2.3c0-.8.6-1.3 1.4-1.3h10.1C20.2 0 22 1.8 22 4v16c0 2.2-1.8 4-4 4h-7c-2.2 0-4-1.8-4-4V6C2 4 3.4 4.2 3.4 4.2V2z" />
      </svg>
    ),
    HTML: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 3l.05 2.95h15.9V11l-2 1-2-1V6h-9.9z" />
        <ellipse cx="12" cy="12" fill="currentColor" rx="4" ry="2" />
      </svg>
    ),
    CSS: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 3l.05 2.95h15.9V11l-2 1-2-1V6h-9.9z" />
        <ellipse cx="12" cy="12" fill="currentColor" rx="4" ry="2" />
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 9a4.5 4.5 0 018.83-1.75c.5.5.83 1.13.9 1.85 0 1-1 2-2 2.5-.5.3-1 .5-1.5.5-.8 0-1.5-.2-2-.7C8.6 9.7 8.5 9.3 8.5 9c0-.5.2-1 .6-1.4C10 6.7 10.6 6.3 11 6c-.3-.2-.7-.3-1-.3C9 5.7 8.5 6 8.3 6.5c-.2.5-.1 1 .4 1.5z" />
        <path d="M15 15.5c-.5-.3-1-.5-1.5-.5-.8 0-1.5.3-2 .8.3.5.8 1 1.5 1.3.6.3 1.2.5 1.8.5.3 0 .6-.1.9-.2-.1-.5-.3-1-.7-1.3z" />
      </svg>
    ),
    "Framer Motion": (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
        <path
          fill="none"
          stroke="white"
          strokeWidth="2"
          d="M12 2v10m0 0l3 3m-3-3L9 15m3 3v5"
        />
      </svg>
    ),
    Laravel: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
        <path d="M12 12l8-5v8l-8 5-8-5V7z" />
      </svg>
    ),
    PHP: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.5 4v16h3.5c3 0 5-2 5-5s-2-5-5-5H9.5zm0 5h2c2 0 3 1 3 2.5S13.5 14 11.5 14H9.5V9z" />
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.5 13v-2h1v2c0 .55-.45 1-1 1s-1-.45-1-1zm0-8v6h1V7h-1z" />
      </svg>
    ),
    Express: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h16v2H4zM4 9h16v2H4zM4 14h10v2H4zM4 19h16v2H4z" />
      </svg>
    ),
    Supabase: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 16l-6-3V9l6 3 6-3v6l-6 3z" />
      </svg>
    ),
    PostgreSQL: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
    MySQL: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
    Java: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 2C5.79 2 4 3.79 4 6c0 1.1.45 2.1 1.17 2.83C4.27 9.8 2 11.59 2 14c0 3.31 2.69 6 6 6h6c3.31 0 6-2.69 6-6 0-2.36-1.41-4.34-3.44-5.29C16.36 5.61 15.31 4.41 14 3.73 13.5 2.61 12.31 2 11 2H8zm0 2h3c1.66 0 3 1.34 3 3S11.66 10 10 10H8c-2.21 0-4-1.79-4-4 0-1.32.62-2.5 1.6-3.26C6.67 2.43 7.28 2 8 2z" />
      </svg>
    ),
    SQL: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h16v2H4zM4 9h16v2H4zM4 14h10v2H4zM4 19h16v2H4z" />
      </svg>
    ),
    Git: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
    Docker: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 6h18v2H3zM3 11h18v6a2 2 0 01-2 2H5a2 2 0 01-2-2V11zm12-5h2a2 2 0 012 2v2H5V8a2 2 0 012-2h8z" />
      </svg>
    ),
    Postman: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
    Figma: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 12c0 1.93.79 3.68 2.05 4.95A4.5 4.5 0 0010.5 18h3a4.5 4.5 0 10-.95-7.05A4.47 4.47 0 0010.5 9a4.5 4.5 0 00-3 4z" />
      </svg>
    ),
    Vercel: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l8 18H4L12 2zm0 3.2L6 18h12l-6-12.8z" />
      </svg>
    ),
    "VS Code": (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H8z" />
      </svg>
    ),
    npm: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h16v16H4zM8 8v8h2v-8H8zm4 0v8h6v-8h-6z" />
      </svg>
    ),
    XAMPP: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h16v2H4zM4 9h10v2H4zM4 14h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2V14z" />
      </svg>
    ),
    Composer: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 4h6a1 1 0 011 1v1H8V5a1 1 0 011-1zm-1 3h6v10H8V7zm7 0h3a2 2 0 012 2v6a2 2 0 01-2 2h-3V7z" />
      </svg>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      {icons[name] || <circle cx="12" cy="12" r="4" />}
    </svg>
  );
}
