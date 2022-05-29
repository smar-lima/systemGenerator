
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

const retornaUrlSemParams = (string: string) => {
	const arrayUrl = string.split('/');
	const arrayUrlTratada: any  = [];
	arrayUrl.map((item, index) => {
		if(index != 0 && item.charAt(0) != ':')
			arrayUrlTratada.push(item);
	});
	const urlConcat = arrayUrlTratada.join('/');
	return urlConcat;
};

const retornaUrlSemNumbers = (string: string) => {
	const arrayUrl = string.split('/');
	const arrayUrlTratada: any  = [];
	arrayUrl.map((item: any) => {
		if(isNaN(item))
			arrayUrlTratada.push(item);
	});
	const urlConcat = arrayUrlTratada.join('/');
	return urlConcat;
};

export const BreadCumbComponent = () => {
	const location = useLocation();

	const breadCrumbs = breadCrumbsGerados();
	console.log('breadCrumbs: ', breadCrumbs);

	const breadCrumbDaRotaAtual = breadCrumbs.filter((x: any) => x.route == location.pathname)[0];
	const pathNameTratado = retornaUrlSemNumbers(location.pathname);

	return (
		<Breadcrumbs aria-label="breadcrumb">
			<LinkRouter underline="hover" color="inherit" to="/app">
          Home
			</LinkRouter>
            
			{breadCrumbDaRotaAtual?.breadCrumb?.map( (value: any, index: any) => {
				const last = index === breadCrumbDaRotaAtual.breadCrumb.length - 1;

				const breadCrumbRotaAtualSelecionado = breadCrumbs.filter(function(item : any){
					const pathRotaBradCrumbSemParams = retornaUrlSemParams(item.route);
					return pathRotaBradCrumbSemParams === pathNameTratado;
				}); 
				
				return last ? (
					<Typography style={{color: '#ffffff', fontWeight: 500}} key={breadCrumbRotaAtualSelecionado ? breadCrumbRotaAtualSelecionado.route : ''}>
						{value.text}
					</Typography>
				) : breadCrumbRotaAtualSelecionado.length > 0 ? (
					<Typography style={{color: '#ffffff', fontWeight: 500}}  key={breadCrumbRotaAtualSelecionado ? breadCrumbRotaAtualSelecionado.route : ''}>
						{value.text}
					</Typography>
				) : (
					<LinkRouter underline="hover" style={{color: '#ffffff', fontWeight: 500}} to={breadCrumbRotaAtualSelecionado ? breadCrumbRotaAtualSelecionado.route : ''} key={breadCrumbRotaAtualSelecionado ? breadCrumbRotaAtualSelecionado.route : ''}>
						{value.text}
					</LinkRouter>
				);
			})}
		</Breadcrumbs>
	);
};