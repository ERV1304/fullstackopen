import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import personsService from './services/persons'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchPattern, setSearchPattern] = useState('')
  const [message, setMessage] = useState('')
  const [classNameMessage, setClassNameMessage] = useState('notification hide')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <Notification message={message} classNameMessage={classNameMessage} />
        <Filter searchPattern={searchPattern} setSearchPattern={setSearchPattern} />
        
        <h3>Add a new</h3>
        <PersonForm newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} setMessage={setMessage} setClassNameMessage={setClassNameMessage} />
      </div>
      <div className='div'>
        <h3>Numbers</h3>
        <ul>
          <Persons persons={persons} setPersons={setPersons} searchPattern={searchPattern} setMessage={setMessage} setClassNameMessage={setClassNameMessage} />
        </ul>
      </div>
    </>
  )
}

export default App