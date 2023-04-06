import React from "react";
import "../Styles/Login.css";
import logo from "../images/main-logo.png";

function Login() {
	return (
		<div className='loginPage'>
			<div className='leftSide'>
				<img src={logo} alt='logo' className='logo' srcset='' />
				<h2>Ponniyin Selvan</h2>
				<p>Distributers</p>
			</div>
			<div className='rightSide'>
			<form action="" >
      <h2>Login</h2>
          <p>User Name</p>
          <input type="text" />
          <p>Password</p>
          <input type="password" />
          <br />
          <button type="submit">Sign in</button>
      </form>
			</div>
		</div>
	);
}

export default Login;
