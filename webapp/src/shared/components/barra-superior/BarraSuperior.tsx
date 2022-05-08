
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import {MenuSimples} from '../menu-simples/menuSimples';
import { Grid } from '@mui/material';
import { green } from '@mui/material/colors';


const drawerWidth = 240;

export const BarraSuperior = (props: { open: boolean | undefined,  handleDrawerOpen: any;}) => {

	interface AppBarProps extends MuiAppBarProps {
		open?: boolean;
	}
	
	const AppBar = styled(MuiAppBar, {
		shouldForwardProp: (prop) => prop !== 'open',
	})<AppBarProps>(({ theme, open }) => ({
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		...(open && {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: `${drawerWidth}px`,
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
		}),
	}));

	return (
		<AppBar position="fixed" open={props.open} >
			<Toolbar>
				<Grid container direction="row">
					<Grid item xs>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={props.handleDrawerOpen}
							edge="start"
							sx={{ mr: 2, ...(props.open && { display: 'none' }) }}
						>
							<MenuIcon />
						</IconButton>
					</Grid>
					<Grid item xs >
						
					</Grid >
					<Grid container item xs justifyContent='flex-end'>
						<MenuSimples/>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};