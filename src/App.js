import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import {Main} from './components/';

function App() {
	return (
		<BrowserRouter>
			<Main/>
		</BrowserRouter>
	);
}

export default App;
