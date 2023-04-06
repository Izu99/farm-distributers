import React from "react";
import "../Styles/AddFarmer.css";
import img1 from "../images/drag and drop image.svg";
import Header from "./NavBar";

function AddFarmer() {
	return (
		<div className='AddFarmerPage'>
			
			<Header />
			<div className='AddFarmer'>
				<form
					action='submit-farmer.php'
					method='post'
					enctype='multipart/form-data'>
					<h2>Add New Farmer</h2>
					<div className='left'>
						<div className='basic-details'>
							<label for='first-name'>First Name:</label>
							<input type='text' id='first-name' name='first_name' required />
						</div>

						<div className='basic-details'>
							<label for='last-name'>Last Name:</label>
							<input type='text' id='last-name' name='last_name' required />
						</div>
						<div className='basic-details'>
							<label for='dob'>Date of Birth:</label>
							<input type='date' id='dob' name='dob' required />
						</div>

						<div className='basic-details'>
							<label for='phone-number'>Phone Number:</label>
							<input
								type='tel'
								id='phone-number'
								name='phone_number'
								required
							/>
						</div>

						<div className='basic-details'>
							<label for='email'>Email:</label>
							<input type='email' id='email' name='email' required />
						</div>

						<div className='basic-details'>
							<label for='username'>Username:</label>
							<input type='text' id='username' name='username' required />
						</div>

						<div className='basic-details'>
							<label for='password'>Password:</label>
							<input type='password' id='password' name='password' required />
						</div>
					</div>
					<div className='right'>
						<div className='basic-details'>
							<label htmlFor='fileInput'>
								<img src={img1} alt='imageicon' />
							</label>
							<input type='file' id='fileInput' />
						</div>
					</div>

					<input type='submit' value='Add Farmer' />
				</form>
			</div>
		</div>
	);
}

export default AddFarmer;
