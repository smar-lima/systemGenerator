import { toast } from 'react-toastify';
import { trataErrorInCatch } from '../../../../shared/utils/errorHelper';
import { AppDispatch } from '../../../../store';
import api from '../service/projeto.api';
import { resetForm, setProjeto } from './projeto.slice';

export const getProjetoById = async (id: any, dispatch: AppDispatch) => {
	console.log('id: ', id);

	try {
		const resp = await api.getById(id);
		if(resp.status === 200){
			const newProjeto = resp.data;
			dispatch(setProjeto(newProjeto));
		}else{
			toast.error('Erro ao tentar buscar o projeto.');
		}
	} catch (error: any) {
		trataErrorInCatch(error);
	}
};

export const createProjeto = async (dto: any, dispatch: AppDispatch) => {

	const newDto = {
		name: dto.name,
		location: dto.location
	};

	try {
		const resp = await api.create(newDto);
		if(resp.status === 201){
			toast.success('Projeto cadastrado com sucesso');
			history.back();
			dispatch(resetForm());
		}else{
			toast.error('Erro ao tentar cadastrado o projeto');
		}
	} catch (error: any) {
		trataErrorInCatch(error);
	}
};

export const updateProjeto = async (id: any, dto: any, dispatch: AppDispatch) => {

	const putDto = {
		id: dto.id,
		name: dto.name,
		location: dto.location
	};

	try {
		const resp = await api.update(id, putDto);
		if(resp.status === 200){
			toast.success('Projeto atualizado com sucesso');
			history.back();
			dispatch(resetForm());
		}else{
			toast.error('Erro ao tentar atualizar o projeto');
		}
	} catch (error: any) {
		trataErrorInCatch(error);
	}
};

export const deleteProjeto = async (id: number) => {
	try {
		return await api.delete(id);
	} catch (error: any) {
		trataErrorInCatch(error);
	}
};