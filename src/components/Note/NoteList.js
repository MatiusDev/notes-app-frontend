import React, { useEffect, useState } from 'react';

import Note from './Note';
import NewNote from './NewNote';

import { getAll } from '../../services/Notes';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [contentNote, setContentNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    getAll().then(setNotes);
  }, [])

  const handleChangeNewNote = (evt) => {
    setContentNote(evt.target.value);
  }

  const handleSubmitNewNote = (evt) => {
    evt.preventDefault();

    const newNote = {
      id: notes.length + 1,
      content: contentNote,
      date: new Date().toISOString(),
      important: false
    }

    setNotes([...notes, newNote]);
    setContentNote('');
  }

  return (
    <div>
      <h1>Notes</h1>
      <hr />
      <ul>
        {
          console.log(notes)
        }
        {
          notes
          .filter((note) => showAll ? true : note.important)
          .map((note) => 
            <Note
            key={ note.id }
            id={ note.id }
            content={ note.content }
            date={ note.date }
            />
          )
        }
      </ul>
      <button 
        type="button" 
        onClick={() => setShowAll(!showAll)}
      >
        { !showAll ? 'Mostrar todos' : 'Mostrar solo importantes' }
      </button>

      <NewNote content={ contentNote } handleSubmitNewNote={ handleSubmitNewNote } handleChangeNewNote={ handleChangeNewNote } />
    </div>
)};

export default NoteList;