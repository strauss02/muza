import React from 'react'
import Note from './Note'

function Track() {
  return (
    <div className="w-full h-16 bg-gray-800 flex justify-around items-center ">
      <Note id={'1/8'} />
      <Note id={'2/8'} />
      <Note id={'3/8'} />
      <Note id={'4/8'} />
      <Note id={'5/8'} />
      <Note id={'6/8'} />
      <Note id={'7/8'} />
      <Note id={'8/8'} />
    </div>
  )
}

export default Track
