import React, { useState } from "react";
import "../Styles/ProfileFarmer.css";
import profileImg from "../images/profile-img.png";
import DeleteConfirmation from "./DeleteConfirmation";
import Header from "./NavBar";

import "../Styles/LeftSidebar.css";

import img1 from "../images/dashboard-icon.svg";
import img2 from "../images/farmer-icon.svg";
import img3 from "../images/vender-icon.svg";
import img4 from "../images/products-icon.svg";
import img5 from "../images/clients-icon.svg";

import logo from "../images/navbar-logo.svg";

function ProfileFarmer() {
	const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

	const handleDeleteClick = () => {
		setShowDeleteConfirmation(true);
	};

	const handleCancelDelete = () => {
		setShowDeleteConfirmation(false);
	};

	const handleConfirmDelete = () => {
		// handle delete logic here
		setShowDeleteConfirmation(false);
	};

	return (
		<div className='ProfileFarmer'>
			<div className='left-sidebar'>
				<img src={logo} alt='' className='header-logo' />
				<a href='/dashboard'>
					<div className='icon dashboard'>
						<img src={img1} alt='icon1' />
						<div className='text'>Dashboard</div>
					</div>
				</a>
				<a href='/farmer'>
					<div className='icon farmer'>
						<img src={img2} alt='icon2' />
						<div className='text'>Farmer</div>
					</div>
				</a>
				<a href='/vendor'>
					<div className='icon vendor'>
						<img src={img3} alt='icon3' />
						<div className='text'>Vendor</div>
					</div>
				</a>
				<a href='/product'>
					<div className='icon products'>
						<img src={img4} alt='icon4' />
						<div className='text'>Products</div>
					</div>
				</a>
				<a href='/clients'>
					<div className='icon clients'>
						<img src={img5} alt='icon5' />
						<div className='text'>Clients</div>
					</div>
				</a>
			</div>
			<div className='right-side'>
				<Header />
				<table>
					<div className='top'>
						<tr>
							<td>
								<img src={profileImg} alt='' />
								<h2>Name</h2>
								<p>Farmer</p>
							</td>
						</tr>
					</div>

					<div className='bottom'>
						<tr>
							<td>
								<div className='basic-details'>
									<label htmlFor=''>User Name</label>
									<input type='text' required />
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div className='basic-details'>
									<label htmlFor=''>First Name</label>
									<input type='text' required />
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div className='basic-details'>
									<label htmlFor=''>Last Name</label>
									<input type='text' required />
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div className='basic-details'>
									<label htmlFor=''>DOB</label>
									<input type='date' required />
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div className='basic-details'>
									<label htmlFor=''>Mobile Number</label>
									<input type='text' required />
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div className='basic-details'>
									<label htmlFor=''>Email</label>
									<input type='text' required />
								</div>
							</td>
						</tr>
						<tr className='buttons'>
							<td>
								<button type='submit'>Edit User</button>
							</td>
							<td>
								<button type='submit' onClick={handleDeleteClick}>
									Delete User
								</button>
							</td>
							{showDeleteConfirmation && (
								<DeleteConfirmation
									onCancel={handleCancelDelete}
									onConfirm={handleConfirmDelete}
								/>
							)}
						</tr>
					</div>
				</table>
			</div>
		</div>
	);
}

export default ProfileFarmer;
