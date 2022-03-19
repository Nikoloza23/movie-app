import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './registrer.css';

function Registrer() {
	const formRef = useRef();
	const navigate = useNavigate();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onFormSubmit = (data) => {
		console.log(data);

		navigate('/loading');
	};

	return (
		<form className="form" onSubmit={handleSubmit(onFormSubmit)} ref={formRef} id="registrer">
			<div className="container">
				<h1>Sign Up</h1>
				<label for="first_name">
					<b>First Name</b>
				</label>
				<input
					type="text"
					name="fname"
					id="first_name"
					placeholder="First Name"
					{...register('first_name', { required: true, minLength: 2 })}
				/>
				<div className="errors">
					{errors?.first_name?.type === 'required' && '* first name is required'}
					{errors.first_name?.type === 'minLength' && '*min 2 symbol'}
				</div>
				<label for="last_name">
					<b>Last Name</b>
				</label>
				<input
					type="text"
					name="lname"
					id="last_name"
					placeholder="Last Name"
					{...register('last_name', { required: true })}
				/>
				<div className="errors">
					{errors.last_name?.type === 'required' && '* last name is required'}
					{errors.last_name?.type === 'minLength' && '* last name should include 3 or more characters'}
				</div>
				<label for="email">
					<b>Email</b>
				</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					{...register('email', { required: true })}
				/>
				<div className="errors">
					{errors.email?.type === 'required' && '* email is required'}
					{errors.email?.type === 'email' && '*  email should include to meet the mail format '}
				</div>
				<label for="phone">
					<b>Phone</b>
				</label>
				<input
					type="tel"
					name="phone"
					id="phone"
					className="phone_name"
					placeholder="+995 5__ __ __ __"
					{...register('phone', { required: true, pattern: /^\+[0-9]{3}[0-9]{9}/g })}
				/>
				<div className="errors">
					{errors.phone?.type === 'required' && '* mobileNumber is required'}
					{errors.phone?.type === 'pattern' && '* mobileNumber is include Geo format'}
				</div>
				<div className="clearfix">
					<button type="submit" className="btn" formRef={formRef}>
						Sign Up
					</button>
				</div>
			</div>
		</form>
	);
}

export default Registrer;
