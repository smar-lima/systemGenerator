import { createSlice } from '@reduxjs/toolkit';
import { deletar } from './projeto.request';


const initialState = {
	id: 1,
	Nome: 'ttt',
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
			async function del(Id: number){
				await deletar(Id);
			}
			del(payload.Id);
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