import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHero } from '../../actions/heroes';
import HeroForm from './HeroForm';

class HeroCreate extends Component {
	onSubmit = formValues => {
		this.props.addHero(formValues);
	};

	render() {
		return (
			<div style={{ marginTop: '2rem' }}>
				<HeroForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(
	null,
	{ addHero }
)(HeroCreate);