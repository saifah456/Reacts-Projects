import React from 'react'
import './modal.css'


const Modal = () => {
  return (
    <div className='modal-container'>
        <div className='modal'>
            <div className='modal-header'>
                <p className='close'>&times,</p>
            </div>
            <div className='modal-content'>
                <h1>This is the Modal</h1>
            </div>
            <div className='modal-footer'>
                <button className='btn btn-submit'>Submit</button>
                <button className='btn btn-cancel'>Cancel</button>

            </div>

        </div>
    </div>
  )
}

export default Modal