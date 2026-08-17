import personsService from '../services/persons'

const PersonForm = (props) => {
  const persons = props.persons
  const setPersons = props.setPersons
  const newName = props.newName
  const setNewName = props.setNewName
  const newNumber = props.newNumber
  const setNewNumber = props.setNewNumber
  const setMessage = props.setMessage
  const setClassNameMessage = props.setClassNameMessage


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    
    if ( persons.filter(person => person.name === personObject.name).length === 0 )
    {
      
         personsService
            .create(personObject)
            .then ((returnedPerson, successMessage) => {
              successMessage = `'${returnedPerson.name}' fue añadida al servidor`

              setPersons(persons.concat(returnedPerson))
              setNewName('')
              setNewNumber('')
              setMessage(successMessage)
              setClassNameMessage('notification success')
              setTimeout(() => {
                setMessage(null)
              }, 5000)
            })
        
    }
    else {
      const person = persons.find(p => p.name === newName)
      if (window.confirm(`${newName} ya existe en la agenda telefónica, ¿desea reemplazar el número?`)) {
        const changedPerson = { ...person, number: newNumber }
        personsService
          .update(person.id, changedPerson)
          .then((successMessage) => {
            successMessage = `El número de '${person.name}' se ha actualizado en el servidor`

            setPersons(persons.map(p => p.id !== person.id ? p : changedPerson))
            setNewName('')
            setNewNumber('')
            setMessage(successMessage)
              setClassNameMessage('notification success')
              setTimeout(() => {
                setMessage(null)
              }, 5000)
          })
          .catch(errorMessage => {
            //alert(`El número de '${person.name}' no ha podido ser actualizado en el servidor`)
            errorMessage = `El número de '${person.name}' no ha podido ser actualizado en el servidor`

            setPersons(persons)
            setMessage(errorMessage)
            setClassNameMessage('notification error')
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
      }
    }
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
        //document.getElementsByTagName('button')[0].disabled = true
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
