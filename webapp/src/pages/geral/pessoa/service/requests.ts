//depois de parar de usar mok, tirar esse import e importar das api da entidade
import api from '../../../../shared/api';
import { Environment } from '../../../../shared/environment';

interface IListagemPessoa {
    id: number;
    nomeCompleto: string;
    email: string;
    cidadeId: number;
}

interface IPessoa {
    id: number;
    nomeCompleto: string;
    email: string;
    cidadeId: number;
}

type IPessoasComTotalCount = {
    data: IListagemPessoa[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<IPessoasComTotalCount | Error> => {
	try {
		const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;

		const { data, headers } = await api.get(urlRelativa);

		if(data){
			return {
				data,
				totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS)
			};
		}

		return new Error('Erro ao listar os registros.');

	} catch (error) {
		console.error(error);
		return new Error((error as {message:string}).message || 'Erro ao listar os registros.');
	}
};

const getById = async (id: number): Promise<IPessoa | Error> => {
	try {

		const { data } = await api.get(`/pessoa/${id}`);

		if(data){
			return data;
		}

		return new Error('Erro ao consultar registro.');

	} catch (error) {
		console.error(error);
		return new Error((error as {message:string}).message || 'Erro ao consultar registro.');
	}
};

const create = async (dados: Omit<IPessoa, 'id'>): Promise<number | Error> => {
	try {

		const { data } = await api.post('/pessoa', dados);

		if(data){
			return data;
		}

		return new Error('Erro ao criar registro.');

	} catch (error) {
		console.error(error);
		return new Error((error as {message:string}).message || 'Erro ao criar registro.');
	}
};

const update = async (id: number, dados: Omit<IPessoa, 'id'>): Promise<void | Error> => {
	try {

		await api.put(`/pessoa/${id}`, dados);

	} catch (error) {
		console.error(error);
		return new Error((error as {message:string}).message || 'Erro ao atualizar registro.');
	}
};

const deleteById = async (id: number): Promise<void | Error> => {
	try {

		const { data } = await api.delete(`/pessoa/${id}`);

		if(data){
			return data;
		}

		return new Error('Erro ao deletar registro.');

	} catch (error) {
		console.error(error);
		return new Error((error as {message:string}).message || 'Erro ao deletar registro.');
	}
};

export const PessoasService = {
	getAll,
	getById,
	create,
	update,
	deleteById
};