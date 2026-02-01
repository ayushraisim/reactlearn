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

    //interviewers ask thing below which they do like they write it too many times
    setCounter(counter+1) 
    setCounter(counter+1) 
    setCounter(counter+1) 
    //all things above will be sent in batch because react send updates in batches as all are doing same work so they will be send in batches
    //what if we have to use more than one ?
    setCounter(prevCounter=>prevCounter+1);//prevcounter is written beecause previously updated value comes;
     setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      //so in callback it comnes when its updation is completed
  } 
  const decreasevalue = ()=>{
    if(counter==0) return;
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
