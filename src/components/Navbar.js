import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
	return (
		<>
			<div className='container-fluid p-1'>
				<nav className='navbar navbar-light bg-light d-flex ml-4 navbar-expand-md'>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/' exact>
								Overview
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/sales' exact>
								Sales
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/cart' exact>
								Cart
							</NavLink>
						</li>
					</ul>
					<button className='btn btn-dark mr-5'>Logout</button>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
