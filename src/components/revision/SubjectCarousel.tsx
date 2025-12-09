// src/components/revision/SubjectCarousel.tsx
import { SubjectGlow } from '../ui/SubjectGlow';
import type { SubjectCarouselProps } from './types';

// Theme per subject for the bottom controls
type SubjectTheme = {
  percentText: string;
  xpPillBg: string;
  xpPillBorder: string;
  xpPillText: string;
  playOuter: string;
  playMiddle: string;
  playInner: string;
};

const SUBJECT_THEME: Record<string, SubjectTheme> = {
  'social-science': {
    // teal / cyan
    percentText: 'text-[#8DFBFF]',
    xpPillBg: 'bg-[#012630]',
    xpPillBorder: 'border-[#00F6FF]',
    xpPillText: 'text-[#E5FDFF]',
    playOuter: 'bg-[#012733]',
    playMiddle: 'bg-[#023747]',
    playInner: 'bg-[#00F6FF]',
  },
  maths: {
    // purple
    percentText: 'text-[#C9A8FF]',
    xpPillBg: 'bg-[#1A063B]',
    xpPillBorder: 'border-[#A470FF]',
    xpPillText: 'text-[#F5E9FF]',
    playOuter: 'bg-[#1A063B]',
    playMiddle: 'bg-[#2B0C61]',
    playInner: 'bg-[#A470FF]',
  },
  physics: {
    // pink / magenta
    percentText: 'text-[#FF9BE0]',
    xpPillBg: 'bg-[#2A0223]',
    xpPillBorder: 'border-[#FF41A0]',
    xpPillText: 'text-[#FFE5F4]',
    playOuter: 'bg-[#2A0223]',
    playMiddle: 'bg-[#410437]',
    playInner: 'bg-[#FF41A0]',
  },
};

export default function SubjectCarousel({
  subjects,
  activeId,
  onChangeActive,
}: SubjectCarouselProps) {
  const activeIndex = subjects.findIndex((s) => s.id === activeId);

  const handlePrev = () => {
    onChangeActive(
      subjects[(activeIndex - 1 + subjects.length) % subjects.length].id,
    );
  };

  const handleNext = () => {
    onChangeActive(subjects[(activeIndex + 1) % subjects.length].id);
  };

  return (
    <section
      aria-label="Revision subjects"
      className="relative mt-6 flex items-center gap-4"
    >
      {/* Prev arrow */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous subject"
        className="rounded-full bg-bgCard px-2 py-2 text-sm hover:bg-slate-900 
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonBlue"
      >
        ‹
      </button>

      {/* Spheres + bottom controls */}
      <div
        role="tablist"
        aria-label="Subjects"
        className="flex flex-1 justify-center gap-16"
      >
        {subjects.map((subject) => {
          const isActive = subject.id === activeId;
          const glowColor: 'blue' | 'purple' | 'pink' =
            subject.id === 'social-science'
              ? 'blue'
              : subject.id === 'maths'
              ? 'purple'
              : 'pink';

          const theme =
            SUBJECT_THEME[subject.id] ?? SUBJECT_THEME['social-science'];

          return (
            <button
              key={subject.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`subject-panel-${subject.id}`}
              id={`subject-tab-${subject.id}`}
              onClick={() => onChangeActive(subject.id)}
              className="relative flex flex-col items-center focus-visible:outline-none 
                         focus-visible:ring-2 focus-visible:ring-neonBlue rounded-full"
            >
              {/* glowing sphere */}
              <SubjectGlow
                color={glowColor}
                className={`h-44 w-44 transition-transform ${
                  isActive ? 'scale-100' : 'scale-90 opacity-70'
                }`}
              />

              {/* subject text on sphere */}
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center space-y-1">
                <p className="text-sm font-semibold">{subject.name}</p>
                <p className="text-xs text-textMuted">
                  {subject.lecturesCount} Lectures · ~{subject.approxMinutes} mins
                </p>
              </div>

              {/* bottom controls row */}
              <div className="mt-6 flex items-center justify-center gap-3 text-[11px]">
                {/* Percentage */}
                <div className={`flex items-baseline gap-0.5 font-semibold ${theme.percentText}`}>
                  <span className="text-lg leading-none">
                    {subject.progressPercent}
                  </span>
                  <span className="text-[10px] leading-none">%</span>
                </div>

                {/* XP pill */}
                <div
                  className={[
                    'inline-flex items-center rounded-full border px-3 py-1',
                    'text-[10px] font-medium',
                    theme.xpPillBg,
                    theme.xpPillBorder,
                    theme.xpPillText,
                  ].join(' ')}
                >
                  + {subject.xpReward} XP
                </div>

                {/* play icon (static for now – just visual) */}
                <div
                  className={[
                    'flex h-9 w-9 items-center justify-center rounded-full',
                    'shadow-[0_0_12px_rgba(0,0,0,0.6)]',
                    theme.playOuter,
                  ].join(' ')}
                >
                  <div
                    className={[
                      'flex h-7 w-7 items-center justify-center rounded-full border border-white/30',
                      theme.playMiddle,
                    ].join(' ')}
                  >
                    <div
                      className={[
                        'flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white',
                        theme.playInner,
                      ].join(' ')}
                    >
                      <span className="ml-[1px]" aria-hidden="true">
                        ▶
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* action label under controls */}
              <p className="mt-1 text-[11px] text-textMuted">
                {subject.progressPercent === 0 ? 'Start Revision' : 'Continue'}
              </p>
            </button>
          );
        })}
      </div>

      {/* Next arrow */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next subject"
        className="rounded-full bg-bgCard px-2 py-2 text-sm hover:bg-slate-900 
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonBlue"
      >
        ›
      </button>
    </section>
  );
}
