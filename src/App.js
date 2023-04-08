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
						<Route path='/EditFarmer' component={EditFarmer} />
						<Route path='/EditClients' component={EditClients} />
						<Route path='/EditProducts' component={EditProducts} />
						<Redirect path='/EditVendor' component={EditVendor} />

						

					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
