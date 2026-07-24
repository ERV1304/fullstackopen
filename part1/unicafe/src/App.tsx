import { useState } from 'react'
import './App.css'

function Header(props: {name?: string}) {
  
  return (
    <>
     <h1>{props.name}</h1>
    </>
  )
}

function Display({level, count}: {level: string, count: number}) {
  return (
    <>
      <p>{level} {count}</p>
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
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = ({level}: {level: string}) => {
    if (level === 'good') {
      setGood(good + 1)
    } else if (level === 'neutral') {
      setNeutral(neutral + 1)
    } else if (level === 'bad') {
      setBad(bad + 1)
    }
  }

  return (
    <section id="left">
      <Header name={'give feedback'} />
      <Button onClick={() => handleClick({level: 'good'})} text="good" />
      <Button onClick={() => handleClick({level: 'neutral'})} text="neutral" />
      <Button onClick={() => handleClick({level: 'bad'})} text="bad" />
      <Header name={'statistics'} />
      <Display level="Good" count={good} />
      <Display level="Neutral" count={neutral} />
      <Display level="Bad" count={bad} />
    </section>
  )
}

export default App
