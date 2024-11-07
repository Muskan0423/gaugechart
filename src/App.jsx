import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gaugechart from './Components/gaugechart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Gaugechart/>
    </>
  )
}

export default App
