export interface NavItem {
  id: string;
  label: string;
  icon: string;
  children?: SubNavItem[];
}

export interface SubNavItem {
  id: string;
  label: string;
  icon: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  isPublic: boolean;
  views?: number;
  likes?: number;
}

export interface Task {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
}

export interface CourseProgress {
  id: string;
  courseName: string;
  progress: number;
  totalHours: number;
}
