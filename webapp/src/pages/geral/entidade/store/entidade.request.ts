import { toast } from 'react-toastify';
import { Environment } from '../../../../shared/environment';
import { trataErrorInCatch } from '../../../../shared/utils/errorHelper';
import { AppDispatch } from '../../../../store';
import api from '../service/entidade.api';
import { resetForm, setEntidade } from './entidade.slice';

export const getEntidadeById = async (
	id: any, 
	dispatch: AppDispatch
) => {
	try {
		const resp = await api.getById(id);
		if(resp.status === 200){
			const newEntidade = resp.data;
			dispatch(setEntidade(newEntidade));
		}else{
			history.back();
			toast.error(Environment.ERRO_AO_BUSCAR);
		}
	} catch (error: any) {
		trataErrorInCatch(error);
	}
};

export const createEntidade = async (
	dto: any, 
	dispatch: AppDispatch,
	goTo: any
) => {
	const newDto = {
		nome: dto.nome,
		projeto: dto.projeto,
		feature: dto.feature,
		acoes: dto.acoes,
	};

	try {
		const resp = await api.create(newDto);
		if(resp.status === 201){
			toast.success(Environment.SALVO_COM_SUCESSO);
			goTo();
			dispatch(resetForm());
		}else
			toast.error(Environment.ERRO_AO_CADASTRAR);
	} catch (error: any) {
		trataErrorInCatch(error);
	}
};

export const updateEntidade = async (
	id: any, 
	dto: any, 
	dispatch: AppDispatch,
	goTo: any
) => {
	const putDto = {
		id: dto.id,
		nome: dto.nome,
		projeto: dto.projeto,
		feature: dto.feature,
		acoes: dto.acoes,
	};

	try {
		const resp = await api.update(id, putDto);
		if(resp.status === 200){
			toast.success(Environment.ATUALIZADO_COM_SUCESSO);
			goTo();
			dispatch(resetForm());
		}else
			toast.error(Environment.ERRO_AO_ATUALIZAR);
	} catch (error: any) {
		trataErrorInCatch(error);
	}
};

export const deleteEntidade = async (id: any) => {
	try {
		return await api.delete(id);
	} catch (error: any) {
		trataErrorInCatch(error);
	}
};