import { configureStore } from '@reduxjs/toolkit';
import pessoa from './slicers/pessoa.slice';
import cidade from './slicers/cidade.slice';
 
export const store = configureStore({
	reducer:{
		//Add reducers aqui
		pessoa,
		cidade
	}
});