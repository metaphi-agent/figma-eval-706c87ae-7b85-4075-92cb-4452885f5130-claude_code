import { useState } from 'react';

interface NavItemProps {
  icon: string;
  label: string;
  count?: number;
  active?: boolean;
}

function NavItem({ icon, label, count, active }: NavItemProps) {
  return (
    <button
      className={`w-full flex items-center gap-4 h-10 px-4 rounded-r-full hover:bg-[#f6fafe] transition-colors ${
        active ? 'bg-[#fce8e6] font-medium' : ''
      }`}
    >
      <span className={`material-icons text-xl ${active ? 'text-[#202124]' : 'text-[#5f6368]'}`}>
        {icon}
      </span>
      <span className={`text-sm ${active ? 'text-[#202124]' : 'text-[#202124]'}`}>{label}</span>
      {count !== undefined && (
        <span className="ml-auto text-sm text-[#5f6368]">{count}</span>
      )}
    </button>
  );
}

export default function Sidebar() {
  const [showMore, setShowMore] = useState(false);

  return (
    <aside className="w-64 bg-white flex flex-col border-r border-[#dadce0]">
      {/* Compose button */}
      <div className="p-4">
        <button className="flex items-center gap-4 h-14 px-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M8 28L26 10L30 14L12 32L8 28Z" fill="#EA4335"/>
            <path d="M26 10L30 14L34 10L30 6L26 10Z" fill="#FBBC04"/>
            <path d="M4 32L8 28L12 32L8 36L4 32Z" fill="#34A853"/>
          </svg>
          <span className="text-sm font-medium text-[#202124]">Compose</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-2 pr-2 overflow-y-auto">
        <NavItem icon="inbox" label="Inbox" count={3} active />
        <NavItem icon="star_border" label="Starred" />
        <NavItem icon="schedule" label="Snoozed" />
        <NavItem icon="send" label="Sent" />
        <NavItem icon="insert_drive_file" label="Drafts" count={1} />
        <NavItem icon="report" label="Spam" count={3} />
        <NavItem icon="delete" label="Trash" />

        {/* Categories */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="w-full flex items-center gap-4 h-10 px-4 rounded-r-full hover:bg-[#f6fafe] transition-colors"
        >
          <span className="material-icons text-xl text-[#5f6368]">
            {showMore ? 'expand_more' : 'chevron_right'}
          </span>
          <span className="text-sm text-[#202124]">Categories</span>
        </button>

        {/* More */}
        <button
          className="w-full flex items-center gap-4 h-10 px-4 rounded-r-full hover:bg-[#f6fafe] transition-colors"
        >
          <span className="material-icons text-xl text-[#5f6368]">expand_more</span>
          <span className="text-sm text-[#202124]">More</span>
        </button>
      </nav>

      {/* Meet section */}
      <div className="border-t border-[#dadce0] p-4">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-[#202124] mb-2">Meet</h3>
          <button className="w-full flex items-center gap-3 h-9 px-3 hover:bg-gray-100 rounded transition-colors">
            <span className="material-icons text-[#5f6368] text-lg">videocam</span>
            <span className="text-sm text-[#5f6368]">New meeting</span>
          </button>
          <button className="w-full flex items-center gap-3 h-9 px-3 hover:bg-gray-100 rounded transition-colors">
            <span className="material-icons text-[#5f6368] text-lg">keyboard</span>
            <span className="text-sm text-[#5f6368]">Join a meeting</span>
          </button>
        </div>

        <div>
          <h3 className="text-sm font-medium text-[#202124] mb-2">Hangouts</h3>
          <button className="w-full h-10 bg-[#1a73e8] hover:bg-[#1557b0] text-white text-sm font-medium rounded transition-colors">
            Sign in
          </button>
        </div>
      </div>
    </aside>
  );
}
