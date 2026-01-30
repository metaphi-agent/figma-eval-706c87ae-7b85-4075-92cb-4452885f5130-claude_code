import { useState, useEffect } from 'react';
import BrowserChrome from './components/BrowserChrome';
import GmailHeader from './components/GmailHeader';
import Sidebar from './components/Sidebar';
import EmailView from './components/EmailView';
import RightSidebar from './components/RightSidebar';
import ComposeDialog from './components/ComposeDialog';

function App() {
  const [showCompose, setShowCompose] = useState(false);
  const [isComposeMinimized, setIsComposeMinimized] = useState(false);
  const [isMultipleRecipients, setIsMultipleRecipients] = useState(false);
  const [isSubscription, setIsSubscription] = useState(false);

  useEffect(() => {
    // Read URL params to set initial state
    const params = new URLSearchParams(window.location.search);
    const compose = params.get('compose');
    const recipients = params.get('recipients');
    const type = params.get('type');

    setShowCompose(compose === 'new' || compose === 'minimized');
    setIsComposeMinimized(compose === 'minimized');
    setIsMultipleRecipients(recipients === 'multiple');
    setIsSubscription(type === 'subscription');
  }, []);

  const handleCloseCompose = () => {
    setShowCompose(false);
    setIsComposeMinimized(false);
  };

  const handleMinimizeCompose = () => {
    setIsComposeMinimized(!isComposeMinimized);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Browser Chrome */}
      <BrowserChrome />

      {/* Gmail Header */}
      <GmailHeader />

      {/* Main content area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Email View */}
        <EmailView
          isMultipleRecipients={isMultipleRecipients}
          isSubscription={isSubscription}
        />

        {/* Right Sidebar */}
        <RightSidebar />
      </div>

      {/* Compose Dialog */}
      {showCompose && (
        <ComposeDialog
          isMinimized={isComposeMinimized}
          onClose={handleCloseCompose}
          onMinimize={handleMinimizeCompose}
        />
      )}
    </div>
  );
}

export default App;
