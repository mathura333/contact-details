import React, { useState } from "react";
import Field from "../field";
import type { Folder as FolderType, ContactData } from "../../../../types";

interface ElementProps {
  folder: FolderType;
  contactData: ContactData;
}

const Folder: React.FC<ElementProps> = ({ folder, contactData }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left p-3 hover:bg-gray-50 transition-colors rounded-t-lg"
      >
        <h3 className="text-sm font-medium text-gray-900">{folder.name}</h3>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-gray-200 rounded">
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>

          <svg
            className={`w-3 h-3 text-gray-400 transition-transform ${
              isExpanded ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-gray-100">
          {folder.fields.map((field) => (
            <Field
              key={field.key}
              field={field}
              value={contactData[field.key]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
