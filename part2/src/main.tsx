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
    <App animals={animals} />
  </StrictMode>,
)
