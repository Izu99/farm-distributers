import React, { Component } from "react";
import "../Styles/EditFarmer.css";
import draganddroiimage from "../images/drag-and-drop-image.svg";
import Header from "./NavBar";
import axios from "axios";

import img1 from "../images/dashboard-icon.svg";
import img2 from "../images/farmer-icon.svg";
import img3 from "../images/vender-icon.svg";
import img4 from "../images/products-icon.svg";
import img5 from "../images/clients-icon.svg";

import logo from "../images/navbar-logo.svg";

export default class EditFarmer extends Component {
	constructor(props) {
		super(props);
		 this.onChangevName = this.onChangevName.bind(this);
		this.onChangelName = this.onChangelName.bind(this);
		this.onChangedob = this.onChangedob.bind(this);
		this.onChangepNumber = this.onChangepNumber.bind(this);
		this.onChangeuName = this.onChangeuName.bind(this);
		this.onChangepassword = this.onChangepassword.bind(this);
		this.onChangeemail = this.onChangeemail.bind(this);
		this.onChangeimage = this.onChangeimage.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			 vName: "",
			lName: "",
			dob: "",
			pNumber: "",
			uName: "",
			password: "",
			email: "",
			image: "",
		};
	}


	componentDidMount() {
        // alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/farmer/edit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    vName: res.data.vName,
                     lName: res.data.lName,
                    dob: res.data.dob,
                    pNumber: res.data.pNumber,
					email: res.data.email,
					uName: res.data.uName,
					password: res.data.password,
					image: res.data.image,
                   
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

	 onChangevName(e) {
	 	this.setState({
	 		vName: e.target.value,
	 	});
	 }
	onChangelName(e) {
		this.setState({
			lName: e.target.value,
		});
	}
	onChangedob(e) {
		this.setState({
			dob: e.target.value,
		});
	}
	onChangepNumber(e) {
		this.setState({
			pNumber: e.target.value,
		});
	}
	onChangeuName(e) {
		this.setState({
			uName: e.target.value,
		});
	}
	onChangepassword(e) {
		this.setState({
			password: e.target.value,
		});
	}
	onChangeemail(e) {
		this.setState({
			email: e.target.value,
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
			vName: this.state.vName,
			lName: this.state.lName,
			dob: this.state.dob,
			pNumber: this.state.pNumber,
			uName: this.state.uName,
			password: this.state.password,
			email: this.state.email,
			image: this.state.image,
		};

		
		axios.post('http://localhost:4000/farmer/update/'+this.props.match.params.id,obj)
		.then((res) => {
			alert(" Update Successfully");
			this.setState({
				vName: "",
				lName: "",
				dob: "",
				pNumber: "",
				uName: "",
				password: "",
				email: "",
				image: "",
				
			});
		
			console.log(res.data);
		});
		this.props.history.push("/AdminFarmerViewTable");

		window.location.replace("/AdminFarmerViewTable");

		
	}

	render() {
		return (
			<div className='EditFarmerPage'>
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
					<div className='EditClients'>

						<table>
							<h2>Edit Farmer</h2>
							<div className='left'>
								<div className='basic-details'>
									<label for='first-name'>First Name:</label>
									<input
										type='text'
										id='first-name'
										name='first_name'
										required
										value={this.state.vName}
										onChange={this.onChangevName}
									/>
								</div>

								<div className='basic-details'>
									<label for='last-name'>Last Name:</label>
									<input
										type='text'
										id='last-name'
										name='last_name'
										required
										value={this.state.lName}
										onChange={this.onChangelName}
									/>
								</div>
								<div className='basic-details'>
									<label for='dob'>Date of Birth:</label>
									<input
										type='date'
										id='dob'
										name='dob'
										required
										value={this.state.dob}
										onChange={this.onChangedob}
									/>
								</div>

								<div className='basic-details'>
									<label for='phone-number'>Phone Number:</label>
									<input
										type='tel'
										id='phone-number'
										name='phone_number'
										required
										value={this.state.pNumber}
										onChange={this.onChangepNumber}
									/>
								</div>

								<div className='basic-details'>
									<label for='email'>Email:</label>
									<input
										type='email'
										id='email'
										name='email'
										required
										value={this.state.email}
										onChange={this.onChangeemail}
									/>
								</div>

								<div className='basic-details'>
									<label for='username'>Username:</label>
									<input
										type='text'
										id='username'
										name='username'
										required
										value={this.state.uName}
										onChange={this.onChangeuName}
									/>
								</div>

								<div className='basic-details'>
									<label for='password'>Password:</label>
									<input
										type='password'
										id='password'
										name='password'
										required
										value={this.state.password}
										onChange={this.onChangepassword}
									/>
								</div>
							</div>
							<div className='right'>
								<div className='basic-details'>
									<label htmlFor='fileInput'>
										<p>Add Image</p>
										<img src={draganddroiimage} alt='imageicon' />
									</label>
									<input
										type='file'
										id='fileInput'
										value={this.state.image}
										onChange={this.onChangeimage}
									/>
								</div>
							</div>

							<button type='submit'>Save</button>
							</table>
					</div>
				</div>
			</div>
		);
	}
}
