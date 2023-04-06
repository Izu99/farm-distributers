import logo from "./logo.svg";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import "./App.css";

import Login from "./Components/Login";
import header from "./Components/header";

function App() {
	return (
		<div className='App'>
			<div>
				<Router>
					<Switch>
						<Route exact path='/login' component={Login} />
						<Route path='header' component={header} />
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
