const AllFieldsSearch = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-medium text-gray-900 uppercase tracking-wide">
          All Fields
        </h3>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400">DND</span>
          <span className="text-xs text-gray-400">Actions</span>
        </div>
      </div>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search Fields and Folders"
          className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
        />
        <svg
          className="w-3 h-3 text-gray-400 absolute left-2.5 top-2.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </>
  );
};

export default AllFieldsSearch;
