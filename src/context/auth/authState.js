import { LOGIN, LOGOUT } from '../types';

import authReducer from './authReducer';
import React, { useReducer, createContext } from 'react';
export const AuthContext = createContext();

const AuthState = (props) => {
	const initialState = {
		isAuthenticated: null,
		token: null,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	const onLogin = () => {
		console.log('fetched token and dispatched');
		dispatch({
			type: LOGIN,
			payload: '%%%%%%login-token%%%%%%%',
		});
	};
	const onLogout = () => {
		console.log('logged Out');
		dispatch({
			type: LOGOUT,
		});
	};

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				onLogin,
				onLogout,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
export default AuthState;
