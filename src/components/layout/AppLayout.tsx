import Sidebar from './SideBar';
import Dashboard from '../../assets/Background/Dashboard.svg';
import type { AppLayoutProps } from './types';

export default function AppLayout({ children }: AppLayoutProps) {
  return (
     <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${Dashboard})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
      }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2
                   focus:bg-black focus:text-white focus:px-3 focus:py-2 rounded"
      >
        Skip to main content
      </a>

      <div className="flex">
        <Sidebar />

        <main
          id="main"
          className="flex-1 px-10 pb-10 pt-4 flex gap-6"
          aria-label="Revision dashboard"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
