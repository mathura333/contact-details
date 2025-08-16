import React, { useState } from "react";
import ContactDetails from "./components/contact-details";
import Conversations from "./components/conversations";
import Notes from "./components/notes";
import type {
  ContactFields,
  ContactData,
  Conversation,
  Note,
  Layout,
} from "./types";
import layoutData from "./data/layout.json";
import contactFieldsData from "./data/contactFields.json";
import contactDataData from "./data/contactData.json";
import conversationsData from "./data/conversations.json";
import notesData from "./data/notes.json";

function App() {
  const [layout] = useState<Layout>(layoutData as Layout);
  const [contactFields] = useState<ContactFields>(
    contactFieldsData as ContactFields
  );
  const [contactData] = useState<ContactData>(contactDataData as ContactData);
  const [conversations] = useState<Conversation[]>(
    conversationsData.conversations as Conversation[]
  );
  const [notes] = useState<Note[]>(notesData.notes as Note[]);
  const [activeTab, setActiveTab] = useState<string>("ContactDetails");

  const renderSection = (sectionName: string) => {
    switch (sectionName) {
      case "ContactDetails":
        return (
          <ContactDetails
            contactFields={contactFields}
            contactData={contactData}
          />
        );
      case "Conversations":
        return <Conversations conversations={conversations} />;
      case "Notes":
        return <Notes notes={notes} />;
      default:
        return null;
    }
  };

  const getTabIcon = (tabName: string) => {
    switch (tabName) {
      case "ContactDetails":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case "Conversations":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-7-4L5 21l4.5-1.5A8.013 8.013 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
          </svg>
        );
      case "Notes":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getTabLabel = (tabName: string) => {
    switch (tabName) {
      case "ContactDetails":
        return "Contact";
      case "Conversations":
        return "Chat";
      case "Notes":
        return "Notes";
      default:
        return tabName;
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Desktop Layout */}
      <div className="hidden md:flex md:flex-row md:justify-between md:h-full">
        {layout.layout.map((sectionName, index) => (
          <React.Fragment key={index}>
            {renderSection(sectionName)}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col h-full">
        {/* Mobile Tab Navigation */}
        <div className="flex bg-white border-b border-gray-200 shadow-sm">
          {layout.layout.map((sectionName) => (
            <button
              key={sectionName}
              onClick={() => setActiveTab(sectionName)}
              className={`flex-1 flex flex-col items-center justify-center py-3 px-2 text-xs font-medium transition-colors ${
                activeTab === sectionName
                  ? "text-blue-600 bg-blue-50 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {getTabIcon(sectionName)}
              <span className="mt-1">{getTabLabel(sectionName)}</span>
            </button>
          ))}
        </div>

        {/* Mobile Content */}
        <div className="flex-1 overflow-hidden">
          {renderSection(activeTab)}
        </div>
      </div>
    </div>
  );
}

export default App;
