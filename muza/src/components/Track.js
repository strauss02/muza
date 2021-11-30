import React, { useContext } from 'react'
import Note from './Note'
import { NoteContext } from '../NoteContext'

function Track(props) {
  const [notes, setNotes, flipNote, playNote] = useContext(NoteContext)

  function playTrack() {
    Object.values(notes[props.instrument]).forEach((note, index) => {
      setTimeout(() => {
        console.log(note)
        if (note) {
          playNote(note, props.instrument)
        }
      }, 1000 * index)
    })
  }

  return (
    <div
      // onClick={() => playTrack()}
      className="w-full h-16 bg-gray-800 flex justify-around items-center "
    >
      <button onClick={playTrack}> Play track </button>
      <Note
        instrument={props.instrument}
        soundFile={props.soundFile}
        id={'1/8'}
      />
      <Note
        instrument={props.instrument}
        soundFile={props.soundFile}
        id={'2/8'}
      />
      <Note
        instrument={props.instrument}
        soundFile={props.soundFile}
        id={'3/8'}
      />
      <Note
        instrument={props.instrument}
        soundFile={props.soundFile}
        id={'4/8'}
      />
      <Note
        instrument={props.instrument}
        soundFile={props.soundFile}
        id={'5/8'}
      />
      <Note
        instrument={props.instrument}
        soundFile={props.soundFile}
        id={'6/8'}
      />
      <Note
        instrument={props.instrument}
        soundFile={props.soundFile}
        id={'7/8'}
      />
      <Note
        instrument={props.instrument}
        soundFile={props.soundFile}
        id={'8/8'}
      />
    </div>
  )
}

export default Track
