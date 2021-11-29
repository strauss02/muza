import Track from './Track'
import PlayButton from './PlayButton'

function Board() {
  return (
    <div className=" h-3/4 bg-gray-500 w-1/2 rounded-xl">
      <h1> Hello World</h1>
      <PlayButton />
      <Track instrument={'openHiHat'} />
      <Track instrument={'closedHiHat'} />
      <Track instrument={'snare'} />
      <Track instrument={'kick'} soundfile={'banan'} />
    </div>
  )
}

export default Board
