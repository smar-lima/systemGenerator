import { Box, Divider, Fab, Skeleton, Tooltip, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import VoltarIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { red } from '@mui/material/colors';
import { useAppThemeContext } from '../../contexts';

interface IFerramentasDeDetalhesProps {
	textoBotaoNovo?: string;
	exibeBotaoNovo?: boolean;
	exibeBotaoSalvar?: boolean;
	exibeBotaoExcluir?: boolean;
	exibeBotaoVoltar?: boolean;
	aoClicarBotaoNovo?: () => void;
	aoClicarBotaoSalva?: () => void;
	aoClicarBotaoVoltar?: () => void;
	aoClicarBotaoExcluir?: () => void;
	loadingInicial?: boolean;
}

export const FerramentasDeDetalhes: React.FC<IFerramentasDeDetalhesProps> = ({
	textoBotaoNovo = 'Novo',
	exibeBotaoNovo = false,
	exibeBotaoSalvar = true,
	exibeBotaoExcluir = true,
	exibeBotaoVoltar = true,
	aoClicarBotaoNovo,
	aoClicarBotaoSalva,
	aoClicarBotaoVoltar,
	aoClicarBotaoExcluir,
	loadingInicial = false
}) => {

	const theme = useTheme();

	const { themeName } = useAppThemeContext();

	return (
		<Box 
			display='flex'
			alignItems={'center'}
			justifyContent={'end'}
		>
			<Box 
				gap={1}
				padding={1.5}
				paddingX={1}
				display='flex'
				alignItems={'center'}
				height={theme.spacing(2)}
				width={'max-content'}
			>
				{(exibeBotaoExcluir && !loadingInicial) && (
					<>
						<Tooltip title={'Excluir'} placement="top">
							<Fab 
								size="small" 
								aria-label="remove" 
								style={{width: '35px', height: '20%', background: red[700], color:'white'}}
								onClick={aoClicarBotaoExcluir}
							>
								<DeleteIcon/>
							</Fab>
						</Tooltip>
					</>
				)}
				{loadingInicial && (
					<>
						<Skeleton width={'40px'} height={'40px'} variant="circular"/>
						<Divider orientation='vertical'/>
					</>
				)}
				{(exibeBotaoSalvar && !loadingInicial) && (
					<>
						<Tooltip title={'Salvar'} placement="top">
							<Fab 
								size="small" 
								aria-label="save" 
								style={{width: '35px', height: '20%'}}
								onClick={aoClicarBotaoSalva}
							>
								<SaveIcon/>
							</Fab>
						</Tooltip>
					</>
				)}
				{loadingInicial && (
					<>
						<Skeleton width={'40px'} height={'40px'} variant="circular"/>
						<Divider orientation='vertical'/>
					</>
				)}
				{(exibeBotaoNovo && !loadingInicial) && (
					<>
						<Tooltip title={textoBotaoNovo ? textoBotaoNovo : 'Novo'} placement="top">
							<Fab 
								size="small" 
								aria-label="new" 
								style={{width: '35px', height: '20%'}}
								onClick={aoClicarBotaoNovo}
							>
								<AddIcon/>
							</Fab>
						</Tooltip>
					</>
				)}
				{loadingInicial && (
					<>
						<Skeleton width={'40px'} height={'40px'} variant="circular"/>
						<Divider orientation='vertical'/>
					</>
				)}
				{(exibeBotaoVoltar && !loadingInicial) && (
					<>
						<Tooltip title={'Voltar'} placement="top">
							<Fab 
								size="small" 
								aria-label="back" 
								style={{width: '35px', height: '20%'}}
								onClick={aoClicarBotaoVoltar}
							>
								<VoltarIcon/>
							</Fab>
						</Tooltip>
					</>
				)}
				{loadingInicial && (
					<Skeleton width={'40px'} height={'40px'} variant="circular"/>
				)}
			</Box>
		</Box>
	);
};