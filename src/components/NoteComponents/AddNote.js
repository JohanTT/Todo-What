import { useState } from "react";

const AddNote = ({ addNote }) => {
    const [noteText, setNoteText] = useState('');
    const date = new Date();

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleSaveClick = (event) => {
        if(noteText.trim().length > 0) {
            addNote(noteText);
            setNoteText('');
        }
    }

    return (
        <div class="note new">
            <textarea
                rows='8'
                cols='10'
                placeholder="I need to do..."
                value={noteText}
                onChange={handleChange}
            >
            </textarea>
            <div class="note-footer">
                <small>To day is {date.toLocaleDateString()}</small>
                <button class="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;