/* eslint-disable no-mixed-spaces-and-tabs */
import { createTheme } from '@mui/material';
import { green, yellow, grey, red } from '@mui/material/colors';

export const DarkTheme = createTheme({
	
	palette: {
		mode: 'dark',
		primary:{
			main: green[300],
			dark: green[800],
			light: green[200],
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
	},
	components: {
		MuiFab:{
			styleOverrides:{
				root:{
					background: 'white',
					color: green[800],
					'&:hover': {
						background: green[800],
						color: 'white',
					 },
				}
			}
		},
		MuiToolbar:{
			styleOverrides:{
				root:{
					background: grey[200],
					color: green[700]
				}
			}
		},
		MuiIconButton:{
			variants: [
				{
				  props: { color: 'primary' },
				  style: {
						background: grey[200],
						color: green[700],
						'&:hover': {
							background: green[800],
							color: 'white',
						 },
				  },
				},
			]
		},
		MuiDivider:{
			styleOverrides:{
				root:{
					background: 'white'
				}
			}
		},
		MuiListItemButton:{
			styleOverrides:{
				root:{
					'&.Mui-selected': {
						background: green[800],
						color: 'black',
						'&:hover': {
							background: green[800],
							color: 'black',
						},
					  },
					'&:focus': {
						background: green[800],
						color: 'black',
					},
					'&:hover': {
						background: green[800],
						color: 'black',
					},
				}
			}
		},
	}
});

