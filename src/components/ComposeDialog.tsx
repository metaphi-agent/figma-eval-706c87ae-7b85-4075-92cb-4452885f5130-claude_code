import { useState } from 'react';

interface ComposeDialogProps {
  isMinimized?: boolean;
  onClose: () => void;
  onMinimize: () => void;
}

export default function ComposeDialog({ isMinimized = false, onClose, onMinimize }: ComposeDialogProps) {
  const [showCcBcc, setShowCcBcc] = useState(false);

  if (isMinimized) {
    return (
      <div className="fixed bottom-0 right-24 w-[250px] bg-[#404040] rounded-t-lg shadow-2xl">
        <div className="h-14 flex items-center justify-between px-4">
          <span className="text-white text-sm font-medium">New Message</span>
          <div className="flex gap-2">
            <button onClick={onMinimize} className="text-white hover:bg-[#5f6368] rounded-full p-1">
              <span className="material-icons text-lg">minimize</span>
            </button>
            <button className="text-white hover:bg-[#5f6368] rounded-full p-1">
              <span className="material-icons text-lg">open_in_full</span>
            </button>
            <button onClick={onClose} className="text-white hover:bg-[#5f6368] rounded-full p-1">
              <span className="material-icons text-lg">close</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 right-24 w-[553px] bg-white rounded-t-lg shadow-2xl flex flex-col">
      {/* Header */}
      <div className="h-14 bg-[#404040] rounded-t-lg flex items-center justify-between px-4">
        <span className="text-white text-sm font-medium">New Message</span>
        <div className="flex gap-2">
          <button onClick={onMinimize} className="text-white hover:bg-[#5f6368] rounded-full p-1">
            <span className="material-icons text-lg">minimize</span>
          </button>
          <button className="text-white hover:bg-[#5f6368] rounded-full p-1">
            <span className="material-icons text-lg">open_in_full</span>
          </button>
          <button onClick={onClose} className="text-white hover:bg-[#5f6368] rounded-full p-1">
            <span className="material-icons text-lg">close</span>
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 flex flex-col">
        {/* Recipients */}
        <div className="border-b border-[#dadce0] px-4 py-2 flex items-center gap-2">
          <span className="text-sm text-[#5f6368]">Recipients</span>
          <input
            type="text"
            className="flex-1 outline-none text-sm text-[#202124]"
            placeholder=""
          />
          <button
            onClick={() => setShowCcBcc(!showCcBcc)}
            className="text-xs text-[#5f6368] hover:text-[#202124]"
          >
            Cc Bcc
          </button>
        </div>

        {/* Cc */}
        {showCcBcc && (
          <>
            <div className="border-b border-[#dadce0] px-4 py-2 flex items-center gap-2">
              <span className="text-sm text-[#5f6368]">Cc</span>
              <input
                type="text"
                className="flex-1 outline-none text-sm text-[#202124]"
                placeholder=""
              />
            </div>
            <div className="border-b border-[#dadce0] px-4 py-2 flex items-center gap-2">
              <span className="text-sm text-[#5f6368]">Bcc</span>
              <input
                type="text"
                className="flex-1 outline-none text-sm text-[#202124]"
                placeholder=""
              />
            </div>
          </>
        )}

        {/* Subject */}
        <div className="border-b border-[#dadce0] px-4 py-2">
          <input
            type="text"
            placeholder="Subject"
            className="w-full outline-none text-sm text-[#202124] placeholder:text-[#5f6368]"
          />
        </div>

        {/* Body */}
        <div className="flex-1 px-4 py-2">
          <textarea
            placeholder="Body Text"
            className="w-full h-full outline-none text-sm text-[#202124] placeholder:text-[#5f6368] resize-none"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#dadce0] px-4 py-3 flex items-center gap-2">
        <button className="px-6 py-2 bg-[#1a73e8] hover:bg-[#1557b0] text-white text-sm font-medium rounded flex items-center gap-2">
          Send
          <span className="material-icons text-base">expand_more</span>
        </button>

        <div className="flex gap-1">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <span className="material-icons text-[#5f6368] text-lg">format_bold</span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <span className="material-icons text-[#5f6368] text-lg">attach_file</span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <span className="material-icons text-[#5f6368] text-lg">insert_link</span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <span className="material-icons text-[#5f6368] text-lg">insert_emoticon</span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <span className="material-icons text-[#5f6368] text-lg">insert_drive_file</span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <span className="material-icons text-[#5f6368] text-lg">insert_photo</span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <span className="material-icons text-[#5f6368] text-lg">lock</span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <span className="material-icons text-[#5f6368] text-lg">create</span>
          </button>
        </div>

        <div className="flex gap-2 ml-auto">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <span className="material-icons text-[#5f6368] text-lg">more_vert</span>
          </button>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <span className="material-icons text-[#5f6368] text-lg">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}
