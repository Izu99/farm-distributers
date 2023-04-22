import React from "react";
import dashboardimg1 from "../images/dashboard-img1.svg";
import dashboardimg2 from "../images/dashboard-img2.svg";
import "../Styles/Dashboard.css";
import Header from "./NavBar";

import "../Styles/LeftSidebar.css";

import img1 from "../images/dashboard-icon.svg";
import img2 from "../images/farmer-icon.svg";
import img3 from "../images/vender-icon.svg";
import img4 from "../images/products-icon.svg";
import img5 from "../images/clients-icon.svg";

import logo from "../images/navbar-logo.svg";

function Dashboard() {
	return (
		<div className='DashboardPage'>
			<div className='left-sidebar'>
				<img src={logo} alt='' className='header-logo' />
				<a href='/dashboard'>
					<div className='icon dashboard'>
						<img src={img1} alt='icon1' />
						<div className='text'>Dashboard</div>
					</div>
				</a>
				<a href='/AdminFarmerViewTable'>
					<div className='icon farmer'>
						<img src={img2} alt='icon2' />
						<div className='text'>Farmer</div>
					</div>
				</a>
				<a href='/AdminVendorViewTable'>
					<div className='icon vendor'>
						<img src={img3} alt='icon3' />
						<div className='text'>Vendor</div>
					</div>
				</a>
				<a href='/AdminProductsViewTable'>
					<div className='icon products'>
						<img src={img4} alt='icon4' />
						<div className='text'>Products</div>
					</div>
				</a>
				<a href='/AdminClientViewTable'>
					<div className='icon clients'>
						<img src={img5} alt='icon5' />
						<div className='text'>Clients</div>
					</div>
				</a>
			</div>
			<div className='right-side'>
				<Header />
				<img src={dashboardimg1} alt='' srcset='' />
				<img src={dashboardimg2} alt='' srcset='' />
				
				
			</div>
		</div>
	);
}

export default Dashboard;
