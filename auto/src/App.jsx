import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Autocomplete from './Components/Autocomplete'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Autocomplete/>

    </>
  )
}

export default App
