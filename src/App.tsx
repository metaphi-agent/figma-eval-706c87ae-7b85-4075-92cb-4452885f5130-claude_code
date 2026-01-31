import { useState } from 'react';
import { Header } from './components/blocks/Header';
import { Sidebar } from './components/blocks/Sidebar';
import { EmailView } from './components/blocks/EmailView';
import { ComposeModal } from './components/blocks/ComposeModal';
import { RightSidebar } from './components/blocks/RightSidebar';

type ViewType = 'single' | 'multiple' | 'subscription';

interface ComposeState {
  isOpen: boolean;
  isMinimized: boolean;
}

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('single');
  const [composeModals, setComposeModals] = useState<ComposeState[]>([]);

  const openCompose = () => {
    if (composeModals.length < 2) {
      setComposeModals([...composeModals, { isOpen: true, isMinimized: false }]);
    }
  };

  const closeCompose = (index: number) => {
    setComposeModals(composeModals.filter((_, i) => i !== index));
  };

  const toggleMinimize = (index: number) => {
    setComposeModals(
      composeModals.map((modal, i) =>
        i === index ? { ...modal, isMinimized: !modal.isMinimized } : modal
      )
    );
  };

  // Email content based on current view
  const emailContent = {
    single: {
      subject: 'Email Subject',
      sender: { name: 'Michelle Rivera', email: 'michelle.rivera@example.com' },
      recipients: ['me'],
      timestamp: '9:14 AM (8 hours ago)',
      body: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.',
      isMultipleRecipients: false,
      labels: ['Inbox'],
    },
    multiple: {
      subject: 'Email Subject',
      sender: { name: 'Michelle Rivera', email: 'michelle.rivera@example.com' },
      recipients: ['me', 'Sidney', 'Sharon'],
      timestamp: '9:14 AM (8 hours ago)',
      body: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.',
      isMultipleRecipients: true,
      labels: ['Inbox'],
    },
    subscription: {
      subject: 'Email Subject',
      sender: { name: 'Michelle Rivera', email: 'michelle.rivera@example.com' },
      recipients: ['me'],
      timestamp: '9:14 AM (8 hours ago)',
      body: '',
      isMultipleRecipients: false,
      labels: ['Inbox', 'Promotions'],
      showImagePlaceholder: true,
    },
  };

  const email = emailContent[currentView];

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Browser chrome simulation (optional for demo) */}
      <div className="h-[72px] bg-[#202124] flex items-center px-4 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex items-center gap-2 ml-4">
          <button className="text-white/60 p-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
          </button>
          <button className="text-white/60 p-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </button>
          <button className="text-white/60 p-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </svg>
          </button>
        </div>
        <div className="flex-1 max-w-md mx-4">
          <div className="flex items-center h-8 px-3 bg-[#303134] rounded-full">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/60">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" fill="currentColor" />
            </svg>
            <span className="ml-2 text-sm text-white/90">gmail.com</span>
          </div>
        </div>
      </div>

      {/* Gmail header */}
      <Header />

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar */}
        <Sidebar onComposeClick={openCompose} />

        {/* Email view */}
        <main className="flex-1 overflow-hidden border-l border-r border-[var(--color-border)]">
          <EmailView
            subject={email.subject}
            sender={email.sender}
            recipients={email.recipients}
            timestamp={email.timestamp}
            body={email.body}
            labels={email.labels}
            isMultipleRecipients={email.isMultipleRecipients}
            showImagePlaceholder={(email as any).showImagePlaceholder}
          />
        </main>

        {/* Right sidebar */}
        <RightSidebar />
      </div>

      {/* View selector (for demo purposes) */}
      <div className="fixed bottom-4 left-4 flex gap-2 bg-white rounded-lg shadow-lg p-2 z-50">
        <button
          onClick={() => setCurrentView('single')}
          className={`px-3 py-1.5 text-xs rounded ${currentView === 'single' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
        >
          Single
        </button>
        <button
          onClick={() => setCurrentView('multiple')}
          className={`px-3 py-1.5 text-xs rounded ${currentView === 'multiple' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
        >
          Multiple
        </button>
        <button
          onClick={() => setCurrentView('subscription')}
          className={`px-3 py-1.5 text-xs rounded ${currentView === 'subscription' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
        >
          Subscription
        </button>
        <button
          onClick={openCompose}
          className="px-3 py-1.5 text-xs rounded bg-green-500 text-white"
        >
          + Compose
        </button>
      </div>

      {/* Compose modals */}
      {composeModals.map((modal, index) => (
        <div
          key={index}
          style={{
            right: modal.isMinimized
              ? `${300 + index * 280}px`
              : `${80 + index * 620}px`,
          }}
          className="fixed bottom-0"
        >
          <ComposeModal
            onClose={() => closeCompose(index)}
            onMinimize={() => toggleMinimize(index)}
            isMinimized={modal.isMinimized}
          />
        </div>
      ))}
    </div>
  );
}
