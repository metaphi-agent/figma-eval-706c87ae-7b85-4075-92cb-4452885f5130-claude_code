export function RightSidebar() {
  const apps = [
    { icon: 'calendar', color: 'bg-blue-500', label: 'Calendar' },
    { icon: 'keep', color: 'bg-yellow-500', label: 'Keep' },
    { icon: 'tasks', color: 'bg-blue-600', label: 'Tasks' },
    { icon: 'contacts', color: 'bg-blue-400', label: 'Contacts' },
  ];

  return (
    <aside className="w-14 border-l border-[var(--color-border)] flex flex-col items-center py-4 gap-4">
      {/* Calendar */}
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Calendar">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="#4285F4" strokeWidth="2" />
          <path d="M3 9h18" stroke="#4285F4" strokeWidth="2" />
          <path d="M8 2v4M16 2v4" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
          <text x="12" y="18" textAnchor="middle" fill="#4285F4" fontSize="8" fontWeight="bold">31</text>
        </svg>
      </button>

      {/* Keep */}
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Keep">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 21h6v-2H9v2zm3-19C8.69 2 6 4.69 6 8c0 2.17 1.16 4.06 2.89 5.12L9 15h6l.11-1.88C16.84 12.06 18 10.17 18 8c0-3.31-2.69-6-6-6z" fill="#FBBC04" />
        </svg>
      </button>

      {/* Tasks */}
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Tasks">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#4285F4" strokeWidth="2" />
          <path d="M8 12l2.5 2.5L16 9" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Contacts */}
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Contacts">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke="#4285F4" strokeWidth="2" />
          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <div className="flex-1" />

      {/* Add more apps */}
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Get add-ons">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Toggle sidebar */}
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Hide side panel">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor" />
        </svg>
      </button>
    </aside>
  );
}
