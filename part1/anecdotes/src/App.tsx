import { useState } from 'react'
import './App.css'

function App() {
   const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)

  return (
    <>
      <div>
        <p>{anecdotes[selected]}</p>
        <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>
          Next Anecdote
        </button>
      </div>
    </>
  )
}

export default App
