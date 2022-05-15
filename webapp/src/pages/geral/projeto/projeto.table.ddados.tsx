import { GridDDados } from '../../../shared/types/dados.types';

const GridProjetoDDados: GridDDados = {
	order: [
		{ 
			field: 'name', 
			sort: 'asc'
		}
	],
	filterInit: [
		{ 
			columnField: 'name', 
			operatorValue: 'contains', 
			value: '' 
		}
	],
	columns: [
		{ 
			field: 'id', 
			headerName: 'Projeto', 
			width: 150 
		},
		{ 
			field: 'name', 
			headerName: 'Nome', 
			width: 150 
		},
		{ 
			field: 'location', 
			headerName: 'Endereço', 
			width: 150 
		},
	],
};

export default GridProjetoDDados;
