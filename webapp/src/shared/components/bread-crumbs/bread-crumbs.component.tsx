
import Link, { LinkProps } from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {
	Link as RouterLink,
	useLocation,
} from 'react-router-dom';
import { routes } from '../../imports';

const breadCrumbsGerados = () => {
	let rotasImportadas: any = [];
	routes.keys().forEach((Name:string) => {
	
		rotasImportadas = routes(Name).default;
	});
	const breadCrumbs: any = [];
	rotasImportadas.map((item: any) => {
		breadCrumbs.push({route: item.path, breadCrumb: item.breadCrumb});
	}); 
	return breadCrumbs;
};

interface LinkRouterProps extends LinkProps {
    to: string;
    replace?: boolean;
}
  
const LinkRouter = (props: LinkRouterProps) => (
	<Link {...props} component={RouterLink as any} />
);

export const BreadCumbComponent = () => {
	const location = useLocation();

	const breadCrumbs = breadCrumbsGerados();

	const breadCrumbDaRotaAtual = breadCrumbs.filter((x: any) => x.route == location.pathname)[0];

	console.log('breadCrumbDaRotaAtual: ', breadCrumbDaRotaAtual);
	const arrayQuebradoDaRotaAtual = location.pathname.split('/').filter((x:any) => x);
	const ultimoItemDaRotaAtual = arrayQuebradoDaRotaAtual[arrayQuebradoDaRotaAtual.length - 1];
	return (
		<Breadcrumbs aria-label="breadcrumb">
			<LinkRouter underline="hover" color="inherit" to="/app">
          Home
			</LinkRouter>
            
			{breadCrumbDaRotaAtual.breadCrumb.map( (value: any, index: any) => {
				const last = index === breadCrumbDaRotaAtual.breadCrumb.length - 1;

				const breadCrumbRotaAtualSelecionado = breadCrumbs.filter(function(item : any){
					const splitRotaDoItemAtualDoMap = item.route.split('/').filter((x:any) => x);
					const ultimaParteRotaAtualDoMap = splitRotaDoItemAtualDoMap[splitRotaDoItemAtualDoMap.length - 1];
					return ultimaParteRotaAtualDoMap === ultimoItemDaRotaAtual;
				});
				
				console.log('value: ', value.text);
				console.log('breadCrumbRotaAtualSelecionado: ', breadCrumbRotaAtualSelecionado);

				return last ? (
					<Typography style={{color: '#ffffff', fontWeight: 500}} key={breadCrumbRotaAtualSelecionado.length > 0 ? breadCrumbRotaAtualSelecionado[0]?.route : ''}>
						{value.text}
					</Typography>
				) : breadCrumbRotaAtualSelecionado.length > 0 ? (
					<Typography style={{color: '#ffffff', fontWeight: 500}}  key={breadCrumbRotaAtualSelecionado.length > 0 ? breadCrumbRotaAtualSelecionado[0]?.route : ''}>
						{value.text}
					</Typography>
				) : (
					<LinkRouter underline="hover" style={{color: '#ffffff', fontWeight: 500}} to={breadCrumbRotaAtualSelecionado.length > 0 ? breadCrumbRotaAtualSelecionado[0]?.route : ''} key={breadCrumbRotaAtualSelecionado.length > 0 ? breadCrumbRotaAtualSelecionado[0]?.route : ''}>
						{value.text}
					</LinkRouter>
				);
			})}
		</Breadcrumbs>
	);
};