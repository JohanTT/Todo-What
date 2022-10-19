import React from 'react'
import Note from './Note'
import '../../css/note.css'

function NoteList() {
    return (
        <div class="container">
            <div class="note-list">
                <Note/>
                <Note/>
                <Note/>
                <Note/>
            </div>
        </div>
    )
}

export default NoteList