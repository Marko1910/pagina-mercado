import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EnvironmentalActionLanding from './landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <EnvironmentalActionLanding/>
  )
}

export default App
