import { useNavigate } from 'react-router-dom';
import { CidadeList } from '../container/cidade.list';

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

	return (
		<CidadeList
			{...props}
		>
			<h1>Grid aqui</h1>
		</CidadeList>
	);
};