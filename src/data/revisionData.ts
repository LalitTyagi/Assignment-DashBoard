export type SubjectId = 'social-science' | 'maths' | 'physics';

export type TopicType = 'Relearn' | 'Detailed' | 'Byte' | 'Peer';

export interface MotionTopic {
  id: string;
  title: string;
  category: TopicType;
  mastery: number; // 0–100
  durationMinutes: number;
  xp: number;
}

export interface Subject {
  id: SubjectId;
  name: string;
  lecturesCount: number;
  approxMinutes: number;
  progressPercent: number;
  xpReward: number;
  color: 'blue' | 'purple' | 'pink';
  topics: MotionTopic[];
}

export const subjects: Subject[] = [
  {
    id: 'social-science',
    name: 'Social Science',
    lecturesCount: 2,
    approxMinutes: 35,
    progressPercent: 0,
    xpReward: 15,
    color: 'blue',
    topics: [
      {
        id: 'linear-motion',
        title: 'Linear Motion',
        category: 'Relearn',
        mastery: 60,
        durationMinutes: 35,
        xp: 20,
      },
      {
        id: 'circular-motion',
        title: 'Circular Motion',
        category: 'Detailed',
        mastery: 99,
        durationMinutes: 35,
        xp: 20,
      },
    ],
  },
  {
    id: 'maths',
    name: 'Maths',
    lecturesCount: 2,
    approxMinutes: 35,
    progressPercent: 0,
    xpReward: 15,
    color: 'purple',
    topics: [
      {
        id: 'algebra-basics',
        title: 'Algebra Basics',
        category: 'Relearn',
        mastery: 45,
        durationMinutes: 30,
        xp: 18,
      },
      {
        id: 'quadratic-equations',
        title: 'Quadratic Equations',
        category: 'Detailed',
        mastery: 72,
        durationMinutes: 40,
        xp: 25,
      },
    ],
  },
  {
    id: 'physics',
    name: 'Physics',
    lecturesCount: 2,
    approxMinutes: 35,
    progressPercent: 15,
    xpReward: 15,
    color: 'pink',
    topics: [
      {
        id: 'laws-of-motion',
        title: 'Laws of Motion',
        category: 'Relearn',
        mastery: 50,
        durationMinutes: 35,
        xp: 20,
      },
      {
        id: 'work-energy-power',
        title: 'Work, Energy & Power',
        category: 'Detailed',
        mastery: 80,
        durationMinutes: 45,
        xp: 28,
      },
    ],
  },
];

