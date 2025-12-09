import type { SubjectGlowProps } from "./types";


export function SubjectGlow({ className, color = 'blue' }: SubjectGlowProps) {
  const stopColor =
    color === 'purple' ? '#7a3cff' : color === 'pink' ? '#ff3bff' : '#32e4ff';

  return (
    <svg
      className={className}
      viewBox="0 0 300 300"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={stopColor} stopOpacity="0.9" />
          <stop offset="70%" stopColor={stopColor} stopOpacity="0.1" />
          <stop offset="100%" stopColor={stopColor} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="150" cy="150" r="120" fill="url(#glow)" />
      <circle
        cx="150"
        cy="150"
        r="95"
        fill="transparent"
        stroke={stopColor}
        strokeWidth="4"
      />
    </svg>
  );
}
