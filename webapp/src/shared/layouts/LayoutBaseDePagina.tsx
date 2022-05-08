/* eslint-disable no-mixed-spaces-and-tabs */
import { Box, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FerramentasDaListagem, FerramentasDeDetalhes } from '../components';
import { PropsWithChildren, ReactNode } from 'react';

type propsBarraDeFerramentas = {
	exibir?: boolean,
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
	textoBotaoNovo?: string;
	mostrarBotaoNovo?: boolean;
	aoClicarBotaoNovo?: () => void;
	mostrarBotaoAtualizar?: boolean;
	aoClicarBotaoAtualizar?: () => void;
};

type propsBarraDeDetalhes = {
	exibir?: boolean,
	textoBotaoNovo?: string;
	exibeBotaoNovo?: boolean;
	exibeBotaoSalvar?: boolean;
	exibeBotaoExcluir?: boolean;
	exibeBotaoVoltar?: boolean;
	aoClicarBotaoNovo?: () => void;
	aoClicarBotaoSalva?: () => void;
	aoClicarBotaoVoltar?: () => void;
	aoClicarBotaoExcluir?: () => void;
};

type LayoutBaseDePaginaProps = {
    titulo?: string;
	propsBarraFerramentas?: propsBarraDeFerramentas;
	propsBarraDetalhes?: propsBarraDeDetalhes;
    children: React.ReactNode;
	loadingInicial?: boolean
};

export const LayoutBaseDePagina: React.FC<LayoutBaseDePaginaProps> = ({
	titulo,
	propsBarraFerramentas,
	propsBarraDetalhes,
	children,
	loadingInicial = false
}) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			<Box height={'100%'} display='flex' flexDirection='column' gap={1}>
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
						{loadingInicial ? <Skeleton width={'200px'} height={smDown ? '50px' : mdDown ? '70px' : '80px'}/> : titulo}
					</Typography>
				</Box>
				{propsBarraFerramentas?.exibir &&
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
						/>
					</Box>
				}
				{propsBarraDetalhes?.exibir &&
					<Box>
						<FerramentasDeDetalhes
							textoBotaoNovo={propsBarraDetalhes?.textoBotaoNovo}
							exibeBotaoNovo={propsBarraDetalhes?.exibeBotaoNovo}
							exibeBotaoSalvar={propsBarraDetalhes?.exibeBotaoSalvar}
							exibeBotaoExcluir={propsBarraDetalhes?.exibeBotaoExcluir}
							exibeBotaoVoltar={propsBarraDetalhes?.exibeBotaoVoltar}
							aoClicarBotaoNovo={propsBarraDetalhes?.aoClicarBotaoNovo}
							aoClicarBotaoSalva={propsBarraDetalhes?.aoClicarBotaoSalva}
							aoClicarBotaoVoltar={propsBarraDetalhes?.aoClicarBotaoVoltar}
							aoClicarBotaoExcluir={propsBarraDetalhes?.aoClicarBotaoExcluir}
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