import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
	const history = useHistory();
	const loginHandler = () => {
		localStorage.setItem('token', '12345566');
		history.push('/app');
	};
	return (
		<div className='container'>
			<h1>Login Page</h1>
			<div className='form'>
				<button className='btn btn-primary' onClick={loginHandler}>
					Login
				</button>
			</div>
		</div>
	);
};

export default Login;
