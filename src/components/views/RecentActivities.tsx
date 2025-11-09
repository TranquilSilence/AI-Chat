import { Clock, FileEdit, CheckCircle, Share2, Plus } from 'lucide-react';
import { mockActivities } from '../../data/mockData';

const iconMap: Record<string, React.ReactNode> = {
  FileEdit: <FileEdit size={20} />,
  CheckCircle: <CheckCircle size={20} />,
  Share2: <Share2 size={20} />,
  Plus: <Plus size={20} />
};

export default function RecentActivities() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Clock className="text-blue-600" size={28} />
        <h2 className="text-3xl font-bold">Recent Activities</h2>
      </div>

      <div className="card">
        <div className="space-y-4">
          {mockActivities.map((activity, index) => (
            <div
              key={activity.id}
              className={`flex items-start gap-4 pb-4 ${
                index !== mockActivities.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                {iconMap[activity.icon]}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-500 mt-1">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-green-50">
          <div className="text-green-600 mb-2">
            <CheckCircle size={24} />
          </div>
          <div className="text-2xl font-bold text-green-700">12</div>
          <div className="text-sm text-gray-700">Tasks Completed</div>
        </div>

        <div className="card bg-purple-50">
          <div className="text-purple-600 mb-2">
            <FileEdit size={24} />
          </div>
          <div className="text-2xl font-bold text-purple-700">28</div>
          <div className="text-sm text-gray-700">Notes Updated</div>
        </div>

        <div className="card bg-orange-50">
          <div className="text-orange-600 mb-2">
            <Share2 size={24} />
          </div>
          <div className="text-2xl font-bold text-orange-700">5</div>
          <div className="text-sm text-gray-700">Notes Shared</div>
        </div>
      </div>
    </div>
  );
}
