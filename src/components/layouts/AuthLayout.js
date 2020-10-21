import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
const AuthLayout = () => {
	return (
		<>
			<Route path='/auth/login' component={Login} exact />
			<Route path='/auth/signup' component={Signup} exact />
			<Redirect from='/auth' to='/auth/login' exact />
		</>
	);
};

export default AuthLayout;
