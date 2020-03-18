import axios from 'axios';
import { reset } from 'redux-form';
import { GET_HEROES, GET_HERO, ADD_HERO, DELETE_HERO, EDIT_HERO } from './types';
import history from '../history';

export const getHeroes = () => async dispatch => {
	const res = await axios.get('/api/heroes/');
	dispatch({
		type: GET_HEROES,
		payload: res.data
	});
};

export const getHero = id => async dispatch => {
	const res = await axios.get(`/api/heroes/${id}/`);
	dispatch({
		type: GET_HERO,
		payload: res.data
	});
};

export const addHero = formValues => async dispatch => {
	const res = await axios.post('/api/heroes/', { ...formValues });
	dispatch({
		type: ADD_HERO,
		payload: res.data
	});
	dispatch(reset('heroForm'));
};

export const deleteHero = id => async dispatch => {
	await axios.delete(`/api/heroes/${id}/`);
	dispatch({
		type: DELETE_HERO,
		payload: id
	});
	history.push('/')
};

export const editHero = (id, formValues) => async dispatch => {
	const res = await axios.patch(`/api/heroes/${id}/`, formValues);
	dispatch({
		type: EDIT_HERO,
		payload: res.data
	});
	history.push('/');
};