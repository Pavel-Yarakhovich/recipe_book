import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import  CreateDialog from '../Recipes/CreateDialog';

const styles = {
	flex: {
		flex: 1
	}
};

const Header = ({ classes }) => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography 
					variant="h5" 
					color='inherit'
					className={classes.flex}
				>
					Choose a recipe and try to cook it!
				</Typography>

				<CreateDialog />
			</Toolbar>
		</AppBar>
	);
};

export default withStyles(styles)(Header);