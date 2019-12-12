import React, { Component } from 'react';
import { compose } from 'recompose';
import { withWidth, AppBar, Tabs, Tab } from '@material-ui/core';
import { withContext } from '../../context';

class Footer extends Component {
	ingredients = this.getIngredients();

	getIngredients () {
		return ['', ...this.props.ingredients]
	}

	onIndexSelect = (e, index) => {
		this.props.onCategorySelect(this.ingredients[index])
	}

	getIndex = () => {
		return this.ingredients.indexOf(this.props.category)
	}

	render () {
		const { width } = this.props;
		const isMobile = width === 'xs';

		return (
			<AppBar position='static'>
				<Tabs
					value={this.getIndex()}
					onChange={this.onIndexSelect}
					indicatorColor="secondary"
					textColor="secondary"
					centered={!isMobile}
					variant={isMobile ? 'scrollable' : 'fullWidth'}
				>
					{this.ingredients.map(ing => 
						<Tab key={ing} label={ing || 'All'} />
					)}
				</Tabs>
			</AppBar>
		);
	}
}

export default compose(
	withContext,
	withWidth()
)(Footer)