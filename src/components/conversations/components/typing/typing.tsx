const Typing = () => {
  return (
    <div className="flex items-center gap-2 text-xs text-gray-500 px-1">
      <svg
        className="w-3 h-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-7-4L5 21l4.5-1.5A8.013 8.013 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z"
        />
      </svg>

      <span>Olivia is typing</span>

      <div className="flex gap-0.5">
        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
        <div
          className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  );
};

export default Typing;
