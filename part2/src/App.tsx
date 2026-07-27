import Note from './components/Note'
import './App.css'

function App(props: { notes: { id: number, content: string }[]; animals: { name: string; species: string }[] }) {

  console.log(props.animals)
  const animals  = props.animals

  const dogs = animals.filter(animal => animal.species === 'dog')
  console.log('Dogs: ', dogs)

  const { name, species } = props.animals[0]
  console.log('First animal is:', name, ' the ', species)

  const notes = props.notes
  console.log(notes)

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
    </div>
        </section>

        <div className="ticks"></div>
      <section id="spacer"></section>
    </>

  )
}

export default App
