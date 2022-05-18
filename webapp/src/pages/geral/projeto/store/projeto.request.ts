import { toast } from 'react-toastify';
import { AppDispatch } from '../../../../store';
import api from '../service/projeto.api';
import { resetProjeto } from './projeto.slice';

export const createProjeto = async (dto: any, dispatch: AppDispatch) => {

	const newDto = {
		Name: dto.nome,
		Location: dto.endereco
	};

	try {
		const resp = await api.create(newDto);
		if(resp.status === 201){
			toast.success('Projeto cadastrado com sucesso');
			history.back();
			dispatch(resetProjeto());
		}else{
			toast.error('Erro ao tentar cadastrado o projeto');
		}
	} catch (error: any) {
		console.error(error.message);
		toast.error('Erro ao tentar cadastrado o projeto');
	}
};

/*export const atualizar = () => {
''
};*/

export const deleteProjeto = async (id: number) => {
	try {
		return await api.delete(id);
	} catch (error: any) {
		console.error(error.message);
		toast.error(error.message);
	}
};