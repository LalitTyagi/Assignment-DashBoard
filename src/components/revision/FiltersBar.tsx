
import type { FC } from 'react';
import Repeate from '../../assets/icons/Repeate.svg';
import { type FiltersBarProps } from './types';
import { FILTERS } from './helper';

const FiltersBar: FC<FiltersBarProps> = ({ activeFilter, onChange }) => {
  return (
    <div
      role="radiogroup"
      aria-label="Filter revision subjects"
      className="flex flex-wrap items-center gap-3"
    >
      {FILTERS.map((filter) => {
        const isActive = filter.id === activeFilter;

        const baseClasses =
          'inline-flex items-center gap-2 rounded px-5 py-2 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonBlue focus-visible:ring-offset-2 focus-visible:ring-offset-bgDeep transition';

        const activeClasses =
          'bg-gradient-to-r from-[#ff2df0] to-[#7f5dff] text-white shadow-[0_0_18px_rgba(180,60,255,0.85)]';

        const inactiveClasses =
          'border border-[#C33BFF] text-white/85 bg-transparent hover:bg-[#17082c]';

        return (
          <button
            key={filter.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(filter.id)}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
          >
            <span className="flex h-4 w-4 items-center justify-center">
              <img
                src={Repeate}
                alt=""
                aria-hidden="true"
                className="h-3 w-3 object-contain"
              />
            </span>
            <span>{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FiltersBar;
