import React, { useContext } from 'react';
import { AuthContext } from '../context/auth/authState';
import { useHistory } from 'react-router-dom';
import routes from '../routes';
const Login = () => {
	const { onLogin, isAuthenticated } = useContext(AuthContext);
	const history = useHistory();

	const loginHandler = () => {
		console.log(isAuthenticated);
		if (!isAuthenticated) {
			onLogin();
			history.push(routes.home);
		} else {
			return;
		}
	};
	return (
		<div className='container'>
			<div className='form'>
				<button onClick={loginHandler} className='btn btn-primary'>
					Login
				</button>
			</div>
		</div>
	);
};

export default Login;
