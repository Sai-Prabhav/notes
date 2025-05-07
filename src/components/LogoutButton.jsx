import { useNoteContext } from "../context/NoteContext";

const LogoutButton = () => {
  const { setToken, setNotes } = useNoteContext();
  const handelLogout = async () => {
    setToken("");
    setNotes({});
    window.location.href = "/";
  };
  return (
    <button
      className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handelLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
