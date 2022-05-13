import { useNavigate } from 'react-router-dom';
import { CidadeList } from '../container/cidade.list';
import { Table } from '../../../../shared/components/table/table';
import GridCidadeDDados from '../cidade.table.ddados';

export const CidadeGrid: React.FC = () => {

	const navigate = useNavigate();

	const propsBarraFerramentas = {
		aoMudarTextoDeBusca: () => console.log('buscar'),
		textoBotaoNovo: 'Novo Item',
		aoClicarBotaoNovo: () => navigate('/app/geral/cidade/add'),
		aoClicarBotaoAtualizar: () => console.log('Clicado Atulizar')
	};

	const props = {
		titulo: 'Cidades',
		loadingInicial: false,
		ocultarBarraFerramentas: false,
		propsBarraFerramentas
	};

	const gridProps = {
		DDadosGrid: GridCidadeDDados,
		multSelect: true
	};

	return (
		<CidadeList
			{...props}
		>
			<Table 
				{...gridProps}
			/>
		</CidadeList>
	);
};