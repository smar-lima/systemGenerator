import { createTheme } from '@mui/material';
import { green, yellow } from '@mui/material/colors';

export const DarkTheme = createTheme({
	
	palette: {
		mode: 'dark',
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
			contrastText: '#ffffff',
		},
		background:{
			paper: '#303134',
			default: '#202124',
		},
		text: {
			primary: '#ffffff',
			secondary: '#ffffff',
			disabled: '#ffffff',
		},
		
	},
	typography:{
		allVariants:{
			color: 'white'
		},
		h4:{
			color: 'white',
			fontWeight: 500
		},
		h5:{
			color: 'white',
			fontWeight: 500
		},
		h6:{
			color: 'white',
			fontWeight: 500
		}
	}

	
});

