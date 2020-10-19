import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const Products = () => {
	return (
		<div>
			<div className='Sidebar navbar navbar-dark'>
				<ul className='navbar-nav'>
					<li className='navbar-item'>
						<NavLink className='navbar-item' to={routes.products}>
							Products
						</NavLink>
					</li>
					<li className='navbar-item'>
						<NavLink className='navbar-item' to={routes.services}>
							Services
						</NavLink>
					</li>
					<li className='navbar-item'>
						<NavLink className='navbar-item' to={routes.other}>
							Other
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Products;
