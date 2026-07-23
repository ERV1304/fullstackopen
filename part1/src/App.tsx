import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Hello(props: {name?: string, age?: number }) {
  const now = new Date()
  console.log(props)
  
  return (
    <>
      <p>Hello {props.name || 'world'},</p>
      <p>{now.toLocaleTimeString()},</p>
      <p>you are {props.age} years old</p>
    </>
  )
}

function Javascript() {
  const t = [1, -1, 3] // define un array de números
  console.log(t)  // se imprime el array [1, -1, 3]

  t.forEach(value => {
    console.log(value)  // se imprimen los números 1,-1,3 cada uno en su propia línea
  })

  const t2 = t.concat(5) // crea un nuevo array con el valor 5 agregado al final
  console.log(t2) // se imprime el array [1, -1, 3, 5]

  const m1 = t.map(value => value * 2)
  console.log(m1) // se imprime el array [2, -2, 6]

  const m2 = t.map(value => '<li>' + value + '</li>')
  console.log(m2) // se imprime el array [ '<li>1</li>', '<li>-1</li>', '<li>3</li>' ]

  const [first, second, ...rest] = t2
  console.log(first, second)  // se imprime 1 -1
  console.log(rest)  // se imprime el array [3, 5]

  const sum = (p1: number, p2: number) => { 
    console.log(p1) // se imprime 1 
    console.log(p2) // se imprime 5 
    return p1 + p2 
  } 
  const result = sum(1, 5)
  console.log (result) // se imprime 6

  const tSquared = t.map(p => p * p)
  console.log (tSquared) // se imprime el array [1, 1, 9]

  const average = function(a: number, b: number) {
  return (a + b) / 2
  }
  const result2 = average(10, 20)
  console.log(result2) // se imprime 15

  return (<></>)
}

function App() {
  const [count, setCount] = useState(0)
  console.log('Hello from Main APP')

  const a = 10
  const b = 30

  console.log(a+b)

    const friends = [ 'Peter', 'Maya']

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="right-side">
        <Hello name="ERV" age={a+b} />
        <div>{friends}</div>
      </section>

      <section id="javascript">
        <Javascript />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
