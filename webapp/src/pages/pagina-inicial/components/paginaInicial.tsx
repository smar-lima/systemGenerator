import { LayoutBaseDePagina } from '../../../shared/layouts';

const propsBarraFerramentas = {
	exibir: true,
	textoDaBusca: 'buscar',
	mostrarInputBusca: true,
	aoMudarTextoDeBusca: () => console.log('buscar'),
	textoBotaoNovo: 'Novo Item',
	mostrarBotaoNovo:  true,
	aoClicarBotaoNovo: () => console.log('Clicado Novo'),
	mostrarBotaoAtualizar: true,
	aoClicarBotaoAtualizar: () => console.log('Clicado Atulizar'),
};

export const PaginaInicial = () => {
	return (
		<LayoutBaseDePagina 
			titulo='Pagina Inicial' 
			propsBarraFerramentas={propsBarraFerramentas}
		>
            testando
		</LayoutBaseDePagina>
	);
};