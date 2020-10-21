import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
	const history = useHistory();
	const handleLogin = () => {
		localStorage.setItem('tokenConfig', 'token-123');
		history.push('/');
	};

	return (
		<div className='container d-flex justify-content-center align-items-center min-vh-100'>
			<div className='border border-1 p-3 w-50'>
				<div className=' mb-3'>
					<label className='form-label'>Email Address</label>
					<input type='email' className='form-control' />
				</div>
				<div className=' mb-3'>
					<label className='form-label'>Password</label>
					<input type='password' className='form-control' />
				</div>
				<button className='btn btn-primary btn-block' onClick={handleLogin}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Login;
