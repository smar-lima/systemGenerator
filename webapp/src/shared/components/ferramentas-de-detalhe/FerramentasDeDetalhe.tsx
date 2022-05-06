import { Box, Divider, Fab, IconButton, Paper, Tooltip, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import VoltarIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { green } from '@mui/material/colors';

export const FerramentasDeDetalhe: React.FC = () => {

	const theme = useTheme();

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
				<Tooltip title={'Apagar'} placement="top">
					<Fab 
						size="small" 
						color="primary" 
						aria-label="add" 
						style={{width: '35px', height: '20%'}}
					>
						<DeleteIcon/>
					</Fab>
				</Tooltip>
				<Divider orientation='vertical' style={{background: green[700]}}/>
				<Tooltip title={'Salvar'} placement="top">
					<Fab 
						size="small" 
						color="primary" 
						aria-label="add" 
						style={{width: '35px', height: '20%'}}
					>
						<SaveIcon/>
					</Fab>
				</Tooltip>
				<Divider orientation='vertical' style={{background: green[700]}}/>
				<Tooltip title={'Novo'} placement="top">
					<Fab 
						size="small" 
						color="primary" 
						aria-label="add" 
						style={{width: '35px', height: '20%'}}
					>
						<AddIcon/>
					</Fab>
				</Tooltip>
				<Divider orientation='vertical' style={{background: green[700]}}/>
				<Tooltip title={'Voltar'} placement="top">
					<Fab 
						size="small" 
						color="primary" 
						aria-label="add" 
						style={{width: '35px', height: '20%'}}
					>
						<VoltarIcon/>
					</Fab>
				</Tooltip>
			</Box>
		</Box>
	);
};