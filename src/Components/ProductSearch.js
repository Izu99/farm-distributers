/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import axios from "axios";
import "../Styles/Clientable.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import jsPDF from "jspdf";
import 'jspdf-autotable';

import img1 from "../images/dashboard-icon.svg";
import img2 from "../images/farmer-icon.svg";
import img3 from "../images/vender-icon.svg";
import img4 from "../images/products-icon.svg";
import img5 from "../images/clients-icon.svg";

import logo from "../images/navbar-logo.svg";
import Header from "./NavBar";

import Productsearch from "./ProductThrowTable";

export default class Product extends Component {
	constructor(props) {
		super(props);
        this.state = { product: [] };
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
		// alert('email is ' +this.props.match.params.id);
		
            axios.get('http://localhost:4000/product/mysearchorders/'+this.props.match.params.pathParam1)
		
			.then((response) => {
			
				this.setState({ product: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.product.map(function (object, i) {
			return <Productsearch obj={object} key={i} />;
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
        const headers = [["pName", "sLocation","pID", "customers","image"]];
    
        const data = this.state.product.map(elt=> [elt.pName, elt.sLocation,  elt.pID,elt.customers, elt.image]);
    
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
		

			
			<div className="right-side">
			<Header />
			
			
				<br /> <h1 align='center'>Product Management</h1>
				<div className='row-frm'>
		
					<table className='table table-striped' style={{ marginTop: 20 }}>
						<thead>
							<tr>
								<th>Product Name</th>
								<th>Location</th>
								<th>PID</th>
								<th>Customers</th>
								<th>image</th>
								
                               

								<th colSpan='3'>Action</th>
							</tr>
						</thead>
						<tbody>{this.tabRow()}</tbody>
					</table>
					</div>
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
