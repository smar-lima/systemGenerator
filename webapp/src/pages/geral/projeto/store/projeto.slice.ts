import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../../store';

const initialState = {

	id: 1,
	nome: '',
	endereco: '',
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
	}
});

export const {
	setProjeto,
	resetProjeto
} = slice.actions;

export const selectProjeto = (state: RootState) => state.projeto;

export default slice.reducer;