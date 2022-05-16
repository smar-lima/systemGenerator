import { 
	DataGrid,
	GridActionsCellItem,
	GridColumns,
	GridFilterModel,
	GridSearchIcon, 
	GridToolbarDensitySelector, 
	GridToolbarExport, 
	ptBR
} from '@mui/x-data-grid';
import { Box, IconButton, Paper, Skeleton, TextField, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import {ITableProps} from '../../types/tableDados.types';
import ClearIcon from '@mui/icons-material/Clear';
import { useCallback, useEffect, useMemo, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import VisualizarIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import AlertConfimModal from '../modal-alerta-confimacao/alertaConfirmacaoModal';
import { Environment } from '../../environment';
import { useDispatch } from 'react-redux';
import { FerramentasDaListagem } from '../ferramentas-da-listagem/ferramentasDaListagem.component';
import { useAppThemeContext } from '../../contexts';
import { green, grey } from '@mui/material/colors';

export const Table = ({
	columns,
	order,
	filterInit,
	actions,
	options,
	toolbar
}: ITableProps) => {
	
	const dispatch = useDispatch();

	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	const [ data, setData ] = useState([]);
	const [ loadInit, setLoadInit ] = useState(true);
	const [ newColumns, setNewColumns ] = useState<GridColumns>([]);
	const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
	const [itemToDelete, setItemToDelete] = useState<any>();
	
	const { themeName } = useAppThemeContext();

	const [queryOptions, setQueryOptions] = useState({});
	const [pageOptions, setPageOptions] = useState({});
	const [simpleFilter, setSimpleFilter] = useState('');

	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);

	const confirmExclude = (itemToDelete: any, actionDelete: any) => {
		const dtoToDelete = {
			id: itemToDelete.id,
			actionDelete: actionDelete
		};
		setItemToDelete(dtoToDelete);
		setOpenModalDelete(true);
	};

	const onConfirmModalDelete = async () => {
		await dispatch(
			itemToDelete.actionDelete({
				id: itemToDelete.id,
				reloadGrid: buscarDadosGrid
			})
		);
		setItemToDelete(undefined);
		setOpenModalDelete(false);
	};

	const onCancelModalDelete = () => {
		setItemToDelete(undefined);
		setOpenModalDelete(false);
	};

	const buscarDadosGrid = async () => {
		const response = await options.service();
		if(response.status === 200){
			setData(response.data);
			await setLoadInit(false);
			return true;
		}else {
			await setLoadInit(false);
			return false;
		}
	};

	useEffect( () => {
		async function init(){
			try {
				await setLoadInit(true);
				if(await buscarDadosGrid())
					await montaAcoes();
			} catch (error: any) {
				await setLoadInit(false);
			}
		}
		init();
	},[]);

	const montaAcoes = () => {

		if(actions && actions.length > 0){
	
			const columAction = {
				field: 'actions',
				type: 'actions',
				headerName:'Ações',
				width: 130,
				getActions: (item:any) => {
					const acoes: any[] = [];
					actions.map((action) => {
						if(action.type === 'visualizar')
							acoes.push(
								<Tooltip title={'Visualizar'} placement="top">
									<GridActionsCellItem 
										icon={<VisualizarIcon/>} 
										onClick={() => console.log('dataItem visualizar', item)}
										label={action.type}
									/>
								</Tooltip>
							);
						if(action.type === 'editar')
							acoes.push(
								<Tooltip title={'Editar'} placement="top">
									<GridActionsCellItem 
										icon={<EditIcon />} 
										label={action.type} 
										onClick={() => console.log('item 1 editar', item)}
									/>
								</Tooltip>
							);
						if(action.type === 'deletar')
							acoes.push(
								<Tooltip title={'Excluir'} placement="top">
									<GridActionsCellItem 
										icon={<DeleteIcon />} 
										label={action.type}
										onClick={async () => {
											confirmExclude(item, action.onClick);
										}}
									/>
								</Tooltip>
							);
					});
					return acoes;
				}
			};
			
			const cols: GridColumns = [...columns, columAction];
			setNewColumns(cols);
		}
	};

	const onFilterChange = useCallback((filterModel: GridFilterModel) => {
		// Here you save the data you need from the filter model
		setQueryOptions({ filterModel: { ...filterModel } });
	}, []);

	useMemo(
		async () => {
			await setPageOptions({
				page,
				pageSize
			});
		},
		[page, pageSize],
	);
	
	useMemo(
		async () => {
			console.log('pageOptions',pageOptions);
			console.log('queryOptions',queryOptions);
			console.log('simpleFilter',simpleFilter);
		},
		[pageOptions, queryOptions],
	);

	const CustomSearch = () => {

		return (
			<Box display='flex' justifyContent={'end'} width={'100%'}>
				<Box 
					display='flex'
					justifyContent={'start'}
					width={'100%'}
				>
					<TextField
						variant="outlined"
						value={simpleFilter}
						onChange={(e) => setSimpleFilter(e.target.value)}
						placeholder="Pesquisar..."
						style={{width:'50%'}}
						InputProps={{
							startAdornment: <GridSearchIcon fontSize="small" />,
							endAdornment: (
								<IconButton
									title="Clear"
									aria-label="Clear"
									size="small"
									//style={{ visibility: props.value ? 'visible' : 'hidden' }}
									onClick={() => ''/*props.clearSearch*/}
								>
									<ClearIcon fontSize="small" />
								</IconButton>
							),
						}}
					/>
				</Box>
				<Box display='inline-flex'>
					<GridToolbarExport />
					<GridToolbarDensitySelector />
				</Box>
				
			</Box>
		);
	};
	
	return (
		<>
			<Box padding={2} display='flex' flexDirection='column' gap={1}>
				{
					options?.titulo &&
					<Box padding={1}  
						display='flex' 
						alignItems="center" 
						gap={1} 
						justifyContent="center" 
						height={theme.spacing(smDown ? 2 : mdDown ? 3 : 5)}
					>
						<Typography 
							whiteSpace="nowrap"
							overflow="hidden"
							textOverflow="ellipsis"
							variant={smDown ? 'h6' : mdDown ? 'h5' : 'h4'}
						>
							{'Listagem de ' + options?.titulo}
						</Typography>
					</Box>
				}
			</Box>
			<Box>
				<FerramentasDaListagem
					mostrarInputBusca={false}
					aoClicarBotaoNovo={() => toolbar?.novo?.onClick()}
					aoClicarBotaoAtualizar={() => buscarDadosGrid()}
					loading={loadInit}
				/>
			</Box>
			{ !loadInit && 
				<Box 
					gap={1}
					padding={2}
					paddingX={2}
					component={Paper}
					display={'flex'}
					sx={{ height: '510px', margin: '0 auto 16px' }}
				>
					<DataGrid 
						rows={data} 
						columns={[...newColumns]}
						rowsPerPageOptions={[5, 10, 20, 50, 100]}
						checkboxSelection={options?.selected}
						density='compact'
						filterMode="server"
						paginationMode="server"
						onFilterModelChange={onFilterChange}
						onPageChange={(newPage) => setPage(newPage)}
						onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
						pagination
						page={page}
						pageSize={pageSize}
						initialState={{
							sorting: {
								sortModel: order
							},
							filter: {
								filterModel: {
									items: filterInit
								},
							},
							pagination: {
								pageSize: 10,
							}
						}}
						sx={ themeName === 'light' ? {
							'& .MuiDataGrid-columnHeaders': {
								color: grey[100],
								background: green[700],
								'& .MuiSvgIcon-root':{
									color: grey[100]
								}
							},
						} :	{
							'& .MuiDataGrid-columnHeaders': {
								color: green[700],
								background: grey[200],
								'& .MuiSvgIcon-root':{
									color: green[700]
								}
							},
						}}
						components={{
							Toolbar: CustomSearch,
						}}
						localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
					/>
				</Box>
			}
			{ loadInit &&
				<Skeleton style={{marginTop: '-6%'}} width={'100%'} height={'600px'}/>
			}
			{
				openModalDelete &&
				<AlertConfimModal
					text={Environment.CONFIRMACAO_DELETE}
					openModal={openModalDelete}
					confirmModalDelete={() => onConfirmModalDelete()}
					cancelModalDelete={() => onCancelModalDelete()}
				/>
			}
		</>
	);
};