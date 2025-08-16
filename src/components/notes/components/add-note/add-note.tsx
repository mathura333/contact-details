const AddNote = () => {
  return (
    <div className="p-4 border-t border-gray-100 bg-gray-50">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-xs font-medium text-blue-600">A</span>
        </div>
        <span className="text-xs font-medium text-gray-900">Add a note</span>
      </div>

      <textarea
        placeholder="Type your note here..."
        className="w-full p-2 text-xs border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
        rows={3}
      />
      <div className="flex justify-end gap-2 mt-2">
        <button className="px-2 py-1 text-xs text-gray-600 hover:bg-gray-200 rounded transition-colors">
          Cancel
        </button>
        <button className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium">
          Save Note
        </button>
      </div>
    </div>
  );
};

export default AddNote;
