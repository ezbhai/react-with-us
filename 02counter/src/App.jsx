import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,addCounter] = useState(1)
   
  // let counter = 5
  const addvalue = () =>{
    console.log(counter)
    counter = counter + 1 
    addCounter(counter)
  }
  const removeValue = () =>{
    addCounter(counter - 1)
  }
  return (
    <>
      <h1>ezbhai aur react</h1>

      <h2>counter value: {counter} </h2>

      <button onClick={addvalue}>Add value </button> <br /> <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
