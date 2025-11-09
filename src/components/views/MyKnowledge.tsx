import { Database, Search, Tag, FileText, Filter, SortAsc, Heart, Clock, Share2 } from 'lucide-react';
import { mockNotes } from '../../data/mockData';
import { useState } from 'react';

export default function MyKnowledge() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const filteredNotes = mockNotes
    .filter(note => !note.isPublic)
    .filter(note => {
      if (searchQuery) {
        return note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
               note.content.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'recent') {
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      } else if (sortBy === 'oldest') {
        return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Database className="text-blue-600" size={28} />
          <h2 className="text-3xl font-bold">My Knowledge</h2>
        </div>
        <button className="btn-primary">+ New Note</button>
      </div>

      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by title or content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="recent">Recent First</option>
              <option value="oldest">Oldest First</option>
              <option value="title">By Title</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2 mt-4 flex-wrap">
          <button
            onClick={() => setActiveFilter('all')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FileText size={16} />
            All
          </button>
          <button
            onClick={() => setActiveFilter('loved')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
              activeFilter === 'loved'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Heart size={16} />
            Loved
          </button>
          <button
            onClick={() => setActiveFilter('recent')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
              activeFilter === 'recent'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Clock size={16} />
            Recently
          </button>
          <button
            onClick={() => setActiveFilter('shared')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
              activeFilter === 'shared'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Share2 size={16} />
            Shared
          </button>
        </div>
      </div>

      {filteredNotes.length === 0 ? (
        <div className="card text-center py-12">
          <FileText className="mx-auto text-gray-300 mb-4" size={64} />
          <p className="text-gray-500 text-lg">No notes found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredNotes.map(note => (
          <div key={note.id} className="card hover:border-blue-300 border-2 border-transparent transition-all cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <FileText className="text-blue-600" size={20} />
                <h3 className="text-lg font-semibold">{note.title}</h3>
              </div>
              <span className="text-xs text-gray-500">{formatDate(note.updatedAt)}</span>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{note.content}</p>

            <div className="flex items-center gap-2 flex-wrap">
              <Tag size={14} className="text-gray-400" />
              {note.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
