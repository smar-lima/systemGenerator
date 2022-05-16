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
				reloadGrid();
			}else {
				console.log('erro aqui');
			}
		});
	} catch (error: any) {
		console.error(error.message);
	}
};