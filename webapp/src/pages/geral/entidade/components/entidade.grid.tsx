import { useNavigate } from 'react-router-dom';
import  {Table}  from '../../../../shared/components/table/table.component';
import { urlBase } from '../entidade.route';
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
			onClick: (id: number) => navigate(`${urlBase}/view/${id}`),
			url: `${urlBase}/view/:id`,
		},
		{
			type: 'editar',
			onClick: (id: number) => navigate(`${urlBase}/edit/${id}`),
			url: `${urlBase}/edit/:id`,
		},
		{
			type: 'deletar',
			onClick: (id: number)=> deleteEntidade(id),
			url: `${urlBase}/delete/:id`,
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