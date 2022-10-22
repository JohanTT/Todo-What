import React, { useContext, useState } from 'react'
import { NotesContext } from '../../contexts/NotesContext';

const FixNote = ({id}) => {
    const { noteValue, setNoteValue, editNote } = useContext(NotesContext);
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSaveClick = () => {
        if(title.trim().length > 0) {
            editNote(id, title);
            let changeClass = document.getElementsByName(id);
            changeClass[0].classList.remove("show");
            setTitle('');
        }
    }

  return (
    <div class="fix-note">    
        <input class="note-edit-input" value={title} onChange={handleChange}></input>
        <div class="note-footer">
            <small>200 Remaining</small>
            <button class="save" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default FixNote