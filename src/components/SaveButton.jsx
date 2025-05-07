import { save_notes } from "../servises";
import { useNoteContext } from "../context/NoteContext";

const SaveButton = () => {
  const { token, notes } = useNoteContext();
  const handelSave = async () => {
    const [data, ok] = await save_notes(token, notes);
    if (ok) {
      console.log("saved");
    } else {
      console.log("error in saving");
      console.log(data);
    }
  };
  return (
    <button
      className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={async () => {
        await handelSave();
      }}
    >
      Save
    </button>
  );
};

export default SaveButton;
