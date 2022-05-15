import api from '../service/projeto.api';
import { AxiosResponse } from 'axios';

import { Environment } from '../../../../shared/environment';

/*export const criar = () => {
''
};

export const atualizar = () => {
''
};*/

export const deletar = async (Id: number) => {
	try {
		const resp: AxiosResponse = await api.delete(Id);
		resp.status === 200 ? console.error('') : console.error('');
		/*await SnakeBarSuccess('Projeto apagado com sucesso.')	:
		await SnakeBarError(Environment.ERRO_AO_DELETAR + 'o Projeto' + '.');  */
	} catch (error: any) {
		console.error(error.message);
		//await SnakeBarError(Environment.ERRO_AO_DELETAR + 'o Projeto' + '.');
	}
};