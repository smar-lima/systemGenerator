import { createSlice } from '@reduxjs/toolkit';
import { deletar } from './projeto.request';


const initialState = {
	id: 1,
	nome: 'teste',
	endereco: 'teste e',
};

export const slice = createSlice({
	name: 'projeto',
	initialState: initialState,
	reducers:{
		setProjeto(state, {payload}) {
			return {
				...state, 
				...payload
			};
		},
		resetProjeto() {
			return initialState;
		},
		deleteProjeto(state, {payload}) {
			deletar(payload);
		}
	}
});

export const {
	setProjeto,
	resetProjeto,
	deleteProjeto
} = slice.actions;

export const selectProjeto = (state: any) => state.projeto;

export default slice.reducer;