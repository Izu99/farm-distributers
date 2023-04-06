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

function App() {
	return (
		<div className='App'>
			<div>
				<Router>
					<Switch>
						<Route exact path='/login' component={Login} />
						<Route path='/Header' component={Header} />
						<Route path='/LeftSidebar' component={LeftSidebar} />
						<Route path='/deletefarmer' component={DeleteFarmer} />
						<Redirect to='login' component={Login} />
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
