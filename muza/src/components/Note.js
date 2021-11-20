import React, { useState } from 'react'

function Note() {
  const [isOn, setNoteOn] = useState(false)

  return (
    <div
      onClick={() => setNoteOn(!isOn)}
      className="bg-green-300 w-5 h-10 m-3 hover:bg-green-500"
    ></div>
  )
}

export default Note
