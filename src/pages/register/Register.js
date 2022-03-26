import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import './register.css';
import 'react-toastify/dist/ReactToastify.css';
import {  Visibility, VisibilityOff } from '@material-ui/icons';

toast.configure();
function Register() {
	const formRef = useRef();
	const navigate = useNavigate();
	const [state, setState] = useState(false);

	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm({});

	const onFormSubmit = (data) => {
		console.log(data);

		navigate('/login');
	};

	const toggleBtn = () => {
		setState((prevState) => !prevState);
	};

	const notify = () => {
		if (isValid) {
			toast('Well Done');
		} else {
			toast.error('Upss');
		}
	};

	return (
		<form className="form" onSubmit={handleSubmit(onFormSubmit)} ref={formRef} id="registrer">
			<div className="logo">
				SIGN IN
 			</div>
			<div className="container">
				<h1 className="sign">Sign Up</h1>
				<label htmlFor="first_name">
					<b>First Name</b>
				</label>
				<input
					className={errors.first_name ? 'input#first_name invalidInput' : 'input#first_name'}
					type="text"
					name="fname"
					id="first_name"
					placeholder="First Name"
					{...register('first_name', { required: true, minLength: 2 })}
				/>
				<div className="errors">
					{errors.first_name?.type === 'required' && '* first name is required'}
					{errors.first_name?.type === 'minLength' && '*min 2 symbol'}
				</div>
				<label htmlFor="last_name">
					<b>Last Name</b>
				</label>
				<input
					className={errors.last_name ? 'input#lname invalidInput' : 'input#lname'}
					type="text"
					name="lname"
					id="lname"
					placeholder="Last Name"
					{...register('last_name', { required: true })}
				/>
				<div className="errors">
					{errors.last_name?.type === 'required' && '* last name is required'}
					{errors.last_name?.type === 'minLength' && '* last name should include 3 or more characters'}
				</div>
				<label htmlFor="email">
					<b>Email</b>
				</label>
				<input
					className={errors.email ? 'input#email invalidInput' : 'input#email'}
					type="email"
					id="email"
					name="email"
					placeholder="E Mail"
					{...register('email', { required: true })}
				/>
				<div className="errors">
					{errors.email?.type === 'required' && '* email is required'}
					{errors.email?.type === 'email' && '*  email should include to meet the mail format '}
				</div>
				<label htmlFor="password">
					<b>Password</b>
				</label>
				<input
					className={errors.password ? 'input#password invalidInput' : 'input#password'}
					type={state ? 'text' : 'password'}
					placeholder="Password"
					{...register('password', { required: true, minLength: 6 })}
				/>
				<button className="showen" onClick={toggleBtn} type="button">
					<Visibility/>
				</button>
				<div className="errors">
					{errors.password?.type === 'required' && '* password name is required'}
					{errors.password?.type === 'minLength' && '* password  should include 5 or more characters'}
				</div>
				<label htmlFor="phone">
					<b>Phone</b>
				</label>
				<input
					className={errors.phone ? 'phone_name invalidInput' : 'phone_name'}
					type="tel"
					name="phone"
					id="phone"
					placeholder="+995 5__ _ _ __"
					{...register('phone', { required: true, pattern: /^\+[0-9]{3}[0-9]{9}/g })}
				/>
				<div className="errors">
					{errors.phone?.type === 'required' && '* mobileNumber is required'}
					{errors.phone?.type === 'pattern' && '* mobileNumber is include Geo format'}
				</div>
				<div className="clearfix">
					<button onClick={notify} >
						Sign Up
					</button>
				</div>
			</div>
		</form>
	);
}

export default Register;
