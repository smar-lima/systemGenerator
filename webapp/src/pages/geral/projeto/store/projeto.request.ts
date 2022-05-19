import { toast } from 'react-toastify';
import { Environment } from '../../../../shared/environment';
import { trataErrorInCatch } from '../../../../shared/utils/errorHelper';
import { AppDispatch } from '../../../../store';
import api from '../service/projeto.api';
import { resetForm, setProjeto } from './projeto.slice';

export const getProjetoById = async (id: any, dispatch: AppDispatch) => {
	try {
		const resp = await api.getById(id);
		if(resp.status === 200){
			const newProjeto = resp.data;
			dispatch(setProjeto(newProjeto));
		}else{
			history.back();
			toast.error(Environment.ERRO_AO_BUSCAR);
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
			toast.success(Environment.SALVO_COM_SUCESSO);
			history.back();
			dispatch(resetForm());
		}else
			toast.error(Environment.ERRO_AO_CADASTRAR);
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
			toast.success(Environment.ATUALIZADO_COM_SUCESSO);
			history.back();
			dispatch(resetForm());
		}else
			toast.error(Environment.ERRO_AO_ATUALIZAR);
	} catch (error: any) {
		trataErrorInCatch(error);
	}
};

export const deleteProjeto = async (id: any) => {
	try {
		return await api.delete(id);
	} catch (error: any) {
		trataErrorInCatch(error);
	}
};