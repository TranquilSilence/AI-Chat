import { FileText, Link, Search, CheckSquare, Trash2, Code, Lightbulb, ChevronUp, ChevronDown, X } from 'lucide-react';
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
  const [leftPanelExpanded, setLeftPanelExpanded] = useState(false);
  const [rightPanelExpanded, setRightPanelExpanded] = useState(false);
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

      <div className="relative w-full h-[calc(100vh-14rem)] bg-white rounded-lg border border-gray-200 flex flex-col">
        <div className="flex-1 relative">
          <MindMap />
        </div>

        {leftPanelExpanded && (
          <div className="absolute left-0 top-0 w-80 h-1/3 bg-white border-r border-gray-200 rounded-tl-lg z-40 flex flex-col">
            <div className="flex items-center justify-between p-3 border-b border-gray-200">
              <h3 className="text-base font-semibold">Sources</h3>
              <button onClick={() => setLeftPanelExpanded(false)} className="p-1 hover:bg-gray-100 rounded">
                <X size={16} className="text-gray-600" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-thin px-3 py-2 space-y-2">
              <div className="relative mb-3">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-8 pr-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <button
                  onClick={toggleSelectAll}
                  className="flex items-center gap-1 text-xs text-gray-700 hover:text-blue-600"
                >
                  <CheckSquare size={14} />
                  {selectedSources.length === sources.length ? 'Deselect All' : 'Select All'}
                </button>
              </div>
              <div className="space-y-1">
                {sources.map(source => (
                  <div
                    key={source.id}
                    className={`flex items-center gap-2 p-2 border rounded text-xs cursor-pointer transition-all ${
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
                      className="w-3 h-3"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <div className="flex-shrink-0">{getIcon(source.type)}</div>
                    <div className="flex-1 min-w-0 truncate">{source.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {rightPanelExpanded && (
          <div className="absolute right-0 top-0 w-96 h-1/3 bg-white border-l border-gray-200 rounded-tr-lg z-40 flex flex-col">
            <div className="flex items-center justify-between p-3 border-b border-gray-200">
              <h3 className="text-base font-semibold">AI Assistance</h3>
              <button onClick={() => setRightPanelExpanded(false)} className="p-1 hover:bg-gray-100 rounded">
                <X size={16} className="text-gray-600" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <ChatPrompt />
            </div>
          </div>
        )}

        {!leftPanelExpanded && (
          <button
            onClick={() => setLeftPanelExpanded(true)}
            className="absolute left-3 top-3 z-30 p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50 border border-gray-200 transition-all"
            title="Show sources panel"
          >
            <ChevronDown size={18} className="text-gray-600" />
          </button>
        )}

        {!rightPanelExpanded && (
          <button
            onClick={() => setRightPanelExpanded(true)}
            className="absolute right-3 top-3 z-30 p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50 border border-gray-200 transition-all"
            title="Show AI assistant"
          >
            <ChevronDown size={18} className="text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
}
