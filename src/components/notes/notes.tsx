import React from "react";
import type { Note } from "../../types";
import NotesHeader from "./components/notes-header";
import SingleNote from "./components/single-note";
import AddNote from "./components/add-note";

interface NotesProps {
  notes: Note[];
}

const Notes: React.FC<NotesProps> = ({ notes }) => {
  return (
    <div className="w-full md:w-80 bg-white flex flex-col h-full">
      <NotesHeader />

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          {notes.map((note) => (
            <SingleNote note={note} key={note.id} />
          ))}
        </div>
      </div>

      <AddNote />
    </div>
  );
};

export default Notes;
