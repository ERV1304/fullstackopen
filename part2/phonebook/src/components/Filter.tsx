const Filter = (props) => {

  const searchPattern = props.searhPattern;
  const setSearchPattern = props.setSearchPattern;

  const handlePersonSearchChange = (event) => {
    setSearchPattern(event.target.value)
  }

  return (
    <div>
    filter shown with: 
      <input 
        value={searchPattern} 
        onChange={handlePersonSearchChange} />
    </div>
  )
}

export default Filter
