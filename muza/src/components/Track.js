import React from 'react'
import Note from './Note'

function Track() {
  return (
    <div className="w-full h-16 bg-gray-800 flex justify-items-start items-center ">
      <Note id={'1/8'} />
      <Note id={'2/8'} />
    </div>
  )
}

export default Track
