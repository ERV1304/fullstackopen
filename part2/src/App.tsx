import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'
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
   noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: `${notes.length+1}`,
      content: newNote,
      important: Math.random() < 0.5,
    }

   noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch((error) => {
        alert(`the note '${note.content}' was already deleted from server`)
        setNotes(notes.filter((n) => n.id !== id))
      })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter((note) => note.important)

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
            <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
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
