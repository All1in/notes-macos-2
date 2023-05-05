import SideBar from "./component/SideBar/SideBar";
import Main from "./component/Main/Main";
import { useEffect, useState } from "react";
import MyModal from "./component/MyModal/MyModal";
import uuid from "react-uuid";
import { MyContext } from "./AppContext";
import './styles/App.css';

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || [])
  const [searchedValues, setSearchedValues] = useState()
  const [activeNote, setActiveNote] = useState(false)
  const [visible, setVisible] = useState(false)

  const handleOk = (id) => {
    // setActiveNote(id)
    setVisible(false)
  }

  const handleCancel = () => {
    setVisible(false);
  }

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
      <MyContext.Provider value={{
          visible,
          setVisible,
          handleOk,
          handleCancel,
      }}>
          <div className="App">
              <SideBar
                  handleOk={handleOk}
                  notes={notes}
                  onAddNote={onAddNote}
                  onDeleteNote={onDeleteNote}
                  activeNote={activeNote}
                  setActiveNote={setActiveNote}
                  setVisible={setVisible}
              />
              <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
              <MyModal
                  // visible={visible}
                  // setVisible={setVisible}
                  // handleOk={handleOk}
                  // handleCancel={handleCancel}
                  text='U sure u wanna delete that?'
              />
          </div>
      </MyContext.Provider>
  );
}

export default App;
