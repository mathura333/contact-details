import React from "react";
import type { ContactFields, ContactData } from "../../types";
import ContactHeader from "./components/contact-header";
import UserInfo from "./components/user-info";
import UserTags from "./components/user-tags";
import Folder from "./components/folder";
import AllFieldsSearch from "./components/all-fields-search";

interface ElementProps {
  contactFields: ContactFields;
  contactData: ContactData;
}

const ContactDetails: React.FC<ElementProps> = ({
  contactFields,
  contactData,
}) => {
  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-full">
      <ContactHeader />

      <div className="p-4 border-b border-gray-100">
        <UserInfo
          firstName={contactData.firstName}
          lastName={contactData.lastName}
          owner={contactData.owner}
        />

        {contactData.tags && Array.isArray(contactData.tags) && (
          <div className="mb-4">
            <UserTags tags={contactData.tags} />
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <AllFieldsSearch />

          <div className="space-y-3">
            {contactFields.folders.map((folder, index) => (
              <Folder key={index} folder={folder} contactData={contactData} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
