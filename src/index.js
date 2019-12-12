import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { blueGrey, yellow } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: blueGrey,
		secondary: yellow,
		type: 'dark'
	},
	spacing: 10
});

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>, document.getElementById('root'));

