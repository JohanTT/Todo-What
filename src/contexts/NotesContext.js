import React, { createContext, useState } from 'react'
import { nanoid } from 'nanoid'

export const NotesContext = createContext ({
    noteValue: {
        id: nanoid(),
        title: "null",
        content: "null",
        date: "null",
        setId: () => {},
        setTitle: () => {},
        setDate: () => {}
    },
    setNoteValue: () => {}
});

export const NotesContextProvider = ({children}) => {
    const [title, setTitle] = useState('');
    const [noteValue, setNoteValue] = useState([
        {
            id: nanoid(),
            title: "First note",
            date: "20/10/2022"
        },
        {
            id: nanoid(),
            title: "Second note",
            date: "21/10/2022"
        },
        {
            id: nanoid(),
            title: "Third note",
            date: "22/10/2022"
        },
        {
            id: nanoid(),
            title: "Fourth note",
            date: "23/10/2022"
        }
    ]);

    const addNote = (title) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            title: title,
            date: date.toLocaleDateString()
        };
        const newNotes = [...noteValue, newNote];
        setNoteValue(newNotes);
    }

    const editNote = (id, title) => {
        const date = new Date();
        const newNotes = [];
        for (var i = 0; i < noteValue.length; i++) {
            if (noteValue[i].id === id) {
                noteValue[i].title = title;
                noteValue[i].date = date.toLocaleDateString();
            }
            newNotes.push(noteValue[i]);
        }
        setNoteValue(newNotes);
    }

    const deleteNote = (id) => {
        const newNotes = noteValue.filter((noteValue) => noteValue.id !== id);
        setNoteValue(newNotes);
    }

    const openEdit = (id) => {
        let changeClass = document.getElementsByName(id);
        changeClass[0].classList.toggle("show");
    }

    return (
        <NotesContext.Provider value={{
            noteValue,
            setNoteValue,
            addNote,
            editNote,
            deleteNote,
            openEdit
        }}>
            {children}
        </NotesContext.Provider>
    )
}