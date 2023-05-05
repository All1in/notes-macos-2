import SideBar from "./component/SideBar/SideBar";
import Main from "./component/Main/Main";
import { useEffect, useState } from "react";
import MyModal from "./component/MyModal/MyModal";
import uuid from "react-uuid";
import './styles/App.css';

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || [])
  const [activeNote, setActiveNote] = useState(false)

  const onAddNote = () => {
      const newNote = {
         id: uuid(),
         title: 'Untitled Note',
         body: '',
         lastModified: Date.now(),
      }

      setNotes([newNote, ...notes])
  }

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete))
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
        if(note.id === activeNote) {
            return updatedNote
        }
        return note
    })
    setNotes(updatedNotesArray)
  }

  useEffect(() => {
     localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <div className="App">
       <SideBar
           notes={notes}
           onAddNote={onAddNote}
           onDeleteNote={onDeleteNote}
           activeNote={activeNote}
           setActiveNote={setActiveNote}
       />
       <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
       <MyModal />
    </div>
  );
}

export default App;
