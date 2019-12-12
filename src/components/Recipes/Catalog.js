import React, { Fragment } from 'react';
import { compose } from 'recompose';
import {
	Typography,
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	IconButton
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Edit, Delete } from '@material-ui/icons';
import { withContext } from '../../context';

const styles = {
	title: {
		textTransform: 'capitalize'
	}
}

const Catalog = ({
	classes,
	recipesByIngredients,
	category,
	onSelect,
	onDelete,
	onSelectEdit
}) => (
	recipesByIngredients.map(
		([ing, recipes]) =>
			(!category || category === ing) && (
				<Fragment key={ing}>
					<Typography
						className={classes.title}
						color='secondary'
						variant='h5'
					>
						{ing}
					</Typography>
					<List component='ul'>
						{recipes.map(({ id, title }) => (
							<ListItem
								key={id}
								button
								onClick={() => onSelect(id)}
							>
								<ListItemText primary={title} />
								<ListItemSecondaryAction>
									<IconButton
										color='primary'
										onClick={() => onSelectEdit(id)}
									>
										<Edit />
									</IconButton>
									<IconButton
										color='primary'
										onClick={() => onDelete(id)}
									>
										<Delete />
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
						))}
					</List>
				</Fragment>
			)
	)
);

export default compose(
	withContext,
	withStyles(styles)
)(Catalog)