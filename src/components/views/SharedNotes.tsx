import { Share2, Eye, Heart, Copy } from 'lucide-react';
import { mockNotes } from '../../data/mockData';

export default function SharedNotes() {
  const sharedNotes = mockNotes.filter(note => note.isPublic);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Share2 className="text-blue-600" size={28} />
          <h2 className="text-3xl font-bold">Shared Notes</h2>
        </div>
        <button className="btn-primary">Share New Note</button>
      </div>

      <div className="card bg-blue-50 border border-blue-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-blue-900 mb-1">Your Public Notes</h3>
            <p className="text-sm text-blue-700">
              You have {sharedNotes.length} notes shared publicly
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-700">{sharedNotes.reduce((acc, note) => acc + (note.views || 0), 0)}</div>
            <div className="text-xs text-blue-600">Total Views</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {sharedNotes.map(note => (
          <div key={note.id} className="card hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">{note.title}</h3>
              <button className="btn-secondary text-sm">Manage</button>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{note.content}</p>

            <div className="flex items-center gap-2 flex-wrap mb-4">
              {note.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Eye size={16} />
                  {note.views}
                </span>
                <span className="flex items-center gap-1">
                  <Heart size={16} />
                  {note.likes}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors">
                  <Copy size={18} />
                </button>
                <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
