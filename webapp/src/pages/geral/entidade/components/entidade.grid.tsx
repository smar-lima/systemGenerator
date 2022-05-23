import { useNavigate } from 'react-router-dom';
import  {Table}  from '../../../../shared/components/table/table.component';
import { urlBaseEntidade } from '../entidade.route';
import GridEntidadeDDados from '../entidade.table.ddados';
import api from '../service/entidade.api';
import { deleteEntidade } from '../store/entidade.request';

export const EntidadeGrid: React.FC = () => {

	const navigate = useNavigate();

	const columns = GridEntidadeDDados.columns;
	const order = GridEntidadeDDados.order;
	const filterInit = GridEntidadeDDados.filterInit;

	const actions = [
		{
			type: 'visualizar',
			onClick: (id: number) => navigate(`${urlBaseEntidade}/view/${id}`),
			url: `${urlBaseEntidade}/view/:id`,
		},
		{
			type: 'editar',
			onClick: (id: number) => navigate(`${urlBaseEntidade}/edit/${id}`),
			url: `${urlBaseEntidade}/edit/:id`,
		},
		{
			type: 'deletar',
			onClick: (id: number)=> deleteEntidade(id),
			url: `${urlBaseEntidade}/delete/:id`,
		},
	];

	const options = {
		titulo: 'Entidades',
		service: api.getAll,
		ocultarBarraFerramentas: false,
		buscarAoRenderizar: true,
		selected: true,
	};

	const toolbar = {
		exibirAtualizar: true,
		novo: {
			onClick: () => navigate(`${urlBaseEntidade}/add`),
			route: `${urlBaseEntidade}/add`,
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