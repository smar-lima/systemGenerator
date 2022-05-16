import api from '../service/projeto.api';
import { AxiosResponse } from 'axios';
import {SnackBarSuccess,SnackBarError} from '../../../../shared/utils/snackBarHelper';

import { Environment } from '../../../../shared/environment';

/*export const criar = () => {
''
};

export const atualizar = () => {
''
};*/

export const deletar = async ({id,reloadGrid}: any) => {
	try {
		await api.delete(id).then(async (response) => {
			if(response.status === 204){
				reloadGrid();
				console.log('SnackBarSuccess',SnackBarSuccess);
				await SnackBarSuccess('Projeto apagado com sucesso.');
			}else {
				await SnackBarError(Environment.ERRO_AO_DELETAR + 'o Projeto' + '.');
			}
		});
	} catch (error: any) {
		console.error(error.message);
		await SnackBarError(Environment.ERRO_AO_DELETAR + 'o Projeto' + '.');
	}
};