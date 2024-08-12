import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Experience } from './components/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Experience/>
    </>
  )
}

export default App
