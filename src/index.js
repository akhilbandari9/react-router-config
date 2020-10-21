import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './App.css';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

// // import './styles.css';

// const Home = () => <p>Home</p>;
// const Dashboard = () => <p>Dashboard</p>;

// function AppLayout() {
// 	return (
// 		<div>
// 			<h1>App Layout</h1>
// 			<Route path='/app/home' exact component={Home} />
// 			<Route path='/app/dashboard' exact component={Dashboard} />
// 			<Redirect from='/app' to='/app/home' exact />
// 			<Route />
// 		</div>
// 	);
// }

// const Signup = () => <p>Login</p>;
// const Login = () => <p>Sign up</p>;

// function AuthLayout() {
// 	return (
// 		<div>
// 			<h1>Auth Layout</h1>
// 			<Route path='/auth/signup' exact component={Signup} />
// 			<Route path='/auth/login' exact component={Login} />
// 			<Redirect from='/auth' to='/auth/login' exact />
// 			<Route />
// 		</div>
// 	);
// }

// const NotFound = () => <h1>Not Found</h1>;

// function Layouts() {
// 	return (
// 		<Switch>
// 			<Route path='/auth' component={AuthLayout} />
// 			<Route path='/app' component={AppLayout} />
// 			<Route path='/' component={NotFound} />
// 		</Switch>
// 	);
// }

// function App() {
// 	return (
// 		<BrowserRouter>
// 			<Layouts />
// 		</BrowserRouter>
// 	);
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
