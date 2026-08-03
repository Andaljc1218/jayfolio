import ProjectGrid from '@/components/project/project-grid';
import { SectionTitle } from '@/components/ui/section-title';

export const metadata = {
  title: 'Projects',
};

export default function ProjectsPage() {
  return (
    <section className="section-padding">
      <div className="max-width-content mx-auto section-padding-x">
        <SectionTitle
          title="Selected Work"
          subtitle="A collection of projects I've built, ranging from full-stack web applications to console-based systems."
        />
        <ProjectGrid />
      </div>
    </section>
  );
}
