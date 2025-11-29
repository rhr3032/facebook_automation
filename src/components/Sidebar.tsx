import { LayoutDashboard, FileText, Calendar, BarChart3, MessageSquare, TrendingUp, Settings, LogOut } from 'lucide-react';

interface SidebarProps {
  activeMenuItem: string;
  setActiveMenuItem: (item: string) => void;
}

const menuItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'all-pages', label: 'All Pages', icon: FileText },
  { id: 'posts', label: 'Posts & Scheduling', icon: Calendar },
  { id: 'insights', label: 'Insights', icon: BarChart3 },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
  { id: 'ads', label: 'Ad Performance', icon: TrendingUp },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ activeMenuItem, setActiveMenuItem }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 z-40">
      <div className="flex flex-col h-full">
        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenuItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenuItem(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-all">
            <LogOut className="w-5 h-5 text-gray-500" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
