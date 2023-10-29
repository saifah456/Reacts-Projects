import React, { useState } from 'react'
import "./LoginSignup.css"

const LoginSignup = () => {

    const [action,setAction]=useState("SignUp")
  return (
    
    <div className='container'>
    <div className='header'>
    <div className='text'>{action}</div>
    <div className='underline'></div>
    <div className='inputs'>
    {action==="Login" ? <div></div> :<div className='input'>
            <img src="" alt=""/>
            <input type='text' placeholder='Enter your name :'/>
        </div> }

        
        <div className='input'>
            <img src="" alt=""/>
            <input type='email' placeholder='Enter your E-mail :'/>
        </div>
        <div className='input'>
            <img src="" alt=""/>
            <input type='password' placeholder='Enter Password'/>
        </div>
    </div>
    </div>
    {action==="SignUp" ? <div></div> :<div className='forgot-password'>Forgot Password?<span>Click Here!</span></div>   }
    <div className='submit-container'>
    <div className={action === "Login" ? "submit grey" : "submit"} onClick={() => setAction("SignUp")}>SignUp</div>
    <div className={action === "SignUp" ? "submit grey" : "submit"} onClick={() => setAction("Login")}>Login</div>


    </div>
    </div>
  )
}

export default LoginSignup;