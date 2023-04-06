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
import DeleteFarmer from "./Components/DeleteFarmer";
import AddFarmer from "./Components/AddFarmer";

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

					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
