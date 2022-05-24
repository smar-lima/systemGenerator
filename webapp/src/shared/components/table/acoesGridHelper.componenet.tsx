
import React from 'react';
import { 
	GridActionsCellItem,
	GridColumns,
} from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import VisualizarIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

export const montaAcoes = (actions: any, columns: any, setItemToDelete: any, setOpenModalDelete: any) => {

	const confirmDelete = (itemToDelete: any, actionDelete: any) => {
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
			headerName: 'Ações', 
			width: 120,
			getActions: (item:any) => {
				const acoes: any[] = [];
				actions.map((action: any) => {
					switch (action.type) {
					case 'visualizar':
						acoes.push(
							<GridActionsCellItem
								icon={<VisualizarIcon/>} 
								onClick={() => action.onClick(item.id)}
								label={action.label ? action.label[0].toUpperCase() + action.label.substr(1) : action.type[0].toUpperCase() + action.type.substr(1)}
							/>
						);
						break;
					case 'editar':
						acoes.push(
							<GridActionsCellItem 
								icon={<EditIcon />} 
								label={action.label ? action.label[0].toUpperCase() + action.label.substr(1) : action.type[0].toUpperCase() + action.type.substr(1)} 
								onClick={() => action.onClick(item.id)}
								showInMenu={actions.length > 3 ? true : false}
							/>
						);
						break;
					case 'deletar':
						acoes.push(
							<GridActionsCellItem 
								icon={<DeleteIcon />} 
								label={action.label ? action.label[0].toUpperCase() + action.label.substr(1) : action.type[0].toUpperCase() + action.type.substr(1)}
								onClick={() => confirmDelete(item, action.onClick)}
								showInMenu={actions.length > 3 ? true : false}
							/>
						);
						break;
					default:
						acoes.push(
							<GridActionsCellItem 
								icon={action.icon} 
								label={action.label ? action.label[0].toUpperCase() + action.label.substr(1) : action.type[0].toUpperCase() + action.type.substr(1)} 
								onClick={() => action.onClick(item.id)}
								showInMenu={actions.length > 3 ? true : false}
							/>
						);
						break;
					}
				});
				return acoes;
			}
		};
		cols = [...columns, columAction];
	}
	return cols;
};