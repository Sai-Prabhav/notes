import { useState } from "react";
import TopNav from "../components/topnav";
import { NoteProvider } from "../context/NoteContext";
import NoteEditor from "../components/NoteEditor";
import LoginForm from "../components/LoginForm";


function Login() {
  return (
    <NoteProvider>
      <TopNav />
      <LoginForm />

    </NoteProvider>
  );
}

export default Login;
