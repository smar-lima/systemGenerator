import { useEffect, useState } from 'react';
import { PaginaFormLayout } from '../../../../shared/layouts';

type Props = {
	titulo?: string,
	children: React.ReactNode;
	loadingInicial?: boolean;
	propsBarraDetalhes?: any;
    exibirBarraDetalhes?: boolean;
  };

const prefix = 'E';

export const PessoaEdit: React.FC<Props> = (props) => {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 5000);
		
	},[]);

	return(
		<PaginaFormLayout 
			titulo={props?.titulo}
			propsBarraDetalhes={props?.propsBarraDetalhes}
			loadingInicial={loading}
			prefix={prefix}
		>
			{props.children}
		</PaginaFormLayout>
	);
};