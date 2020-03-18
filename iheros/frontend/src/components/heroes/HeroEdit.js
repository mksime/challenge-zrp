import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHero, editHero } from '../../actions/heroes';
import HeroForm from './HeroForm';

class HeroEdit extends Component {
	componentDidMount() {
		this.props.getHero(this.props.match.params.id);
	}

	onSubmit = formValues => {
		this.props.editHero(this.props.match.params.id, formValues);
	};

	render() {
		return (
			<div className='ui container'>
				<h2 style={{ marginTop: '2rem' }}>Editar Herói</h2>
				<HeroForm
					initialValues={_.pick(this.props.hero, 'nome', 'classe', 'alocado')}
					enableReinitialize={true}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	hero: state.heroes[ownProps.match.params.id]
});

export default connect(
	mapStateToProps,
	{ getHero, editHero }
)(HeroEdit);