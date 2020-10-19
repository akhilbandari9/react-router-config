import NavBar from './NavBar';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/auth/authState';
import routes from '../routes';
const HomeLayout = (props) => {
	const { onLogout, isAuthenticated } = useContext(AuthContext);
	const history = useHistory();

	if (!isAuthenticated && !localStorage.token) {
		history.push(routes.login);
		return null;
	}

	const onLogotHandler = () => {
		history.push(routes.login);
		onLogout();
	};
	return (
		<div>
			<NavBar onLogotHandler={onLogotHandler} />
			<div>{props.children}</div>
		</div>
	);
};

export default HomeLayout;
