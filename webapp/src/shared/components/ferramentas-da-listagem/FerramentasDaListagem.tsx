import { Box, IconButton, Paper, TextField, Tooltip, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { green } from '@mui/material/colors';
import { useAppThemeContext } from '../../contexts';

interface IFerramentasDaListagemProps {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
	textoBotaoNovo?: string;
	mostrarBotaoNovo?: boolean;
	aoClicarBotaoNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
	textoDaBusca = '',
	mostrarInputBusca  = false,
	aoMudarTextoDeBusca,
	textoBotaoNovo = 'Novo',
	mostrarBotaoNovo = true,
	aoClicarBotaoNovo
}) => {
	const { themeName } = useAppThemeContext();

	const theme = useTheme();

	return (
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
						placeholder='Pesquisar...'
					/>
				</Box>
			)}

			<Box flex={1} display="flex" justifyContent="end">
				{mostrarBotaoNovo && (
					<Tooltip title={textoBotaoNovo}>
						<IconButton
							style={{background: green[700], color:'white', padding: '1px'}}
							onClick={aoClicarBotaoNovo}
						>
							<AddIcon/>
						</IconButton>
					</Tooltip>
				)}
			</Box>
		</Box>
	);
};