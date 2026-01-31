import { Avatar } from '../ui/Avatar';
import { Icon } from '../ui/Icon';
import { EmailToolbar } from './EmailToolbar';

interface EmailViewProps {
  subject: string;
  sender: {
    name: string;
    email: string;
  };
  recipients: string[];
  timestamp: string;
  body: string;
  labels?: string[];
  isMultipleRecipients?: boolean;
  isSubscription?: boolean;
  showImagePlaceholder?: boolean;
}

export function EmailView({
  subject,
  sender,
  recipients,
  timestamp,
  body,
  labels = ['Inbox'],
  isMultipleRecipients = false,
  isSubscription = false,
  showImagePlaceholder = false,
}: EmailViewProps) {
  const quickReplies = [
    'Looking forward to it!',
    'We will be there!',
    'Thanks for the update!',
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      <EmailToolbar currentPage={1} totalPages={2619} />

      <div className="flex-1 overflow-y-auto px-6 py-4">
        {/* Subject line */}
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-[22px] font-normal text-[var(--color-primary-text)]">{subject}</h1>
          <button className="p-1 rounded hover:bg-gray-100">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[var(--color-text-light)]">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="currentColor" />
            </svg>
          </button>
          <div className="flex items-center gap-1">
            {labels.map((label, index) => (
              <span
                key={index}
                className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded ${
                  label === 'Inbox' ? 'bg-[#e0e0e0] text-[var(--color-primary-text)]' :
                  label === 'Promotions' ? 'bg-[var(--color-promotions-green)] text-white' :
                  'bg-gray-100 text-[var(--color-text-light)]'
                }`}
              >
                {label}
                <button className="hover:text-gray-700">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                </button>
              </span>
            ))}
          </div>
          <div className="flex-1" />
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Icon name="print" size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Icon name="open-new" size={20} />
          </button>
        </div>

        {/* Sender info */}
        <div className="flex items-start gap-4 mb-6">
          <Avatar name={sender.name} size="md" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-medium text-[var(--color-primary-text)]">{sender.name}</span>
              <span className="text-sm text-[var(--color-text-light)]">&lt;{sender.email}&gt;</span>
              <button className="text-sm text-[var(--color-gmail-blue)] hover:underline">Unsubscribe</button>
            </div>
            <div className="flex items-center gap-1 text-sm text-[var(--color-text-light)]">
              <span>to {recipients.join(', ')}</span>
              <button className="p-0.5 rounded hover:bg-gray-100">
                <Icon name="chevron-down" size={16} />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-light)]">
            <span>{timestamp}</span>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Icon name="reply" size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <circle cx="12" cy="6" r="2" fill="currentColor" />
                <circle cx="12" cy="18" r="2" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>

        {/* Email body */}
        {showImagePlaceholder ? (
          <div className="bg-[#F1F3F4] rounded-lg p-8 mb-6 min-h-[400px] flex items-center justify-center">
            <span className="text-[var(--color-text-light)] text-lg">Design Your Email Here</span>
          </div>
        ) : (
          <div className="text-sm text-[var(--color-primary-text)] leading-6 mb-8 max-w-[800px]">
            <p>{body}</p>
          </div>
        )}

        {/* Spacer for email content */}
        <div className="h-32" />

        {/* Quick replies */}
        {!showImagePlaceholder && (
          <div className="flex flex-wrap gap-2 mb-6">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                className="px-4 py-2 border border-[var(--color-gmail-blue)] text-[var(--color-gmail-blue)] rounded-full text-sm hover:bg-blue-50 transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex items-center gap-3 pb-6">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm text-[var(--color-primary-text)] hover:bg-gray-50 transition-colors">
            <Icon name="reply" size={18} />
            Reply
          </button>
          {isMultipleRecipients && (
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm text-[var(--color-primary-text)] hover:bg-gray-50 transition-colors">
              <Icon name="reply-all" size={18} />
              Reply all
            </button>
          )}
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm text-[var(--color-primary-text)] hover:bg-gray-50 transition-colors">
            <Icon name="forward" size={18} />
            Forward
          </button>
        </div>
      </div>
    </div>
  );
}
