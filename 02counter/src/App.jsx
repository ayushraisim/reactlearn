import { useState } from 'react'   // usestate hook is coming 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5) //u can pass anything
  //let counter = 5;
  const addvalue = ()=>{
    //counter = counter +1;
    setCounter(counter+1) //above is correct too
  } 
  const decreasevalue = ()=>{
    counter=counter -1;
        setCounter(counter) //above is correct too

  } 

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addvalue}>add value</button>

      <br />
      <button onClick={decreasevalue}>decrease value</button>

    </>
  )
}

export default App
