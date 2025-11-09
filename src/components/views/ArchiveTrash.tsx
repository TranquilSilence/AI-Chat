import { Archive, Trash2, RotateCcw } from 'lucide-react';

export default function ArchiveTrash() {
  const archivedItems = [
    { id: '1', title: 'Old Chemistry Notes', type: 'Note', date: '2025-10-15' },
    { id: '2', title: 'Completed Physics Assignment', type: 'Task', date: '2025-10-10' }
  ];

  const trashedItems = [
    { id: '3', title: 'Draft Essay Ideas', type: 'Note', date: '2025-11-05' },
    { id: '4', title: 'Outdated Study Plan', type: 'Document', date: '2025-11-03' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Archive className="text-blue-600" size={28} />
        <h2 className="text-3xl font-bold">Archive & Trash</h2>
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Archive size={24} className="text-blue-600" />
            Archived Items
          </h3>
          <span className="text-sm text-gray-500">{archivedItems.length} items</span>
        </div>

        {archivedItems.length === 0 ? (
          <div className="text-center py-8 text-gray-500">No archived items</div>
        ) : (
          <div className="space-y-2">
            {archivedItems.map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div>
                  <div className="font-medium text-gray-900">{item.title}</div>
                  <div className="text-sm text-gray-500">{item.type} • Archived on {item.date}</div>
                </div>
                <button className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <RotateCcw size={16} />
                  Restore
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Trash2 size={24} className="text-red-600" />
            Trash
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">{trashedItems.length} items</span>
            <button className="text-sm text-red-600 hover:bg-red-50 px-3 py-1 rounded-lg transition-colors">
              Empty Trash
            </button>
          </div>
        </div>

        {trashedItems.length === 0 ? (
          <div className="text-center py-8 text-gray-500">Trash is empty</div>
        ) : (
          <div className="space-y-2">
            {trashedItems.map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-red-50 transition-colors">
                <div>
                  <div className="font-medium text-gray-900">{item.title}</div>
                  <div className="text-sm text-gray-500">{item.type} • Deleted on {item.date}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <RotateCcw size={16} />
                    Restore
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-100 rounded-lg transition-colors">
                    <Trash2 size={16} />
                    Delete Forever
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="card bg-yellow-50 border border-yellow-200">
        <div className="flex items-start gap-3">
          <div className="text-yellow-600">
            <Archive size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-yellow-900 mb-1">About Archive & Trash</h4>
            <p className="text-sm text-yellow-800">
              Archived items are hidden from your main workspace but can be restored anytime.
              Items in trash will be permanently deleted after 30 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
