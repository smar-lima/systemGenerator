import { GridDDados } from '../../../shared/types/dados.types';

const GridEntidadeDDados: GridDDados = {
	order: [
		{ 
			field: 'nome', 
			sort: 'asc'
		}
	],
	filterInit: [
		{ 
			columnField: 'nome', 
			operatorValue: 'contains', 
			value: '' 
		}
	],
	columns: [
		{ 
			field: 'id', 
			headerName: 'Entidade', 
			flex: 1,
		},
		{ 
			field: 'nome', 
			headerName: 'Nome', 
			flex: 1,
		},
		{ 
			field: 'projeto', 
			headerName: 'Projeto', 
			width: 150
		},
		{ 
			field: 'feature', 
			headerName: 'Feature', 
			flex: 1,
		}
	],
};

export default GridEntidadeDDados;
