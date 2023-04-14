import React from 'react'
import { useGlobalContext } from './Context'
import {FaBars} from "react-icons/fa"
import { Navlinks } from './Navlinks'


export const Navbar = () => {
    const {openSideBar,setPageId} = useGlobalContext()

    // function to close the submenu
    const handleSubmenu = (e)=>{
    if(!e.target.classList.contains("nav-link"))
    {
      setPageId(null)
    }
    }

  return (
    <nav onMouseOver={handleSubmenu} >
        <div className="nav-center">
    <h3 className="logo" >CHRIS TECH</h3>
    <button className="toggle-btn" onClick={openSideBar} ><FaBars/></button>
    <Navlinks/>
  </div>
    </nav>

  )
}
