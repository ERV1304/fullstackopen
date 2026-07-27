

const Note = ({ note }: { note: { content: string } }) => {
//const Note = ({ note }) => {
  return (
    <li>
      {note.content}
    </li>
  )
}

export default Note
