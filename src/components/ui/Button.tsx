import clsx from 'clsx';
import type { ButtonProps } from './types';

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonBlue focus-visible:ring-offset-2 focus-visible:ring-offset-bgDeep';

  const sizeCls = size === 'sm' ? 'px-4 py-1 text-sm' : 'px-6 py-2 text-sm';

  const variantCls =
    variant === 'primary'
      ? 'bg-neonPink text-white shadow-neonPink'
      : variant === 'outline'
      ? 'border border-fuchsia-500 text-white'
      : 'text-textMuted';

  return <button className={clsx(base, sizeCls, variantCls, className)} {...rest} />;
}
