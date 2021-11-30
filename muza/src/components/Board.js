import Track from './Track'
import PlayButton from './PlayButton'
import React, { useContext, useState } from 'react'

import { NoteContext } from '../NoteContext'

import closedHiHat from '../assets/sounds/closedhihat.wav'
import openHiHat from '../assets/sounds/openhihat.wav'
import snare from '../assets/sounds/snare.wav'
import kick from '../assets/sounds/kick.wav'

function Board(props) {
  const [notes, setNotes, flipNote, playNote] = useContext(NoteContext)

  const [isPlaying, setIsPlaying] = useState(false)

  // function playTrack() {
  //   Object.values(notes[props.instrument]).forEach((note, index) => {
  //     setTimeout(() => {
  //       console.log(note)
  //       if (note) {
  //         playNote(note, props.instrument)
  //       }
  //     }, 1000 * index)
  //   })
  // }

  function runPlayhead() {
    setIsPlaying(true)
  }

  return (
    <div className=" h-3/4 bg-gray-500 w-1/2 rounded-xl">
      <h1> Hello World</h1>
      <PlayButton onclick={runPlayhead} />
      <Track
        isPlaying={isPlaying}
        instrument={'openHiHat'}
        soundFile={openHiHat}
      />
      <Track
        isPlaying={isPlaying}
        instrument={'closedHiHat'}
        soundFile={closedHiHat}
      />
      <Track isPlaying={isPlaying} instrument={'snare'} soundFile={snare} />
      <Track isPlaying={isPlaying} instrument={'kick'} soundFile={kick} />
    </div>
  )
}

export default Board
