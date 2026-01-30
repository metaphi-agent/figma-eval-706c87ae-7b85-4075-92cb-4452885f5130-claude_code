export default function RightSidebar() {
  const apps = [
    { icon: 'calendar_today', color: '#1a73e8', name: 'Calendar' },
    { icon: 'keep', color: '#fbbc04', name: 'Keep' },
    { icon: 'check_circle', color: '#1a73e8', name: 'Tasks' },
    { icon: 'contacts', color: '#1a73e8', name: 'Contacts' },
  ];

  return (
    <aside className="w-14 bg-white border-l border-[#dadce0] flex flex-col items-center py-3 gap-2">
      {apps.map((app, index) => (
        <button
          key={index}
          className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
          title={app.name}
        >
          <span className="material-icons" style={{ color: app.color }}>
            {app.icon}
          </span>
        </button>
      ))}

      <div className="w-8 h-px bg-[#dadce0] my-2"></div>

      <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
        <span className="material-icons text-[#5f6368]">add</span>
      </button>

      <div className="flex-1"></div>

      <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
        <span className="material-icons text-[#5f6368]">chevron_left</span>
      </button>
    </aside>
  );
}
