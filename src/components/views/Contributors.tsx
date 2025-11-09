import { Award, Eye, Heart, FileText } from 'lucide-react';
import { mockContributors } from '../../data/mockData';

export default function Contributors() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Award className="text-blue-600" size={28} />
        <h2 className="text-3xl font-bold">Top Contributors</h2>
      </div>

      <div className="card bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200">
        <div className="flex items-center gap-3">
          <Award className="text-yellow-600" size={32} />
          <div>
            <h3 className="text-lg font-semibold text-yellow-900">Community Leaderboard</h3>
            <p className="text-sm text-yellow-700">
              Top contributors who share valuable knowledge with the community
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {mockContributors.map((contributor, index) => (
          <div key={contributor.id} className="card hover:shadow-lg transition-all">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {contributor.avatar}
                  </div>
                  {index < 3 && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">
                      {index + 1}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {contributor.username}
                </h3>

                <div className="grid grid-cols-3 gap-4 mt-3">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                      <FileText size={16} />
                    </div>
                    <div className="font-bold text-gray-900">{contributor.notesPublished}</div>
                    <div className="text-xs text-gray-500">Notes</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-green-600 mb-1">
                      <Eye size={16} />
                    </div>
                    <div className="font-bold text-gray-900">{contributor.totalViews.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Views</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-red-600 mb-1">
                      <Heart size={16} />
                    </div>
                    <div className="font-bold text-gray-900">{contributor.totalLikes}</div>
                    <div className="text-xs text-gray-500">Likes</div>
                  </div>
                </div>
              </div>

              <button className="btn-secondary">View Profile</button>
            </div>
          </div>
        ))}
      </div>

      <div className="card bg-blue-50 border border-blue-200">
        <div className="flex items-center gap-3">
          <Award className="text-blue-600" size={24} />
          <div>
            <h3 className="font-semibold text-blue-900">Join the Community</h3>
            <p className="text-sm text-blue-700 mt-1">
              Share your knowledge and help others learn. Start publishing your notes today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
