import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

const rootNode = document.getElementById('root');
ReactDOM.render(
	<BrowserRouter>{renderRoutes(routes)}</BrowserRouter>,
	rootNode
);
