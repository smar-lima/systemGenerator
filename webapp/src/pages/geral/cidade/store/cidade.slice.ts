import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: 1,
	Nome: 'cidade',
};

export const slice = createSlice({
	name: 'cidade',
	initialState: initialState,
	reducers:{
		setCidade(state, {payload}) {
			return {
				...state, 
				...payload
			};
		},
		resetCidade() {
			return initialState;
		}
	}
});

export const {
	setCidade,
	resetCidade
} = slice.actions;

export const selectCidade = (state: any) => state.cidade;

export default slice.reducer;