import { useState } from 'react';
import AppLayout from '../components/layout/AppLayout';
import FiltersBar from '../components/revision/FiltersBar';
import RevisionDetailPanel from '../components/revision/RevisionDetailPanel';
import { subjects, type SubjectId } from '../data/revisionData';
import SubjectCarousel from '../components/revision/SubjectCarousel';
import UpcomingExams from '../assets/icons/UpcomingExams.svg';
import ExamRevision from '../assets/icons/ExamRevision.svg';
import KnowledgeVault from '../assets/icons/KnowledgeVault.svg';
import QuickActionCard from '../components/revision/QuickActionCard';
import Vector from '../assets/images/Vector.svg';
import type { FilterId } from '../components/revision/types';

export default function RevisionDashboard() {
  const [activeSubjectId, setActiveSubjectId] = useState<SubjectId>('social-science');

  // if you want filter state as well:
  const [activeFilter, setActiveFilter] = useState<FilterId>('all');

  const activeSubject = subjects.find((s) => s.id === activeSubjectId)!;

  return (
    <AppLayout>
      <section className="flex-1 space-y-8" aria-labelledby="today-heading">
        {/* Back button */}
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1
                     text-xs font-medium text-white hover:bg-white/10
                     focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-neonBlue focus-visible:ring-offset-2
                     focus-visible:ring-offset-bgDeep"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            ←
          </span>
          <span>Back</span>
        </button>

        {/* Greeting */}
        <header className="text-center space-y-1">
          <h1 className="text-3xl font-semibold">Good Morning, Dev</h1>
          <p className="text-sm text-textMuted">
            You have <span className="text-neonPink">3</span> Revision items today - Finish them to Earn <span className="text-neonPink">+ 120 XP</span>
          </p>
        </header>

        {/* Divider title + filters */}
        <section
          aria-labelledby="today-heading"
          className="mt-6 flex flex-col items-center gap-4"
        >
          <div className="flex items-center justify-center gap-6">
            
            {/* left glow line (mirrored)*/}
            <img
              src={Vector}
              alt=""
              aria-hidden="true"
              className="h-5 w-40 object-contain opacity-70"
              style={{ transform: 'scaleX(-1)' }}
            />

            <h2
              id="today-heading"
              className="text-sm font-semibold tracking-[0.08em] uppercase"
            >
              Today&apos;s Revision Subjects
            </h2>

            {/* right glow line */}
            <img
              src={Vector}
              alt=""
              aria-hidden="true"
              className="h-5 w-40 object-contain opacity-70"
              
            />
          </div>

          {/* Filter chips centered */}
          <FiltersBar
            activeFilter={activeFilter}
            onChange={setActiveFilter}
          />
        </section>

        {/* Carousel + details */}
        <SubjectCarousel
          subjects={subjects}
          activeId={activeSubjectId}
          onChangeActive={setActiveSubjectId}
        />
        <div className="mt-auto pt-4">
          <RevisionDetailPanel subject={activeSubject} />
        </div>
      </section>

      {/* Right-side quick actions unchanged */}
      <aside className="w-72 space-y-4" aria-label="Quick actions">
        <QuickActionCard
          title="Exam Revision"
          iconSrc={ExamRevision}
          color="green"
        />
        <QuickActionCard
          title="Upcoming exams"
          iconSrc={UpcomingExams}
          color="blue"
        />
        <QuickActionCard
          title="Knowledge Vault"
          iconSrc={KnowledgeVault}
          color="purple"
        />
      </aside>
    </AppLayout>
  );
}
