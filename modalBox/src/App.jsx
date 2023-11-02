import { useState } from 'react'
import Modal from './component/Modal'
import './App.css'
// import { Modal } from 'bootstrap'

function App() {
const [modal,showModal]=useState(false)
  return (
    <div className='App'>
      <button onClick={()=>showModal(true)}>Open</button>
      { modal && (<Modal>
      <h1>This is modal title</h1>
      <p>This is modal description</p>
      </Modal>
      )}
      This is behind modal
      </div>
      
      
    
  )
}

export default App
