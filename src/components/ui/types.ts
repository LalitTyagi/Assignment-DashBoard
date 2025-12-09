export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md';
};

export type ProgressBarProps = {
  value: number;
  label?: string;
};


export type SubjectGlowProps = {
  className?: string;
  color?: 'blue' | 'purple' | 'pink';
};

export type TagChipProps = {
  label: string;
  active?: boolean;
  onClick: () => void;
};