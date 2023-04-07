import React, { useState } from "react";
import "../Styles/ProfileProducts.css";
import profileImg from "../images/profile-img.png";
import DeleteConfirmation from "./DeleteConfirmation";

function ProfileProducts() {
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
		<div className='ProfileProducts'>
			<form action=''>
				<div className='top'>
					<img src={profileImg} alt='' />
					<h2>Name</h2>
					<p>Products</p>
				</div>
				<div className='bottom'>
					<div className='basic-details'>
						<label htmlFor=''>Product Name</label>
						<input type='text' required />
					</div>
					<div className='basic-details'>
						<label htmlFor=''>Current Stock</label>
						<input type='text' required />
					</div>
					<div className='basic-details'>
						<label htmlFor=''>Store Location</label>
						<input type='text' required />
					</div>

					<div className='basic-details'>
						<label htmlFor=''>Customers</label>
						<input type='text' required />
					</div>
				</div>
				<button type='submit'>Edit Product</button>
				<button type='submit' onClick={handleDeleteClick}>
					Delete Product
				</button>
				{showDeleteConfirmation && (
					<DeleteConfirmation
						onCancel={handleCancelDelete}
						onConfirm={handleConfirmDelete}
					/>
				)}
			</form>
		</div>
	);
}

export default ProfileProducts;
