import LearnAndPractice from '../../assets/icons/LearnAndPractice.svg';
import Revision from '../../assets/icons/Revision.svg';
import DoubtClass from '../../assets/icons/DoubtClass.svg';
import MetaLab from '../../assets/icons/MetaLab.svg';
import Games from '../../assets/icons/Games.svg';
import Leaderboard from '../../assets/icons/Leaderboard.svg';
import type { NavItem } from './types';

export const navItems: NavItem[] = [
  { id: 'learn', label: 'Learn & Practice', icon: LearnAndPractice },
  { id: 'revision', label: 'Revision', icon: Revision, active: true },
  { id: 'doubt', label: 'Doubt Class', icon: DoubtClass },
  { id: 'metalab', label: 'MetaLab', icon: MetaLab },
  { id: 'games', label: 'Games', icon: Games },
  { id: 'leaderboard', label: 'Leaderboard', icon: Leaderboard },
];