import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../../store';

const initialState = {
	id: undefined,
	nome: '',
	feature: '',
	projeto: '',
	acoes: '',
};

export const slice = createSlice({
	name: 'entidade',
	initialState: initialState,
	reducers:{
		setEntidade(state, {payload}) {
			return {
				...state, 
				...payload
			};
		},
		resetForm() {
			return initialState;
		},
	}
});

export const {
	setEntidade,
	resetForm
} = slice.actions;

export const selectEntidade = (state: RootState) => state.entidade;

export default slice.reducer;