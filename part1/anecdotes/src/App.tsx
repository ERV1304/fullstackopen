import { useState } from 'react'
import './App.css'

const RandomInit = (length: number) => Math.floor(Math.random() * length)

function Header(props: {name?: string}) {
  
  return (
    <>
     <h1>Anecdote {props.name}</h1>
    </>
  )
}

function Display({text}: {text: string}) {
  return (
    <>
      <p>{text}</p>
    </>
  )
}

function Button(props: {onClick: () => void, text: string}) {

  return (
    <>
      <button className="button" onClick={props.onClick}>
        {props.text}
      </button>
    </>
  )
}

function App() {
   const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(RandomInit(anecdotes.length))
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)

  const handleVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    setMostVoted(votes.indexOf(Math.max(...copy)))
  }

  console.log('Votes:', votes)

  return (
    <>
        <section id="central">
        <Header name={'of the day'} />
        <Display text={anecdotes[selected]} />
        <Display text={`has ${votes[selected]} votes`} />
        <Button onClick={handleVotes} text="Vote" />
        <Button onClick={() => setSelected(RandomInit(anecdotes.length))} text="Next Anecdote" />
        <Header name={'with most votes'} />
        <Display text={anecdotes[mostVoted]} />
        <Display text={`has ${votes[mostVoted]} votes`} />
      </section>
    </>
  )
}

export default App
