import { useNavigate } from 'react-router-dom';
import  {Table}  from '../../../../shared/components/table/table.component';
import { urBaseEnditade } from '../projeto.route';
import GridProjetoDDados from '../projeto.table.ddados';
import api from '../service/projeto.api';
import { deleteProjeto } from '../store/projeto.request';
import ListIcon from '@mui/icons-material/List';

export const ProjetoGrid: React.FC = () => {

	const navigate = useNavigate();

	const columns = GridProjetoDDados.columns;
	const order = GridProjetoDDados.order;
	const filterInit = GridProjetoDDados.filterInit;

	const actions = [
		{
			type: 'visualizar',
			onClick: (id: number) => navigate(`${urBaseEnditade}/view/${id}`),
			url: `${urBaseEnditade}/view/:id`,
		},
		{
			type: 'editar',
			onClick: (id: number) => navigate(`${urBaseEnditade}/edit/${id}`),
			url: `${urBaseEnditade}/edit/:id`,
		},
		{
			type: 'deletar',
			onClick: (id: number)=> deleteProjeto(id),
			url: `${urBaseEnditade}/delete/:id`,
		},
		{
			label: 'Entidades',
			onClick: (id: number) => navigate(`${urBaseEnditade}/${id}/entidade`),
			url: `${urBaseEnditade}/:idProjeto/entidade`,
			icon: <ListIcon />
		},
	];

	const options = {
		titulo: 'Projetos',
		service: api.getAll,
		ocultarBarraFerramentas: false,
		buscarAoRenderizar: true,
		selected: true
	};

	const toolbar = {
		exibirAtualizar: true,
		novo: {
			onClick: () => navigate(`${urBaseEnditade}/add`),
			route: `${urBaseEnditade}/add`,
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