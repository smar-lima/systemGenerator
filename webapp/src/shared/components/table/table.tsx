import { 
	DataGrid, 
	GridRowsProp, 
	GridToolbarContainer, 
	GridToolbarDensitySelector, 
	GridToolbarExport, 
	ptBR
} from '@mui/x-data-grid';
import { Box, createTheme, Paper, Typography } from '@mui/material';
import { GridDDados } from '../../types/dados.types';
import { GridPanel } from '@mui/x-data-grid';

interface ITableProps {
	DDadosGrid: GridDDados;
	multSelect: boolean;
}

const rows: GridRowsProp = [
	{ id: 1, col1: 'Hello', col2: 'World' },
	{ id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
	{ id: 3, col1: 'MUI', col2: 'is Amazing' },
];


const CustomToolbar = () => {
	return (
		<GridToolbarContainer>
			<GridToolbarExport />
			<GridToolbarDensitySelector />
		</GridToolbarContainer>
	);
};

export const Table: React.FC<ITableProps> = ({
	DDadosGrid,
	multSelect
}) => {
	console.log('DDadosGrid',DDadosGrid);
	return (
		<Box 
			marginTop={'2%'}
			gap={1}
			padding={2}
			paddingX={2}
			component={Paper}
			display={'flex'}
		>
			<Typography display={'flex'} width={'100%'}>
				<DataGrid 
					rows={rows} 
					columns={DDadosGrid.columns}
					rowsPerPageOptions={[5, 10, 20, 50, 100]}
					checkboxSelection={multSelect}
					initialState={{
						sorting: {
							sortModel: [...DDadosGrid.order]
						},
						filter: {
							filterModel: {
								items: [...DDadosGrid.filterInit],
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
					componentsProps={{
						toolbar: {
							showQuickFilter: true,
							quickFilterProps: { debounceMs: 500 },
						},
					}}
				/>
			</Typography>
		</Box>
	);
};