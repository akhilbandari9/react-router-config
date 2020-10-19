import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from '../components/Products';
import Cart from '../components/Cart';

import routes from '../routes';

const Home = () => {
	return (
		<div>
			<h1>Home </h1>
			<div className='main-components'>
				<Switch>
					<Route exact path={routes.products} component={Products} />
					<Route path={routes.cart} component={Cart} />
				</Switch>
			</div>
		</div>
	);
};

export default Home;
