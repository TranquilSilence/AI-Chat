import { NavItem, Note, Task, CourseProgress } from '../types';

export const navigationData: NavItem[] = [
  {
    id: 'workbench',
    label: 'Workbench',
    icon: 'Briefcase',
    children: [
      { id: 'workbench', label: 'Sources & AI', icon: 'Brain' }
    ]
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'LayoutDashboard',
    children: [
      { id: 'progress', label: 'Progress Overview', icon: 'TrendingUp' },
      { id: 'activities', label: 'Recent Activities', icon: 'Clock' },
      { id: 'deadlines', label: 'Upcoming Deadlines', icon: 'Calendar' },
      { id: 'ai-insights', label: 'AI Insights', icon: 'Sparkles' }
    ]
  },
  {
    id: 'private',
    label: 'Private',
    icon: 'Lock',
    children: [
      { id: 'storage', label: 'My Knowledge', icon: 'Database' },
      { id: 'homework', label: 'Homework & Resources', icon: 'BookOpen' },
      { id: 'archive', label: 'Archive & Trash', icon: 'Archive' }
    ]
  },
  {
    id: 'public',
    label: 'Public',
    icon: 'Globe',
    children: [
      { id: 'shared', label: 'Shared Notes', icon: 'Share2' },
      { id: 'explore', label: 'Explore & Trending', icon: 'Compass' },
      { id: 'contributors', label: 'Contributors', icon: 'Award' }
    ]
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'Settings',
    children: [
      { id: 'profile', label: 'Profile', icon: 'User' },
      { id: 'theme', label: 'Theme & Layout', icon: 'Palette' },
      { id: 'privacy', label: 'Privacy & Backup', icon: 'Shield' },
      { id: 'integrations', label: 'AI & Integrations', icon: 'Plug' },
      { id: 'notifications', label: 'Notifications', icon: 'Bell' },
      { id: 'security', label: 'Security', icon: 'Lock' }
    ]
  }
];

export const mockNotes: Note[] = [
  {
    id: '1',
    title: 'Introduction to Algorithms',
    content: 'Key concepts: Big O notation, time complexity, space complexity...',
    tags: ['algorithms', 'computer-science', 'complexity'],
    createdAt: '2025-11-05T10:30:00Z',
    updatedAt: '2025-11-08T14:20:00Z',
    isPublic: false
  },
  {
    id: '2',
    title: 'React Hooks Deep Dive',
    content: 'useState, useEffect, useContext, custom hooks patterns...',
    tags: ['react', 'javascript', 'frontend'],
    createdAt: '2025-11-06T09:15:00Z',
    updatedAt: '2025-11-09T08:45:00Z',
    isPublic: true,
    views: 124,
    likes: 18
  },
  {
    id: '3',
    title: 'Database Normalization',
    content: '1NF, 2NF, 3NF, BCNF - Understanding normal forms...',
    tags: ['database', 'sql', 'theory'],
    createdAt: '2025-11-04T16:00:00Z',
    updatedAt: '2025-11-07T11:30:00Z',
    isPublic: true,
    views: 89,
    likes: 12
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Complete Data Structures Assignment',
    subject: 'Computer Science',
    dueDate: '2025-11-12T23:59:00Z',
    status: 'in-progress',
    priority: 'high'
  },
  {
    id: '2',
    title: 'Prepare React Final Project',
    subject: 'Web Development',
    dueDate: '2025-11-15T23:59:00Z',
    status: 'pending',
    priority: 'high'
  },
  {
    id: '3',
    title: 'Read Database Chapters 5-7',
    subject: 'Database Systems',
    dueDate: '2025-11-10T18:00:00Z',
    status: 'pending',
    priority: 'medium'
  },
  {
    id: '4',
    title: 'Complete Math Problem Set',
    subject: 'Mathematics',
    dueDate: '2025-11-14T23:59:00Z',
    status: 'completed',
    priority: 'low'
  }
];

export const mockCourseProgress: CourseProgress[] = [
  {
    id: '1',
    courseName: 'Data Structures & Algorithms',
    progress: 68,
    totalHours: 42
  },
  {
    id: '2',
    courseName: 'Web Development with React',
    progress: 85,
    totalHours: 38
  },
  {
    id: '3',
    courseName: 'Database Systems',
    progress: 52,
    totalHours: 28
  },
  {
    id: '4',
    courseName: 'Machine Learning Basics',
    progress: 34,
    totalHours: 15
  }
];

export const mockActivities = [
  {
    id: '1',
    type: 'note',
    title: 'Updated "React Hooks Deep Dive"',
    timestamp: '2 hours ago',
    icon: 'FileEdit'
  },
  {
    id: '2',
    type: 'task',
    title: 'Completed "Math Problem Set"',
    timestamp: '5 hours ago',
    icon: 'CheckCircle'
  },
  {
    id: '3',
    type: 'share',
    title: 'Shared "Database Normalization"',
    timestamp: '1 day ago',
    icon: 'Share2'
  },
  {
    id: '4',
    type: 'note',
    title: 'Created "Introduction to Algorithms"',
    timestamp: '3 days ago',
    icon: 'Plus'
  }
];

export const mockAIInsights = {
  weeklyStats: {
    studyHours: 18.5,
    notesCreated: 7,
    tasksCompleted: 4,
    topSubject: 'Data Structures & Algorithms'
  },
  suggestions: [
    'You spent 4 hours learning Algorithms this week. Keep up the momentum!',
    'Your Database Systems progress is behind. Consider dedicating 2 hours this week.',
    'Great job completing 4 tasks! You\'re 20% more productive than last week.'
  ],
  nextRecommendations: [
    'Review Dynamic Programming concepts',
    'Practice SQL JOIN operations',
    'Complete React useEffect exercises'
  ]
};

export const mockPublicNotes: Note[] = [
  {
    id: 'p1',
    title: 'Complete Guide to Binary Trees',
    content: 'Comprehensive guide covering traversal, insertion, deletion...',
    tags: ['algorithms', 'trees', 'data-structures'],
    createdAt: '2025-11-01T10:00:00Z',
    updatedAt: '2025-11-08T15:00:00Z',
    isPublic: true,
    views: 342,
    likes: 45
  },
  {
    id: 'p2',
    title: 'REST API Design Best Practices',
    content: 'Guidelines for building scalable and maintainable APIs...',
    tags: ['api', 'backend', 'best-practices'],
    createdAt: '2025-10-28T14:30:00Z',
    updatedAt: '2025-11-05T09:20:00Z',
    isPublic: true,
    views: 287,
    likes: 38
  },
  {
    id: 'p3',
    title: 'CSS Grid Layout Masterclass',
    content: 'Everything you need to know about CSS Grid...',
    tags: ['css', 'frontend', 'layout'],
    createdAt: '2025-10-25T11:15:00Z',
    updatedAt: '2025-11-02T16:45:00Z',
    isPublic: true,
    views: 198,
    likes: 29
  }
];

export const mockContributors = [
  {
    id: '1',
    username: 'sarah_dev',
    avatar: 'SD',
    notesPublished: 24,
    totalViews: 3421,
    totalLikes: 289
  },
  {
    id: '2',
    username: 'john_coder',
    avatar: 'JC',
    notesPublished: 18,
    totalViews: 2834,
    totalLikes: 245
  },
  {
    id: '3',
    username: 'emily_tech',
    avatar: 'ET',
    notesPublished: 15,
    totalViews: 2156,
    totalLikes: 198
  }
];
