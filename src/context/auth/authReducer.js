import { LOGIN, LOGOUT } from '../types';
export default (state, action) => {
	switch (action.type) {
		case LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				isAuthenticated: false,
				token: null,
			};
		case LOGIN:
			localStorage.setItem('token', action.payload);
			return {
				...state,
				isAuthenticated: true,
				token: action.payload,
			};

		default:
			return state;
	}
};
