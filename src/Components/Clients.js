import React from "react";
import "../Styles/Clients.css";
import img1 from "../images/dashboard-img1.svg";
import img2 from "../images/dashboard-img2.svg";
import Header from "./NavBar";

export default function Clients(props) {
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
		<div className='clientsPage'>
			<Header />
			<h2 className='main-header'>Client Management</h2>
			<button onClick={() => handleClick("addClients")}>
				Add Clients <i class='fa-solid fa-plus'></i>
			</button>
			<table class='table table-striped'>
				{" "}
				<tr className='users'>
					<td className='user'>
						<img
							src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
							alt=''
						/>
						<div className='details'>
							<h2>UserName</h2>
							<button type='submit' onClick={() => handleClick("editClients")}>
								Edit Client
							</button>
						</div>
					</td>
				</tr>
				<tr className='users'>
					<td className='user'>
						<img
							src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
							alt=''
						/>
						<div className='details'>
							<h2>UserName</h2>
							<button type='submit' onClick={() => handleClick("editClients")}>
								Edit Client
							</button>
						</div>
					</td>
				</tr>
				<tr className='users'>
					<td className='user'>
						<img
							src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
							alt=''
						/>
						<div className='details'>
							<h2>UserName</h2>
							<button type='submit' onClick={() => handleClick("editClients")}>
								Edit Client
							</button>
						</div>
					</td>
				</tr>
				<tr className='users'>
					<td className='user'>
						<img
							src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
							alt=''
						/>
						<div className='details'>
							<h2>UserName</h2>
							<button type='submit' onClick={() => handleClick("editClients")}>
								Edit Client
							</button>
						</div>
					</td>
				</tr>
				<tr className='users'>
					<td className='user'>
						<img
							src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
							alt=''
						/>
						<div className='details'>
							<h2>UserName</h2>
							<button type='submit' onClick={() => handleClick("editClients")}>  
								Edit Client
							</button>
						</div>
					</td>
				</tr>
				<tr className='users'>
					<td className='user'>
						<img
							src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
							alt=''
						/>
						<div className='details'>
							<h2>UserName</h2>
							<button type='submit' onClick={() => handleClick("editClient")}>  
								Edit Client
							</button>
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
