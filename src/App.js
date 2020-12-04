import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import {Main} from './components/';
import "./sass/index.scss";
import {connect} from "react-redux"

function App() {
	return (
		<BrowserRouter>
			<Main/>
		</BrowserRouter>
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(App);
