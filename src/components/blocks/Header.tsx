import { Icon } from '../ui/Icon';

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex items-center h-16 px-4 border-b border-[var(--color-border)] bg-white">
      {/* Left section */}
      <div className="flex items-center gap-2">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Menu"
        >
          <Icon name="menu" size={24} />
        </button>
        <div className="flex items-center gap-2 ml-1">
          <Icon name="gmail-logo" size={32} className="h-8 w-auto" />
          <span className="text-[22px] text-[#5f6368] font-normal">Gmail</span>
        </div>
      </div>

      {/* Search bar */}
      <div className="flex-1 max-w-[720px] mx-4 ml-16">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[var(--color-text-light)]">
              <path
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                fill="currentColor"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search mail"
            className="w-full h-12 pl-12 pr-12 bg-[#F1F3F4] rounded-lg text-base text-[var(--color-primary-text)] placeholder-[var(--color-text-light)] focus:bg-white focus:shadow-[var(--shadow-toolbar)] focus:outline-none transition-all"
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
            <button className="p-1.5 rounded-full hover:bg-gray-200 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[var(--color-text-light)]">
                <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-1">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Support">
          <Icon name="help" size={24} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Settings">
          <Icon name="settings" size={24} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Apps">
          <Icon name="apps" size={24} />
        </button>
        <button className="ml-2 w-8 h-8 rounded-full overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/a/default-user=s64"
            alt="Profile"
            className="w-full h-full object-cover bg-purple-500"
          />
        </button>
      </div>
    </header>
  );
}
