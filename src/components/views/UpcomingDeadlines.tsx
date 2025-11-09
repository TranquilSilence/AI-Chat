import { Calendar, AlertCircle } from 'lucide-react';
import { mockTasks } from '../../data/mockData';

export default function UpcomingDeadlines() {
  const priorityColors = {
    high: 'bg-red-100 text-red-700 border-red-300',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    low: 'bg-green-100 text-green-700 border-green-300'
  };

  const statusColors = {
    pending: 'bg-gray-100 text-gray-700',
    'in-progress': 'bg-blue-100 text-blue-700',
    completed: 'bg-green-100 text-green-700'
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getDaysUntil = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const upcomingTasks = mockTasks.filter(task => task.status !== 'completed');

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Calendar className="text-blue-600" size={28} />
        <h2 className="text-3xl font-bold">Upcoming Deadlines</h2>
      </div>

      {upcomingTasks.length === 0 ? (
        <div className="card text-center py-12">
          <Calendar className="mx-auto text-gray-300 mb-4" size={64} />
          <p className="text-gray-500 text-lg">No upcoming deadlines. Great job!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {upcomingTasks.map(task => {
            const daysUntil = getDaysUntil(task.dueDate);
            const isUrgent = daysUntil <= 2;

            return (
              <div key={task.id} className={`card ${isUrgent ? 'border-2 border-red-300' : ''}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{task.title}</h3>
                      {isUrgent && (
                        <AlertCircle className="text-red-500" size={20} />
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{task.subject}</p>

                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${priorityColors[task.priority]}`}>
                        {task.priority.toUpperCase()}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[task.status]}`}>
                        {task.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="text-right ml-4">
                    <div className="text-sm font-medium text-gray-900">{formatDate(task.dueDate)}</div>
                    <div className={`text-xs mt-1 ${isUrgent ? 'text-red-600 font-semibold' : 'text-gray-500'}`}>
                      {daysUntil === 0 ? 'Due today' : daysUntil === 1 ? 'Due tomorrow' : `${daysUntil} days left`}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
