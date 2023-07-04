import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/userSlice';

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

		dispatch(register(userToRegister));
	};
	return (
		<div>
			<form onSubmit={submitForm}>
				<input
					name='name'
					type='text'
					value={userToRegister.name}
					onChange={handleChange}
				/>
				<input
					name='email'
					type='text'
					value={userToRegister.email}
					onChange={handleChange}
				/>
				<input
					name='password'
					type='password'
					value={userToRegister.password}
					onChange={handleChange}
				/>
				<button>Register</button>
				{!response.success && response.message && <p>{response.message}</p>}
			</form>
		</div>
	);
};

export default FormRegister;
