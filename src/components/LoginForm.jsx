import React, { useState } from "react";
import { login, get_notes } from "../servises";
import { data } from "react-router-dom";
import { useNoteContext } from "../context/NoteContext";

const LoginForm = () => {
  const { token,setToken, setNotes } = useNoteContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Username:", username);
    console.log("Password:", password);

    const data = await login(username, password);
    console.log(data[0]);
    if (!data[1]) {
      setError(data[0]["message"]);
    } else {
      setError("");
      setToken(data[0]["token"]);

      console.log(token, "token");
      const [notes, notes_ok] = await get_notes( token);
      console.log(notes,'notes');

      if (notes_ok) {
            await setNotes(notes);
            window.location.href = "/";
        } else {
            setError("error in getting notes");
        }
        
    }

  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-xl m-5 pl-15 pr-15 pt-2 rounded ">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-2 p-2 border border-gray-300 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          {error !== "" && <>{error}</>}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={async (e) => {
              await handleSubmit(e);
            }}
          >
            Login
          </button>
        </form>
        <p className="mt-4">
          dont have an account?
          <a className="pl-2 text-blue-600" href="/register">
            register here{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
