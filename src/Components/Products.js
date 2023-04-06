import React from 'react'

function Products(props) {
  const handleClick = props.handleClick;
  return (
    <div>
       <div className='producssPage'>Products
      <button onClick={() => handleClick("addProducts")}>Add Products</button>

  
    </div>
    </div>
  )
}

export default Products