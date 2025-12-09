import type { Subject, SubjectId } from '../../data/revisionData';
import type { CSSProperties } from 'react';

export type SubjectCarouselProps = {
  subjects: Subject[];
  activeId: SubjectId;
  onChangeActive: (id: SubjectId) => void;
};

export type RevisionDetailPanelProps = { subject: Subject };

export type QuickActionCardProps = {
    title: string;
    color: 'green' | 'blue' | 'purple';
    iconSrc: string;
    onClick?: () => void;
};

export type ButtonTheme = {
    style: CSSProperties;
};

export type SectionTheme = {
    style: React.CSSProperties;
};

export type FilterId = 'all' | 'relearn' | 'byte' | 'detailed' | 'peer';

export type Filter = {
  id: FilterId;
  label: string;
};

export const FILTERS: Filter[] = [
  { id: 'all',       label: 'All' },
  { id: 'relearn',   label: 'Relearn' },
  { id: 'byte',      label: 'Byte' },
  { id: 'detailed',  label: 'Detailed' },
  { id: 'peer',      label: 'Peer' },
];

export type FiltersBarProps = {
  activeFilter: FilterId;
  onChange: (id: FilterId) => void;
};