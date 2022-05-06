import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';
import { FerramentasDaListagem } from '../../shared/components';

export const PaginaInicial = () => {

	return (
		<LayoutBaseDePagina 
			titulo='Pagina Inicial' 
			barraDeFerramentas={(
				<FerramentasDaListagem
					textoBotaoNovo='Novo'
					mostrarInputBusca
				/>
			)}
		>
            testando
		</LayoutBaseDePagina>
	);
};