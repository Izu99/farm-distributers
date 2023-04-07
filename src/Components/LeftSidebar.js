import React, { useState } from "react";
import "../Styles/LeftSidebar.css";
import img1 from "../images/dashboard-icon.svg";
import img2 from "../images/farmer-icon.svg";
import img3 from "../images/vender-icon.svg";
import img4 from "../images/products-icon.svg";
import img5 from "../images/clients-icon.svg";
import Dashboard from "./Dashboard";
import Farmer from "./Farmer";
import Vendor from "./Vendor";
import Products from "./Products";
import Clients from "./Clients";
import AddFarmer from './AddFarmer';
import logo from '../images/navbar-logo.svg'
import axios from 'axios';
import AddVendor from './AddVendor'
import AddProducts from "./AddProducts";
import AddClients from "./AddClients";
import ProfileFarmer from "./ProfileFarmer";

const LeftSidebar = () => {
	const [active, setActive] = useState("addVendor"); // Set the default active component to Dashboard

	const handleClick = (component) => {
		setActive(component); // Update the active state when an icon is clicked
	};

	return (
		<div className='Page'>
			<div className='left-sidebar'>
				<img src={logo} alt="" className="header-logo"/>
				<div
					className={`icon ${active === "dashboard" ? "active" : ""}`}
					onClick={() => handleClick("dashboard")}>
					<img src={img1} alt='icon1' />
					<div className='text'>Dashboard</div>
				</div>
				<div
					className={`icon ${active === "farmer" ? "active" : ""}`}
					onClick={() => handleClick("farmer")}>
					<img src={img2} alt='icon2' />
					<div className='text'>Farmer</div>
				</div>
				<div
					className={`icon ${active === "vendor" ? "active" : ""}`}
					onClick={() => handleClick("vendor")}>
					<img src={img3} alt='icon3' />
					<div className='text'>Vendor</div>
				</div>
				<div
					className={`icon ${active === "products" ? "active" : ""}`}
					onClick={() => handleClick("products")}>
					<img src={img4} alt='icon4' />
					<div className='text'>Products</div>
				</div>
				<div
					className={`icon ${active === "clients" ? "active" : ""}`}
					onClick={() => handleClick("clients")}>
					<img src={img5} alt='icon5' />
					<div className='text'>Clients</div>
				</div>
			</div>

			<div className='right-side'>
				{/* Conditionally render the corresponding component based on the active state */}
				{active === "dashboard" && <Dashboard />}
				{active === "farmer" && <Farmer handleClick={handleClick} />}
				{active === "vendor" && <Vendor handleClick={handleClick} />}
				{active === "products" && <Products handleClick={handleClick} />}
				{active === "clients" && <Clients handleClick={handleClick} />}
				{active === "addFarmer" && <ProfileFarmer />}
				{active === "addVendor" && <AddVendor />}        
				{active === "addProducts" && <AddProducts />}
				{active === "addClients" && <AddClients />}
			</div>
		</div>
	);
};

export default LeftSidebar;
