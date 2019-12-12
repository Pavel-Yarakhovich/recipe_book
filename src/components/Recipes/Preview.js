import React from 'react';
import { Typography } from '@material-ui/core';
import { withContext } from '../../context';
import { Form } from './';

const Preview = ({
	ingredients,
	editMode,
	recipe,
	recipe: {id, title, description},
	onEdit
}) => (
	<>
		<Typography
			gutterBottom
			variant='h4'
			color='secondary'
		>
			{title || 'Welcome!'}
		</Typography>
		{editMode ? (
			<Form
				key={id}
				recipe={recipe}
				ingredients={ingredients}
				onSubmit={onEdit}
			/>
		) : (
			<Typography variant='subtitle1'>
				{description || 'Please select a recipe from the list on the left...'}
			</Typography>
		)}
	</>
);

export default withContext(Preview);