import { FileText, Link, FileUp, Brain, Search, CheckSquare, Trash2, Eye } from 'lucide-react';
import { useState } from 'react';

interface Source {
  id: string;
  type: 'pdf' | 'link' | 'note';
  title: string;
  url?: string;
  addedAt: string;
  size?: string;
}

export default function Workbench() {
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [sources] = useState<Source[]>([
    { id: '1', type: 'pdf', title: 'Machine Learning Basics.pdf', addedAt: '2025-11-08', size: '3.2 MB' },
    { id: '2', type: 'link', title: 'React Documentation', url: 'https://react.dev', addedAt: '2025-11-07' },
    { id: '3', type: 'note', title: 'Algorithm Study Notes', addedAt: '2025-11-06' },
    { id: '4', type: 'pdf', title: 'Database Design Patterns.pdf', addedAt: '2025-11-05', size: '2.8 MB' }
  ]);

  const toggleSource = (id: string) => {
    setSelectedSources(prev =>
      prev.includes(id) ? prev.filter(sid => sid !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedSources.length === sources.length) {
      setSelectedSources([]);
    } else {
      setSelectedSources(sources.map(s => s.id));
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="text-red-600" size={20} />;
      case 'link':
        return <Link className="text-blue-600" size={20} />;
      case 'note':
        return <FileText className="text-green-600" size={20} />;
      default:
        return <FileText size={20} />;
    }
  };

  return (
    <div className="grid grid-cols-12 gap-6 h-[calc(100vh-8rem)]">
      <div className="col-span-4 space-y-4">
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Sources</h3>
            <button className="btn-primary text-sm">+ Add / Discover</button>
          </div>

          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search sources..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={toggleSelectAll}
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              <CheckSquare size={18} />
              {selectedSources.length === sources.length ? 'Deselect All' : 'Select All'}
            </button>
            {selectedSources.length > 0 && (
              <button className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 transition-colors">
                <Trash2 size={18} />
                Delete ({selectedSources.length})
              </button>
            )}
          </div>

          <div className="space-y-2 max-h-[calc(100vh-24rem)] overflow-y-auto">
            {sources.map(source => (
              <div
                key={source.id}
                className={`flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedSources.includes(source.id)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                }`}
                onClick={() => toggleSource(source.id)}
              >
                <input
                  type="checkbox"
                  checked={selectedSources.includes(source.id)}
                  onChange={() => toggleSource(source.id)}
                  className="w-4 h-4"
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="flex-shrink-0">{getIcon(source.type)}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm text-gray-900 truncate">{source.title}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {source.size && `${source.size} • `}{source.addedAt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="flex items-center gap-3 mb-3">
            <Brain className="text-purple-600" size={24} />
            <h3 className="font-semibold text-purple-900">AI Actions</h3>
          </div>
          <div className="space-y-2">
            <button className="w-full btn-primary text-sm" disabled={selectedSources.length === 0}>
              Summarize Selected ({selectedSources.length})
            </button>
            <button className="w-full btn-secondary text-sm" disabled={selectedSources.length === 0}>
              Find Connections
            </button>
            <button className="w-full btn-secondary text-sm" disabled={selectedSources.length === 0}>
              Generate Quiz
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-8">
        <div className="card h-full">
          {selectedSources.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <Eye size={64} className="mb-4" />
              <p className="text-lg">Select sources to view and analyze</p>
              <p className="text-sm mt-2">Use AI to summarize, find connections, or generate quizzes</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <h3 className="text-xl font-semibold">Content Viewer</h3>
                <div className="flex items-center gap-2">
                  <button className="btn-secondary text-sm">Export</button>
                  <button className="btn-primary text-sm">
                    <Brain size={16} className="inline mr-1" />
                    AI Analyze
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {sources
                  .filter(s => selectedSources.includes(s.id))
                  .map(source => (
                    <div key={source.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        {getIcon(source.type)}
                        <h4 className="font-semibold text-gray-900">{source.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        This is a preview of the content. Full viewer functionality would display
                        the actual content of PDFs, links, or notes here.
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
