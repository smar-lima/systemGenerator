
import { 
	GridActionsCellItem,
	GridColumns,
} from '@mui/x-data-grid';
import { Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VisualizarIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

export const montaAcoes = (actions: any, columns: any, setItemToDelete: any, setOpenModalDelete: any) => {

	const confirmExclude = (itemToDelete: any, actionDelete: any) => {
		const dtoToDelete = {
			id: itemToDelete.id,
			actionDelete: actionDelete
		};
		setItemToDelete(dtoToDelete);
		setOpenModalDelete(true);
	};

	let cols: GridColumns = [...columns];

	if(actions && actions.length > 0){

		const columAction = {
			field: 'actions',
			type: 'actions',
			headerName:'Ações',
			width: 130,
			getActions: (item:any) => {
				const acoes: any[] = [];
				actions.map((action: any) => {
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
        
		
		cols = [...columns, columAction];
		
	}

	return cols;
};