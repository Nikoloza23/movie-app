import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Visibility } from '@material-ui/icons';
import './register.scss';

export default function Register() {
	const formRef = useRef();
	const navigate = useNavigate();
	const [state, setState] = useState(false);

	const {
		register,
		/* formState: { errors }, */
		handleSubmit,
	} = useForm();

	const toggleBtn = () => {
		setState((prevState) => !prevState);
	};

	const onFormSubmit = (data) => {
		console.log(data);
		navigate('/login');
	};

	return (
		<div className="register">
			<div className="top">
				<div className="wrapper">
					<img
						className="logo"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
						alt=""
					/>
					<button className="loginButton">Sign In</button>
				</div>
			</div>
			<div className="container">
				<h1>Unlimited movies, TV shows, and more.</h1>
				<h2>Watch anywhere. Cancel anytime.</h2>
				<p>Ready to watch? Enter your email to create or restart your membership.</p>
				<form className="input" onSubmit={handleSubmit(onFormSubmit)} ref={formRef} id="registrer">
					<input type="email" placeholder="email address" {...register('email', { required: true })} />

					<input
						type={state ? 'text' : 'password'}
						placeholder="password"
						{...register('password', { required: true })}
					/>
					<button className="showen" onClick={toggleBtn} type="button">
						<Visibility />
					</button>
					<button className="registerButton" type="submit">
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
}
