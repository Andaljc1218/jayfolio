import { useTheme } from '@/components/theme-provider';

const skills = {
  frontend: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'HTML',
    'CSS',
    'JavaScript',
  ],
  backend: [
    'Node.js',
    'PostgreSQL',
    'Prisma',
    'API Routes',
    'PHP',
    'MySQL',
  ],
  tools: [
    'Git',
    'Vercel',
    'MDX',
    'Lucide Icons',
    'Next.js',
    'XAMPP',
  ],
  languages: ['Java', 'TypeScript', 'PHP', 'HTML', 'CSS'],
};

const categories = [
  { label: 'Frontend', items: skills.frontend },
  { label: 'Backend', items: skills.backend },
  { label: 'Tools', items: skills.tools },
  { label: 'Languages', items: skills.languages },
];

export default function SkillsMarquee() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {categories.map((category, catIndex) => (
          <div key={category.label} className="mb-12 last:mb-0">
            <h3
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: isDark ? '#525252' : '#a3a3a3' }}
            >
              {category.label}
            </h3>
            <div className="relative overflow-hidden">
              <div
                className="flex gap-6 animate-marquee"
                style={{
                  animationDirection: catIndex % 2 === 0 ? 'normal' : 'reverse',
                }}
              >
                {[...category.items, ...category.items].map((skill, i) => (
                  <span
                    key={`${catIndex}-${i}`}
                    className="shrink-0 inline-flex items-center px-4 py-2 border text-sm font-mono transition-colors"
                    style={{
                      borderColor: isDark ? 'rgba(38, 38, 38, 0.5)' : 'rgba(229, 229, 229, 0.5)',
                      color: isDark ? '#a3a3a3' : '#737373',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 15s;
          }
        }
      `}</style>
    </section>
  );
}