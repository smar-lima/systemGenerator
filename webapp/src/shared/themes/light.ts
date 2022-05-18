/* eslint-disable no-mixed-spaces-and-tabs */
import { createTheme } from '@mui/material';
import { green, grey } from '@mui/material/colors';

export const LightTheme = createTheme({
	palette: {
		primary:{
			main: green[700],
			dark: green[800],
			light: green[300],
			contrastText: '#ffffff',
		},
		secondary:{
			main: grey[700],
			dark: grey[800],
			light: grey[200],
			contrastText: '#ffffff'
		},
		background:{
			paper: '#ffffff',
			default: '#f7f6f3',
		},
	},
	typography:{
		h4:{
			color: green[700],
			fontWeight: 700
		},
		h5:{
			color: green[700],
			fontWeight: 700
		},
		h6:{
			color: green[700],
			fontWeight: 700
		},
	},
	components: {
		MuiFab:{
			styleOverrides:{
				root:{
					background: green[700],
					color: grey[100],
					'&:hover': {
						background: grey[100],
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
						color: grey[100],
						'&:hover': {
							background: green[800],
							color: grey[100],
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
					fontWeight: 300,
					color: grey[600],
					'&.Mui-selected': {
						fontWeight: 200,
						background: green[100],
						'&:hover': {
							background: green[200],
							color: grey[600]
						},
					  },
					'&:focus': {
						fontWeight: 200,
						background: green[100],
						color: grey[600]
					},
					'&:hover': {
						fontWeight: 200,
						background: green[200],
						color: grey[600]
					},
				}
			}
		},
		MuiPaper:{
			styleOverrides:{
				root:{
					'&.MuiDialog-paper': {
						border: '3px',
						borderStyle: 'solid',
						borderColor: green[700]
					}
				}
			}
		},
		MuiFormControl:{
			styleOverrides:{
				root:{
					minWidth: '100%'
				}
			}
		}
	}
});