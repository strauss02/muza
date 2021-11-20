import React, { useState, useContext } from 'react'
import { NoteContext } from '../NoteContext'

function Note(props) {
  const [notes, setNotes, flipNote] = useContext(NoteContext)

  const [key] = useState(props.id)
  const [isOn, setIsOn] = useState(false)
  // const [isOn, setNoteOn] = useState(false)
  const noteOnStyling = 'bg-green-300 w-5 h-10 m-3 hover:bg-green-500'
  const noteOffStyling = 'bg-gray-300 w-5 h-10 m-3 hover:bg-gray-500'

  return (
    <div
      className={notes[key] ? noteOnStyling : noteOffStyling}
      onClick={() => {
        flipNote(key)
        setIsOn(!isOn)
        console.log(notes)
      }}
    ></div>
  )
}

export default Note
