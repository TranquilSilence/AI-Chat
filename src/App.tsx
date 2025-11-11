import { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import ProgressOverview from './components/views/ProgressOverview';
import RecentActivities from './components/views/RecentActivities';
import UpcomingDeadlines from './components/views/UpcomingDeadlines';
import AIInsights from './components/views/AIInsights';
import MyKnowledge from './components/views/MyKnowledge';
import HomeworkResources from './components/views/HomeworkResources';
import ArchiveTrash from './components/views/ArchiveTrash';
import SharedNotes from './components/views/SharedNotes';
import ExploreTrending from './components/views/ExploreTrending';
import Contributors from './components/views/Contributors';
import Settings from './components/views/Settings';
import Workbench from './components/views/Workbench';

function App() {
  const [activeView, setActiveView] = useState('workbench');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderView = () => {
    switch (activeView) {
      case 'workbench':
        return <Workbench />;
      case 'progress':
        return <ProgressOverview />;
      case 'activities':
        return <RecentActivities />;
      case 'deadlines':
        return <UpcomingDeadlines />;
      case 'ai-insights':
        return <AIInsights />;
      case 'storage':
        return <MyKnowledge />;
      case 'homework':
        return <HomeworkResources />;
      case 'archive':
        return <ArchiveTrash />;
      case 'shared':
        return <SharedNotes />;
      case 'explore':
        return <ExploreTrending />;
      case 'contributors':
        return <Contributors />;
      case 'profile':
      case 'theme':
      case 'privacy':
      case 'integrations':
      case 'notifications':
      case 'security':
        return <Settings activeSubView={activeView} />;
      default:
        return <Workbench />;
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 flex flex-col md:flex-row">
      <Sidebar
        activeView={activeView}
        onNavigate={setActiveView}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <main className="flex-1 w-full md:w-auto p-4 md:p-8 transition-all duration-300 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {renderView()}
        </div>
      </main>
    </div>
  );
}

export default App;
