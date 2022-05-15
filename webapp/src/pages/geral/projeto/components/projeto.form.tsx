import { ProjetoNew } from '../container/projeto.new';
import { FormFooterBottons } from '../../../../shared/components';

export const ProjetoForm: React.FC = () => {

	const propsBarraDetalhes = {
		aoClicarBotaoSalva: () => console.log('salvar'),
		aoClicarBotaoVoltar: () => console.log('voltar'),
		aoClicarBotaoExcluir: () => console.log('excluir'),
	};

	const props = {
		titulo: 'Projeto',
		loadingInicial: false,
		ocultarBarraFerramentas: false,
		propsBarraDetalhes
	};

	return (
		<ProjetoNew
			{...props}
		>
			<h1>Form aqui</h1>
			<FormFooterBottons />
		</ProjetoNew>
	);
};