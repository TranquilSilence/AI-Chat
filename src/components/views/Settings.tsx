import { User, Palette, Shield, Plug, Bell, Lock, Smartphone, Mail, MessageSquare, Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

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
    const { theme, toggleTheme } = useTheme();

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Palette className="text-blue-600" size={28} />
          <h2 className="text-3xl font-bold">Theme & Layout</h2>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Appearance Mode</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={theme === 'dark' ? toggleTheme : undefined}
              className={`p-6 border-2 rounded-xl cursor-pointer transition-all hover:scale-105 ${
                theme === 'light'
                  ? 'border-blue-500 bg-blue-50 shadow-lg'
                  : 'border-gray-300 hover:border-blue-400'
              }`}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full">
                  <Sun size={24} className="text-white" />
                </div>
                <div className="font-semibold">Light Mode</div>
                <div className="text-xs text-gray-500">Bright and clear</div>
              </div>
            </button>

            <button
              onClick={theme === 'light' ? toggleTheme : undefined}
              className={`p-6 border-2 rounded-xl cursor-pointer transition-all hover:scale-105 ${
                theme === 'dark'
                  ? 'border-blue-500 bg-blue-50 shadow-lg'
                  : 'border-gray-300 hover:border-blue-400'
              }`}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full">
                  <Moon size={24} className="text-white" />
                </div>
                <div className="font-semibold">Dark Mode</div>
                <div className="text-xs text-gray-500">Easy on the eyes</div>
              </div>
            </button>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Sidebar Theme</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: 'Slate', colors: 'from-slate-900 to-slate-800', active: true },
              { name: 'Ocean', colors: 'from-blue-900 to-blue-700', active: false },
              { name: 'Forest', colors: 'from-emerald-900 to-emerald-700', active: false }
            ].map(sidebarTheme => (
              <div
                key={sidebarTheme.name}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:scale-105 ${
                  sidebarTheme.active ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
                }`}
              >
                <div className={`w-full h-20 bg-gradient-to-br ${sidebarTheme.colors} rounded-lg mb-2`}></div>
                <div className="text-center font-medium text-sm">{sidebarTheme.name}</div>
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
                <option>Small (14px)</option>
                <option selected>Medium (16px)</option>
                <option>Large (18px)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Font Family</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option selected>Inter (Default)</option>
                <option>System Font</option>
                <option>Monospace</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Display Preferences</h3>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
              <span>Compact Mode</span>
              <input type="checkbox" className="w-5 h-5" />
            </label>
            <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
              <span>Show Animations</span>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </label>
            <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
              <span>Reduce Motion</span>
              <input type="checkbox" className="w-5 h-5" />
            </label>
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

  if (activeSubView === 'notifications') {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Bell className="text-blue-600" size={28} />
          <h2 className="text-3xl font-bold">Notifications</h2>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Push Notifications</h3>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <Bell className="text-blue-600" size={20} />
                <div>
                  <div className="font-medium">Deadline Reminders</div>
                  <div className="text-xs text-gray-500">Get notified about upcoming deadlines</div>
                </div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </label>
            <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <MessageSquare className="text-green-600" size={20} />
                <div>
                  <div className="font-medium">New Comments</div>
                  <div className="text-xs text-gray-500">When someone comments on your notes</div>
                </div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </label>
            <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <Mail className="text-purple-600" size={20} />
                <div>
                  <div className="font-medium">Weekly Summary</div>
                  <div className="text-xs text-gray-500">Receive weekly progress reports</div>
                </div>
              </div>
              <input type="checkbox" className="w-5 h-5" />
            </label>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Email Notifications</h3>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <span>Task Assignments</span>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </label>
            <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <span>Shared Notes Updates</span>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </label>
            <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <span>Newsletter</span>
              <input type="checkbox" className="w-5 h-5" />
            </label>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Quiet Hours</h3>
          <p className="text-sm text-gray-600 mb-4">Set a time range when you don't want to receive notifications</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
              <input type="time" defaultValue="22:00" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
              <input type="time" defaultValue="08:00" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeSubView === 'security') {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Lock className="text-blue-600" size={28} />
          <h2 className="text-3xl font-bold">Security</h2>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Password</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
              <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
              <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button className="btn-primary">Update Password</button>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Two-Factor Authentication</h3>
          <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg mb-4">
            <div className="flex items-center gap-3">
              <Shield className="text-green-600" size={24} />
              <div>
                <div className="font-medium text-green-900">2FA Enabled</div>
                <div className="text-sm text-green-700">Your account is protected</div>
              </div>
            </div>
            <button className="btn-secondary">Manage</button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg">
              <Smartphone className="text-gray-600" size={20} />
              <div className="flex-1">
                <div className="font-medium">Authenticator App</div>
                <div className="text-xs text-gray-500">Last used 2 hours ago</div>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Active</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Active Sessions</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
              <div>
                <div className="font-medium">Chrome on Windows</div>
                <div className="text-xs text-gray-500">Current session • IP: 192.168.1.1</div>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Current</span>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
              <div>
                <div className="font-medium">Safari on iPhone</div>
                <div className="text-xs text-gray-500">Last active 3 days ago • IP: 192.168.1.50</div>
              </div>
              <button className="text-red-600 text-sm hover:bg-red-50 px-3 py-1 rounded">Revoke</button>
            </div>
          </div>
        </div>

        <div className="card bg-red-50 border border-red-200">
          <h3 className="text-lg font-semibold mb-2 text-red-900">Danger Zone</h3>
          <p className="text-sm text-red-700 mb-4">Irreversible actions</p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">Delete Account</button>
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
