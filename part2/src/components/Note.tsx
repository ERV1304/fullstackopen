const Note = (props: {note: {id:string, content: string, important: boolean}, toggleImportance?: ()=>void, makebutton: ()=>boolean}) => {
  const note = props.note
  const toggleImportance = props.toggleImportance
  const makebutton = props.makebutton()

  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <ul>
      <li className='note'>
        {note.content} 
        {makebutton && <button onClick={toggleImportance}>{label}</button>}
      </li>
    </ul>
  )
}

export default Note
