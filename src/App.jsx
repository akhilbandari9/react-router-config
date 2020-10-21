import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layouts from './components/layouts/Layouts';

const App = () => {
	return (
		<>
			<Router>
				<Layouts />
			</Router>
		</>
	);
};

export default App;
