import React, { useContext } from 'react'
import Note from './Note'
import { NoteContext } from '../NoteContext'

function Track(props) {
  const [notes, setNotes, flipNote] = useContext(NoteContext)
  function playTrack() {
    Object.values(notes).forEach((note, index) => {
      setTimeout(() => {
        console.log(note)
      }, 1000 * index)
    })
  }

  return (
    <div
      // onClick={() => playTrack()}
      className="w-full h-16 bg-gray-800 flex justify-around items-center "
    >
      <Note instrument={props.instrument} id={'1/8'} />
      <Note instrument={props.instrument} id={'2/8'} />
      <Note instrument={props.instrument} id={'3/8'} />
      <Note instrument={props.instrument} id={'4/8'} />
      <Note instrument={props.instrument} id={'5/8'} />
      <Note instrument={props.instrument} id={'6/8'} />
      <Note instrument={props.instrument} id={'7/8'} />
      <Note instrument={props.instrument} id={'8/8'} />
    </div>
  )
}

export default Track
