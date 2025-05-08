
import { useNoteContext } from "../context/NoteContext";


const LoginRegisterButton = () => {
    const { navigate } = useNoteContext();

    return (
        <div>
        <button
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => (navigate("/register"))}
        >
          register
        </button>
        <button
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => (navigate("/login"))}
        >
          login
        </button>
        </div>
    );
};

export default LoginRegisterButton;
