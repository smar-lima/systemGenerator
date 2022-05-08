import { SignalCellularAltRounded } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: undefined,
	Nome: '',
};

export const slice = createSlice({
	name: 'pessoa',
	initialState: initialState,
	reducers:{
		updatePessoa(state, {payload}) {
			return {
				...state, 
				payload
			};
		},
		resetPessoa(state) {
			return initialState;
		}
	}
});

export const {
	updatePessoa,
	resetPessoa
} = slice.actions;

export const selectPessoa = (state: any) => state.user;

export default slice.reducer;