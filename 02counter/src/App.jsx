import { useState } from 'react'
import './App.css'

function App() {

  let [counter,addCounter] = useState(1)
   
  // let counter = 5
  const addvalue = () =>{
    if(counter < 20){
      counter = counter + 1 
    }    
    addCounter(counter)
  }
  const removeValue = () =>{
    if(counter > 0){
      counter = counter - 1
    }
    addCounter(counter)
  }
  return (
    <>
      <h1>ezbhai aur react</h1>

      <h2>counter value: {counter} </h2>

      <button onClick={addvalue}>Add value </button>   <br />    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
