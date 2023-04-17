/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import axios from "axios";
import "../Styles/Clientable.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

import VendorThowTable from "./VendorThowTable";

export default class Vendor extends Component {
	constructor(props) {
		super(props);
		this.state = { vendor: [], search: "" };
		this.state.Station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
		// alert('email is ' +this.props.match.params.id);
		axios
			.get("http://localhost:4000/vender/getall")
			.then((response) => {
			
				this.setState({ vendor: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.vendor.map(function (object, i) {
			return <VendorThowTable obj={object} key={i} />;
		});
		
	}

	render() {
		return (
			<div className='adminVehicleProfile'>
			
				<br /> <h3 align='center'>Vendor Management</h3>
				<div className='row-frm'>
				{/* <button><Link to={"/roomregister"} className="btn btn-success">Add Room</Link></button> */}
					<table className='table table-striped' style={{ marginTop: 20 }}>
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>DOB</th>
								<th>Mobile Number</th>
								<th>User Name</th>
								<th>Password</th>
								<th>Email Address</th>
								<th>Image</th>
                               

								<th colSpan='3'>Action</th>
							</tr>
						</thead>
						<tbody>{this.tabRow()}</tbody>
					</table>
				</div>
				<br />
				<br />
				<div>
					<hr className='shadow-lg card-footer' />
				</div>
				{/* <Footer /> */}
			</div>
		);
	}
}
