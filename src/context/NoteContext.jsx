import React, { createContext, useState, useContext, useEffect } from "react";

const NoteContext = createContext();


export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes
      ? JSON.parse(savedNotes)
      : {
          1: { title: "Note 1", content: "Content of Note 1" },
        };
  });
  const [currentNote, setCurrentNote] = useState(null);
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? token : "";
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const removeNote = (noteId) => {
    setNotes((prevNotes) => {
      const newNotes = { ...prevNotes };
      delete newNotes[noteId];
      return newNotes;
    });
    if (currentNote === noteId) {
      setCurrentNote(null);
    }
  };

  const addNewNote = () => {
    const newNoteId = Date.now().toString();
    setNotes((prevNotes) => ({
      ...prevNotes,
      [newNoteId]: {
        title: `New Note ${Object.keys(prevNotes).length + 1}`,
        content: "",
      },
    }));
    setCurrentNote(newNoteId);
  };

  const updateNote = (noteId, updatedNote) => {
    setNotes((prevNotes) => {
      const updatedNotes = { ...prevNotes };
      updatedNotes[noteId] = { ...updatedNote };
      return updatedNotes;
    });
  };

  const updateNoteContent = (noteId, content) => {
    setNotes((prevNotes) => {
      const updatedNotes = { ...prevNotes };
      if (updatedNotes[noteId]) {
        updatedNotes[noteId].content = content;
      }
      return updatedNotes;
    });
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        currentNote,
        setCurrentNote,
        addNewNote,
        removeNote,
        updateNote,
        updateNoteContent,
        token,
        setToken,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => useContext(NoteContext);
