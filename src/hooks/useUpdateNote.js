import {useState} from "react";

export const useUpdateNote = () => {
    const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || [])
    const [activeNote, setActiveNote] = useState(false)

    const onUpdateNote = (updatedNote) => {
        const updatedNotesArray = notes.map((note) => {
            if(note.id === activeNote) {
                return updatedNote
            }
            return note
        })
        setNotes(updatedNotesArray)
    }

    return {
        notes,
        setNotes,
        activeNote,
        setActiveNote,
        onUpdateNote
    }
}
