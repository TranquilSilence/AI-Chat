import { FileText, Link, Search, CheckSquare, Trash2, Code, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import MindMap from '../workbench/MindMap';
import ChatPrompt from '../workbench/ChatPrompt';

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
  const [leftPanelVisible, setLeftPanelVisible] = useState(true);
  const [rightPanelVisible, setRightPanelVisible] = useState(true);
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Workbench</h2>
          <p className="text-gray-600 mt-1">Build knowledge through AI-powered analysis</p>
        </div>
      </div>

      <div className="relative flex gap-4 h-[calc(100vh-14rem)]">
        {leftPanelVisible && (
          <div className="w-80 space-y-4 overflow-y-auto scrollbar-thin pr-2 transition-all duration-300">
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

            <div className="space-y-2">
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

          <div className="card bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <Lightbulb className="text-blue-600" size={24} />
              <h3 className="font-semibold text-blue-900">Quick Actions</h3>
            </div>
            <div className="space-y-2">
              <button className="w-full btn-primary text-sm" disabled={selectedSources.length === 0}>
                Analyze
              </button>
              <button className="w-full btn-secondary text-sm" disabled={selectedSources.length === 0}>
                Connect Ideas
              </button>
              <button className="w-full btn-secondary text-sm" disabled={selectedSources.length === 0}>
                Test Knowledge
              </button>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 p-4">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Code size={16} />
              <span className="font-medium">{selectedSources.length} source(s) selected</span>
            </div>
          </div>
          </div>
        )}

        <button
          onClick={() => setLeftPanelVisible(!leftPanelVisible)}
          className={`absolute ${leftPanelVisible ? 'left-80' : 'left-0'} top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-all border border-gray-200`}
          title={leftPanelVisible ? 'Hide sources panel' : 'Show sources panel'}
        >
          {leftPanelVisible ? <ChevronLeft size={20} className="text-gray-600" /> : <ChevronRight size={20} className="text-gray-600" />}
        </button>

        <div className="flex-1 transition-all duration-300">
          <MindMap />
        </div>

        <button
          onClick={() => setRightPanelVisible(!rightPanelVisible)}
          className={`absolute ${rightPanelVisible ? 'right-96' : 'right-0'} top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-all border border-gray-200`}
          title={rightPanelVisible ? 'Hide AI assistant' : 'Show AI assistant'}
        >
          {rightPanelVisible ? <ChevronRight size={20} className="text-gray-600" /> : <ChevronLeft size={20} className="text-gray-600" />}
        </button>

        {rightPanelVisible && (
          <div className="w-96 transition-all duration-300">
            <ChatPrompt />
          </div>
        )}
      </div>
    </div>
  );
}
