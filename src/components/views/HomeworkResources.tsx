import { BookOpen, FileText, Link, Calendar } from 'lucide-react';
import { mockTasks } from '../../data/mockData';

export default function HomeworkResources() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BookOpen className="text-blue-600" size={28} />
          <h2 className="text-3xl font-bold">Homework & Resources</h2>
        </div>
        <button className="btn-primary">+ Add Resource</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-blue-50">
          <div className="text-blue-600 mb-2">
            <FileText size={24} />
          </div>
          <div className="text-2xl font-bold text-blue-700">23</div>
          <div className="text-sm text-gray-700">Total Resources</div>
        </div>

        <div className="card bg-orange-50">
          <div className="text-orange-600 mb-2">
            <Calendar size={24} />
          </div>
          <div className="text-2xl font-bold text-orange-700">3</div>
          <div className="text-sm text-gray-700">Pending Tasks</div>
        </div>

        <div className="card bg-green-50">
          <div className="text-green-600 mb-2">
            <Link size={24} />
          </div>
          <div className="text-2xl font-bold text-green-700">12</div>
          <div className="text-sm text-gray-700">Linked Notes</div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Assignments</h3>
        <div className="space-y-3">
          {mockTasks.map(task => (
            <div key={task.id} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{task.title}</h4>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  task.status === 'completed' ? 'bg-green-100 text-green-700' :
                  task.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {task.status.replace('-', ' ').toUpperCase()}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-2">{task.subject}</p>

              <div className="flex items-center justify-between text-sm">
                <span className={`px-2 py-1 rounded text-xs font-medium border ${
                  task.priority === 'high' ? 'bg-red-100 text-red-700 border-red-300' :
                  task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700 border-yellow-300' :
                  'bg-green-100 text-green-700 border-green-300'
                }`}>
                  {task.priority.toUpperCase()}
                </span>
                <span className="text-gray-500 flex items-center gap-1">
                  <Calendar size={14} />
                  {formatDate(task.dueDate)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Recent Resources</h3>
        <div className="space-y-3">
          {[
            { name: 'Algorithms Lecture Notes.pdf', type: 'PDF', size: '2.4 MB', date: '2025-11-08' },
            { name: 'React Documentation', type: 'Link', url: 'https://react.dev', date: '2025-11-07' },
            { name: 'Database ER Diagram.png', type: 'Image', size: '1.2 MB', date: '2025-11-06' }
          ].map((resource, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                  <FileText className="text-blue-600" size={20} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{resource.name}</div>
                  <div className="text-xs text-gray-500">
                    {resource.type} {resource.size && `• ${resource.size}`}
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-500">{resource.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
