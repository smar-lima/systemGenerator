import { useNavigate } from 'react-router-dom';
import { SistemaList } from '../container/sistema.list';
import {Table} from '../../../../shared/components/table/table';
import GridSistemaDDados from '../sistema.table.ddados';
import api from '../service/sistema.api';

export const SistemaGrid: React.FC = () => {

	const navigate = useNavigate();

	const propsBarraFerramentas = {
		aoMudarTextoDeBusca: () => console.log('buscar'),
		textoBotaoNovo: 'Novo Item',
		aoClicarBotaoNovo: () => navigate('/app/geral/sistema/add'),
		aoClicarBotaoAtualizar: () => console.log('Clicado Atulizar')
	};

	const props = {
		titulo: 'Sistemas',
		loadingInicial: false,
		ocultarBarraFerramentas: false,
		propsBarraFerramentas
	};

	const gridProps = {
		gridDDados: GridSistemaDDados,
		multSelect: true,
		api,
		titulo: 'Sistema',
		loadingSkeleton: false
	};

	return(<div></div>);
};