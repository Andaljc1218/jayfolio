import { Timeline } from '@/components/ui/timeline';
import { SectionTitle } from '@/components/ui/section-title';
import { educationData } from '@/lib/data';

export const metadata = {
  title: 'Education',
};

export default function EducationPage() {
  const timelineItems = educationData.map((edu) => ({
    period: edu.period,
    title: edu.degree,
    subtitle: edu.school,
    location: edu.location,
    details: [
      ...edu.coursework.map((c) => ({ type: 'text' as const, content: `Relevant Coursework: ${c}` })),
      ...(edu.awards?.map((a) => ({ type: 'text' as const, content: `Award: ${a}` })) || []),
    ],
  }));

  return (
    <section className="section-padding">
      <div className="max-width-content mx-auto section-padding-x">
        <SectionTitle
          title="Education"
          subtitle="My academic background and relevant coursework."
        />
        <Timeline items={timelineItems} />
      </div>
    </section>
  );
}
