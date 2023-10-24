import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10)

  //let counter=10
  const addValue =() => {
    
    // counter=counter+1
    if(counter < 20){
    setCounter((oldCounter) => oldCounter+5)

    }else {
      alert("You have reached the maximum limit of 20")
    }
    
    
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter((oldCounter) => oldCounter - 5);
    } else {
      alert("Number has reached zero");
    }
  }
  
  return (
    <>
    <h1>Welcome to UseState Hook</h1>
    <h2> Counter value increment and decrement : {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br/>
    <br/>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )   
  
}

export default App
