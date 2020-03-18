import _ from 'lodash';
import { GET_HEROES, GET_HERO, ADD_HERO, DELETE_HERO, EDIT_HERO } from '../actions/types';

export default (state = {hero:{"nome": 'a', "classe": "S", "alocado": false}}, action) => {
	switch (action.type) {
		case GET_HEROES:
			return {
				...state,
				..._.mapKeys(action.payload, 'id')
			};
		case GET_HERO:
		case ADD_HERO:
		case EDIT_HERO:
			return {
				...state,
				[action.payload.id]: action.payload
			};
		case DELETE_HERO:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};