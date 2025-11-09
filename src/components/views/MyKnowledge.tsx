import { Database, Search, Tag, FileText } from 'lucide-react';
import { mockNotes } from '../../data/mockData';

export default function MyKnowledge() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

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
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by title or content..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-2 mt-4">
          <button className="btn-secondary text-sm">All</button>
          <button className="btn-secondary text-sm">Loved</button>
          <button className="btn-secondary text-sm">Recently</button>
          <button className="btn-secondary text-sm">Shared</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {mockNotes.filter(note => !note.isPublic).map(note => (
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
    </div>
  );
}
