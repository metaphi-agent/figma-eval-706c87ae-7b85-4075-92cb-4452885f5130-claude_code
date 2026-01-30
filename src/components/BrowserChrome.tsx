export default function BrowserChrome() {
  return (
    <div className="h-10 bg-[#3c4043] flex items-center px-3 gap-2">
      {/* Window controls */}
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
        <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
        <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
      </div>

      {/* Navigation arrows */}
      <div className="flex gap-1 ml-3">
        <button className="text-[#9aa0a6] hover:text-white p-1">
          <span className="material-icons text-base">arrow_back</span>
        </button>
        <button className="text-[#9aa0a6] hover:text-white p-1">
          <span className="material-icons text-base">arrow_forward</span>
        </button>
        <button className="text-[#9aa0a6] hover:text-white p-1 ml-1">
          <span className="material-icons text-base">refresh</span>
        </button>
      </div>

      {/* Address bar */}
      <div className="flex-1 flex items-center h-7 bg-[#2d2e30] rounded-full px-3 ml-2">
        <span className="material-icons text-[#9aa0a6] text-sm mr-2">lock</span>
        <span className="text-white text-sm">gmail.com</span>
      </div>

      {/* More options */}
      <button className="text-[#9aa0a6] hover:text-white p-1">
        <span className="material-icons">more_vert</span>
      </button>
    </div>
  );
}
