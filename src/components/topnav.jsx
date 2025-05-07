import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useNoteContext } from "../context/NoteContext";
import LoginRegisterButton from "./LoginRegisterButton";
import SaveButton from "./SaveButton";
import TopNavRight from "./TopNavRight";
const TopNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { notes, currentNote, setCurrentNote, updateNote,token } = useNoteContext();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNoteTitleChange = (e) => {
    e.preventDefault();

    var updatedNote = { ...notes[currentNote] };
    updatedNote.title = e.target.value;
    updateNote(currentNote, updatedNote);
  };

  return (
    <div className="">
      <nav className="flex p-2 items-center bg-green-600 text-white">
        <button
          className="text-2xl bg-none border-none text-white cursor-pointer"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <h1 className="ml-4 flex-grow text-2xl">Notes </h1>
        {currentNote && (
          <input
            className="ml-4 text-lg pr-4 italic bg-transparent border-b border-white focus:outline-none"
            value={notes[currentNote]?.title || ""}
            onChange={handleNoteTitleChange}
          />
        )}
        <TopNavRight/>

      </nav>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default TopNav;
