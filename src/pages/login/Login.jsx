import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import './login.scss';

export default function Login() {
	const formRef = useRef();
	const navigate = useNavigate();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onFormSubmit = (data) => {
		console.log(data);
		navigate('/home');
	};
	return (
		<div className="login">
			<div className="top">
				<div className="wrapper">
					<img
						className="logo"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
						alt=""
					/>
				</div>
			</div>
			<div className="container">
				<form onSubmit={handleSubmit(onFormSubmit)} ref={formRef}>
					<h1>Sign In</h1>
					<input
						type="email"
						placeholder="Email or phone number"
						{...register('email', { required: true })}
					/>
					<div className="errors">
						{errors.email?.type === 'required' && '* email is required'}
						{errors.email?.type === 'email' && '*  email should include to meet the mail format '}
					</div>
					<input type="password" placeholder="Password" {...register('password', { required: true, minLength: 5 })} />
					<div className="errors">
						{errors.password?.type === 'required' && '*password is required'}
						{errors.password?.type === 'password' && '*  password should include min 5 symbol '}
					</div>
					<button className="loginButton">Sign In</button>
					<span>
						New to Netflix? <b>Sign up now.</b>
					</span>
					<small>
						This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.
					</small>
				</form>
			</div>
		</div>
	);
}
