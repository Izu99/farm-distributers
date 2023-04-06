import React from 'react'
import '../Styles/Farmer.css'


function Farmer(props) {
  const handleClick = props.handleClick;

  return (
    <div className='farmerPage'>Farmer
      <button onClick={() => handleClick("addFarmer")}>Add Farmer</button>

  
    </div>
    
  )
}

export default Farmer
