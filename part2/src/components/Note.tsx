const Note = (props) => {
  const note = props.note
  const toggleImportance = props.toggleImportance

  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <ul>
      <li>
        {note.content} 
        <button onClick={toggleImportance}>{label}</button>
      </li>
    </ul>
  )
}

export default Note
