import React, { createContext, useState } from 'react'

const NoteContext = createContext()

const NoteProvider = (props) => {
  const [notes, setNotes] = useState({
    '1/8': false,
    '2/8': false,
    '3/8': false,
    '4/8': false,
    '5/8': false,
    '6/8': false,
    '7/8': false,
    '8/8': false,
  })
  const flipNote = (note) => {
    const notesCopy = notes
    notesCopy[note] = !notes[note]
    setNotes(notesCopy)
  }

  return (
    <NoteContext.Provider value={[notes, setNotes, flipNote]}>
      {props.children}
    </NoteContext.Provider>
  )
}

export { NoteContext, NoteProvider }
