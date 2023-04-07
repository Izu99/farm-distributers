import React from 'react'
import img1 from '../images/dashboard-img1.svg'
import img2 from '../images/dashboard-img2.svg'
import '../Styles/Dashboard.css'
import Header from './NavBar'

function Dashboard() {
  return (
    <div>
      <div className="DashboardPage">
        <Header />
       <img src={img1} alt="" srcset="" />
       <img src={img2} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Dashboard