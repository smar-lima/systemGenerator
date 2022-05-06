import { createTheme } from '@mui/material';
import { green, yellow } from '@mui/material/colors';

export const LightTheme = createTheme({
	palette: {
		primary:{
			main: green[700],
			dark: green[800],
			light: green[500],
			contrastText: '#ffffff',
		},
		secondary:{
			main: yellow[700],
			dark: yellow[800],
			light: yellow[500],
			contrastText: '#ffffff'
		},
		background:{
			paper: '#ffffff',
			default: '#f7f6f3',
		},
	},
	typography:{
		h4:{
			color: green[800],
			fontWeight: 500
		},
		h5:{
			color: green[800],
			fontWeight: 500
		},
		h6:{
			color: green[800],
			fontWeight: 500
		}
	}
});

