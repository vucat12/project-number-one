import { useHistory, withRouter } from "react-router-dom";
import React, {useEffect, useState} from "react";
import './LogIn.scss';
import { authenServices } from "../../services/authenServices";

function LogIn() {

	const [valueAccount, setValueAccount] = useState({username: '2222', password: ''});
	const history = useHistory();

	useEffect(() => {
		const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container = document.getElementById('container');
		signUpButton?.addEventListener('click', () => {
			container.classList.add("right-panel-active");
		});
		
		signInButton?.addEventListener('click', () => {
			container.classList.remove("right-panel-active");
		});
	});

	function handleChangeUsername(e) {
		setValueAccount({...valueAccount, username: e.target.value})
	}

	function handleChangePassword(e) {
		setValueAccount({...valueAccount, password: e.target.value})
	}

	const checkSignIn = () => {
		console.log(valueAccount)
		authenServices.signIn(valueAccount).then(res => history.push('/'))
	}

  return (
    <div className="login-page">
     <h2>Sign in/up Form</h2>
<div className="container" id="container">
	<div className="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<span className="pb-4">or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<span className="pb-4">or use your account</span>
			<input value={valueAccount.username} type="email" placeholder="Email" onChange={handleChangeUsername}/>
			<input value={valueAccount.password} type="password" placeholder="Password" onChange={handleChangePassword}/>
			<a href="#">Forgot your password?</a>
			<button onClick={() => checkSignIn()}>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn">Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>

<footer>
	<p>
		Created with <i className="fa fa-heart"></i> by our team
	</p>
</footer>


    </div>
  );
}

export default withRouter(LogIn);
