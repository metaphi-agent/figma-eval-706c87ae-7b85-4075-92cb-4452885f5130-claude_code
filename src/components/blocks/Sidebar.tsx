import { Icon } from '../ui/Icon';

interface SidebarItem {
  name: string;
  icon: string;
  count?: number;
  selected?: boolean;
}

interface SidebarProps {
  onComposeClick: () => void;
}

export function Sidebar({ onComposeClick }: SidebarProps) {
  const mailItems: SidebarItem[] = [
    { name: 'Inbox', icon: 'inbox', count: 3, selected: true },
    { name: 'Starred', icon: 'star' },
    { name: 'Snoozed', icon: 'snooze' },
    { name: 'Sent', icon: 'sent' },
    { name: 'Drafts', icon: 'drafts', count: 1 },
    { name: 'Spam', icon: 'spam', count: 3 },
    { name: 'Trash', icon: 'trash' },
  ];

  return (
    <aside className="w-[256px] flex flex-col h-full overflow-y-auto">
      {/* Compose button */}
      <div className="p-4 pl-2">
        <button
          onClick={onComposeClick}
          className="flex items-center gap-3 h-14 px-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-200"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 12H4M12 4v16"
              stroke="#EA4335"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-sm font-medium text-[var(--color-primary-text)]">Compose</span>
        </button>
      </div>

      {/* Mail navigation */}
      <nav className="flex-1">
        <ul className="space-y-0.5 pr-4">
          {mailItems.map((item) => (
            <li key={item.name}>
              <button
                className={`w-full flex items-center gap-4 h-8 pl-6 pr-3 rounded-r-full transition-colors ${
                  item.selected
                    ? 'bg-[var(--color-bg-sidebar-selected)] text-[var(--color-inbox-red)] font-medium'
                    : 'text-[var(--color-primary-text)] hover:bg-[var(--color-bg-sidebar-hover)]'
                }`}
              >
                <Icon name={item.icon} size={20} className={item.selected ? 'opacity-100' : 'opacity-70'} />
                <span className="flex-1 text-left text-sm">{item.name}</span>
                {item.count && (
                  <span className={`text-xs ${item.selected ? 'font-bold' : ''}`}>{item.count}</span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Categories section */}
        <div className="mt-2 pr-4">
          <button className="w-full flex items-center gap-4 h-8 pl-6 pr-3 rounded-r-full text-[var(--color-primary-text)] hover:bg-[var(--color-bg-sidebar-hover)] transition-colors">
            <Icon name="label" size={20} className="opacity-70" />
            <span className="flex-1 text-left text-sm">Categories</span>
            <Icon name="chevron-down" size={20} className="opacity-70" />
          </button>
          <button className="w-full flex items-center gap-4 h-8 pl-6 pr-3 rounded-r-full text-[var(--color-primary-text)] hover:bg-[var(--color-bg-sidebar-hover)] transition-colors">
            <Icon name="more" size={20} className="opacity-70" />
            <span className="flex-1 text-left text-sm">More</span>
            <Icon name="chevron-down" size={20} className="opacity-70" />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--color-border)] my-4 ml-6 mr-4" />

        {/* Meet section */}
        <div className="pr-4">
          <h3 className="pl-6 text-sm font-medium text-[var(--color-primary-text)] mb-1">Meet</h3>
          <button className="w-full flex items-center gap-4 h-8 pl-6 pr-3 rounded-r-full text-[var(--color-primary-text)] hover:bg-[var(--color-bg-sidebar-hover)] transition-colors">
            <Icon name="new-meeting" size={20} className="opacity-70" />
            <span className="flex-1 text-left text-sm">New meeting</span>
          </button>
          <button className="w-full flex items-center gap-4 h-8 pl-6 pr-3 rounded-r-full text-[var(--color-primary-text)] hover:bg-[var(--color-bg-sidebar-hover)] transition-colors">
            <Icon name="join-meeting" size={20} className="opacity-70" />
            <span className="flex-1 text-left text-sm">Join a meeting</span>
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--color-border)] my-4 ml-6 mr-4" />

        {/* Hangouts section */}
        <div className="pr-4">
          <h3 className="pl-6 text-sm font-medium text-[var(--color-primary-text)] mb-2">Hangouts</h3>
          <div className="px-6">
            <button className="w-full h-9 bg-[var(--color-gmail-blue)] text-white text-sm font-medium rounded hover:bg-[var(--color-gmail-blue-hover)] transition-colors">
              Sign in
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
}
