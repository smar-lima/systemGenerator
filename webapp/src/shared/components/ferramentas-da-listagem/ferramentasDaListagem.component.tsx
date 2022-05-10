import { Box, IconButton, Paper, TextField, Tooltip, useTheme, Divider, Skeleton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SyncIcon from '@mui/icons-material/Sync';

import { Environment } from '../../environment';
interface IFerramentasDaListagemProps {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
	textoBotaoNovo?: string;
	mostrarBotaoNovo?: boolean;
	aoClicarBotaoNovo?: () => void;
	mostrarBotaoAtualizar?: boolean;
	aoClicarBotaoAtualizar?: () => void;
	loadingInicial?: boolean
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
	textoDaBusca = '',
	mostrarInputBusca  = true,
	aoMudarTextoDeBusca,
	textoBotaoNovo = 'Novo',
	mostrarBotaoNovo = true,
	aoClicarBotaoNovo,
	mostrarBotaoAtualizar = true,
	aoClicarBotaoAtualizar,
	loadingInicial = false
}) => {

	const theme = useTheme();

	return (
		<>
			{(!loadingInicial) && (
				<Box 
					gap={1}
					padding={2}
					paddingX={2}
					display='flex'
					alignItems={'center'}
					height={theme.spacing(2)} 
					component={Paper}
				>
					{mostrarInputBusca && (
						<Box width={'80%'}>
							<TextField 
								size='small'
								value={textoDaBusca}
								fullWidth
								onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
								placeholder={Environment.INPUT_DE_BUSCA}
							/>
						</Box>
					)}
					<Box flex={1} display="flex" justifyContent="end">
						{mostrarBotaoAtualizar && 
							<>
							
								<Box display={'flex'}>
									<Tooltip title={'Atualizar'}>
										<IconButton
											color="primary"
											style={{padding: '2px'}}
											onClick={aoClicarBotaoAtualizar}
										>
											<SyncIcon/>
										</IconButton>
									</Tooltip>
									<Divider orientation='vertical' style={{marginLeft:'10px', marginRight: '10px'}}/>
								</Box>
							</>
						}
						{mostrarBotaoNovo && (
							<Tooltip title={textoBotaoNovo}>
								<IconButton
									color="primary"
									style={{padding: '2px'}}
									onClick={aoClicarBotaoNovo}
								>
									<AddIcon/>
								</IconButton>
							</Tooltip>
						)}
					</Box>
				</Box>
			)}
			{loadingInicial && (
				<Box 
					gap={1}
					padding={2}
					paddingX={2}
					display='flex'
					alignItems={'center'}
					height={theme.spacing(2)} 
				>
					<Skeleton width={'100%'} height={'80px'} />
				</Box>
			)}
		</>
	);
};