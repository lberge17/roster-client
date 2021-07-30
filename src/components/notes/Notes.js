import React from 'react'
import {useEffect, useState} from 'react';
import Note from './Note';
import NoteForm from './NoteForm';

export default function Notes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("http://localhost:9393/notes")
    .then(r => r.json())
    .then(data => {
      setNotes(data.notes)
    })
  }, [])

  return (
    <div>
      <h1>All Notes</h1>
      {notes.map(note => <Note key={note.id} note={note} />)}
      <h2>Create A Note</h2>
      <NoteForm />
    </div>
  )
}
