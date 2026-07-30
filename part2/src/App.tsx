import { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'
import './App.css'

function App(props: { /*notes: { id: number, important: boolean, content: string }[];*/ animals: { name: string; species: string }[] }) {

  console.log(props.animals)
  const animals  = props.animals

  const dogs = animals.filter(animal => animal.species === 'dog')
  console.log('Dogs: ', dogs)

  const { name, species } = props.animals[0]
  console.log('First animal is:', name, ' the ', species)

  const [notes, setNotes] = useState(/*props.notes*/[])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)
  
  /*console.log(notes)*/
  useEffect(() => {
  console.log('effect')
  axios
    .get('http://localhost:3001/notes')
    .then(response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    })
  }, [])
  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  return (
    <>
      <section id="center">
        <h1>Dogs</h1>
        <ul>
          {dogs.map(dog => (
            <li key={dog.name}>{dog.name}</li>
          ))}
        </ul>
      </section>

      <section id="second">

    <div>
      <h1>Notes</h1>
      <ul>
          {notes.map(note => 
            <Note key={note.id} note={note} />
          )}
      </ul>
       <form onSubmit={addNote}>
        <input 
          value={newNote} 
          onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>   
    </div>
    <div>
      <h1>Only important notes</h1>
      <ul>
          {notesToShow.map(note => 
            <Note key={note.id} note={note} />
          )}
      </ul> 
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all' }
      </button>
    </div>
        </section>

        <div className="ticks"></div>
      <section id="spacer"></section>
    </>

  )
}

export default App
