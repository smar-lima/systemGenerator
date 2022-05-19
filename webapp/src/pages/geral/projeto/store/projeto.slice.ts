import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../../store';

const initialState = {
	id: undefined,
	name: '',
	location: '',
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
		resetForm() {
			return initialState;
		},
	}
});

export const {
	setProjeto,
	resetForm
} = slice.actions;

export const selectProjeto = (state: RootState) => state.projeto;

export default slice.reducer;