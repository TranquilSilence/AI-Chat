import { useState } from 'react';
import * as Icons from 'lucide-react';
import { NavItem, SubNavItem } from '../../types';
import { navigationData } from '../../data/mockData';
import { useTheme } from '../../contexts/ThemeContext';

interface SidebarProps {
  activeView: string;
  onNavigate: (view: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export default function Sidebar({ activeView, onNavigate, isCollapsed, onToggleCollapse }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['dashboard']);
  const { theme, toggleTheme } = useTheme();

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
      isCollapsed ? 'w-20' : 'w-64'
    } bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white min-h-screen fixed left-0 top-0 overflow-y-auto transition-all duration-300 shadow-2xl z-50 backdrop-blur-xl`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <Icons.GraduationCap size={28} className="flex-shrink-0" />
            </div>
            {!isCollapsed && (
              <h1 className="text-2xl font-extrabold whitespace-nowrap tracking-tight">
                StudyHub
              </h1>
            )}
          </div>
          <button
            onClick={onToggleCollapse}
            className="p-2 hover:bg-white/20 rounded-xl transition-all duration-200 backdrop-blur-sm"
            aria-label="Toggle sidebar"
          >
            {isCollapsed ? <Icons.ChevronRight size={20} /> : <Icons.ChevronLeft size={20} />}
          </button>
        </div>

        <nav className="space-y-2">
          {navigationData.map((item: NavItem) => (
            <div key={item.id}>
              <button
                onClick={() => toggleSection(item.id)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  {getIcon(item.icon)}
                  {!isCollapsed && <span className="font-semibold">{item.label}</span>}
                </div>
                {!isCollapsed && (
                  <Icons.ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      expandedSections.includes(item.id) ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>

              {!isCollapsed && expandedSections.includes(item.id) && item.children && (
                <div className="ml-4 mt-1 space-y-1 animate-fadeIn">
                  {item.children.map((child: SubNavItem) => (
                    <button
                      key={child.id}
                      onClick={() => onNavigate(child.id)}
                      className={`w-full flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 ${
                        activeView === child.id
                          ? 'bg-white text-purple-700 font-semibold shadow-lg scale-105'
                          : 'hover:bg-white/10 hover:translate-x-1 backdrop-blur-sm'
                      }`}
                    >
                      {getIcon(child.icon)}
                      <span className="text-sm font-medium">{child.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {!isCollapsed && (
          <div className="mt-6 pt-6 border-t border-white/20">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              {theme === 'light' ? <Icons.Moon size={20} /> : <Icons.Sun size={20} />}
              <span className="font-semibold">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
