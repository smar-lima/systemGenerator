import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import  Table  from '../../../../shared/components/table/table';
import GridProjetoDDados from '../projeto.table.ddados';
import api from '../service/projeto.api';
import { deleteProjeto } from '../store/projeto.slice';
import AlertaConfirmacaoModal from '../../../../shared/components/modal-alerta-confimacao/alertaConfirmacaoModal';


const urlBase = '/app/geral/projeto/';

export const ProjetoGrid: React.FC = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const columns = GridProjetoDDados.columns;
	const order = GridProjetoDDados.order;
	const filterInit = GridProjetoDDados.filterInit;

	const actions = [
		{
			type: 'Visualizar',
			onClick: (dataItem: any) => navigate(`${urlBase}/view/${dataItem.Id}`),
			url: `${urlBase}/view/:id`,
		},
		{
			type: 'editar',
			onClick: (dataItem: any) => navigate(`${urlBase}/edit/${dataItem.Id}`),
			url: `${urlBase}/edit/:id`,
		},
		{
			type: 'deletar',
			onClick: async (dataItem: { Id: any; })=> {
				const result = await AlertaConfirmacaoModal('teste texto');
				if (result) dispatch(deleteProjeto(dataItem.Id));
			},
			url: `${urlBase}/delete/:id`,
		},
	];

	const options = {
		titulo: 'Projetos',
		service: api.getAll,
		ocultarBarraFerramentas: false,
		buscarAoRenderisar: false,
		loadingSkeleton: false,
		selected: true,
	};

	const toolbar = {
		exibirAtualizar: true,
		novo: {
			onClick: () => navigate(`${urlBase}/new`),
			route: `${urlBase}/new`,
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