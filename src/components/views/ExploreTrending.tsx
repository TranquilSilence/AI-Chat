import { Compass, TrendingUp, Eye, Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { mockPublicNotes } from '../../data/mockData';
import { useState } from 'react';

export default function ExploreTrending() {
  const [likedNotes, setLikedNotes] = useState<Set<string>>(new Set());
  const [bookmarkedNotes, setBookmarkedNotes] = useState<Set<string>>(new Set());

  const toggleLike = (noteId: string) => {
    setLikedNotes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(noteId)) {
        newSet.delete(noteId);
      } else {
        newSet.add(noteId);
      }
      return newSet;
    });
  };

  const toggleBookmark = (noteId: string) => {
    setBookmarkedNotes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(noteId)) {
        newSet.delete(noteId);
      } else {
        newSet.add(noteId);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Compass className="text-blue-600" size={28} />
          <h2 className="text-3xl font-bold">Explore & Trending</h2>
        </div>
      </div>

      <div className="card">
        <div className="flex gap-2 flex-wrap">
          <button className="btn-primary text-sm">All Topics</button>
          <button className="btn-secondary text-sm">Algorithms</button>
          <button className="btn-secondary text-sm">Web Dev</button>
          <button className="btn-secondary text-sm">Databases</button>
          <button className="btn-secondary text-sm">AI/ML</button>
          <button className="btn-secondary text-sm">Design</button>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <TrendingUp className="text-orange-600" size={20} />
        <span className="font-semibold text-gray-700">Trending Now</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockPublicNotes.map((note, index) => (
          <div key={note.id} className="card hover:shadow-lg transition-all cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                {index < 3 && (
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-full font-bold text-sm">
                    {index + 1}
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900">{note.title}</h3>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{note.content}</p>

            <div className="flex items-center gap-2 flex-wrap mb-4">
              {note.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1 text-gray-600">
                  <Eye size={16} />
                  {note.views}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(note.id);
                  }}
                  className={`flex items-center gap-1 transition-colors ${
                    likedNotes.has(note.id)
                      ? 'text-red-600'
                      : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  <Heart size={16} fill={likedNotes.has(note.id) ? 'currentColor' : 'none'} />
                  {(note.likes || 0) + (likedNotes.has(note.id) ? 1 : 0)}
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors">
                  <MessageCircle size={16} />
                  12
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleBookmark(note.id);
                  }}
                  className={`p-2 rounded-lg transition-all ${
                    bookmarkedNotes.has(note.id)
                      ? 'bg-blue-100 text-blue-600'
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <Bookmark size={18} fill={bookmarkedNotes.has(note.id) ? 'currentColor' : 'none'} />
                </button>
                <button className="p-2 hover:bg-gray-100 text-gray-600 rounded-lg transition-colors">
                  <Share2 size={18} />
                </button>
                <button className="btn-primary text-sm">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card bg-gradient-to-r from-purple-50 to-pink-50">
        <h3 className="text-lg font-semibold mb-3 text-purple-900">AI Recommendations for You</h3>
        <div className="space-y-2">
          <div className="p-3 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
            <div className="font-medium text-gray-900">Dynamic Programming Patterns</div>
            <div className="text-xs text-gray-500 mt-1">Similar to your recent study on Algorithms</div>
          </div>
          <div className="p-3 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
            <div className="font-medium text-gray-900">Advanced React Performance</div>
            <div className="text-xs text-gray-500 mt-1">Based on your React Hooks notes</div>
          </div>
        </div>
      </div>
    </div>
  );
}
