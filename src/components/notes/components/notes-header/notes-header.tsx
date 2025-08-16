const NotesHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-100">
      <h2 className="text-base font-semibold text-gray-900">Notes</h2>

      <div className="flex items-center gap-2">
        <button className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium">
          + Add
        </button>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NotesHeader;
