const PersonForm = (props) => {
  const persons = props.persons
  const setPersons = props.setPersons
  const newName = props.newName
  const setNewName = props.setNewName
  const newNumber = props.newNumber
  const setNewNumber = props.setNewNumber
  

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

  return (
    <form onSubmit={addPerson}>
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
  )
}

export default PersonForm
