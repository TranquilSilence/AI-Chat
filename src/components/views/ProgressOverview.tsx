import { TrendingUp, Plus, BookOpen, Calendar, Brain } from 'lucide-react';
import { mockCourseProgress } from '../../data/mockData';

export default function ProgressOverview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <TrendingUp className="text-blue-600" size={28} />
          <h2 className="text-3xl font-bold">Progress Overview</h2>
        </div>
      </div>

      <div className="card bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button className="flex flex-col items-center gap-2 p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-all hover:scale-105 backdrop-blur-sm">
            <Plus size={24} />
            <span className="text-sm font-medium">New Note</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-all hover:scale-105 backdrop-blur-sm">
            <BookOpen size={24} />
            <span className="text-sm font-medium">Add Task</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-all hover:scale-105 backdrop-blur-sm">
            <Calendar size={24} />
            <span className="text-sm font-medium">View Calendar</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-all hover:scale-105 backdrop-blur-sm">
            <Brain size={24} />
            <span className="text-sm font-medium">AI Assistant</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockCourseProgress.map(course => (
          <div key={course.id} className="card">
            <h3 className="text-lg font-semibold mb-4">{course.courseName}</h3>

            <div className="mb-3">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Progress</span>
                <span className="font-semibold text-blue-600">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Study Time</span>
              <span className="font-medium">{course.totalHours} hours</span>
            </div>
          </div>
        ))}
      </div>

      <div className="card bg-blue-50 border-2 border-blue-200">
        <h3 className="text-xl font-semibold mb-4 text-blue-900">Overall Statistics</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-700">62%</div>
            <div className="text-sm text-gray-700 mt-1">Average Progress</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-700">123h</div>
            <div className="text-sm text-gray-700 mt-1">Total Study Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-700">4</div>
            <div className="text-sm text-gray-700 mt-1">Active Courses</div>
          </div>
        </div>
      </div>
    </div>
  );
}
