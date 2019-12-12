import React, { Component } from 'react';
import {
	Fab,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle } from '@material-ui/core';

import { Add } from '@material-ui/icons';
import { Form } from './';
import { RecipesContext } from '../../context';

class CreateDialog extends Component {
	static contextType = RecipesContext;

	state = {
		open: false
	}

	handleToggle = () => {
		this.setState({
			open: !this.state.open
		})
	}

	handleFormSubmit = recipe => {
		this.handleToggle();

		this.context.onCreate(recipe);
	}

	render() {
		const { open } = this.state;
		const { ingredients } = this.context;
				
		return (
			<>
				<Fab
					size='small'
					onClick={this.handleToggle}
					color='secondary'
				>
					<Add />
				</Fab>

				<Dialog
					open={open}
					onClose={this.handleToggle}
					fullWidth
					maxWidth='xs'
				>
					<DialogTitle>
						Create a New Recipe
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Please enter a new recipe description
						</DialogContentText>
						<Form
							ingredients={ingredients}
							onSubmit={this.handleFormSubmit}
						/>
					</DialogContent>
				</Dialog>
			</>
		);
	}
}

export default CreateDialog;