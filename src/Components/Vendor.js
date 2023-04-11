import React from "react";
import "../Styles/Vendor.css";
// import img1 from "../images/dashboard-img1.svg";
// import img2 from "../images/dashboard-img2.svg";
import Header from "./NavBar";

import "../Styles/LeftSidebar.css";

import img1 from "../images/dashboard-icon.svg";
import img2 from "../images/farmer-icon.svg";
import img3 from "../images/vender-icon.svg";
import img4 from "../images/products-icon.svg";
import img5 from "../images/clients-icon.svg";

import logo from "../images/navbar-logo.svg";

export default function Vendor(props) {
	const handleClick = props.handleClick;

	//   const [post, setPost] = useState({
	//     location: "",
	//     description: "",
	//     hashtag: "",
	//   });

	//   const { id } = useParams();

	//   useEffect(() => {
	//     loadPost();
	//   }, []);

	//   const loadPost = async () => {
	//     const result = await axios.get(`http://localhost:8080/post/${id}`);
	//     setPost(result.data);
	//   };

	return (
		<div className='vendorPage'>
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
				<h2 className='main-header'>Vendor Management</h2>
				<a href='/addvendor' className="addvendor">
					Add Vendor <i class='fa-solid fa-plus'></i>
				</a>
				<table class='table table-striped'>
					{" "}
					<tr className='users'>
						<td className='user'>
							<img
								src='https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg'
								alt=''
							/>
							<div className='details'>
								<h2>UserName</h2>
							</div>
						</td>
						<td className='user'>
							<img
								src='https://i.pinimg.com/originals/ad/15/5b/ad155b4cfd5b6d220c3e5b51b349a37a.jpg'
								alt=''
							/>
							<div className='details'>
								<h2>UserName</h2>
							</div>
						</td>
						<td className='user'>
							<img
								src='https://i.pinimg.com/originals/99/95/2e/99952ea2370ed39f38520bf5715201a7.png'
								alt=''
							/>
							<div className='details'>
								<h2>UserName</h2>
							</div>
						</td>

						<td className='user'>
							<img
								src='https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg'
								alt=''
							/>
							<div className='details'>
								<h2>UserName</h2>
							</div>
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
}

// import axios from "axios";
// import React, { useEffect,useState } from "react";
// import { Link, useParams } from "react-router-dom";

// export default function ViewPost() {
//   const [post, setPost] = useState({
//     location: "",
//     description: "",
//     hashtag: "",
//   });

//   const { id } = useParams();

//   useEffect(() => {
//     loadPost();
//   }, []);

//   const loadPost = async () => {
//     const result = await axios.get(`http://localhost:8080/post/${id}`);
//     setPost(result.data);
//   };

//   return (
//     <table class="table table-striped">
//   <tr>
//     <tr style="font-weight:bold;">Hotel nam</tr>
//     <tr>{post.location}</tr>
//   </tr>
//   <tr>
//     <tr style="font-weight:bold;">Address</tr>
//     <tr>   {post.description}</tr>
//   </tr>
//   <tr>
//     <tr style="font-weight:bold;">Phone Nu</tr>
//     <tr>{post.hashtag}</tr>
//   </tr>

//   <tr class="profile-actions">
//     <tr><button><a href={"/edit/"+this.props.obj._id}>Edit</a></button></tr>
//     <tr><button onclick={this.delete}>Delete Account</button></tr>
//   </tr>
// </table>

//   );
// }
