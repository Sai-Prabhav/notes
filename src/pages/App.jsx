import { useState } from 'react'
import TopNav from '../components/topnav'
import { NoteProvider } from '../context/NoteContext'
import NoteEditor from '../components/NoteEditor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <NoteProvider>
      <TopNav />
      <NoteEditor />
    </NoteProvider>
  )
}

export default App
