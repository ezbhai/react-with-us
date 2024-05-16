import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  const [multiplyValue,setMultiplyValue] = useState(1)

  const multiplybyfive = () => {
    setMultiplyValue(value * 5)
    setValue(value + 1)
  }

  return (
    <>
      <h1>main value:{value}</h1>
      <button
        onClick={multiplybyfive}
      >click to multiply by 5</button>
      <h2>multiply value {multiplyValue}</h2>
    </>
  )
}

export default App
