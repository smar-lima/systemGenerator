/* eslint-disable prefer-const */
/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from 'react';
import { Autocomplete, Avatar, Collapse, Drawer, Fab, ListItem, ListItemButton, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {BarraSuperior} from '../barra-superior/barraSuperior';
import {useAppThemeContext, useDrawerContext} from '../../contexts';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import  {MenuList}  from '../../../menu';
import { SvgIconComponent } from '@mui/icons-material';
import React from 'react';
import { getTelasDoMenuRapido } from '../menu-rapido/menuRapidoHelper';
import { GlobalHotKeys } from 'react-hotkeys';
import { grey, green, lightGreen } from '@mui/material/colors';
import VoltarIcon from '@mui/icons-material/ArrowBack';

const drawerWidth = 240;

interface IListItemLinkProps {
	label: string;
	Icone: SvgIconComponent ;
	to: string;
	onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({to, Icone, label, onClick}) => {

	const navigate = useNavigate();

	const resolvedPath = useResolvedPath(to);
	const match = useMatch({path: resolvedPath.pathname, end: false});

	const handleClick = () => {
		navigate(to);
		onClick?.();
	};

	return (
		<ListItemButton selected={!!match} key={label} onClick={handleClick}>
			<ListItemIcon>
				<Icone/>
			</ListItemIcon>
			<ListItemText>
				<Typography whiteSpace={'nowrap'} textOverflow={'ellipsis'} overflow={'hidden'}>
					{label}
				</Typography>
			</ListItemText>
		</ListItemButton>
	);
};



export const MenuLateral: React.FC<{ children: any }> = ({ children }) => {
	
	const [estado, setEstado] = useState<any>({});
	const [menuSelecionado, setMenuSelecionado] = useState<any>({});
	const [menuPaiSelecionado, setMenuPaiSelecionado] = useState<any>({});

	const theme = useTheme();
	
	const { themeName } = useAppThemeContext();

	const smDown = useMediaQuery(theme.breakpoints.down('md'));

	const { isDrawerOpen, toogleDrawerOpen, drawerOptions, setDrawerOptions} = useDrawerContext();

	const navigate = useNavigate();

	let hotKeysKeyMap = {
		MENU_RAPIDO: 'ctrl+m',
	};

	let menuRapidoRef: any = React.createRef();
	
	let telasDoMenuRapido = getTelasDoMenuRapido(drawerOptions);

	const [telaAtual] = useState(undefined);

	const acessarMenuRapido = async () => {
		await toogleDrawerOpen();
		await menuRapidoRef.current?.focus();
	};

	let hotKeyshandlers = {
		MENU_RAPIDO: acessarMenuRapido
	};

	useEffect(() => {
		setDrawerOptions(MenuList);
		if (isDrawerOpen) {
			menuRapidoRef.current?.focus();
		}
	},[isDrawerOpen]);

	const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
		open?: boolean;
	}>(({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...((open || smDown) && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	}));

	const DrawerHeader = styled('div')(({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	}));

	

	const onChangeMenu = async (item: any, item2: any) => {
		await navigate(item2.value);	
		await toogleDrawerOpen();
	};

	const handleClick = (e: any) => {
		setMenuPaiSelecionado(e.index);
		setEstado({ [e.label]: !estado[e.label] });
	};

	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<BarraSuperior open={isDrawerOpen} handleDrawerOpen={toogleDrawerOpen}/>
				<Drawer
					sx={{
						width: drawerWidth,
						flexShrink: 0,
						'& .MuiDrawer-paper': {
							width: drawerWidth,
							boxSizing: 'border-box',
						},
					}}
					variant={smDown ? 'temporary' : 'persistent'}
					anchor="left"
					onClose={toogleDrawerOpen}
					open={isDrawerOpen}
				>
					<DrawerHeader>
						<Box style={{marginLeft: '15%'}} width='100%' height={theme.spacing(10)} display='flex' alignItems='center' justifyContent='center'>
							{	themeName === 'light' &&
								<Avatar 
									variant="rounded"
									sx={{heigth:10, width: 100}}
									src="https://images.gupy.io/unsafe/88x88/center/middle/https://s3.amazonaws.com/gupy5/production/companies/1692/career/2811/images/2021-07-27_20-28_logo.png" 
								/>
							}	
							{	themeName !== 'light' &&
								<Avatar 
									variant="rounded"
									sx={{heigth:10, width: 100}}
									src="http://smarapd.tecnologia.ws/wp-content/uploads/2016/07/cropped-icon-smara.png" 
								/>
							}
						</Box>
						<Fab 
							size="small" 
							aria-label="add" 
							onClick={toogleDrawerOpen}
							style={{width: '25%', height: '20%', boxShadow: 'none'}}
						>
							<VoltarIcon/>
						</Fab>
					</DrawerHeader>
					<GlobalHotKeys keyMap={hotKeysKeyMap} handlers={hotKeyshandlers}>
						<Box
							width='100%' 
						>
							{isDrawerOpen && (
								<Autocomplete
									id="menuRapido"
									options={telasDoMenuRapido}
									value={telaAtual}
									defaultValue={telaAtual}
									getOptionLabel={(option) => option.label}
									size="small"
									style={{marginLeft: '4%', marginRight: '4%'}}
									onChange={(item, item2) =>
										onChangeMenu(item, item2)
									}
									renderInput={(params) => (
										<TextField
											{...params}
											inputRef={menuRapidoRef}
											name="menuRapido"
											id="menuRapido"
											variant="standard"
											label="Menu rápido (Ctrl + M)"
											placeholder="Digite aqui"
											required={true}
											InputLabelProps={{
												shrink: true,
											}}
										/>
									)}
								/>
							)}
						</Box>
					</GlobalHotKeys>
					<Divider style={{marginTop: '15px', background: themeName === 'light' ?  green[100] : grey[400]}}/>
					<Box flex={1}>
						<List component={'nav'}>
							{drawerOptions.map(drawerOption => {
								return (
									<div key={drawerOption.id}>
										{drawerOption.items.map((item: any) => {
											return (
												<div key={item.id}>
													{item.subitems != null ? (
														<div key={item.id}>
															 <ListItem
																key={item.path}
																onClick={handleClick.bind(
																	this,
																	item
																)}
															>
																<ListItemText
																	primary={item.label}
																/>
															</ListItem>
															<Collapse
																key={item.path}
																component="li"
																in={estado[item.label]}
																timeout="auto"
																unmountOnExit
															>
																<Divider/>
																<Box key={item.id} style={
																	themeName === 'light' ? 
																		{background: grey[300]} :  
																		{background: grey[700]}}
																>
																	<List disablePadding>
																		{item.subitems.map(
																			(sitem: any) => {
																				console.log('sitem',sitem);
																				return (
																					<ListItemLink 
																						key={sitem.path}
																						to={sitem.path}
																						Icone={sitem.icon}
																						label={sitem.label}
																						onClick={smDown ? () => toogleDrawerOpen() : undefined}
																					/>
																				);
																			}
																		)}
																	</List>
																</Box>
																<Divider/>
															</Collapse>
														</div>
													) :
														(
															<ListItemLink 
																key={drawerOption.path}
																to={drawerOption.path}
																Icone={drawerOption.icon}
																label={drawerOption.label}
																onClick={smDown ? () => toogleDrawerOpen() : undefined}
															/>
														)}
												</div>
											);
										})}
									</div>
								);
							})}
						</List>
					</Box>
				</Drawer>
				<Main open={isDrawerOpen}>
					<DrawerHeader />
					{ children }
				</Main>
			</Box>
		</>
	);
};