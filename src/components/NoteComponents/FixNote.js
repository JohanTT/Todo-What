import React, { useContext, useState } from 'react'
import { NotesContext } from '../../contexts/NotesContext';

const FixNote = ({id, oldTitle}) => {
    const { editNote } = useContext(NotesContext);
    const [title, setTitle] = useState(oldTitle);

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
        <textarea class="note-textarea-fix" value={title} onChange={handleChange} placeholder="What's new..."></textarea>
        <div class="note-footer-fix">
            <button class="save-fix" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default FixNote