import { Sparkles, TrendingUp, Clock, Target } from 'lucide-react';
import { mockAIInsights } from '../../data/mockData';

export default function AIInsights() {
  const { weeklyStats, suggestions, nextRecommendations } = mockAIInsights;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Sparkles className="text-blue-600" size={28} />
        <h2 className="text-3xl font-bold">AI Insights</h2>
      </div>

      <div className="card bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Clock size={24} className="text-blue-600" />
          Weekly Statistics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-700">{weeklyStats.studyHours}h</div>
            <div className="text-sm text-gray-700 mt-1">Study Hours</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-700">{weeklyStats.notesCreated}</div>
            <div className="text-sm text-gray-700 mt-1">Notes Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-700">{weeklyStats.tasksCompleted}</div>
            <div className="text-sm text-gray-700 mt-1">Tasks Done</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-700">#{1}</div>
            <div className="text-sm text-gray-700 mt-1">Top Subject</div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-white rounded-lg">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Top Focus:</span> {weeklyStats.topSubject}
          </p>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <TrendingUp size={24} className="text-green-600" />
          AI Suggestions
        </h3>
        <div className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                {index + 1}
              </div>
              <p className="text-gray-700">{suggestion}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Target size={24} className="text-purple-600" />
          Next Recommendations
        </h3>
        <div className="space-y-2">
          {nextRecommendations.map((rec, index) => (
            <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer">
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
              <p className="text-gray-700">{rec}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
