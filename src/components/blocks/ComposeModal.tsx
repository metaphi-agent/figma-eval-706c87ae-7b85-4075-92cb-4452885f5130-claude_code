import { useState } from 'react';
import { Icon } from '../ui/Icon';

interface ComposeModalProps {
  onClose: () => void;
  onMinimize: () => void;
  isMinimized?: boolean;
}

export function ComposeModal({ onClose, onMinimize, isMinimized = false }: ComposeModalProps) {
  const [recipients, setRecipients] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  if (isMinimized) {
    return (
      <div className="fixed bottom-0 right-[300px] w-[260px] bg-[var(--color-compose-header)] rounded-t-lg shadow-lg z-50">
        <button
          onClick={onMinimize}
          className="w-full flex items-center justify-between px-4 py-2.5 text-white hover:bg-gray-600 transition-colors rounded-t-lg"
        >
          <span className="text-sm font-medium">New Message</span>
          <div className="flex items-center gap-1">
            <Icon name="minimize" size={16} className="opacity-60" />
            <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="p-1 hover:bg-gray-500 rounded">
              <Icon name="close" size={16} className="opacity-60" />
            </button>
          </div>
        </button>
      </div>
    );
  }

  const toolbarIcons = [
    { name: 'text-format', label: 'Formatting options' },
    { name: 'attach', label: 'Attach files' },
    { name: 'link', label: 'Insert link' },
    { name: 'emoji', label: 'Insert emoji' },
    { name: 'drive', label: 'Insert files using Drive' },
    { name: 'image', label: 'Insert photo' },
    { name: 'schedule', label: 'Toggle confidential mode' },
    { name: 'pen', label: 'Insert signature' },
  ];

  return (
    <div className="fixed bottom-0 right-20 w-[600px] bg-white rounded-t-lg shadow-[var(--shadow-compose)] z-50 flex flex-col max-h-[calc(100vh-100px)]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--color-compose-header)] rounded-t-lg">
        <span className="text-sm font-medium text-white">New Message</span>
        <div className="flex items-center gap-1">
          <button
            onClick={onMinimize}
            className="p-1 rounded hover:bg-gray-500 transition-colors"
            aria-label="Minimize"
          >
            <Icon name="minimize" size={16} className="invert opacity-60" />
          </button>
          <button
            className="p-1 rounded hover:bg-gray-500 transition-colors"
            aria-label="Pop-out"
          >
            <Icon name="expand" size={16} className="invert opacity-60" />
          </button>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-500 transition-colors"
            aria-label="Close"
          >
            <Icon name="close" size={16} className="invert opacity-60" />
          </button>
        </div>
      </div>

      {/* Recipients */}
      <div className="flex items-center px-4 py-2 border-b border-[var(--color-border)]">
        <input
          type="text"
          value={recipients}
          onChange={(e) => setRecipients(e.target.value)}
          placeholder="Recipients"
          className="flex-1 text-sm text-[var(--color-primary-text)] placeholder-[var(--color-text-light)] outline-none"
        />
        <div className="flex items-center gap-1 text-sm text-[var(--color-text-light)]">
          <button className="hover:text-[var(--color-primary-text)]">Cc</button>
          <button className="hover:text-[var(--color-primary-text)]">Bcc</button>
        </div>
      </div>

      {/* Subject */}
      <div className="px-4 py-2 border-b border-[var(--color-border)]">
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="w-full text-sm text-[var(--color-primary-text)] placeholder-[var(--color-text-light)] outline-none"
        />
      </div>

      {/* Body */}
      <div className="flex-1 p-4 min-h-[250px]">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body Text"
          className="w-full h-full text-sm text-[var(--color-primary-text)] placeholder-[var(--color-text-light)] outline-none resize-none"
        />
      </div>

      {/* Footer toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-[var(--color-border)]">
        <div className="flex items-center gap-1">
          {/* Send button */}
          <button className="flex items-center bg-[var(--color-gmail-blue)] text-white rounded overflow-hidden">
            <span className="px-4 py-2 text-sm font-medium hover:bg-[var(--color-gmail-blue-hover)] transition-colors">
              Send
            </span>
            <span className="px-2 py-2 border-l border-[#1859BA] hover:bg-[var(--color-gmail-blue-hover)] transition-colors">
              <Icon name="chevron-down" size={16} className="invert" />
            </span>
          </button>

          {/* Toolbar icons */}
          <div className="flex items-center gap-0.5 ml-2">
            {toolbarIcons.map((icon) => (
              <button
                key={icon.name}
                className="p-2 rounded hover:bg-gray-100 transition-colors"
                aria-label={icon.label}
              >
                <Icon name={icon.name} size={20} />
              </button>
            ))}
          </div>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-0.5">
          <button className="p-2 rounded hover:bg-gray-100 transition-colors" aria-label="More options">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <circle cx="12" cy="6" r="2" fill="currentColor" />
              <circle cx="12" cy="18" r="2" fill="currentColor" />
            </svg>
          </button>
          <button className="p-2 rounded hover:bg-gray-100 transition-colors" aria-label="Delete draft">
            <Icon name="delete" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
