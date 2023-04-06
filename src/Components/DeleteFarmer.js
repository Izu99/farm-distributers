import React from "react";
import '../Styles/DeleteFarmer.css'
import profileImg from '../images/profile-img.png'

function DeleteFarmer() {
	return (
		<div className='DeleteFarmer'>
			<form action=''>
				<div className='top'>
					<img src={profileImg} alt='' />
					<h2>Name</h2>
					<p>Farmer</p>
				</div>
				<div className='bottom'>
					<div className='basic-details'>
						<label htmlFor=''>User Name</label>
						<input type='text' required />
					</div>
                    <div className='basic-details'>
						<label htmlFor=''>First Name</label>
						<input type='text' required />
					</div>
                    <div className='basic-details'>
						<label htmlFor=''>Last Namee</label>
						<input type='text' required />
					</div>
                    <div className='basic-details'>
						<label htmlFor=''>DOB</label>
						<input type='date' required />
					</div>
                    <div className='basic-details'>
						<label htmlFor=''>Mobile Number</label>
						<input type='text' required />
					</div>
                    <div className='basic-details'>
						<label htmlFor=''>Email</label>
						<input type='text' required />
					</div>
				</div>
                <button type="submit">Edit User</button>
                <button type="submit">Delete User</button>
			</form>
		</div>
	);
}

export default DeleteFarmer;
