import { User, Palette, Shield, Plug } from 'lucide-react';

interface SettingsProps {
  activeSubView: string;
}

export default function Settings({ activeSubView }: SettingsProps) {
  if (activeSubView === 'profile') {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <User className="text-blue-600" size={28} />
          <h2 className="text-3xl font-bold">Profile Settings</h2>
        </div>

        <div className="card">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-3xl">
              JD
            </div>
            <div>
              <button className="btn-primary">Change Avatar</button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" defaultValue="John Doe" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" defaultValue="john.doe@university.edu" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Student ID</label>
              <input type="text" defaultValue="2021CS001" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              <textarea rows={3} defaultValue="Computer Science student passionate about algorithms and web development." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <button className="btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    );
  }

  if (activeSubView === 'theme') {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Palette className="text-blue-600" size={28} />
          <h2 className="text-3xl font-bold">Theme & Layout</h2>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Color Theme</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Blue', 'Dark', 'Light', 'System'].map(theme => (
              <div key={theme} className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${theme === 'Blue' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}>
                <div className="text-center font-medium">{theme}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Layout Style</h3>
          <div className="space-y-3">
            {['Sidebar Left', 'Compact', 'Floating'].map(layout => (
              <label key={layout} className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="radio" name="layout" defaultChecked={layout === 'Sidebar Left'} className="w-4 h-4" />
                <span>{layout}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Font Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>Small</option>
                <option selected>Medium</option>
                <option>Large</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeSubView === 'privacy') {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Shield className="text-blue-600" size={28} />
          <h2 className="text-3xl font-bold">Privacy & Backup</h2>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Default Privacy</h3>
          <div className="space-y-3">
            {['Private', 'Public', 'Collaborative'].map(privacy => (
              <label key={privacy} className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="radio" name="privacy" defaultChecked={privacy === 'Private'} className="w-4 h-4" />
                <span>{privacy}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Export Data</h3>
          <p className="text-sm text-gray-600 mb-4">Download all your notes and data in various formats</p>
          <div className="flex gap-3">
            <button className="btn-secondary">Export as JSON</button>
            <button className="btn-secondary">Export as Markdown</button>
            <button className="btn-secondary">Export as PDF</button>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Auto Backup</h3>
          <label className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="w-5 h-5" />
            <span>Enable automatic cloud backup</span>
          </label>
          <p className="text-sm text-gray-500 mt-2 ml-8">Your data will be backed up daily</p>
        </div>
      </div>
    );
  }

  if (activeSubView === 'integrations') {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Plug className="text-blue-600" size={28} />
          <h2 className="text-3xl font-bold">AI & Integrations</h2>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">AI Features</h3>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
              <span>AI Chatbot</span>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </label>
            <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
              <span>Auto Summarization</span>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </label>
            <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
              <span>Quiz Generator</span>
              <input type="checkbox" className="w-5 h-5" />
            </label>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Connected Services</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
              <div>
                <div className="font-medium">Google Drive</div>
                <div className="text-sm text-gray-500">Not connected</div>
              </div>
              <button className="btn-secondary">Connect</button>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
              <div>
                <div className="font-medium">Notion</div>
                <div className="text-sm text-gray-500">Not connected</div>
              </div>
              <button className="btn-secondary">Connect</button>
            </div>
          </div>
        </div>

        <div className="card bg-blue-50">
          <h3 className="text-lg font-semibold mb-2 text-blue-900">AI Usage Dashboard</h3>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700">142</div>
              <div className="text-xs text-gray-700">AI Requests</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700">85%</div>
              <div className="text-xs text-gray-700">Quota Used</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700">15</div>
              <div className="text-xs text-gray-700">Days Left</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
