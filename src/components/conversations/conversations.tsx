import React from "react";
import type { Conversation } from "../../types";
import ConversationsHeader from "./components/conversations-header";
import ChatBox from "./components/chat-box";
import SingleConversationHeader from "./components/single-conversation-header";
import ConversationMessage from "./components/conversation-message";
import Typing from "./components/typing";

interface ElementProps {
  conversations: Conversation[];
}

const Conversations: React.FC<ElementProps> = ({ conversations }) => {
  return (
    <div className="flex-1 bg-white border-r border-gray-200 flex flex-col h-full">
      <ConversationsHeader />

      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <div key={conversation.id} className="border-b border-gray-50">
            <SingleConversationHeader conversation={conversation} />

            <div className="px-4 pb-4 space-y-3">
              {conversation.messages.map((message) => (
                <ConversationMessage key={message.id} message={message} />
              ))}

              {conversation.isTyping && <Typing />}
            </div>
          </div>
        ))}
      </div>

      <ChatBox />
    </div>
  );
};

export default Conversations;
