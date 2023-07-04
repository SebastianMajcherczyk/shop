import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/userSlice';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './FormRegister.css';

const FormRegister = () => {
	const [userToRegister, setUserToRegister] = useState({
		name: '',
		email: '',
		password: '',
	});
	const dispatch = useDispatch();
	const response = useSelector(state => state.user.response);
	console.log(response);

	const handleChange = e => {
		const { name, value } = e.target;
		setUserToRegister({ ...userToRegister, [name]: value });
	};

	const submitForm = e => {
		e.preventDefault();

		dispatch(register(formik.values));
	};

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			validationSchema: yup.object().shape({
				name: yup.string().required('Name is required'),
				email: yup
					.string()
					.email('Please enter a valid email')
					.required('Email is required'),
				password: yup
					.string()
					.min(5, 'Password must be at least 5 characters')
					.required('Password is required'),
			}),
		},
	});
	return (
		<div>
			<form onSubmit={submitForm} className='form'>
				<div>
					<label htmlFor='name'>Name</label>
					<input
						id='name'
						name='name'
						type='text'
						value={formik.values.name}
						onChange={formik.handleChange}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						name='email'
						type='text'
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						name='password'
						type='password'
						value={formik.password}
						onChange={formik.values.handleChange}
					/>
				</div>
				<button>Register</button>
				{!response.success && response.message && <p>{response.message}</p>}
			</form>
		</div>
	);
};

export default FormRegister;
