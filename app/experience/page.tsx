import { Timeline } from '@/components/ui/timeline';
import { SectionTitle } from '@/components/ui/section-title';
import { experiences } from '@/lib/data';

export const metadata = {
  title: 'Experience',
};

export default function ExperiencePage() {
  const timelineItems = experiences.map((exp) => ({
    period: exp.period,
    title: exp.title,
    subtitle: exp.company,
    location: exp.location,
    tags: ['Laravel', 'PHP', 'Git'],
    details: exp.responsibilities.map((r) => ({ type: 'text' as const, content: r })),
  }));

  return (
    <section className="section-padding">
      <div className="max-width-content mx-auto section-padding-x">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey in software engineering."
        />
        <Timeline items={timelineItems} />
      </div>
    </section>
  );
}
