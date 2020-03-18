import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../layout/Modal';
import history from '../../history';
import { getHero, deleteHero } from '../../actions/heroes';

class HeroDelete extends Component {
	componentDidMount() {
		this.props.getHero(this.props.match.params.id);
	}

	renderContent() {
		if (!this.props.hero) {
			return 'Tem certeza?';
		}
		return `Tem certeza que deseja deletar ${this.props.hero.nome}`;
	}

	renderActions() {
		const { id } = this.props.match.params;
		return (
			<Fragment>
				<button
					onClick={() => this.props.deleteHero(id)}
					className='ui negative button'>
					Delete
        		</button>
				<Link to='/' className='ui button'>
					Cancel
        		</Link>
			</Fragment>
		);
	}

	render() {
		return (
			<Modal
				title='Deletar Herói'
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={() => history.push('/')}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	hero: state.hero
});

export default connect(
	mapStateToProps,
	{ getHero, deleteHero }
)(HeroDelete);