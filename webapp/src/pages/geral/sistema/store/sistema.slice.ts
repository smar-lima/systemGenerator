import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: 1,
	Nome: 'ttt',
};

export const slice = createSlice({
	name: 'sistema',
	initialState: initialState,
	reducers:{
		setSistema(state, {payload}) {
			return {
				...state, 
				...payload
			};
		},
		resetSistema() {
			return initialState;
		}
	}
});

export const {
	setSistema,
	resetSistema
} = slice.actions;

export const selectSistema = (state: any) => state.sistema;

export default slice.reducer;