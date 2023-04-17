import logo from "./logo.svg";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import "./App.css";

import Login from "./Components/Login";
import Header from "./Components/NavBar";
import LeftSidebar from "./Components/LeftSidebar";
import ProfileFarmer from "./Components/ProfileFarmer";
import AddFarmer from "./Components/AddFarmer";
import ProfileVendor from "./Components/ProfileVendor";
import ProfileClients from "./Components/ProfileClients";
import ProfileProducts from "./Components/ProfileProducts";
import EditFarmer from "./Components/EditFarmer";
import EditClients from "./Components/EditClients";
import EditProducts from "./Components/EditProducts";
import EditVendor from "./Components/EditVendor";
import Dashboard from "./Components/Dashboard";
import Farmer from "./Components/Farmer";
import Vendor from "./Components/Vendor";
import Products from "./Components/Products";
import Clients from "./Components/Clients";
import AddVendor from "./Components/AddVendor";
import AddProducts from "./Components/AddProducts";
import AddClients from "./Components/AddClients";
import AdminClientViewTable from "./Components/AdminClientViewTable";
import AdminFarmerViewTable from "./Components/AdminFarmerViewTable";
import AdminProductsViewTable from "./Components/AdminProductsViewTable";
import AdminVendorViewTable from "./Components/AdminVendorViewTable";


function App() {
	return (
		<div className='App'>
			<div>
				<Router>
					<Switch>
						<Route exact path='/' component={Login} />
						<Route path='/header' component={Header} />
						<Route exact path='/LeftSidebar' component={LeftSidebar} />
						<Route exact path='/Login' component={Login} />
						<Route exact path='/AddFarmer' component={AddFarmer} />
						<Route path='/ProfileFarmer' component={ProfileFarmer} />
						<Route path='/ProfileVendor' component={ProfileVendor} />
						<Route path='/ProfileClients' component={ProfileClients} />
						<Route path='/ProfileProducts' component={ProfileProducts} />
						<Route path='/EditFarmer/:id' component={EditFarmer} />
						<Route path='/EditClients/:id' component={EditClients} />
						<Route path='/EditProducts/:id' component={EditProducts} />
						<Route path='/EditVendor/:id' component={EditVendor} />
						<Route path='/dashboard' component={Dashboard} />
						<Route path='/farmer' component={Farmer} />
						<Route path='/vendor' component={Vendor} />
						<Route path='/product' component={Products} />
						<Route path='/clients' component={Clients} />
						<Route path='/addfarmer' component={AddFarmer} />
						<Route path='/addvendor' component={AddVendor} />
						<Route path='/addproducts' component={AddProducts} />
						<Route path='/addclients' component={AddClients} />
						<Route path='/AdminClientViewTable' component={AdminClientViewTable} />
						<Route path='/AdminFarmerViewTable' component={AdminFarmerViewTable} />
						<Route path='/AdminProductsViewTable' component={AdminProductsViewTable} />
						<Route path='/AdminVendorViewTable' component={AdminVendorViewTable} />

						<Redirect path='/404' component={Login} />
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
