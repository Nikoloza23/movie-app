import { useRef } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './registred.css';

function Registered() {
	const formRef = useRef();
	const navigate = useNavigate();

	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm();

	const onFormSubmit = (data) => {
		console.log(data);

		navigate('/absds');
	};

	const notify = () => {
		if (isValid) {
			toast('Well Done');
		} else {
			toast.error('Upss');
		}
	};

	return (
		<form onSubmit={handleSubmit(onFormSubmit)} ref={formRef} id="registrered">
			<div className="container">
				<h1 className="signin">Sign In</h1>
				<label htmlFor="first_name">
					<b>Email</b>
				</label>
				<input
					className={errors.email ? 'input invalidInput' : 'input'}
					type="text"
					name="email"
					id="email"
					placeholder="Email"
					{...register('email', { required: true, minLength: 2 })}
				/>
				<div className="errors">
					{errors.email?.type === 'required' && '* first name is required'}
					{errors.email?.type === 'minLength' && '*min 2 symbol'}
				</div>
				<label htmlFor="last_name">
					<b>Password</b>
				</label>
				<input
					className={errors.last_name ? 'input invalidInput' : 'input'}
					type="password"
					id="pass"
					name="password"
					placeholder="Password"
					{...register('last_name', { required: true, minLength: 4 })}
				/>
				<div className="errors">
					{errors.last_name?.type === 'required' && '* last name is required'}
					{errors.last_name?.type === 'minLength' && '* last name should include 3 or more characters'}
				</div>
				<div className="clearfix">
					<button onClick={notify} className="btn">
						Sign In
					</button>
				</div>
			</div>
		</form>
	);
}

export default Registered;
