import { LayoutBaseDePagina } from '../../../shared/layouts';

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

export const Dashboard = () => {

	return (
		<LayoutBaseDePagina 
			titulo='Dashboard'
			propsBarraDetalhes={propsBarraDetalhes}
		>
            testando
		</LayoutBaseDePagina>
	);
};