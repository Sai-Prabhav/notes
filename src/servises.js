import { data } from "react-router-dom";

const URI = "https://ancient-demetra-sai-prabhav-505b893a.koyeb.app/";

const login = async (name, password) => {
  const response = await fetch(`https://${URI}/login`, {
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
  const response = await fetch(`https://${URI}/register`, {
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
  const response = await fetch(`https://${URI}/get-notes`, {
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
  const response = await fetch(`https://${URI}/save-notes`, {
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
