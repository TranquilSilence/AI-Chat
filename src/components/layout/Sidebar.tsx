import { useState } from 'react';
import * as Icons from 'lucide-react';
import { NavItem, SubNavItem } from '../../types';
import { navigationData } from '../../data/mockData';

interface SidebarProps {
  activeView: string;
  onNavigate: (view: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export default function Sidebar({ activeView, onNavigate, isCollapsed, onToggleCollapse }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['workbench']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ size?: number; className?: string }>;
    return IconComponent ? <IconComponent size={20} /> : null;
  };

  return (
    <aside className={`${
      isCollapsed ? 'w-16' : 'w-72'
    } bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen fixed left-0 top-0 overflow-y-auto transition-all duration-300 shadow-2xl z-50 border-r border-slate-700/50`}>
      <div className={`${isCollapsed ? 'p-3' : 'p-5'}`}>
        <div className={`flex items-center justify-between ${isCollapsed ? 'mb-6' : 'mb-8'}`}>
          {!isCollapsed ? (
            <>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-75"></div>
                  <div className="relative p-2 bg-slate-800 rounded-lg">
                    <Icons.GraduationCap size={24} className="text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    StudyHub
                  </h1>
                  <p className="text-xs text-slate-400">Smart Learning</p>
                </div>
              </div>
              <button
                onClick={onToggleCollapse}
                className="p-2 hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                aria-label="Toggle sidebar"
              >
                <Icons.ChevronsLeft size={18} className="text-slate-400" />
              </button>
            </>
          ) : (
            <div className="mx-auto">
              <button
                onClick={onToggleCollapse}
                className="p-2 hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                aria-label="Toggle sidebar"
              >
                <Icons.ChevronsRight size={18} className="text-slate-400" />
              </button>
            </div>
          )}
        </div>

        <nav className={`space-y-1.5 ${isCollapsed ? '' : 'max-h-[calc(100vh-28rem)] overflow-y-auto scrollbar-thin pr-1'}`}>
          {navigationData.map((item: NavItem) => (
            <div key={item.id}>
              <button
                onClick={() => toggleSection(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 ${
                  expandedSections.includes(item.id)
                    ? 'bg-slate-800/80 text-cyan-400'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`${isCollapsed ? '' : ''}`}>
                    {getIcon(item.icon)}
                  </div>
                  {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                </div>
                {!isCollapsed && (
                  <Icons.ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      expandedSections.includes(item.id) ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>

              {!isCollapsed && expandedSections.includes(item.id) && item.children && (
                <div className="ml-2 mt-1 space-y-0.5 animate-fadeIn border-l-2 border-slate-700 pl-3">
                  {item.children.map((child: SubNavItem) => (
                    <button
                      key={child.id}
                      onClick={() => onNavigate(child.id)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                        activeView === child.id
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium shadow-lg shadow-cyan-500/20'
                          : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                      }`}
                    >
                      {getIcon(child.icon)}
                      <span>{child.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {!isCollapsed && (
          <div className="mt-6 pt-6 border-t border-slate-700/50">
            <div className="px-3 py-2 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg border border-slate-600/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  JD
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">John Doe</div>
                  <div className="text-xs text-slate-400">Free Plan</div>
                </div>
              </div>
              <button className="w-full mt-2 px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-200">
                Upgrade to Pro
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
