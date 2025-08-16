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

  return (
    <div className="h-screen flex justify-between bg-gray-50">
      {layout.layout.map((sectionName, index) => (
        <React.Fragment key={index}>
          {renderSection(sectionName)}
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
