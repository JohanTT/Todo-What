import React, { useContext } from 'react'
import AddNote from './AddNote'
import FixNote from './FixNote';
import '../../css/note.css'
import { NotesContext } from '../../contexts/NotesContext';
import Nav from '../Nav';

function NoteList() {
    const { noteValue, toggleCheckNote, addNote, deleteNote, openEdit} = useContext(NotesContext);

    return (
        <div>
            <Nav />
            {
                window.addEventListener("load", function(){
                    noteValue.forEach(note => {
                        var check = document.getElementsByName(note.id);
                            if (note.check === "true") check[0].classList.add("done");
                            else check[0].classList.remove("done");
                    });
                })
            }
        <div class="container">
            <div class="note-list">
                {noteValue.map((note) => (
                    <div className="note"  name={note.id} key={note.id}>
                        <span onClick={() => { toggleCheckNote(note.id); }}>
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
    </div>
    )
}

export default NoteList