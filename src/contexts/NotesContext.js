import React, { createContext, useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

export const NotesContext = createContext ({
    noteValue: {
        id: nanoid(),
        title: "null",
        content: "null",
        date: "null",
        check: "false",
        setId: () => {},
        setTitle: () => {},
        setDate: () => {},
        setCheck: () => {}
    },
    setNoteValue: () => {}
});

export const NotesContextProvider = ({children}) => {
    const [title, setTitle] = useState('');
    const [noteValue, setNoteValue] = useState(JSON.parse(localStorage.getItem('notes')) || 
    [
        {
            id: nanoid(),
            title: "Click on the text to mark note done",
            date: "20/10/2022",
            check: "true"
        },
        {
            id: nanoid(),
            title: "I can also delete and update note",
            date: "21/10/2022",
            check: "false"
        },
        {
            id: nanoid(),
            title: "Okay, let's get started",
            date: "22/10/2022",
            check: "false"
        },
        {
            id: nanoid(),
            title: "Feet for my cat",
            date: "23/10/2022",
            check: "true"
        }
    ]);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(noteValue));
    }, [noteValue])
    
    const addNote = (title) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            title: title,
            date: date.toLocaleDateString(),
            check: "false"
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
                noteValue[i].check = "false"
            }
            newNotes.push(noteValue[i]);
        }
        setNoteValue(newNotes);
    }

    const deleteNote = (id) => {
        const newNotes = noteValue.filter((noteValue) => noteValue.id !== id);
        setNoteValue(newNotes);
    }

    const toggleCheckNote = (id) => {
        const newNotes = [];
        for (var i = 0; i < noteValue.length; i++) {
            if (noteValue[i].id === id) {
                const CheckNote = document.getElementsByName(id);
                if (noteValue[i].check === "true") 
                {
                    CheckNote[0].classList.remove("done");
                    noteValue[i].check = "false";
                }
                else {
                    CheckNote[0].classList.add("done");
                    noteValue[i].check = "true";
                }
            }
            newNotes.push(noteValue[i]);
        }
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
            openEdit,
            toggleCheckNote
        }}>
            {children}
        </NotesContext.Provider>
    )
}