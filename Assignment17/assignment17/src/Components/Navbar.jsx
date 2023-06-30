import React from 'react'
import {myContext} from '../Components/Context.jsx'
import { useContext } from 'react'

const Navbar = () => {
  const {setLogin , input} = useContext(myContext)

  return (
    <div className="Navbar">
      <h2>React</h2>
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Service</li>
      </ul>
      <span>
      <button onClick={()=>{setLogin(false)}}>LogOut</button>
      <p style={{color:"yellow"}}><b>{input} </b></p>
      </span>
    </div>
  )
}

export default Navbar