import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
const NavBar = ({ onLogotHandler }) => {
	return (
		<nav
			className='navbar navbar-expand-lg navbar-light container d-flex'
			style={{ background: '#adb5bd' }}
		>
			<ul className='navbar-nav'>
				<li className='nav-item'>
					<NavLink className='nav-link' to={routes.products}>
						Products
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink className='nav-link' to={routes.cart}>
						Cart & Checkout
					</NavLink>
				</li>
			</ul>
			<li className='nav-link  ml-auto'>
				<button className='btn btn-dark' onClick={() => onLogotHandler()}>
					Logout
				</button>
			</li>
		</nav>
	);
};

export default NavBar;
