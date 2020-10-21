import React from 'react';
import { Link, Switch, Route, useHistory } from 'react-router-dom';
// import Cart from './Cart';
import Products from './Products';
import Services from './Services';
import Other from './Other';

const Index = () => {
	const history = useHistory();
	const logoutHandler = () => {
		history.push('/auth');
	};

	// const { pathname } = useLocation();
	// console.log(location);

	return (
		<div>
			<h1>Dashboard</h1>
			<nav className='container-fluid navbar navbar-light navbar-expand-sm'>
				<u className='navbar-nav mr-auto'>
					<Link to='/app/home/products' className='nav-item nav-link'>
						Products
					</Link>
					<Link to='/app/home/services' className='nav-item nav-link'>
						Services
					</Link>
					<Link to='/app/home/other' className='nav-item nav-link'>
						Other
					</Link>
				</u>
				<button className='btn btn-dark' onClick={logoutHandler}>
					Logout
				</button>
			</nav>
			<div className='container'>
				<Switch>
					<Route path='/app/home/products' component={Products} exact />
					<Route path='/app/home/services' component={Services} exact />
					<Route path='/app/home/other' component={Other} />
					<Products />
				</Switch>
			</div>
		</div>
	);
};

export default Index;
