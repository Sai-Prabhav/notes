import { data } from "react-router-dom";

const login = async (name, password) => {
  const response = await fetch("http://127.0.0.1:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password }),
  });

  const data = await response.json();
  return [{ ...data }, response.ok];
};

const register = async (name, password) => {
  const response = await fetch("http://127.0.0.1:5000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password }),
  });

  const data = await response.json();
  console.log(data);

  return [{ ...data }, response.ok];
};

const get_notes = async (token) => {
  const response = await fetch("http://127.0.0.1:5000/get-notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
  const data = await response.json();
  console.log([{ ...data }, response.ok]);
  return [{ ...data }, response.ok];
};

const save_notes = async (token, notes) => {
  const response = await fetch("http://127.0.0.1:5000/save-notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, notes }),
  });
  const data = await response.json();
  console.log([{ ...data }, response.ok]);
  return [{ ...data }, response.ok];
};

export { login, register, get_notes, save_notes };
