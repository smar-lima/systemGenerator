import { 
	DataGrid,
	GridSearchIcon, 
	GridToolbarDensitySelector, 
	GridToolbarExport, 
	ptBR
} from '@mui/x-data-grid';
import { Box, IconButton, Paper, Skeleton, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import {ITableProps} from '../../types/tableDados.types';
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from 'react';
import { SnackBarError } from '../../utils/snackBarHelper';
import { Environment } from '../../environment';

const CustomToolbar = () => {

	return (
		<Box display='flex' justifyContent={'end'} width={'100%'}>
			<Box 
				display='flex'
				justifyContent={'start'}
				width={'100%'}
			>
				<TextField
					variant="outlined"
					value={''}
					onChange={() => ''}
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

function Table ({
	columns,
	order,
	filterInit,
	actions,
	options,
	toolbar
}: ITableProps) {
	const [ initLoader, setInitLoader ] = useState(false);
	const [ data, setData ] = useState([]);

	useEffect( () => {
		async function init(){
			try {
				const response = await options.service();
				setInitLoader(true);
				console.log('response', response);
				if(response.status === 200){
					setData(response.data);
				}else {
					SnackBarError('Erro ao buscar dados');
				}
			} catch (error: any) {
				console.error(error.message);
				SnackBarError(error.message);
			}
		}
		if(!initLoader){
			init();
		}
	},[]);
	
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	
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
							variant={smDown ? 'h6' : mdDown ? 'h6' : 'h5'}
						>
							{'Listagem de ' + options?.titulo}
						</Typography>
					</Box>
				}
			</Box>
			{ !options.loadingSkeleton && 
				<Box 
					gap={1}
					padding={2}
					paddingX={2}
					component={Paper}
					display={'flex'}
				>
					<Typography display={'flex'} width={'100%'}>
						<DataGrid 
							rows={data} 
							columns={[...columns]}
							rowsPerPageOptions={[5, 10, 20, 50, 100]}
							checkboxSelection={options?.selected}
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
							components={{
								Toolbar: CustomToolbar,
							}}
							autoHeight
							localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
						/>
					</Typography>
				</Box>
			}
			{ !options.loadingSkeleton &&
				<Skeleton width={'100%'} height={'100%'}/>
			}
		</>
	);
}

export default Table;