import { useNavigate } from 'react-router-dom';
import { PessoaList } from '../container/pessoa.list';

export const PessoaGrid: React.FC = () => {

	const navigate = useNavigate();

	const propsBarraFerramentas = {
		aoMudarTextoDeBusca: () => console.log('buscar'),
		aoClicarBotaoNovo: () => navigate('/app/geral/pessoa/add'),
		aoClicarBotaoAtualizar: () => console.log('Clicado Atulizar')
	};

	const props = {
		titulo: 'Pessoas',
		loadingInicial: false,
		ocultarBarraFerramentas: false,
		propsBarraFerramentas
	};

	return (
		<PessoaList
			{...props}
		>
			<h1>Grid aqui</h1>
		</PessoaList>
	);
};