import React, { createContext } from 'react';

export const RecipesContext = createContext();

export const { Provider, Consumer } = RecipesContext;

export const withContext = Component => props => (
	<Consumer>
		{value => 
			<Component {...value} {...props} />
		}
	</Consumer>
);