
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import heroes from './heroes';

export default combineReducers({
	form: formReducer,
	heroes
});