import { CidadeNew } from '../container/cidade.new';
import { FormFooterBottons } from '../../../../shared/components';

export const CidadeForm: React.FC = () => {

	const propsBarraDetalhes = {
		aoClicarBotaoSalva: () => console.log('salvar'),
		aoClicarBotaoVoltar: () => console.log('voltar'),
		aoClicarBotaoExcluir: () => console.log('excluir'),
	};

	const props = {
		titulo: 'Cidade',
		loadingInicial: false,
		ocultarBarraFerramentas: false,
		propsBarraDetalhes
	};

	return (
		<CidadeNew
			{...props}
		>
			<h1>Form aqui</h1>
			<FormFooterBottons />
		</CidadeNew>
	);
};