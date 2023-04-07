import React from "react";
import "../Styles/Farmer.css";
import img1 from "../images/dashboard-img1.svg";
import img2 from "../images/dashboard-img2.svg";

function Farmer(props) {
	const handleClick = props.handleClick;

	return (
		<div className='farmerPage'>
			<h2 className='main-header'>User Management</h2>
			<button onClick={() => handleClick("addFarmer")}>
				Add Farmer <i class='fa-solid fa-plus'></i>
			</button>
			<div className='users'>
				<div className='user'>
					<img
						src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
						alt=''
					/>
					<div className='details'>
						<h2>UserName</h2>
						<p>Farmer</p>
					</div>
				</div>
				<div className='user'>
					<img
						src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
						alt=''
					/>
					<div className='details'>
						<h2>UserName</h2>
						<p>Farmer</p>
					</div>
				</div>
				<div className='user'>
					<img
						src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
						alt=''
					/>
					<div className='details'>
						<h2>UserName</h2>
						<p>Farmer</p>
					</div>
				</div>
				<div className='user'>
					<img
						src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
						alt=''
					/>
					<div className='details'>
						<h2>UserName</h2>
						<p>Farmer</p>
					</div>
				</div>
				<div className='user'>
					<img
						src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
						alt=''
					/>
					<div className='details'>
						<h2>UserName</h2>
						<p>Farmer</p>
					</div>
				</div>
				<div className='user'>
					<img
						src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
						alt=''
					/>
					<div className='details'>
						<h2>UserName</h2>
						<p>Farmer</p>
					</div>
				</div>
				<div className='user'>
					<img
						src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
						alt=''
					/>
					<div className='details'>
						<h2>UserName</h2>
						<p>Farmer</p>
					</div>
				</div>
				<div className='user'>
					<img
						src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
						alt=''
					/>
					<div className='details'>
						<h2>UserName</h2>
						<p>Farmer</p>
					</div>
				</div>
				<div className='user'>
					<img
						src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
						alt=''
					/>
					<div className='details'>
						<h2>UserName</h2>
						<p>Farmer</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Farmer;
