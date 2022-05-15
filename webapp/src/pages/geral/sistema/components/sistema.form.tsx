import { SistemaNew } from '../container/sistema.new';
import { FormFooterBottons } from '../../../../shared/components';

export const SistemaForm: React.FC = () => {

	const propsBarraDetalhes = {
		aoClicarBotaoSalva: () => console.log('salvar'),
		aoClicarBotaoVoltar: () => console.log('voltar'),
		aoClicarBotaoExcluir: () => console.log('excluir'),
	};

	const props = {
		titulo: 'Sistema',
		loadingInicial: false,
		ocultarBarraFerramentas: false,
		propsBarraDetalhes
	};

	return (
		<SistemaNew
			{...props}
		>
			<h1>Form aqui</h1>
			<FormFooterBottons />
		</SistemaNew>
	);
};