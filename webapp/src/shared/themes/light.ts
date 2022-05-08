/* eslint-disable no-mixed-spaces-and-tabs */
import { createTheme } from '@mui/material';
import { green, yellow, red } from '@mui/material/colors';

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
	},
	components: {
		MuiFab:{
			styleOverrides:{
				root:{
					background: green[700],
					color: 'white',
					'&:hover': {
						background: 'white',
						color: green[700],
					 },
				}
			}
		},
		MuiIconButton:{
			variants: [
				{
				  props: { color: 'primary' },
				  style: {
						background: green[600],
						color: 'white',
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
					background: green[500]
				}
			}
		},
		MuiListItemButton:{
			styleOverrides:{
				root:{
					'&.Mui-selected': {
						background: green[200],
						color: 'black',
						'&:hover': {
							background: green[200],
							color: 'black',
						},
					  },
					'&:focus': {
						background: green[200],
						color: 'black',
					},
					'&:hover': {
						background: green[200],
						color: 'black',
					},
				}
			}
		},
	}
});

