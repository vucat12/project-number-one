import { useHistory, withRouter } from "react-router-dom";
import React, {useEffect, useState} from "react";
import './LogIn.scss';
import { authenServices } from "../../services/authenServices";
import { toast } from 'react-toastify';

function LogIn() {

	const [valueAccount, setValueAccount] = useState({username: '', password: ''});
	const [valueSignUp, setValueSignUp] = useState({username: '', email: '', password: ''});
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
		authenServices.signIn(valueAccount).then(res => {
			history.push('/')
		}).catch(err => {
			toast(err.response.data, {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		})
	}

	const checkSignUp = () => {

		console.log(valueSignUp);

		if(valueSignUp.username === '' || valueSignUp.password === '' || valueSignUp.email === '') {
			toast("Bạn phải nhập đầy đủ thông tin!", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} 
		else {
			authenServices.signUp(valueSignUp).then(res => {
				if(res.status===200) {
					toast("Tạo tài khoản thành công!", {
						position: "top-right",
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
			}).catch(err => {
				toast(err.response.data, {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			})
		}
	}

	function handleNameSignUp(e) {
		setValueSignUp({...valueSignUp, username: e.target.value})
	}

	function handleEmailSignUp(e) {
		setValueSignUp({...valueSignUp, email: e.target.value})
	}

	function handlePasswordSignUp(e) {
		setValueSignUp({...valueSignUp, password: e.target.value})
	}

  return (
    <div className="login-page">
     <h2>Sign in/up Form</h2>
<div className="container" id="container">
	<div className="form-container sign-up-container">
		<form action="javascript:void(0);" >
			<h1>Create Account</h1>
			<span className="pb-4">or use your email for registration</span>
			<input type="text" placeholder="Name" value={valueSignUp.username} onChange={handleNameSignUp}/>
			<input type="email" placeholder="Email" value={valueSignUp.email} onChange={handleEmailSignUp}/>
			<input type="password" placeholder="Password" value={valueSignUp.password} onChange={handlePasswordSignUp}/>
			<button onClick={() => checkSignUp()}>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="javascript:void(0);" >
			<h1>Sign in</h1>
			<span className="pb-4">or use your account</span>
			<input value={valueAccount.username} type="texts" placeholder="Username" onChange={handleChangeUsername}/>
			<input value={valueAccount.password} type="password" placeholder="Password" onChange={handleChangePassword}/>
			<a>Forgot your password?</a>
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

{/* <footer>
	<p>
		Created with <i className="fa fa-heart"></i> by our team
	</p>
</footer> */}


    </div>
  );
}

export default withRouter(LogIn);
