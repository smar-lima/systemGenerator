
import { FormFooterBottons } from '../../../../shared/components';
import { PessoaNew } from '../container/pessoa.new';

export const PessoaForm: React.FC = () => {

	const propsBarraDetalhes = {
		aoClicarBotaoSalva: () => console.log('salvar'),
		aoClicarBotaoVoltar: () => console.log('voltar'),
		aoClicarBotaoExcluir: () => console.log('excluir'),
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