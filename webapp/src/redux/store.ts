import { configureStore } from '@reduxjs/toolkit';
import { slices } from '../shared/imports';
 
const makeSlice = () => {
	const refactReducers: any = [];
	slices.keys().forEach((Name:string) => {
		const module = slices(Name);
		const reducer = slices(Name).default;
		refactReducers.push(
			{
				name: module.slice.name, 
				reducer
			}
		);
	});

	const keys = Object.keys(refactReducers);

	const newReducers: any = {};

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		const nameReducer = refactReducers[key].name;
		const prop = refactReducers[key];
		newReducers[nameReducer] = prop.reducer;
	}

	return newReducers;
};
export const store = configureStore({
	reducer: makeSlice()
});