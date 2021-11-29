import React, { createContext, useState } from 'react'

const NoteContext = createContext()

const NoteProvider = (props) => {
  const [notes, setNotes] = useState({
    openHiHat: {
      '1/8': false,
      '2/8': false,
      '3/8': false,
      '4/8': false,
      '5/8': false,
      '6/8': false,
      '7/8': false,
      '8/8': false,
    },
    closedHiHat: {
      '1/8': false,
      '2/8': false,
      '3/8': false,
      '4/8': false,
      '5/8': false,
      '6/8': false,
      '7/8': false,
      '8/8': false,
    },
    snare: {
      '1/8': false,
      '2/8': false,
      '3/8': false,
      '4/8': false,
      '5/8': false,
      '6/8': false,
      '7/8': false,
      '8/8': false,
    },
    kick: {
      '1/8': false,
      '2/8': false,
      '3/8': false,
      '4/8': false,
      '5/8': false,
      '6/8': false,
      '7/8': false,
      '8/8': false,
    },
  })

  const flipNote = (note, instrument) => {
    console.log(note, instrument)
    console.log(notes)
    const notesCopy = notes
    const instrumentNotes = notesCopy[instrument]
    console.log(instrumentNotes)
    instrumentNotes[note] = !instrumentNotes[note]
    setNotes(notesCopy)
  }

  const playNote = (note, instrument) => {
    console.log(note)
  }

  return (
    <NoteContext.Provider value={[notes, setNotes, flipNote, playNote]}>
      {props.children}
    </NoteContext.Provider>
  )
}

export { NoteContext, NoteProvider }
