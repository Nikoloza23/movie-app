import { useRef } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './registrer.css';
import 'react-toastify/dist/ReactToastify.css';

import { ADD_FORM } from '../../redux/action';
import { validate } from '../../redux/selectors';

toast.configure();
function Registrer() {
	const formRef = useRef();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const validateSelectors = useSelector(validate);

	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm();

	const onFormSubmit = (data) => {
		dispatch(ADD_FORM(data));

		navigate('/main');
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
			<div className="container">
				<h1>Sign Up</h1>
				<label htmlFor="first_name">
					<b>First Name</b>
				</label>
				<input
					defaultValue={validateSelectors?.first_name}
					className={errors.first_name ? 'input invalidInput' : 'input'}
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
					defaultValue={validateSelectors?.last_name}
					className={errors.last_name ? 'input invalidInput' : 'input'}
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
				<label htmlFor="email">
					<b>Email</b>
				</label>
				<input
					className={errors.email ? 'input invalidInput' : 'input'}
					defaultValue={validateSelectors?.email}
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
				<label htmlFor="phone">
					<b>Phone</b>
				</label>
				<input
					className={errors.phone ? 'phone_name invalidInput' : 'phone_name'}
					defaultValue={validateSelectors?.phone}
					type="tel"
					name="phone"
					id="phone"
					placeholder="+995 5__ __ __ __"
					{...register('phone', { required: true, pattern: /^\+[0-9]{3}[0-9]{9}/g })}
				/>
				<div className="errors">
					{errors.phone?.type === 'required' && '* mobileNumber is required'}
					{errors.phone?.type === 'pattern' && '* mobileNumber is include Geo format'}
				</div>
				<div className="clearfix">
					<button onClick={notify} className="btn">
						Sign Up
					</button>
				</div>
			</div>
		</form>
	);
}

export default Registrer;
