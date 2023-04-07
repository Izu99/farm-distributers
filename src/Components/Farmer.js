import React from 'react'
import '../Styles/Farmer.css'
import img1 from '../images/dashboard-img1.svg'
import img2 from '../images/dashboard-img2.svg'


function Farmer(props) {
  const handleClick = props.handleClick;

  return (
    <div className='farmerPage'>Farmer
      <button onClick={() => handleClick("addFarmer")}>Add Farmer</button>

  
    </div>
    
  )
}

export default Farmer
