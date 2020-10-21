import App from './App';
import Login from './components/Login';
import Home, { Overview, Cart, Sales } from './components/Home';
import About from './components/About';
// import AuthLayout from './components/AuthLayouts/AuthLayout';

export default [
	{
		component: App,
		path: '/',
		exact: false,
		routes: [
			{
				component: About,
				path: '/about',
				exact: true,
			},
			{
				component: Login,
				path: '/login',
				exact: true,
			},
			{
				component: Home,
				path: '/',
				exact: false,
				routes: [
					{
						component: Overview,
						path: '/',
						exact: true,
					},
					{
						component: Cart,
						path: '/cart',
						exact: true,
					},
					{
						component: Sales,
						path: '/sales',
						exact: true,
					},
				],
			},
		],
	},
];
