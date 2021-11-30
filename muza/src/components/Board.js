import Track from './Track'
import PlayButton from './PlayButton'

import closedHiHat from '../assets/sounds/closedhihat.wav'
import openHiHat from '../assets/sounds/openhihat.wav'
import snare from '../assets/sounds/snare.wav'
import kick from '../assets/sounds/kick.wav'

function Board() {
  function runPlayhead() {}

  return (
    <div className=" h-3/4 bg-gray-500 w-1/2 rounded-xl">
      <h1> Hello World</h1>
      <PlayButton />
      <Track instrument={'openHiHat'} soundFile={openHiHat} />
      <Track instrument={'closedHiHat'} soundFile={closedHiHat} />
      <Track instrument={'snare'} soundFile={snare} />
      <Track instrument={'kick'} soundFile={kick} />
    </div>
  )
}

export default Board
