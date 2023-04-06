import React from 'react'

function Vendor(props) {
  const handleClick = props.handleClick;
  return (
    
    <div>
       <div className='vendorPage'>Vendor
      <button onClick={() => handleClick("addVendor")}>Add Vendor</button>

  
    </div>
    </div>
  )
}

export default Vendor