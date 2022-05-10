/* eslint-disable prefer-const */
import { useRoutes, useLocation , Navigate } from 'react-router-dom';
import { PaginaInicial } from '../pages/pagina-inicial/components/paginaInicial.grid.';
import { GeralRoute } from './geral/geral.route';

const base = '/app';

const featureRoutes = [
	{
		path:`${base}/home`,
		element: <PaginaInicial/>,
	},
	{
		path:`${base}/geral` ,
		children: GeralRoute,
	},
	{
		path: '*',
		element: <Navigate to={`${base}/home`}/>
	}
];

export const Router = () => {
	let location = useLocation();
	return useRoutes(featureRoutes, location);
};