/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import axios from "axios";
import "../Styles/Clientable.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import jsPDF from "jspdf";
import 'jspdf-autotable';

import FarmerThrowTable from "./FarmerThrowTable";

export default class Farmer extends Component {
	constructor(props) {
		super(props);
		this.state = { farmer: [], search: "" };
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
			.get("http://localhost:4000/farmer/getall")
			.then((response) => {
			
				this.setState({ farmer: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.farmer.map(function (object, i) {
			return <FarmerThrowTable obj={object} key={i} />;
		});
		
	}

	exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
		const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "My All Repaire Report";
        const headers = [["Clientname", "lName","dob", "pNumber","uName", "password", "email", "image"]];
    
        const data = this.state.farmer.map(elt=> [elt.vName, elt.lName,  elt.dob,elt.pNumber, elt.uName, elt.password, elt.email, elt.image]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
      }

	render() {
		return (
			<div className='adminVehicleProfile'>
			
				<br /> <h3 align='center'>farmers Management</h3>
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
