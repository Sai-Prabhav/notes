import React from 'react';
import { useNoteContext } from '../context/NoteContext';

const NoteEditor = () => {
  const { notes,setCurrentNote, currentNote, updateNoteContent } = useNoteContext();

  const handleContentChange = (e) => {
    updateNoteContent(currentNote, e.target.value);
  };

  if (!currentNote) {
    return (
      <div className="p-6 text-center text-gray-600">
        <h2 className="text-lg font-semibold mb-4">No Note Selected</h2>
        <p className="mb-4">Please select a note to view or edit its content.</p>
        <ul className="list-none space-y-2">
          {Object.keys(notes)
            .sort((a, b) => (notes[a].title || '').localeCompare(notes[b].title || ''))
            .map((noteId) => (
              <li
                key={noteId}
                className="cursor-pointer text-blue-600 hover:underline hover:text-blue-800"
                onClick={() => setCurrentNote(noteId)}
              >
                {notes[noteId].title || `Untitled Note (${noteId})`}
              </li>
            ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="p-4">
      <textarea
        className="w-full h-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
        value={notes[currentNote]?.content || ''}
        onChange={handleContentChange}
        placeholder="Start typing your note here..."
      />
    </div>
  );
};

export default NoteEditor;
