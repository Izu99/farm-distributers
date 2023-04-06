import React from 'react'

function Clients(props) {
  const handleClick = props.handleClick;
  return (
    <div>
       <div className='clientsPage'>Clients
      <button onClick={() => handleClick("addClients")}>Add Clients</button>

  
    </div>
    </div>
  )
}

export default Clients