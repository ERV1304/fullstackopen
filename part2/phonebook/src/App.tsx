import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import axios from 'axios'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchPattern, setSearchPattern] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
    }, [])

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <Filter searchPattern={searchPattern} setSearchPattern={setSearchPattern} />
        
        <h3>Add a new</h3>
        <PersonForm newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} />
      </div>
      <div className='div'>
        <h3>Numbers</h3>
        <ul>
          <Persons persons={persons} searchPattern={searchPattern} />
        </ul>
      </div>
    </>
  )
}

export default App