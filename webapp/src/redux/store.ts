import { configureStore } from '@reduxjs/toolkit';
import pessoa from './slicers/pessoaSlice';
 
export const store = configureStore({
	reducer:{
		//Add reducers aqui
		pessoa,
	}
});