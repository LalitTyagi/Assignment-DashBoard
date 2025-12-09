import { REVISION_THEME } from "./helper";
import type { RevisionDetailPanelProps } from "./types";

export default function RevisionDetailPanel({ subject }: RevisionDetailPanelProps) {
  const theme = REVISION_THEME[subject.id] ?? REVISION_THEME.default;

  return (
    <section
      id={`subject-panel-${subject.id}`}
      role="tabpanel"
      aria-labelledby={`subject-tab-${subject.id}`}
      className={`mt-8 rounded-[32px] border 
                  bg-gradient-to-br from-[#020617] via-[#020617] to-[#021622]
                  px-6 py-5 ${theme.panel}`}
    >
      {/* Panel header */}
      <header className="mb-5 flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{subject.name}</h3>
          <p className="text-xs text-textMuted">
            {subject.lecturesCount} Lectures · ~{subject.approxMinutes} mins
          </p>
        </div>
      </header>

      {/* Topic cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {subject.topics.map((topic) => (
          <article
            key={topic.id}
            className={`relative flex flex-col gap-3 rounded-[26px] border 
                        bg-[#020c16] px-5 py-4 ${theme.card}`}
          >
            {/* Top row: Relearn pill + meta */}
            <header className="flex items-center justify-between text-[11px]">
              <button
                type="button"
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 
                            text-[10px] font-medium text-white shadow-[0_0_14px_rgba(34,211,238,0.75)] 
                            border ${theme.pillBorder}`}
              >
                <span aria-hidden="true" className="text-xs">
                  ↻
                </span>
                <span>Relearn</span>
              </button>

              <div className="flex items-center gap-3 text-[11px] text-textMuted">
                <span className="flex items-center gap-1">
                  <span>Save</span>
                </span>

                <span className="h-4 w-px bg-white/10" aria-hidden="true" />

                <span className="flex items-center gap-1">
                  <span>{topic.durationMinutes} mins</span>
                </span>

                <span className="h-4 w-px bg-white/10" aria-hidden="true" />

                <span>XP: {topic.xp}</span>
              </div>
            </header>

            {/* Middle row: 70% content | 30% play */}
            <div className="flex w-full items-center">
              <div className="flex flex-col w-[70%] gap-3">
                <div className='flex flex-row gap-3'>
                  <div
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl
                             bg-gradient-to-br from-[#0af0ff] to-[#14ffe6] text-black"
                  >
                    <span className="text-lg font-bold">M</span>
                  </div>

                  <div className="flex w-full flex-col">
                    <p className="text-[11px] text-textMuted">Motion</p>
                    <h4 className="text-sm font-semibold">{topic.title}</h4>
                  </div>
                </div>

                {/* Bottom: mastery full width */}
                <div className="mt-3">
                  {/* label + % */}
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-textMuted">Mastery Level</span>
                    <span className="font-semibold text-[#8DF3FF]">
                      {topic.mastery}%
                    </span>
                  </div>

                  {/* progress bar */}
                  <div className="relative mt-1 h-[6px] w-full overflow-hidden rounded-full bg-[#071520]">
                    {/* active bar */}
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${topic.mastery}%`,
                        background: theme.progressGradient,
                        boxShadow: '0 0 14px rgba(0,246,255,0.9)',
                      }}
                    />

                    {/* left glow blob – to mimic Figma’s bright start */}
                    <div
                      className="pointer-events-none absolute left-0 top-1/2 h-3 w-8 -translate-y-1/2 rounded-full blur-[4px]"
                      style={{
                        background: theme.progressGradient,
                        opacity: 0.9,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-[30%] justify-end pr-2">
                <button
                  type="button"
                  className={`relative flex h-12 w-12 items-center justify-center rounded-full ${theme.playGlow}`}
                  aria-label={`Play ${topic.title}`}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400">
                      <span
                        aria-hidden="true"
                        className="ml-0.5 text-[11px] font-bold text-black"
                      >
                        ▶
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}
