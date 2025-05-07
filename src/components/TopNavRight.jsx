import LogoutButton from "./LogoutButton";
import SaveButton from "./SaveButton";
import LoginRegisterButton from "./LoginRegisterButton";
import { useNoteContext } from "../context/NoteContext";

const TopNavRight = () => {
  const { token } = useNoteContext();
  
  return (
    <>
      {token !== "" ? (
        <div>
          {""}
          <SaveButton />
          <LogoutButton />{" "}
        </div>
      ) : (
        <LoginRegisterButton />
      )}
    </>
  );
};

export default TopNavRight;
