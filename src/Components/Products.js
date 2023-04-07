import React from "react";
import "../Styles/Products.css";
import img1 from "../images/dashboard-img1.svg";
import img2 from "../images/dashboard-img2.svg";
import Header from "./NavBar";

export default function Products(props) {
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
		<div className='productsPage'>
			<Header />
			<h2 className='main-header'>Products Management</h2>
			<button onClick={() => handleClick("addProducts")}>
				Add Products <i class='fa-solid fa-plus'></i>
			</button>
			<table class='table table-striped'>
				{" "}
				<tr className='users'>
					<td className='user'>
						<img
							src='https://img2.exportersindia.com/product_images/bc-full/dir_166/4955835/rice-seed-1493958856-2964814.jpeg'
							alt=''
						/>
						<div className='details'>
							<h2>ProductName</h2>
						</div>
					</td>
					<td className='user'>
						<img
							src='https://image.gezondheid.be/XTRA/123m-kurakkana-20-9.jpg'
							alt=''
						/>
						<div className='details'>
							<h2>ProductName</h2>
						</div>
					</td>
					<td className='user'>
						<img
							src='https://cook-shop.fr/20670/salad-seeds.jpg'
							alt=''
						/>
						<div className='details'>
							<h2>ProductName</h2>
						</div>
					</td>
				
				
					<td className='user'>
						<img
							src='https://2.bp.blogspot.com/-uTwQrzChSLw/VcRPVpoVAZI/AAAAAAAABP0/8zEePBOxf3s/s1600/CAM00386.jpg'
							alt=''
						/>
						<div className='details'>
							<h2>ProductName</h2>
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
