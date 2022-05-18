import { useNavigate } from 'react-router-dom';
import  {Table}  from '../../../../shared/components/table/table';
import GridProjetoDDados from '../projeto.table.ddados';
import api from '../service/projeto.api';
import { deleteProjeto } from '../store/projeto.request';


const urlBase = '/app/geral/projeto';

export const ProjetoGrid: React.FC = () => {

	const navigate = useNavigate();

	const columns = GridProjetoDDados.columns;
	const order = GridProjetoDDados.order;
	const filterInit = GridProjetoDDados.filterInit;

	const actions = [
		{
			type: 'visualizar',
			onClick: (dataItem: any) => navigate(`${urlBase}/view/${dataItem}`),
			url: `${urlBase}/view/:id`,
		},
		{
			type: 'editar',
			onClick: (dataItem: any) => navigate(`${urlBase}/edit/${dataItem}`),
			url: `${urlBase}/edit/:id`,
		},
		{
			type: 'deletar',
			onClick: (id: any)=> deleteProjeto(id),
			url: `${urlBase}/delete/:id`,
		},
	];

	const options = {
		titulo: 'Projetos',
		service: api.getAll,
		ocultarBarraFerramentas: false,
		buscarAoRenderizar: true,
		selected: true,
	};

	const toolbar = {
		exibirAtualizar: true,
		novo: {
			onClick: () => navigate(`${urlBase}/add`),
			route: `${urlBase}/add`,
		},
	};

	const config = {
		columns,
		order,
		filterInit,
		actions,
		options,
		toolbar,
	};

	return (
		<Table 
			{...config}
		/>
	);
};