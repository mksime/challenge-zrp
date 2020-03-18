import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHeroes, deleteHero } from '../../actions/heroes';
import { Link } from 'react-router-dom';

class HeroList extends Component {
	componentDidMount() {
		this.props.getHeroes();
	}

	render() {
		return (
			<div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
				{this.props.heroes.map(hero => (
					<div className='item' key={hero.id}>
						<div className='right floated content'>
							<Link
								to={`/delete/${hero.id}`}
								className='small ui negative basic button'
							>
							Delete
              				</Link>
						</div>
						<div className='content'>
							Nome: <Link to={`/edit/${hero.id}`} className='header'>{hero.nome}</Link>
							Classe: <div className='description'>{hero.classe}</div>
							Em missão: <div className='description'>{hero.alocado.toString()}</div>
						</div>
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	heroes: Object.values(state.heroes)
});

export default connect(
	mapStateToProps,
	{ getHeroes, deleteHero }
)(HeroList);