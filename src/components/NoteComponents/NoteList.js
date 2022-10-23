import React, { useContext, useState } from 'react'
import AddNote from './AddNote'
import FixNote from './FixNote';
import '../../css/note.css'
import { NotesContext } from '../../contexts/NotesContext';

function NoteList() {
    const { noteValue, setNoteValue, addNote, deleteNote, openEdit} = useContext(NotesContext);

    return (
        <div class="container">
            <div class="note-list">
                {noteValue.map((note) => (
                    <div className="note" name={note.id} key={note.id} >
                        <span>
                            { note.title }
                        </span>
                        {/* Ô nhập text  */}
                        <FixNote id={note.id} oldTitle={note.title} />
                        <div class="note-footer">
                            <small>Last update: { note.date }</small>
                            <i class="fa fa-magic fa-2x" aria-hidden="true" onClick={() => { openEdit(note.id); }} ></i>
                            <i class="fa fa-trash-o fa-2x" onClick={() => deleteNote(note.id)}></i>

                        </div>
                    </div>
                ))}
                <AddNote addNote={addNote}/>
            </div>
        </div>
    )
}

export default NoteList