import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10)

  //let counter=10
  const addValue = () => {
    if (counter < 30) {
        setCounter((oldCounter) => oldCounter + 5);
        // Reset background color if it was previously set
    } else {
        alert("You have reached the maximum limit of 20");
        // Change the background color when the condition is false
        document.getElementById("color").style.backgroundColor = "green"; // Change to the desired color
    }
}


  const removeValue = () => {
    if (counter > 0) {
      setCounter((oldCounter) => oldCounter - 5);
    } else {
      alert("Number has reached zero");
      document.getElementById("color").style.backgroundColor = "red"; // Replace "yourElementId" with the actual ID of your element

    }
  }
  
  return (
    <>
    <div className="center">
    <h1>Welcome to UseState Hook</h1>
    <h2> Counter value increment and decrement : {counter}</h2>
    <div id="color" style={{ width: '400px', height: '400px', backgroundColor: '' }}></div>
    <button onClick={addValue}>Add Value</button>
    <br/>
    <br/>
    <button onClick={removeValue}>Remove Value</button>
    </div>
    </>
  )   
  
}

export default App
