import React, { Component } from 'react';
import HeroList from './HeroList';
import HeroCreate from './HeroCreate';

class Dashboard extends Component {
	render() {
		return (
			<div className='ui container'>
				<HeroCreate /> 
				<HeroList />
			</div>
		);
	}
}

export default Dashboard;