import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard/components/dashBoard';
import { PaginaInicial } from '../pages/pagina-inicial/components/paginaInicial';

export const AppRoutes = () => {

	return (
		<Routes>
			<Route path="/home"  element={<PaginaInicial/>} />

			<Route path="/dashboard" element={<Dashboard/>} />
		</Routes>
	);
};