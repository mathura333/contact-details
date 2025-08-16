import type { Note } from "../../../../types";

interface ElementProps {
  note: Note;
}

const SingleNote = ({ note }: ElementProps) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "inspection":
        return <div className="w-2 h-2 bg-blue-500 rounded-full"></div>;
      case "follow-up":
        return <div className="w-2 h-2 bg-orange-500 rounded-full"></div>;
      default:
        return <div className="w-2 h-2 bg-gray-400 rounded-full"></div>;
    }
  };

  return (
    <div
      key={note.id}
      className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 shadow-sm"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1">{getTypeIcon(note.type)}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-blue-600">@Aaron</span>
            <span className="text-xs text-gray-500">{note.timestamp}</span>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed">
            {note.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleNote;
