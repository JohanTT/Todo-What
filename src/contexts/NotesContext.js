import React, { createContext, useState } from 'react'
import { nanoid } from 'nanoid'

export const NotesContext = createContext ({
    noteValue: {
        id: nanoid(),
        text: "null",
        date: "null",
        setId: () => {},
        setText: () => {},
        setDate: () => {}
    },
    setNoteValue: () => {}
});

export const NotesContextProvider = ({children}) => {
    const [noteValue, setNoteValue] = useState([
        {
            id: nanoid(),
            text: "First note",
            date: "20/10/2022"
        },
        {
            id: nanoid(),
            text: "Second note",
            date: "21/10/2022"
        },
        {
            id: nanoid(),
            text: "Third note",
            date: "22/10/2022"
        },
        {
            id: nanoid(),
            text: "Fourth note",
            date: "23/10/2022"
        }
    ]);

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        };
        const newNotes = [...noteValue, newNote];
        setNoteValue(newNotes);
    }

    const deleteNote = (id) => {
        const newNotes = noteValue.filter((noteValue) => noteValue.id !== id);
        setNoteValue(newNotes);
    }

    return (
        <NotesContext.Provider value={{
            noteValue,
            setNoteValue,
            addNote,
            deleteNote
        }}>
            {children}
        </NotesContext.Provider>
    )
}