import { useState, useEffect, type SetStateAction } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
// @ts-expect-error: service has no type declarations
import noteService from './services/notes'
import './App.css'

type NoteType = {
  id: string
  content: string
  important: boolean
}

function App(props: { animals: { name: string; species: string }[] /*notes: { id: number, important: boolean, content: string }[];*/  }) {

  console.log(props.animals)
  const animals  = props.animals

  const dogs = animals.filter(animal => animal.species === 'dog')
  console.log('Dogs: ', dogs)

  const { name, species } = props.animals[0]
  console.log('First animal is:', name, ' the ', species)

  const [notes, setNotes] = useState<NoteType[]>(/*props.notes*/[])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [message, setMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [typeMessage, setTypeMessage] = useState('')

  useEffect(() => {
   noteService
      .getAll()
      .then((initialNotes: SetStateAction<NoteType[]>) => {
        setNotes(initialNotes)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  const addNote = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const noteObject = {
      id: `${notes.length+1}`,
      content: newNote,
      important: Math.random() < 0.5,
    }

   noteService
      .create(noteObject)
      .then((returnedNote: NoteType) => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
        setMessage(
          `Note '${returnedNote.id}' was added to server`
        )
        setShowMessage(true)
        setTypeMessage('success')
        setTimeout(() => {
          setMessage('')
        }, 5000)
      })
  }

  const toggleImportanceOf = (id: string) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note?.important }

    noteService
      .update(id, changedNote)
      .then((returnedNote: NoteType) => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch((errorMessage: string) => {
        //alert(`the note '${note.content}' was already deleted from server`)
        errorMessage = `Note '${note?.content}' was already removed from server`

        setMessage(errorMessage)
        setShowMessage(true)
        setTypeMessage('error')
        setTimeout(() => {
          setMessage('')
        }, 5000)

        setNotes(notes.filter((n) => n.id !== id))
      })
  }

  const handleNoteChange = (event: { target: { value: SetStateAction<string> } }) => {
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
      <Notification message={message} show={showMessage} type={typeMessage} />
      <ul>
          {notes.map(note => 
            <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} makebutton={() => true} />
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
            <Note key={note.id} note={note} makebutton={() => false} />
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
