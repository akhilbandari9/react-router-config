import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Dashboard from '../dashboard';
import About from '../../pages/About';
import PrivateRoute from '../../router/PrivateRoute';
const AppLayout = () => {
	return (
		<div>
			<PrivateRoute path='/app/home' component={Dashboard} />
			<Route path='/app/about' component={About} exact />
			<Redirect from='/' to='/app/home' />
		</div>
	);
};

export default AppLayout;
