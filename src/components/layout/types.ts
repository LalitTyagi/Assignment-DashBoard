export type NavItem = {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
};

export type AppLayoutProps = { children: React.ReactNode };