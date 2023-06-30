import React from 'react'
import {myContext }from '../Components/Context.jsx'
import { useContext, useState } from 'react'

const Login = () => {
  const {setLogin , setInput, input} = useContext(myContext)
  const [pass, setPass] = useState("")
  
  const button = ()=>{
    console.log(input)
    if((input === "rishav" && pass === "rishav@123") || (input === "admin" && pass === "admin@123")){
      console.log(input)
      setLogin(true);
    }else{
      alert("Enter Proper credential..!")
    }
  }
  return (
    <div className='LoginPage'>
         <h1>Login Page</h1>
        <label>User Name :
        <input type="text" placeholder='User Name' onChange={(e)=>{setInput(e.target.value)}}/>
        </label>
        <label> Password : 
        <input type="password" placeholder='Password' onChange={(e)=>{setPass(e.target.value)}}/>
        </label>
        <button onClick={()=>{button()}} >Login</button>
    </div>
  )
}

export default Login;