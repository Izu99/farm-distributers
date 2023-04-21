import  React, {Component} from 'react';
import "../Styles/Login.css";
import logo from "../images/main-logo.png";
import axios from 'axios';

export default  class Login extends  Component{

	
	constructor(props) {
		super(props);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	
		this.state = {
			email:'',
			password:''
		}
	}
	onChangeEmail(e){
		this.setState( {
			email: e.target.value
		});
	}
	onChangePassword(e){
		this.setState( {
			password: e.target.value
		});
	}
	
	onSubmit(e){
		e.preventDefault();
	
	
		const Email = this.state.email;
		let object = {
			email : this.state.email,
			password : this.state.password
		};
	
		if ((this.state.email === "admin@gmail.com") && (this.state.password === "admin123")) {
		   //  const Station = "Hotel";
			 this.props.history.push('/dashboard/'+Email);
	
		}
		else  {
			axios.post('http://localhost:4000/farmer/login',object)
				.then(res => {
					if(res.data.message === "Successful Login"){
						// alert(res.data.message)
						// alert(Email)
						this.props.history.push('/AddFarmer/'+Email);
					  // this.props.history.push('/');
					}
					else{
						// alert(res.data.message)
						this.props.history.push('/login');
					}
	
				});

				axios.post('http://localhost:4000/vender/login',object)
				.then(res => {
					if(res.data.message === "Successful Login"){
						// alert(res.data.message)
						// alert(Email)
						this.props.history.push('/Login/'+Email);
					  // this.props.history.push('/');
					}
					else{
						// alert(res.data.message)
						this.props.history.push('/login');
					}
	
				});


				axios.post('http://localhost:4000/client/login',object)
				.then(res => {
					if(res.data.message === "Successful Login"){
						// alert(res.data.message)
						// alert(Email)
						this.props.history.push('/Login/'+Email);
					  // this.props.history.push('/');
					}
					else{
						// alert(res.data.message)
						this.props.history.push('/login');
					}
	
				});

				axios.post('http://localhost:4000/product/login',object)
				.then(res => {
					if(res.data.message === "Successful Login"){
						// alert(res.data.message)
						// alert(Email)
						this.props.history.push('/Login/'+Email);
					  // this.props.history.push('/');
					}
					else{
						// alert(res.data.message)
						this.props.history.push('/login');
					}
	
				});


		}

	
		
		
	
	}
	
	  render() {

	return (
		<div className='loginPage'>
			<div className='leftSide'>
				<img src={logo} alt='logo' className='logo' srcset='' />
				<h2>Ponniyin Selvan</h2>
				<p>Distributers</p>
			</div>
			<div className='rightSide'>
			<form onSubmit={this.onSubmit} >
      <h2>Login</h2>
          <p>User Name</p>
          <input type="text" required value={this.state.email} onChange = {this.onChangeEmail}/>
          <p>Password</p>
          <input type="password" required value={this.state.password} onChange = {this.onChangePassword} />
          <br />
          <button type="submit">Sign in</button>
      </form>
			</div>
		</div>
	);
}
}


