import React, { useState, useContext } from 'react'
import { NoteContext } from '../NoteContext'

function PlayButton() {
  //get notes state
  const [notes, setNotes, flipNote] = useContext(NoteContext)

  function playByColumn(columnOfNotes) {
    columnOfNotes.forEach((note) => {
      // TODO: play note sound instead of console logging
      console.log(note)
    })
  }

  const runTrack = () => {
    console.log(Object.keys(notes))

    //take number of notes
    Object.values(notes).forEach((note) => {
      setTimeout(() => {
        console.log(note)
      }, 1000)
    })
  }

  return (
    <button
      onClick={() => runTrack()}
      className="text-white hover:text-gray-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  )
}

export default PlayButton
