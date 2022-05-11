import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: 1,
	Nome: 'ttt',
};

export const slice = createSlice({
	name: 'pessoa',
	initialState: initialState,
	reducers:{
		setPessoa(state, {payload}) {
			return {
				...state, 
				...payload
			};
		},
		resetPessoa() {
			return initialState;
		}
	}
});

export const {
	setPessoa,
	resetPessoa
} = slice.actions;

export const selectPessoa = (state: any) => state.pessoa;

export default slice.reducer;