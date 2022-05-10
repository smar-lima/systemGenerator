import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: undefined,
	Nome: '',
};

export const slice = createSlice({
	name: 'cidade',
	initialState: initialState,
	reducers:{
		updateCidade(state, {payload}) {
			return {
				...state, 
				payload
			};
		},
		resetCidade() {
			return initialState;
		}
	}
});

export const {
	updateCidade,
	resetCidade
} = slice.actions;

export const selectCidade = (state: any) => state.user;

export default slice.reducer;