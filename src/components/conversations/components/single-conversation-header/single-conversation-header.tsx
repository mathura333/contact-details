import type { Conversation } from "../../../../types";

interface ElementProps {
  conversation: Conversation;
}

const SingleConversationHeader = ({ conversation }: ElementProps) => {
  return (
    <div className="p-4 hover:bg-gray-25 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-xs font-medium text-gray-600">
              {conversation.sender
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">
              {conversation.sender}
            </div>
            <div className="text-xs text-gray-500">
              To: {conversation.recipient}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">
            {conversation.timestamp}
          </span>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <svg
              className="w-3 h-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <svg
              className="w-3 h-3 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="text-xs text-gray-600 mb-2 line-clamp-2 leading-relaxed">
        {conversation.subject}
      </div>

      <div className="flex items-center gap-1">
        <svg
          className="w-3 h-3 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SingleConversationHeader;
