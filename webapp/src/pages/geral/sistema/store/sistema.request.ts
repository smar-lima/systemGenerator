//depois de parar de usar mok, tirar esse import e importar das api da entidade
import api from '../../../../shared/api';
import { Environment } from '../../../../shared/environment';

interface IListagemSistema {
    id: number;
    nomeCompleto: string;
    email: string;
    cidadeId: number;
}

interface ISistema {
    id: number;
    nomeCompleto: string;
    email: string;
    cidadeId: number;
}

type ISistemaComTotalCount = {
    data: IListagemSistema[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<ISistemaComTotalCount | Error> => {
	try {
		//const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;

		//const { data, headers } = await api.get(urlRelativa);

		/*if(data){
			return {
				data,
				totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS)
			};
		}*/

		return new Error('Erro ao listar os registros.');

	} catch (error) {
		console.error(error);
		return new Error((error as {message:string}).message || 'Erro ao listar os registros.');
	}
};

const getById = async (id: number): Promise<ISistema | Error> => {
	try {

		const { data } = await api.get(`/sistema/${id}`);

		if(data){
			return data;
		}

		return new Error('Erro ao consultar registro.');

	} catch (error) {
		console.error(error);
		return new Error((error as {message:string}).message || 'Erro ao consultar registro.');
	}
};

const create = async (dados: Omit<ISistema, 'id'>): Promise<number | Error> => {
	try {

		/*const { data } = await api.post('/sistema', dados);

		if(data){
			return data;
		}*/

		return new Error('Erro ao criar registro.');

	} catch (error) {
		console.error(error);
		return new Error((error as {message:string}).message || 'Erro ao criar registro.');
	}
};

const update = async (id: number, dados: Omit<ISistema, 'id'>): Promise<void | Error> => {
	try {

		await api.put(`/sistema/${id}`, dados);

	} catch (error) {
		console.error(error);
		return new Error((error as {message:string}).message || 'Erro ao atualizar registro.');
	}
};

const deleteById = async (id: number): Promise<void | Error> => {
	try {

		/*const { data } = await api.delete(`/pessoa/${id}`);

		if(data){
			return data;
		}*/

		return new Error('Erro ao deletar registro.');

	} catch (error) {
		console.error(error);
		return new Error((error as {message:string}).message || 'Erro ao deletar registro.');
	}
};

export const SistemaService = {
	getAll,
	getById,
	create,
	update,
	deleteById
};