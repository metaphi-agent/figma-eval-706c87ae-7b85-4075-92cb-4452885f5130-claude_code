export default function GmailHeader() {
  return (
    <header className="h-16 bg-white border-b border-[#dadce0] flex items-center px-4 gap-4">
      {/* Menu button */}
      <button className="p-3 hover:bg-gray-100 rounded-full -ml-2">
        <span className="material-icons text-[#5f6368]">menu</span>
      </button>

      {/* Gmail logo */}
      <div className="flex items-center gap-2">
        <svg width="109" height="40" viewBox="0 0 109 40" fill="none">
          <path d="M17.7 11.5L8.4 18.6V11.5L6 9.8V32.4H8.4V21.4L17.7 14.3L27 21.4V32.4H29.4V9.8L27 11.5V18.6L17.7 11.5Z" fill="#EA4335"/>
          <path d="M40.2 32.4H42.6V15.6L40.2 13.9V32.4Z" fill="#FBBC04"/>
          <path d="M40.2 9.6C40.2 10.925 41.275 12 42.6 12C43.925 12 45 10.925 45 9.6C45 8.275 43.925 7.2 42.6 7.2C41.275 7.2 40.2 8.275 40.2 9.6Z" fill="#FBBC04"/>
          <path d="M49.2 32.4H51.6V9.6H49.2V32.4Z" fill="#34A853"/>
          <path d="M78.3 32.4H80.7V15.6L78.3 13.9V32.4Z" fill="#EA4335"/>
          <path d="M78.3 9.6C78.3 10.925 79.375 12 80.7 12C82.025 12 83.1 10.925 83.1 9.6C83.1 8.275 82.025 7.2 80.7 7.2C79.375 7.2 78.3 8.275 78.3 9.6Z" fill="#EA4335"/>
          <path d="M55.8 32.4V9.6L61.2 14.1L66.6 9.6V32.4H69V7.2L61.2 13.2L53.4 7.2V32.4H55.8Z" fill="#4285F4"/>
          <path d="M87.3 32.4V9.6L92.7 14.1L98.1 9.6V32.4H100.5V7.2L92.7 13.2L84.9 7.2V32.4H87.3Z" fill="#34A853"/>
        </svg>
      </div>

      {/* Search bar */}
      <div className="flex-1 max-w-[720px]">
        <div className="flex items-center h-12 bg-[#f1f3f4] hover:bg-[#e9eaed] rounded-lg px-4 gap-3">
          <span className="material-icons text-[#5f6368]">search</span>
          <input
            type="text"
            placeholder="Search mail"
            className="flex-1 bg-transparent outline-none text-sm text-[#202124] placeholder:text-[#5f6368]"
          />
          <button className="p-1 hover:bg-gray-200 rounded-full">
            <span className="material-icons text-[#5f6368] text-lg">tune</span>
          </button>
        </div>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-1 ml-auto">
        <button className="p-3 hover:bg-gray-100 rounded-full">
          <span className="material-icons text-[#5f6368]">help_outline</span>
        </button>
        <button className="p-3 hover:bg-gray-100 rounded-full">
          <span className="material-icons text-[#5f6368]">settings</span>
        </button>
        <button className="p-3 hover:bg-gray-100 rounded-full">
          <span className="material-icons text-[#5f6368]">apps</span>
        </button>
        <button className="ml-2">
          <div className="w-8 h-8 rounded-full bg-[#1a73e8] flex items-center justify-center text-white text-sm font-medium">
            A
          </div>
        </button>
      </div>
    </header>
  );
}
