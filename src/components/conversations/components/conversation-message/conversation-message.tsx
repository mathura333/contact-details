import type { Conversation } from "../../../../types";

interface ElementProps {
  message: Conversation["messages"][number];
}

const ConversationMessage = ({ message }: ElementProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-xs font-medium text-gray-600">
            {message.sender
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>

        <span className="text-xs font-medium text-gray-900">
          {message.sender}
        </span>

        <span className="text-xs text-gray-500">{message.timestamp}</span>
      </div>

      <div className="text-xs text-gray-700 whitespace-pre-line mb-3 leading-relaxed">
        {message.content}
      </div>

      {message.hasTrackingButton && (
        <button className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs hover:bg-blue-700 transition-colors font-medium">
          {message.trackingText}
        </button>
      )}
    </div>
  );
};

export default ConversationMessage;
