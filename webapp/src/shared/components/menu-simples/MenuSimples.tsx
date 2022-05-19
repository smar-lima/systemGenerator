import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import {useAppThemeContext} from '../../contexts/themeContext';
import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';

export const MenuSimples: React.FC = () => {
	const { toggleTheme } = useAppThemeContext();
	const { themeName } = useAppThemeContext();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton
				color="inherit"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				aria-label="open drawer"
				onClick={handleClick}
				sx={{ mr: 2 }}
			>
				<SettingsIcon />
			</IconButton>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleClose}>Perfil</MenuItem>
				<MenuItem onClick={toggleTheme}>
					{themeName === 'light' ?'Modo Dark ':'Modo Light '} <div style={{marginTop: '5px', marginLeft: '5px'}}>{themeName === 'light' ? <DarkMode /> : <LightMode />}</div>
				</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</div>
	);
};