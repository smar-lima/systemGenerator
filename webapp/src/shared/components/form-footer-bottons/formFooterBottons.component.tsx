
import { Box, Button, useTheme} from '@mui/material';
import { useNavigate } from 'react-router-dom';


interface IFormFooterBottonsProps {
    isView?: boolean;
    rotaVoltar?: string;
	prefix?: string;
	urlListagem?: string;
}
export const FormFooterBottons: React.FC<IFormFooterBottonsProps> = ({
	isView = false,
	rotaVoltar,
	prefix = 'I',
	urlListagem
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
				padding={4}
				paddingX={2}
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
							? navigate(rotaVoltar) :
							urlListagem ? 
								navigate(urlListagem) : 
								navigate(-1);
					}}
				>
                    Voltar
				</Button>
				{!isView && (
					<Button
						variant='contained'
						color='primary'
						type='submit'
						size='medium'
					>
						{prefix === 'I' ? 'Cadastrar' : 'Salvar'}
					</Button>
				)}
			</Box>
		</Box>
	);
};
