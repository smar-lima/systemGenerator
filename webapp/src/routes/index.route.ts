import { useRoutes, useLocation } from 'react-router-dom';
import { routes } from '../shared/imports';

export const Router = () => {
	let rotasMapeadas:any = [];

	routes.keys().forEach((Name:string) => {

		const rotasImportadas = routes(Name).default;
		rotasMapeadas = [...rotasMapeadas, ...rotasImportadas];
	});
	const location = useLocation();
	return useRoutes(rotasMapeadas, location);
};