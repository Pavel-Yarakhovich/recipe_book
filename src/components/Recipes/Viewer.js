import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Catalog, Preview } from './';

const styles = theme => ({
	paper: {
		padding: theme.spacing(3),
		overflowY: 'auto',
		boxSizing: 'border-box',
		[theme.breakpoints.up('sm')]: {
			marginTop: 5, 
			height: 'calc(100% - 32px)'
		},
		[theme.breakpoints.down('xs')]: {
			height: '100%'
		}
	},
	'@global' : {
		'html, body, #root': {
			height: '100%'
		}
	},
	container: {
		[theme.breakpoints.up('sm')]: {
			height: 'calc(100% - 64px - 48px)'
		},
		[theme.breakpoints.down('xs')]: {
			height: 'calc(100% - 56px - 48px)'
		}
	},
	item: {
		[theme.breakpoints.down('xs')]: {
			height: '50%'
		}
	}
})

const Viewer = ({ classes }) => {
	return (
		<Grid container className={classes.container}>
			<Grid className={classes.item} item xs={12} sm={6}>
				<Paper className={classes.paper}>
					<Catalog />
				</Paper>
			</Grid>
			<Grid className={classes.item} item xs={12} sm={6}>
				<Paper className={classes.paper}>
					<Preview />
				</Paper>
			</Grid>
		</Grid>
	);
}

export default withStyles(styles)(Viewer);