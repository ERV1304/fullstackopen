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
      <p>
        {level} {count}
        {level === 'Percentage' && ' %'}
      </p>
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
  const [all, setAll] = useState(0)

  const handleClick = ({level}: {level: string}) => {
    if (level === 'good') {
      setGood(good + 1)
    } else if (level === 'neutral') {
      setNeutral(neutral + 1)
    } else if (level === 'bad') {
      setBad(bad + 1)
    }
    setAll(all + 1)
  }

  const average = () => all > 0 ? (good * 1 + neutral * 0 + bad * -1) / all : 0

  const percentage = () => all > 0 ? (good / all) * 100 : 0

  return (
    <section id="central">
      <Header name={'give feedback'} />
      <Button onClick={() => handleClick({level: 'good'})} text="good" />
      <Button onClick={() => handleClick({level: 'neutral'})} text="neutral" />
      <Button onClick={() => handleClick({level: 'bad'})} text="bad" />
      <Header name={'statistics'} />
      <section id="left">
        <Display level="Good" count={good} />
        <Display level="Neutral" count={neutral} />
        <Display level="Bad" count={bad} />
        <Display level="All" count={all} />
        <Display level="Average" count={average()} />
        <Display level="Percentage" count={percentage()} />
      </section>
    </section>
  )
}

export default App
