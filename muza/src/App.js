import './App.css'
import Board from './components/Board'
import { NoteProvider } from './NoteContext'

function App() {
  return (
    <NoteProvider>
      <div className="w-full h-screen bg-gray-300 flex flex-col items-center justify-center  App">
        <Board />
      </div>
    </NoteProvider>
  )
}

export default App
