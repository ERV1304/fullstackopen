const Persons = (props) => {

const persons = props.persons
const searchPattern = props.searchPattern

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
    {showPhonebookFilter(searchPattern)}
    </>
  )
}

export default Persons
