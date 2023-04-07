import React, { Component } from "react";
import "../Styles/EditProducts.css";
import img1 from "../images/drag-and-drop-image.svg";
// import Header from "./NavBar";
import axios from "axios";

export default class EditProducts extends Component {
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

		axios.post("http://localhost:4000/Products/add", obj).then((res) => {
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
			<div className='EditProductsPage'>
				{/* <Header /> */}
				<div className='EditProducts'>
					<form
						onSubmit={this.onSubmit}
						action='submit-Products.php'
						method='post'
						enctype='multipart/form-data'>
						<h2>Edit Products</h2>
						<div className='left'>
							<div className='basic-details'>
								<label for='first-name'>Product Name</label>
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
								<label for='last-name'>Store Location</label>
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
								<label for='username'>Username </label>
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
								<label for='customers'>Customers</label>
							<select name="" id="">
								<option value="Name1">Name1</option>
								<option value="Name2">Name2</option>
							</select>
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
