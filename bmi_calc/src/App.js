import './App.css';
import React,{useState} from 'react';
import OutPut from './component/OutPut';


function App() {

  const [weight,setWeight]=useState(0)
  const [height,setHeight]=useState(0)
  const [bmi,setBmi]=useState("")
  const [message,setMessage]=useState("")
  const [modalShow, setModalShow] = useState(false);


  let calcBmi = (e) => {
    e.preventDefault();
  
    if (weight <= 0 || height <= 0) {
      alert("Please enter valid height and weight");
    } else {
      let bmi = (weight / (height * height) * 703);
      setBmi(bmi.toFixed(1));
  
      if (bmi < 25) {
        setMessage("You are under Weight");
      } else if (bmi > 25 && bmi < 30) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  }
  
  let reload = () => {
    setWeight(0);
    setHeight(0);
    setBmi("");
    setMessage("");
    setModalShow(false);
  };
  


  return (
    
    <div className="App">
      <div className='container' >
        {/* <h1>Hello</h1> */}
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
          <label> Weight(ibs)</label>
            <input type='text' placeholder='Enter Weight Value' value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </div>
          <div>
            <label> Height(ibs)</label>
            <input type='text' placeholder='Enter Height Value' value={height} onChange={(event) => setHeight(event.target.value)}/>
          </div>
          <div>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" type='submit'onClick={()=>setModalShow(true) }>Submit</button>
            <button className='btn tn-outline' onClick={reload} type='submit'>Reload</button>
          </div>

          {/* <OutPut bmi={bmi} message={message}/> */}
        </form>
       

        {modalShow && (
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className='center'>
                    <h3>Your BMI is: {bmi}</h3>
                    <p>{message}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;