import React from "react";
import "../Styles/Vendor.css";
import img1 from "../images/dashboard-img1.svg";
import img2 from "../images/dashboard-img2.svg";
import Header from "./NavBar";

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
			<Header />
			<h2 className='main-header'>Vendor Management</h2>
			<button onClick={() => handleClick("addVendor")}>
				Add Vendor <i class='fa-solid fa-plus'></i>
			</button>
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
