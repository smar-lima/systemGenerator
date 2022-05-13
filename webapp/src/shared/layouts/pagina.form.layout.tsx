import { Box, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FerramentasDeDetalhes } from '../components';

type propsBarraDeDetalhes = {
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
	propsBarraDetalhes?: propsBarraDeDetalhes;
    children: React.ReactNode;
	loadingInicial?: boolean;
	ocultarBarraDetalhes?: boolean;
	prefix:string
};

export const PaginaFormLayout: React.FC<LayoutBaseDePaginaProps> = ({
	titulo,
	propsBarraDetalhes,
	children,
	loadingInicial = false,
	ocultarBarraDetalhes = false,
	prefix
}) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	const prefixUniform = prefix.toUpperCase();

	return (
		<>
			<Box height={'100%'} display='flex' flexDirection='column' gap={1}>
				{ titulo &&
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
							variant={smDown ? 'h6' : mdDown ? 'h6' : 'h5'}
						>
							{(prefixUniform === 'I' ? 'Cadastro de ' : prefixUniform === 'E' ? 'Edição de ' : 'Visualização de ') + 
								titulo
							}
							{/*loadingInicial ? 
								<Skeleton width={'200px'} height={smDown ? '50px' : mdDown ? '70px' : '80px'}/> : 
								(prefixUniform === 'I' ? 'Cadastro de ' : prefixUniform === 'E' ? 'Edição de ' : 'Visualização de ') + 
								titulo
							*/}
						</Typography>
					</Box>
				}
				{!ocultarBarraDetalhes &&
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