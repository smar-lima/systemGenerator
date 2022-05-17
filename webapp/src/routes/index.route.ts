import { useRoutes, useLocation } from 'react-router-dom';
import { routes } from '../shared/imports';

export function Router() {
	let rotasMapeadas:any = [];
	const location = useLocation();
	async function init() {
		
		await routes.keys().forEach((Name:string) => {
	
			const rotasImportadas = routes(Name).default;
			rotasMapeadas = [...rotasMapeadas, ...rotasImportadas];
		});
	}
	init();
	return useRoutes(rotasMapeadas, location);
}