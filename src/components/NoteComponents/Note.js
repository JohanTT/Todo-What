import React, { useContext } from 'react'
import { NotesContext } from '../../contexts/NotesContext';
import '../../css/note.css'


function Note() {
    const { noteValue, setNoteValue } = useContext(NotesContext);
    return (
        <div>
            <div class="note" key={noteValue.id}>
                {console.log(noteValue)}
                <span value={ noteValue.text }></span>
                <div class="note-footer">
                    <input value={noteValue.text}></input>
                    <small value={ noteValue.date }></small>
                    <i class="fa fa-trash-o fa-2x"></i>
                </div>
            </div>
        </div>
    )
}

export default Note