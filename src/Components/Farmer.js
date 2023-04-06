import React from 'react'
import '../Styles/Farmer.css'
import { NavLink } from "react-router-dom";

function Farmer(props) {
  const handleClick = props.handleClick;

  return (
    <div className='farmerPage'>Farmer
      <button onClick={() => handleClick("addFarmer")}>Add Farmer</button>

  
    </div>
    
  )
}

export default Farmer
