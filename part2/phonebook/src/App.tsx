import { useState } from 'react'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'
     },
     {
      name: 'Ada Lovelace',
      number: '034-9876543'
     },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchPattern, setSearchPattern] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    
    if ( persons.filter(person => person.name === personObject.name).length === 0 )
    {
      setPersons(persons.concat(personObject))
    }
    setNewName('')
    setNewNumber('')
  }

  const handlePersonNameChange = (event) => {
    setNewName(event.target.value)
    console.log(document.getElementsByTagName('button')[0].disabled);
    console.log(event.target.value);
    const newAddName = event.target.value

    document.getElementsByTagName('button')[0].disabled = false
    if ( persons.filter(person => person.name === newAddName).length > 0 )
    {
        alert(`Ya existe ${newAddName} en la agenda telefónica`)
        document.getElementsByTagName('button')[0].disabled = true
    }
  }

  const handlePersonNumberChange = (event) => {
    setNewNumber(event.target.value)
    console.log(event.target.value);
  }

  const handlePersonSearchChange = (event) => {
    setSearchPattern(event.target.value)
    showPhonebookFilter(event.target.value)
  }

  const showPhonebookInfo = (persons) => {
    return (
      <>
    {persons.map(person => 
                  <li key={person.name}>{person.name} {person.number}</li>
                )}
      </>
    )
  }

  const showPhonebookFilter = (searchPattern) => {
    console.log(persons.filter(person => person.name.toLowerCase().includes(searchPattern.toLowerCase())))
    if (searchPattern == '') {
      return showPhonebookInfo(persons)
    }
    else {
      const filterPersons = persons.filter(person => person.name.toLowerCase().includes(searchPattern.toLowerCase()))
      return (
        <>
        {filterPersons.map(person => 
                  <li key={person.name}>{person.name} {person.number}</li>
                )}
        </>
      )
    }
  }

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addPerson}>
          <div>
            filter shown with: 
            <input 
              value={searchPattern} 
              onChange={handlePersonSearchChange} />
          </div>
          <div>
            name: 
            <input 
              value={newName} 
              onChange={handlePersonNameChange} />
          </div>
          <div>
            number:
            <input 
              value={newNumber} 
              onChange={handlePersonNumberChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
      <div className='div'>
        <h2>Numbers</h2>
        <ul>
          {showPhonebookFilter(searchPattern)}
        </ul>
      </div>
    </>
  )
}

export default App