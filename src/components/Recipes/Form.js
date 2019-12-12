import React, { Component } from 'react';
import {
	TextField,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
	Button } from '@material-ui/core';


class Form extends Component {
	state = this.getInitialState();

	getInitialState() {
		const { recipe } = this.props;

		return recipe || {
			title: '',
			description: '',
			ingredients: ''
		}
	}

	handleChange = ({ target: { value, name } }) =>
		this.setState({
			[name]: value
		})

	handleSubmit = () =>
		this.props.onSubmit({
			id: this.state.title.toLowerCase().replace(/ /g, '-'),
			...this.state
		});

	render() {
		const { recipe, ingredients: categories } = this.props;
		const { title, description, ingredients } = this.state;

		return (
			<form>
				<TextField
					label="Title"
					name='title'
					margin='normal'
					onChange={this.handleChange}
					value={title}
					fullWidth
				/>
				<FormControl fullWidth margin='normal'>
					<InputLabel htmlFor="ingredients">
						Ingredients
					</InputLabel>
					<Select
						value={ingredients}
						name='ingredients'
						onChange={this.handleChange}
					>
						{categories.map(category => (
							<MenuItem key={category} value={category}>
								{category}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<TextField
					label='Description'
					name='description'
					margin='normal'
					onChange={this.handleChange}
					value={description}
					multiline
					rows='3'
					fullWidth
				/>
				<Button 
					color='primary'
					variant='contained'
					onClick={this.handleSubmit}
					disabled={!title || !ingredients}
				>
					{recipe ? 'Edit' : 'Create'}
				</Button>
			</form>
		)
	}
}

export default Form;