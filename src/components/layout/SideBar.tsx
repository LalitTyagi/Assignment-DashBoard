import type { FC } from 'react';
import { useState } from 'react';
import { navItems } from './helper';

const SideBar: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navWidthClass = collapsed ? 'w-16 px-2' : 'w-56 px-4';

  return (
    <nav
      aria-label="Primary"
      className={[
        'hidden min-h-[calc(100vh-4rem)] flex-shrink-0 flex-col justify-between',
        'border-r border-white/5 bg-black/40 pt-6 lg:flex',
        navWidthClass,
      ].join(' ')}
    >
      {/* Top navigation items */}
      <ul className="space-y-2">
        {navItems.map((item) => {
          const isActive = item.active;

          return (
            <li key={item.id} className="relative group">
              <button
                type="button"
                aria-current={isActive ? 'page' : undefined}
                className={[
                  'flex w-full items-center rounded-xl px-3 py-2 text-xs font-medium transition',
                  'focus-visible:outline-none focus-visible:ring-2',
                  'focus-visible:ring-neonBlue focus-visible:ring-offset-2',
                  'focus-visible:ring-offset-bgDeep',
                  collapsed ? 'justify-center gap-0' : 'gap-3 justify-start',
                  isActive
                    ? 'bg-gradient-to-r from-neonPurple to-neonPink text-white'
                    : 'text-textMuted hover:bg-white/5',
                ].join(' ')}
              >
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 object-contain"
                />

                {/* Visible label only when expanded */}
                {!collapsed && <span>{item.label}</span>}

                {/* Keep label readable for screen readers when collapsed */}
                {collapsed && (
                  <span className="sr-only">{item.label}</span>
                )}
              </button>

              {/* Custom tooltip (no title attr) – only in collapsed mode */}
              {collapsed && (
                <div
                  role="status"
                  aria-hidden="true"
                  className="pointer-events-none absolute left-full top-1/2 ml-2 -translate-y-1/2 
                             whitespace-nowrap rounded-lg bg-black/90 px-2 py-1 text-[11px]
                             text-white opacity-0 shadow-lg transition-opacity
                             group-hover:opacity-100"
                >
                  {item.label}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Collapse / expand toggle */}
      <div className="pb-4">
        <button
          type="button"
          onClick={() => setCollapsed((prev) => !prev)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          aria-expanded={!collapsed}
          className={[
            'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
            'bg-white/5 text-xs text-textMuted hover:bg-white/10',
            'focus-visible:outline-none focus-visible:ring-2',
            'focus-visible:ring-neonBlue focus-visible:ring-offset-2',
            'focus-visible:ring-offset-bgDeep',
          ].join(' ')}
        >
          <span aria-hidden="true">{collapsed ? '»' : '«'}</span>
        </button>
      </div>
    </nav>
  );
};

export default SideBar;
