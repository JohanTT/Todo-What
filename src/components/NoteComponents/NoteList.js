import React, { useContext } from 'react'
import Note from './Note'
import AddNote from './AddNote'
import '../../css/note.css'
import { NotesContext } from '../../contexts/NotesContext';
import { useNavigate } from 'react-router-dom';

function NoteList() {
    const { noteValue, setNoteValue, addNote, deleteNote } = useContext(NotesContext);
    let navigate = useNavigate();
    return (
        <div class="container">
            <div class="note-list">
                {noteValue.map((note) => (
                    <div class="note" key={note.id} onClick={(e) => {
                        navigate('/TodoList');
                    }} >
                        <span>{ note.text }</span>
                        <div class="note-footer">
                            <small>{ note.date }</small>
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