import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Redirect, useHistory } from 'react-router-dom';

import Navbar from './Navbar';

const Home = ({ route }) => {
	const history = useHistory();
	if (!localStorage.token) {
		console.log(localStorage.token);
		history.push('/login');
		return null;
	}

	let auth = true;
	console.log(route);
	return (
		<>
			{auth ? (
				<div>
					<Navbar />
					{renderRoutes(route.routes)}
				</div>
			) : (
				<Redirect to='/login' />
			)}
		</>
	);
};

export default Home;
export const Overview = () => {
	return <h1>Overview</h1>;
};
export const Sales = () => {
	return <h1>Sales</h1>;
};
export const Cart = () => {
	return <h1>Cart</h1>;
};
