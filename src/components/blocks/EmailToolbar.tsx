import { Icon } from '../ui/Icon';

interface EmailToolbarProps {
  currentPage: number;
  totalPages: number;
  onBack?: () => void;
}

export function EmailToolbar({ currentPage, totalPages, onBack }: EmailToolbarProps) {
  const toolbarButtons = [
    { icon: 'arrow-back', label: 'Back to inbox', action: onBack },
  ];

  const actionButtons = [
    { icon: 'inbox', label: 'Archive' },
    { icon: 'spam', label: 'Report spam' },
    { icon: 'delete', label: 'Delete' },
    { icon: 'inbox', label: 'Mark as unread' },
    { icon: 'snooze', label: 'Snooze' },
    { icon: 'add-task', label: 'Add to Tasks' },
    { icon: 'move-to', label: 'Move to' },
  ];

  return (
    <div className="flex items-center h-12 px-2 border-b border-[var(--color-border)]">
      {/* Back button */}
      <button
        onClick={onBack}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Back to inbox"
      >
        <Icon name="arrow-back" size={20} />
      </button>

      {/* Action buttons */}
      <div className="flex items-center gap-1 ml-2">
        {actionButtons.map((btn, index) => (
          <button
            key={index}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={btn.label}
          >
            <Icon name={btn.icon} size={20} />
          </button>
        ))}
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="More actions">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="5" cy="12" r="2" fill="currentColor" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <circle cx="19" cy="12" r="2" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Pagination */}
      <div className="flex items-center gap-2 text-sm text-[var(--color-text-light)]">
        <span>{currentPage}-{Math.min(currentPage + 49, totalPages)} of {totalPages.toLocaleString()}</span>
        <button className="p-1 rounded hover:bg-gray-100 disabled:opacity-50" disabled>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor" />
          </svg>
        </button>
        <button className="p-1 rounded hover:bg-gray-100">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
}
