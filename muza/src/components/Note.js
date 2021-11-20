import React, { useState, useContext } from 'react'
import { NoteContext } from '../NoteContext'

function Note(props) {
  const [notes, setNotes] = useContext(NoteContext)
  const [key] = useState(props.id)
  // const [isOn, setNoteOn] = useState(false)
  const noteOnStyling = 'bg-green-300 w-5 h-10 m-3 hover:bg-green-500'
  const noteOffStyling = 'bg-gray-300 w-5 h-10 m-3 hover:bg-gray-500'

  return (
    <div
      onClick={() => {
        setNotes((prevNotes) => {
          const notesCopy = prevNotes
          notesCopy[key] = !prevNotes[key]
          return notesCopy
        })
        console.log(notes)
      }}
      className={notes['1/8'] ? noteOnStyling : noteOffStyling}
    ></div>
  )
}

export default Note
