/* eslint-disable no-mixed-spaces-and-tabs */
import { Box, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FerramentasDaListagem } from '../components';

interface IPropsBarraDeFerramentas {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
	textoBotaoNovo?: string;
	mostrarBotaoNovo?: boolean;
	aoClicarBotaoNovo?: () => void;
	mostrarBotaoAtualizar?: boolean;
	aoClicarBotaoAtualizar?: () => void;
}

interface IPaginaListagemLayout {
    titulo?: string;
    ocultarBarraFerramentas?: boolean;
	propsBarraFerramentas?: IPropsBarraDeFerramentas;
    children: React.ReactNode;
	loadingInicial?: boolean
}

export const PaginaListagemLayout: React.FC<IPaginaListagemLayout> = ({
	titulo,
	ocultarBarraFerramentas = false,
	propsBarraFerramentas,
	children,
	loadingInicial = false
}) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			<Box height={'100%'} display='flex' flexDirection='column' gap={1}>
				{
					titulo &&
					<Box padding={1}  
						display='flex' 
						alignItems="center" 
						gap={1} 
						justifyContent="center" 
						height={theme.spacing(smDown ? 2 : mdDown ? 3 : 5)}
					>
						<Typography 
							whiteSpace="nowrap"
							overflow="hidden"
							textOverflow="ellipsis"
							variant={smDown ? 'h6' : mdDown ? 'h5' : 'h4'}
						>
							{'Listagem de ' + titulo}
							{/*loadingInicial ? 
								<Skeleton width={'200px'} height={smDown ? '50px' : mdDown ? '70px' : '80px'}/> : 
								'Listagem de ' + titulo
							*/}
						</Typography>
					</Box>
				}
				{!ocultarBarraFerramentas &&
					<Box>
						<FerramentasDaListagem
							textoDaBusca={propsBarraFerramentas?.textoDaBusca}
							mostrarInputBusca={propsBarraFerramentas?.mostrarInputBusca}
							textoBotaoNovo={propsBarraFerramentas?.textoBotaoNovo}
							mostrarBotaoNovo={propsBarraFerramentas?.mostrarBotaoNovo}
							mostrarBotaoAtualizar={propsBarraFerramentas?.mostrarBotaoAtualizar}
							aoMudarTextoDeBusca={propsBarraFerramentas?.aoMudarTextoDeBusca}
							aoClicarBotaoNovo={propsBarraFerramentas?.aoClicarBotaoNovo}
							aoClicarBotaoAtualizar={propsBarraFerramentas?.aoClicarBotaoAtualizar}
							loadingInicial={loadingInicial}
						/>
					</Box>
				}
				<Box flex={1} overflow={'auto'}>
					{children}
				</Box>
			</Box>
		</>
	);
};