import React, { Component } from "react";
import "../Styles/EditVendor.css";
import img1 from "../images/drag-and-drop-image.svg";
// import Header from "./NavBar";
import axios from "axios";

export default class EditVendor extends Component {
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

		// if(this.state.cNumber.length > 4){

		axios.post("http://localhost:4000/farmer/add", obj).then((res) => {
			alert("add Successfully");
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
		this.props.history.push("/");

		window.location.replace("/");

		// }
		// else {
		//     alert('Pleace enter more than 4 digit.');
		// }
	}

	render() {
		return (
			<div className='EditVendorPage'>
				{/* <Header /> */}
				<div className='EditVendor'>
					<form
						onSubmit={this.onSubmit}
						action='submit-farmer.php'
						method='post'
						enctype='multipart/form-data'>
						<h2>Edit Vendor</h2>
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
									<img src={img1} alt='imageicon' />
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
					</form>
				</div>
			</div>
		);
	}
}
