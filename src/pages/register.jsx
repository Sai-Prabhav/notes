import { useState } from 'react'
import TopNav from '../components/topnav'
import { NoteProvider } from '../context/NoteContext'
import NoteEditor from '../components/NoteEditor'
import RegisterForm from '../components/RegisterForm'

function Register() {
  return<NoteProvider>
  <TopNav />

  <RegisterForm />

</NoteProvider>
}

export default Register;
