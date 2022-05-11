import { useDispatch, useSelector } from 'react-redux';
import { FormFooterBottons } from '../../../../shared/components';
import { PessoaNew } from '../container/pessoa.new';
import { setPessoa, resetPessoa, selectPessoa } from '../store/pessoa.slice';

export const PessoaForm: React.FC = () => {

	const dispatch = useDispatch();

	const testeEstado = useSelector(selectPessoa);
	
	const propsBarraDetalhes = {
		aoClicarBotaoSalva: () => dispatch(setPessoa({id:9999})),
		aoClicarBotaoVoltar: () => dispatch(resetPessoa()),
		aoClicarBotaoExcluir: () => console.log('testeEstado',testeEstado),
	};

	const props = {
		titulo: 'Pessoa',
		loadingInicial: false,
		ocultarBarraFerramentas: false,
		propsBarraDetalhes
	};

	return (
		<PessoaNew
			{...props}
		>
			<h1>Form aqui</h1>
			<FormFooterBottons />
		</PessoaNew>
	);
};