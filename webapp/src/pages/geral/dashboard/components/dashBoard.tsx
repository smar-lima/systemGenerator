import { PaginaFormLayout } from '../../../../shared/layouts';

const propsBarraDetalhes = {
	exibir: true,
	textoBotaoNovo: 'Botão Novo',
	exibeBotaoNovo: true,
	exibeBotaoSalvar: true,
	exibeBotaoExcluir: true,
	exibeBotaoVoltar: true,
	aoClicarBotaoNovo: () => console.log('click Novo'),
	aoClicarBotaoSalva: () => console.log('click Salva'),
	aoClicarBotaoVoltar: () => console.log('click Volta'),
	aoClicarBotaoExcluir: () => console.log('click Excluir'),
};

const prefix = 'I';

export const Dashboard = () => {

	return (
		<PaginaFormLayout 
			titulo='Dashboard'
			propsBarraDetalhes={propsBarraDetalhes}
			prefix={prefix}
		>
            testando
		</PaginaFormLayout>
	);
};