/* eslint-disable no-mixed-spaces-and-tabs */
import { createTheme } from '@mui/material';
import { green, grey} from '@mui/material/colors';

export const DarkTheme = createTheme({
	
	palette: {
		mode: 'dark',
		primary:{
			main: grey[300],
			dark: grey[700],
			light: grey[200],
			contrastText: green[800],
		},
		secondary:{
			main: grey[700],
			dark: grey[800],
			light: grey[500],
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
			fontWeight: 700
		},
		h5:{
			color: 'white',
			fontWeight: 700
		},
		h6:{
			color: 'white',
			fontWeight: 700
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
					color: green[700],
					'&.MuiTablePagination-toolbar':{
						background: grey[800],
						color: 'white'
					},
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
					fontWeight: 300,
					color: grey[600],
					'&.Mui-selected': {
						background: green[300],
						color: 'black',
						'&:hover': {
							background: green[400],
							color: 'black',
						},
					  },
					'&:focus': {
						background: green[300],
						color: 'black',
					},
					'&:hover': {
						background: green[400],
						color: 'black',
					},
				}
			}
		},
	}
});
