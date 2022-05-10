import { PaginaFormLayout } from '../../../shared/layouts';

const propsBarraDetalhes = {
	aoClicarBotaoNovo: () => console.log('click Novo'),
	aoClicarBotaoSalva: () => console.log('click Salva'),
	aoClicarBotaoVoltar: () => console.log('click Volta'),
	aoClicarBotaoExcluir: () => console.log('click Excluir'),
};

const prefix = 'I';

export const PaginaInicial = () => {
	return (
		<PaginaFormLayout 
			titulo='Pagina Inicial' 
			propsBarraDetalhes={propsBarraDetalhes}
			ocultarBarraDetalhes={false}
			prefix={prefix}
		>
            testando
		</PaginaFormLayout>
	);
};