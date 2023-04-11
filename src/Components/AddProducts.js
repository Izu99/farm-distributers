import React, { Component } from "react";
import "../Styles/AddProducts.css";
import draganddropimage from "../images/drag-and-drop-image.svg";
import Header from "./NavBar";
import axios from "axios";

import "../Styles/LeftSidebar.css";

import img1 from "../images/dashboard-icon.svg";
import img2 from "../images/farmer-icon.svg";
import img3 from "../images/vender-icon.svg";
import img4 from "../images/products-icon.svg";
import img5 from "../images/clients-icon.svg";

import logo from "../images/navbar-logo.svg";

export default class AddProducts extends Component {
	constructor(props) {
		super(props);
		this.onChangepName = this.onChangepName.bind(this);
		this.onChangesLocation = this.onChangesLocation.bind(this);
		this.onChangepID = this.onChangepID.bind(this);
		this.onChangecustomers = this.onChangecustomers.bind(this);
		this.onChangeimage = this.onChangeimage.bind(this);
		

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			pName: "",
			sLocation: "",
			pID: "",
			customers: "",
			image: "",
			
		};
	}
	onChangepName(e) {
		this.setState({
			pName: e.target.value,
		});
	}
	onChangesLocation(e) {
		this.setState({
			sLocation: e.target.value,
		});
	}
	onChangepID(e) {
		this.setState({
			pID: e.target.value,
		});
	}
	onChangecustomers(e) {
		this.setState({
			customers: e.target.value,
		});
	}
	onChangeimage(e) {
		this.setState({
			image: e.target.value,
		});
	}
	

	onSubmit(e) {
		e.preventDefault();
		const obj = {
			pName: this.state.pName,
			sLocation: this.state.sLocation,
			pID: this.state.pID,
			customers: this.state.customers,
			image: this.state.image,
			
			
		};

		// if(this.state.cNumber.length > 4){

		axios
			.post("http://localhost:4000/product/add", obj)
			.then((res) => {
				alert("add Successfully");
				this.setState({
					pName: "",
					sLocation: "",
					pID: "",
					customers: "",
					image: "",
				});
				console.log(res.data);
			});
		this.props.history.push("/");

		window.location.replace("/");

		
	}

	render() {
		return (
			<div className='AddProductsPage'>
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
				<div className="right-side">
				<Header />
				<div className='AddProducts'>
					<form
						onSubmit={this.onSubmit}
						action='submit-Products AddProducts.php'
						method='post'
						enctype='multipart/form-data'>
						<h2>Add New Products</h2>
						<div className='left'>
							<div className='basic-details'>
								<label for='first-name'>Product Name:</label>
								<input
									type='text'
									id='first-name'
									name='first_name'
									required
									value={this.state.pName}
									onChange={this.onChangepName}
								/>
							</div>

							<div className='basic-details'>
								<label for='last-name'>Store Location:</label>
								<input
									type='text'
									id='last-name'
									name='last_name'
									required
									value={this.state.sLocation}
									onChange={this.onChangesLocation}
								/>
							</div>

						

							<div className='basic-details'>
								<label for='productId'>Product Id:</label>
								<input
									type='productId'
									id='productId'
									name='productId'
									required
									value={this.state.pID}
									onChange={this.onChangepID}
								/>
							</div>

							<div className='basic-details'>
								<label for='customer'>Customer:</label>
								<select name="" id="" value={this.state.customers}	onChange={this.onChangecustomers}>
                                    <option value="Name1">Name1</option>
                                    <option value="Name2">Name2</option>
                                </select>
							</div>
						</div>
						<div className='right'>
							<div className='basic-details'>
								<label htmlFor='fileInput'>
									<p>Add Image</p>
									<img src={draganddropimage} alt='imageicon' />
								</label>
								<input
									type='file'
									id='fileInput'
									value={this.state.image}
									onChange={this.onChangeimage}
								/>
							</div>
						</div>

						<button type='submit'>Add Products</button>
					</form>
				</div>
				</div>
			</div>
		);
	}
}
