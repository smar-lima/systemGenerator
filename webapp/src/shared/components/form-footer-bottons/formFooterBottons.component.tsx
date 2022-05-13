
import { Box, Button, useTheme} from '@mui/material';
import { useNavigate } from 'react-router-dom';


interface IFormFooterBottonsProps {
    desabilitaSubmit?: boolean;
    rotaVoltar?: string
}
export const FormFooterBottons: React.FC<IFormFooterBottonsProps> = ({
	desabilitaSubmit = false,
	rotaVoltar
}) => {

	const navigate = useNavigate();


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
				<Button
					size='medium'
					variant='contained'
					color='secondary'
					style={{marginRight: '15px'}}
					onClick={() => {
						rotaVoltar
							? ''
							: navigate(-1);
					}}
				>
                    Voltar
				</Button>
				{!desabilitaSubmit && (
					<Button
						variant='contained'
						color='primary'
						type='submit'
						size='medium'
					>
                        Confirmar
					</Button>
				)}
			</Box>
		</Box>
	);
};
