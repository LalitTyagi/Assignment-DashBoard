import type { ProgressBarProps } from "./types";


export default function ProgressBar({ value, label }: ProgressBarProps) {
  return (
    <div className="space-y-1">
      {label && <p className="text-xs text-textMuted">{label}</p>}
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label={label ?? 'Progress'}
        className="w-full h-1.5 rounded-full bg-slate-800"
      >
        <div
          className="h-full rounded-full bg-neonBlue shadow-neonBlue"
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-xs text-textMuted">{value}%</span>
    </div>
  );
}
