import React, { Component } from "react";
import "../Styles/EditProducts.css";
import draganddropimage from "../images/drag-and-drop-image.svg";
import Header from "./NavBar";
import axios from "axios";

import logo from "../images/navbar-logo.svg";

import "../Styles/LeftSidebar.css";

import img1 from "../images/dashboard-icon.svg";
import img2 from "../images/farmer-icon.svg";
import img3 from "../images/vender-icon.svg";
import img4 from "../images/products-icon.svg";
import img5 from "../images/clients-icon.svg";

export default class EditProducts extends Component {
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


	
	componentDidMount() {
        // alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/product/edit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    pName: res.data.pName,
                    sLocation: res.data.sLocation,
                    pID: res.data.pID,
                    customers: res.data.customers,
					image: res.data.image,
				
                   
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
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

		axios.post('http://localhost:4000/Products/update/'+this.props.match.params.id,obj)
		.then((res) => {
			alert(" Update Successfully");
			this.setState({
				pName: "",
				sLocation: "",
				pID: "",
				customers: "",
				image: "",
			});
			console.log(res.data);
		});
		this.props.history.push("/AdminProductsViewTable");

		window.location.replace("/AdminProductsViewTable");

		// }
		// else {
		//     alert('Pleace enter more than 4 digit.');
		// }
	}

	render() {
		return (
			<div className='EditProductsPage'>
				<div className='left-sidebar'>
					<img src={logo} alt='' className='header-logo' />
					<a href='/dashboard'>
						<div className='icon dashboard'>
							<img src={img1} alt='icon1' />
							<div className='text'>Dashboard</div>
						</div>
					</a>
					<a href='/AdminFarmerViewTable'>
						<div className='icon farmer'>
							<img src={img2} alt='icon2' />
							<div className='text'>Farmer</div>
						</div>
					</a>
					<a href='/AdminVendorViewTable'>
						<div className='icon vendor'>
							<img src={img3} alt='icon3' />
							<div className='text'>Vendor</div>
						</div>
					</a>
					<a href='/AdminProductsViewTable'>
						<div className='icon products'>
							<img src={img4} alt='icon4' />
							<div className='text'>Products</div>
						</div>
					</a>
					<a href='/AdminClientViewTable'>
						<div className='icon clients'>
							<img src={img5} alt='icon5' />
							<div className='text'>Clients</div>
						</div>
					</a>
				</div>
				<div className='right-side'>
					<Header />

					<div className='EditProducts'>
						<table>
							<h2>Edit Products</h2>
							<tr className='left'>
								<td>
									<div className='basic-details'>
										<label for='first-name'>Product Name</label>
										<input
											type='text'
											id='first-name'
											name='first_name'
											required
											value={this.state.pName}
											onChange={this.onChangepName}
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className='basic-details'>
										<label for='last-name'>Store Location</label>
										<input
											type='text'
											id='last-name'
											name='last_name'
											required
											value={this.state.sLocation}
											onChange={this.onChangesLocation}
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className='basic-details'>
										<label for='username'>PID </label>
										<input
											type='text'
											id='username'
											name='username'
											required
											value={this.state.pID}
											onChange={this.onChangepID
											}
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className='basic-details'>
										<label for='customers'>Customers</label>
										<select name='' id='' value={this.state.customers}
											onChange={this.onChangecustomers}>
											<option value="">Select Name</option>
											<option value='Name1'>Name1</option>
											<option value='Name2'>Name2</option>
										</select>
									</div>
								</td>
							</tr>
							<tr>
								<td>
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
								</td>
							</tr>
							<tr>
								<td>
									<button type='submit'>Save</button>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		);
	}
}
