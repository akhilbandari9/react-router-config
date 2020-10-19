import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthState from './context/auth/authState';
import HomeLayout from './layout/HomeLayout';

import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
	return (
		<AuthState>
			<Router>
				<Switch>
					<Route
						exact
						path='/'
						render={() => {
							return (
								<HomeLayout>
									<Home />
								</HomeLayout>
							);
						}}
					/>
					<Route exact path='/login' component={Login} />
					<Route path='*' render={() => <h1>404 Page Not Found</h1>} />
				</Switch>
			</Router>
		</AuthState>
	);
};

export default App;
