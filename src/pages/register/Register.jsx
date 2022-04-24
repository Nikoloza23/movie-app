import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SoundBar from '../../components/soundbar/SoundBar';

import { toast } from 'react-toastify';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { ADD_FORM } from '../../redux/action';
import { validate } from '../../redux/selectors';

import './register.css';
import 'react-toastify/dist/ReactToastify.css';

//registration form
toast.configure();
const Register = () => {
	const [state, setState] = useState(false);
	const [showen, setShowen] = useState(false);

	const formRef = useRef();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const validateSelectors = useSelector(validate);

	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		watch,
	} = useForm({
		mode: 'onChange',
	});

	const onFormSubmit = (data) => {
		dispatch(ADD_FORM(data));

		console.log(data);
		navigate('/thank');
	};

	const toggleBtn = () => {
		setState((prevState) => !prevState);
	};

	const showenBtn = () => {
		setShowen((prevState) => !prevState);
	};

	const password = watch('password');

	const notify = () => {
		if (isValid) {
			toast('Well Done');
		} else {
			toast.error('Upss');
		}
	};

	return (
		<form className="form" onSubmit={handleSubmit(onFormSubmit)} ref={formRef} id="registrer">
			<SoundBar />
			<div className="container_form">
				<h1 className="sign">Sign Up</h1>
				<label htmlFor="first_name">
					<b>First Name</b>
				</label>
				<input
					className={errors.first_name ? 'input#first_name invalidInput' : 'input#first_name'}
					defaultValue={validateSelectors?.first_name}
					type="text"
					name="fname"
					id="first_name"
					placeholder="First Name"
					{...register('first_name', { required: true, minLength: 4 })}
				/>
				<div className="errors">
					{errors.first_name?.type === 'required' && '* first name is required'}
					{errors.first_name?.type === 'minLength' && '*min 4 symbol'}
				</div>
				<label htmlFor="last_name">
					<b>Last Name</b>
				</label>
				<input
					className={errors.last_name ? 'input#lname invalidInput' : 'input#lname'}
					defaultValue={validateSelectors?.last_name}
					type="text"
					name="lname"
					id="lname"
					placeholder="Last Name"
					{...register('last_name', { required: true, minLength: 4 })}
				/>
				<div className="errors">
					{errors.last_name?.type === 'required' && '* last name is required'}
					{errors.last_name?.type === 'minLength' && '* last name should include 4  or more characters'}
				</div>
				<label htmlFor="email">
					<b>Email</b>
				</label>
				<input
					className={errors.email ? 'input#email invalidInput' : 'input#email'}
					defaultValue={validateSelectors?.email}
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
					defaultValue={validateSelectors?.password}
					type={state ? 'text' : 'password'}
					placeholder="Password"
					{...register('password', { required: true, minLength: 6 })}
				/>
				<button className="showen" onClick={toggleBtn} type="button">
					{state ? <Visibility /> : <VisibilityOff />}
				</button>
				<div className="errors">
					{errors.password?.type === 'required' && '* password name is required'}
					{errors.password?.type === 'minLength' && '* password  should include 5 or more characters'}
				</div>
				<label htmlFor="confrimPassword">
					<b>Confrim Password</b>
				</label>
				<input
					type={showen ? 'text' : 'password'}
					defaultValue={validateSelectors?.confrimPassword}
					placeholder="Confrim Password"
					className={errors.confrimPassword ? 'input#confrimPassword invalidInput ' : 'input#confrimPassword'}
					{...register('confrimPassword', {
						required: true,
						validate: (value) => value === password || 'The passwords do not match',
					})}
				/>
				<button className="showen" onClick={showenBtn} type="button">
					{showen ? <Visibility /> : <VisibilityOff />}
				</button>
				<div className="errors">
					{errors.confrimPassword?.type === 'required' && '* confrimPassword  is required'}
					{errors.confrimPassword?.type === 'validate' && '* confrimPassword  do not match password'}
				</div>

				<label htmlFor="phone">
					<b className="phone_b">Phone</b>
				</label>
				<input type="tel" placeholder="Enter phone Number" />

				<div className="clearfix">
					<button className="sign_up" onClick={notify}>
						Sign Up
					</button>
					<Link to="/">
						<div className="submited">Without Regitration</div>
					</Link>
				</div>
			</div>
		</form>
	);
};

export default Register;
