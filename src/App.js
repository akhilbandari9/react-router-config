import React from 'react';
import './App.css';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => {
	return <>{renderRoutes(route.routes)}</>;
};

export default App;
