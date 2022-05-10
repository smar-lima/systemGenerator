import { useEffect, useState } from 'react';
import { PaginaListagemLayout } from '../../../../shared/layouts';


type Props = {
	titulo?: string,
	children: React.ReactNode;
	loadingInicial?: boolean;
	ocultarBarraFerramentas?: boolean,
	propsBarraFerramentas?: any;
  };


export const PessoaList: React.FC<Props> = (props) => {
	console.log('props listagem',props);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 5000);
		
	},[]);

	return(
		<PaginaListagemLayout 
			titulo={props?.titulo}
			ocultarBarraFerramentas={props?.ocultarBarraFerramentas}
			propsBarraFerramentas={props?.propsBarraFerramentas}
			loadingInicial={loading}
		>
			{props.children}
		</PaginaListagemLayout>
	);
};