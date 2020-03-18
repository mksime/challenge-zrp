import React, { Component } from "react";
import { render } from "react-dom";

import Dashboard from './heroes/Dashboard';
import { Provider } from 'react-redux';
import store from '../store';

import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import HeroDelete from "./heroes/HeroDelete";
import Header from "./layout/Header";

import HeroEdit from './heroes/HeroEdit';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Header />
				<Router history={history}>
					<Switch>
						<Route exact path='/' component={Dashboard} />
						<Route exact path='/delete/:id' component={HeroDelete} />
						<Route exact path='/edit/:id' component={HeroEdit} />
					</Switch>
				</Router>
			</Provider>
		);
	}
}

export default App;

const container = document.getElementById("app");
render(<App />, container);

