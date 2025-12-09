import type { TagChipProps } from "./types";


export function TagChip({ label, active, onClick }: TagChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`px-4 py-1 rounded-full text-xs font-medium border 
        ${active ? 'bg-neonPurple border-transparent' : 'bg-transparent border-fuchsia-700'}
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonBlue`}
    >
      {label}
    </button>
  );
}
