import { Button } from '@mui/material';
import { Navigate, Routes, Route } from 'react-router-dom';
import { 
	Dashboard,
	PaginaInicial 
} from '../pages';

export const AppRoutes = () => {

	return (
		<Routes>
			<Route path="/home"  element={<PaginaInicial/>} />

			<Route path="/dashboard" element={<Dashboard/>} />
		</Routes>
	);
};