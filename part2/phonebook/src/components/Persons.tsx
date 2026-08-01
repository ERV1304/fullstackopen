import personsService from '../services/persons'

const Persons = (props) => {

const persons = props.persons
const setPersons = props.setPersons
const searchPattern = props.searchPattern

const deletePerson = (id) => {
  const person = persons.find(p => p.id === id)
  if (window.confirm(`Delete ${person.name}?`)) {
    personsService
      .deletePerson(id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== id))
      })
      .catch(error => {
        alert(`the person '${person.name}' was already deleted from server`)
        setPersons(persons.filter(p => p.id !== id))
      })
  }
}

const showPhonebookInfo = (persons) => {
    return (
      <>
    {persons.map(person => 
                  <li key={person.name}>{person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button></li>
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
                  <li key={person.name}>{person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button></li>
                )}
        </>
      )
    }
  }  

  return (
    <>
    {showPhonebookFilter(searchPattern)}
    </>
  )
}

export default Persons
