import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class HeroForm extends Component {
	renderField = ({ input, label, meta: { touched, error } }) => {
		return (
			<div className={`field ${touched && error ? 'error' : ''}`}>
				<label>{label}</label>
				<input {...input} autoComplete='off' />
				{touched && error && (
					<span className='ui pointing red basic label'>{error}</span>
				)}
			</div>
		);
	};

	onSubmit = formValues => {
		this.props.onSubmit(formValues);
	};

	render() {
		const btnText = `${this.props.initialValues ? 'Update' : 'Add'}`;
		return (
			<div className='ui segment'>
				<form
					onSubmit={this.props.handleSubmit(this.onSubmit)}
					className='ui form error'>	
					<label><strong>Nome</strong></label>	
					<Field name='nome' component={this.renderField}/>
					<label><strong>Classe</strong></label>
					<Field name='classe' component="select">
						<option value="S">S</option>
						<option value="A">A</option>
						<option value="B">B</option>
						<option value="C">C</option>
					</Field>
					<br />
					<label><strong>Em missão </strong></label>
					<Field name='alocado' component="input" type="checkbox" />
					<br />					
					<button className='ui primary button'>{btnText}</button>
				</form>
			</div>
		);
	} Field		
}

const validate = formValues => {
	const errors = {};

	if (!formValues.nome) {
		errors.nome = 'Please enter at least 1 character';
	}

	return errors;
};

export default reduxForm({
	form: 'heroForm',
	touchOnBlur: false,
	validate
})(HeroForm);