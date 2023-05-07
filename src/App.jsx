import SideBar from "./component/SideBar/SideBar";
import Workspace from "./component/Workspace/Workspace";
import { useUpdateNote } from "./hooks/useUpdateNote";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { AppContext } from "./AppContext";
import './styles/App.css';

const App = () => {
  const [searchedValues, setSearchedValues] = useState('')
  const [visible, setVisible] = useState(false)
  // my custom hook
  const {
      notes,
      setNotes,
      activeNote,
      setActiveNote,
      onUpdateNote
  } = useUpdateNote()

  const filteredValues = notes.filter((note) => {
    return note.title.toLowerCase().includes(searchedValues.toLowerCase())
  })

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

  useEffect(() => {
     localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
      <AppContext.Provider value={{
          searchedValues,
          setSearchedValues,
          filteredValues,
          visible,
          setVisible,
      }}>
          <div className="App">
              <SideBar
                  notes={notes}
                  onAddNote={onAddNote}
                  onDeleteNote={onDeleteNote}
                  activeNote={activeNote}
                  setActiveNote={setActiveNote}
                  setVisible={setVisible}
              />
              <Workspace activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
          </div>
      </AppContext.Provider>
  );
}

export default App;
