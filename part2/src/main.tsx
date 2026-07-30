import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import axios from 'axios'
import App from './App.tsx'

const animals = [
    {name: 'trico', species: 'cat'},
    {name: 'luna', species: 'dog'},
    {name: 'asgard', species: 'dog'},
    {name: 'tigresa', species: 'cat'},
    {name: 'miflu', species: 'cat'},
    {name: 'rocky', species: 'dog'},
  ]

/*  
const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]
  */

const promise = axios.get('http://localhost:3001/notes')
console.log(promise)

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)

axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data
    console.log(notes)
  })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App animals={animals} /*notes={notes}*/ />
  </StrictMode>,
)
