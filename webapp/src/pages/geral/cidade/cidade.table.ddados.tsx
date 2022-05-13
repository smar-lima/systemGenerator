import { GridDDados } from '../../../shared/types/dados.types';

const GridCidadeDDados: GridDDados = {
	order: [
		{ 
			field: 'col2', 
			sort: 'desc'
		}
	],
	filterInit: [
		{ 
			columnField: 'col2', 
			operatorValue: 'contains', 
			value: '' 
		}
	],
	columns: [
		{ 
			field: 'col1', 
			headerName: 'Column 1', 
			width: 150 
		},
		{ 
			field: 'col2', 
			headerName: 'Column 2', 
			width: 150 
		},
	],
};

export default GridCidadeDDados;
