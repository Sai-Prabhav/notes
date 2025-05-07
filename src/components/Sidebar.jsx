import React from 'react';
import { useNoteContext } from '../context/NoteContext';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const { notes,setCurrentNote, addNewNote, removeNote,updateNote } = useNoteContext();

    if (!isOpen) return null;

    const handleNoteClick = (noteId) => {
        setCurrentNote(noteId);
        toggleSidebar();
    };

    const handleNewNoteClick = () => {
        addNewNote();
        toggleSidebar();
    };

    const handleDeleteNote = (noteId) => {
        removeNote(noteId);
        toggleSidebar();
    };

    return (
        <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-5 shadow-lg">
            <button
                className="text-2xl bg-transparent border-none text-white cursor-pointer mb-5"
                onClick={toggleSidebar}
            >
                ×
            </button>
            <button
                className="block mb-5 px-4 py-2 bg-green-600 rounded-md text-white border-none cursor-pointer text-lg"
                onClick={handleNewNoteClick}
            >
                + New Note
            </button>
            <div className="space-y-1">
                {Object.entries(notes).map(([id, note]) => (
                    <div
                        key={id}
                        className="group flex justify-between rounded-md items-center px-3 py-2 cursor-pointer transition-colors hover:bg-gray-700"
                    >
                        <button
                            className="flex-grow text-left bg-transparent border-none text-white"
                            onClick={() => handleNoteClick(id)}
                        >
                            {note.title}
                        </button>
                        <button
                            className="hidden group-hover:inline text-red-500 bg-transparent border-none cursor-pointer ml-2"
                            onClick={() => handleDeleteNote(id)}
                        >
                            🗑️
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
