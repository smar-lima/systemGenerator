import { toast } from 'react-toastify';
import api from '../service/projeto.api';

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
				toast.success('Projeto excluido com sucesso');
				reloadGrid();
			}else {
				toast.error('Erro ao tentar excluir o projeto');
				console.log('erro aqui');
			}
		});
	} catch (error: any) {
		console.error(error.message);
		toast.error(error.message);
	}
};