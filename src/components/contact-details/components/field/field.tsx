import React from "react";
import type { Field as FieldType } from "../../../../types";

interface ElementProps {
  field: FieldType;
  value: string | string[] | undefined;
}

const Field: React.FC<ElementProps> = ({ field, value }) => {
  const renderFieldValue = () => {
    if (!value) return <span className="text-gray-400 text-xs">-</span>;

    switch (field.type) {
      case "phone":
        return (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs">🇺🇸</span>
              <span className="text-gray-900 text-xs font-medium">{value}</span>
            </div>
            <div className="flex items-center gap-1">
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>

              <button className="p-1 hover:bg-green-50 rounded transition-colors">
                <svg
                  className="w-3 h-3 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        );

      case "email":
        return (
          <span className="text-blue-600 hover:underline cursor-pointer text-xs">
            {value}
          </span>
        );

      case "radio":
        return (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-xs font-medium text-blue-600">
                {typeof value === "string" ? value.charAt(0).toUpperCase() : ""}
              </span>
            </div>

            <span className="text-gray-900 text-xs">{value}</span>
          </div>
        );

      case "multi-select":
        if (Array.isArray(value)) {
          return (
            <div className="flex gap-1">
              {value.map((item, index) => (
                <div
                  key={index}
                  className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center"
                >
                  <span className="text-xs font-medium text-blue-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          );
        }
        return <span className="text-gray-900 text-xs">{value}</span>;

      default:
        return <span className="text-gray-900 text-xs">{value}</span>;
    }
  };

  return (
    <div className="px-3 py-2.5 border-b border-gray-50 last:border-b-0 hover:bg-gray-25 transition-colors">
      <div className="text-xs text-gray-500 mb-1 font-medium">
        {field.label}
      </div>

      <div>{renderFieldValue()}</div>
    </div>
  );
};

export default Field;
