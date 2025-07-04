import React from 'react'
import logo from "../../assets/d21639fb-61ed-44c0-bb72-df9698e523fe.png"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='w-full bg-black px-10'>
        <img className='w-40 ' src={logo}></img>
    </div>
  )
}

export default Navbar