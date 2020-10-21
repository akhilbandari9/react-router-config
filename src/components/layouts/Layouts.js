import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import AppLayout from './AppLayout';
import PrivateRoute from '../../router/PrivateRoute';
const Layouts = () => {
	return (
		<Switch>
			<Route path='/auth' component={AuthLayout} />
			<PrivateRoute path='/app' component={AppLayout} />
			<Redirect from='/' to='/auth' />
			<Route path='*' render={() => <h1>404 Not Found</h1>} />
		</Switch>
	);
};

export default Layouts;
