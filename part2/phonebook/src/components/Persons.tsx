import personsService from '../services/persons'

const Persons = (props) => {

const persons = props.persons
const setPersons = props.setPersons
const searchPattern = props.searchPattern
const setMessage = props.setMessage
const setClassNameMessage = props.setClassNameMessage

const deletePerson = (id) => {
  const person = persons.find(p => p.id === id)
  if (window.confirm(`Borrar ${person.name}?`)) {
    personsService
      .deletePerson(id)
      .then(() => {
        const successMessage = `'${person.name}' fue eliminada del servidor`

        setPersons(persons.filter(p => p.id !== id))
        setMessage(successMessage)
        setClassNameMessage('notification success')
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
      .catch(() => {
        //alert(`'${person.name}' ya fue borrada del servidor`)
        const errorMessage = `'${person.name}' ya fue borrada del servidor`

        setPersons(persons.filter(p => p.id !== id))
        setMessage(errorMessage)
        setClassNameMessage('notification error')
        setTimeout(() => {
          setMessage(null)
        }, 5000)
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
