interface EmailViewProps {
  isMultipleRecipients?: boolean;
  isSubscription?: boolean;
}

export default function EmailView({ isMultipleRecipients = false, isSubscription = false }: EmailViewProps) {
  const quickReplies = [
    "Looking forward to it!",
    "We will be there!",
    "Thanks for the update!"
  ];

  return (
    <main className="flex-1 bg-white overflow-y-auto">
      {/* Email toolbar */}
      <div className="h-12 border-b border-[#dadce0] flex items-center px-4 gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <span className="material-icons text-[#5f6368]">arrow_back</span>
        </button>
        <div className="w-px h-6 bg-[#dadce0] mx-1"></div>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <span className="material-icons text-[#5f6368]">archive</span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <span className="material-icons text-[#5f6368]">report</span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <span className="material-icons text-[#5f6368]">delete</span>
        </button>
        <div className="w-px h-6 bg-[#dadce0] mx-1"></div>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <span className="material-icons text-[#5f6368]">markunread</span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <span className="material-icons text-[#5f6368]">schedule</span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <span className="material-icons text-[#5f6368]">add_task</span>
        </button>
        <div className="w-px h-6 bg-[#dadce0] mx-1"></div>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <span className="material-icons text-[#5f6368]">drive_file_move</span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <span className="material-icons text-[#5f6368]">label</span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <span className="material-icons text-[#5f6368]">more_vert</span>
        </button>

        {/* Pagination */}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-sm text-[#5f6368]">1–50 of 2,619</span>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <span className="material-icons text-[#5f6368]">chevron_left</span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <span className="material-icons text-[#5f6368]">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Email content */}
      <div className="max-w-[1200px] mx-auto p-6">
        {/* Email header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-2xl text-[#202124]">Email Subject</h1>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <span className="material-icons text-[#5f6368]">print</span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <span className="material-icons text-[#5f6368]">open_in_new</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#dadce0] rounded text-xs text-[#5f6368] flex items-center gap-1">
              <span className="material-icons text-xs">inbox</span>
              Inbox
            </span>
            {isSubscription && (
              <span className="px-2 py-0.5 bg-[#3474e0] text-white rounded text-xs flex items-center gap-1">
                Promotions
                <button className="ml-1">
                  <span className="material-icons text-xs">close</span>
                </button>
              </span>
            )}
          </div>
        </div>

        {/* Sender info */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#f1f3f4] flex items-center justify-center">
            <span className="material-icons text-[#5f6368]">person</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <div>
                <span className="text-sm font-medium text-[#202124]">
                  {isMultipleRecipients ? 'Michelle Rivera' : 'Michelle Rivera'}
                </span>
                <span className="text-sm text-[#5f6368] ml-2">
                  &lt;michelle.rivera@example.com&gt;
                </span>
                <button className="ml-2 text-xs text-[#1a73e8] hover:underline">
                  Unsubscribe
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#5f6368]">9:14 AM (8 hours ago)</span>
                <button className="p-1 hover:bg-gray-100 rounded-full">
                  <span className="material-icons text-[#5f6368] text-lg">star_border</span>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded-full">
                  <span className="material-icons text-[#5f6368] text-lg">reply</span>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded-full">
                  <span className="material-icons text-[#5f6368] text-lg">more_vert</span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#5f6368]">
              <span>to me</span>
              {isMultipleRecipients && <span>, Sidney, Sharon</span>}
              <button className="ml-1">
                <span className="material-icons text-xs">expand_more</span>
              </button>
            </div>
          </div>
        </div>

        {/* Email body */}
        {isSubscription ? (
          <div className="min-h-[400px] bg-[#f5f5f5] flex items-center justify-center rounded-lg mb-6">
            <span className="text-lg text-[#5f6368]">Design Your Email Here</span>
          </div>
        ) : (
          <div className="text-sm text-[#202124] leading-relaxed mb-8">
            <p>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
            </p>
          </div>
        )}

        {/* Quick replies */}
        {!isSubscription && (
          <div className="flex gap-3 mb-8">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                className="px-6 py-2 border border-[#1a73e8] text-[#1a73e8] rounded-full hover:bg-[#f6fafe] transition-colors text-sm"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-2 border border-[#dadce0] rounded hover:bg-gray-50 transition-colors">
            <span className="material-icons text-[#5f6368] text-lg">reply</span>
            <span className="text-sm text-[#5f6368]">Reply</span>
          </button>
          {isMultipleRecipients && (
            <button className="flex items-center gap-2 px-6 py-2 border border-[#dadce0] rounded hover:bg-gray-50 transition-colors">
              <span className="material-icons text-[#5f6368] text-lg">reply_all</span>
              <span className="text-sm text-[#5f6368]">Reply all</span>
            </button>
          )}
          <button className="flex items-center gap-2 px-6 py-2 border border-[#dadce0] rounded hover:bg-gray-50 transition-colors">
            <span className="material-icons text-[#5f6368] text-lg">forward</span>
            <span className="text-sm text-[#5f6368]">Forward</span>
          </button>
        </div>
      </div>
    </main>
  );
}
