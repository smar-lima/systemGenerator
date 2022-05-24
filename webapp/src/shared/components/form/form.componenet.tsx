import { 
	Box, 
	Grid, 
	Paper, 
	Typography, 
	useMediaQuery, 
	useTheme 
} from '@mui/material';
import { IFerramentasDeDetalhesProps } from '../../types/formDados.types';
import { FerramentasDeDetalhes } from '../ferramentas-de-detalhe/ferramentaDetalhe.component';
import { FormFooterBottons } from '../form-footer-bottons/formFooterBottons.component';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../store';

interface IForm {
    children?: any;
	onSubmit?: any;
	prefix?: string;
	entidade?: any;
	titulo?: string;
	toolbar?: IFerramentasDeDetalhesProps;
	serviceGetById?: () => Promise<void>;
	resetForm: any;
}

export const Form: React.FC<IForm> = ({
	children,
	toolbar,
	onSubmit,
	prefix,
	titulo,
	resetForm,
}) => {

	const theme = useTheme();
	const dispatch = useAppDispatch();

	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	const isView = prefix === 'V';

	const prefixTitulo = prefix === 'I' ? 'Cadastro' : prefix === 'E' ? 'Edição' : 'Visualização';

	const newTollbar: IFerramentasDeDetalhesProps = {
		...toolbar,
		exibeBotaoNovo: prefix === 'I' ? false : toolbar?.exibeBotaoNovo,
		onClickNovo: toolbar?.onClickNovo,
		onClickVoltar: toolbar?.onClickVoltar,
		onClickExcluir: toolbar?.onClickExcluir,
		prefix: prefix
	};
	
	useEffect(() => {
		return () => {
			dispatch(resetForm());
		};
	},[]);
	

	return (
		<>
			<div className={'form-container'}>
				<Box padding={2} display='flex' flexDirection='column' gap={1}>
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
								{
									prefixTitulo + 
									' de ' + 
									titulo
								}
							</Typography>
						</Box>
					}
				</Box>
				{
					toolbar &&
					<FerramentasDeDetalhes
						{...newTollbar}
					/>
				}
				<form
					onSubmit={onSubmit}
				>
					<Box 
						component={Paper}
						marginLeft={2}
						marginRight={2}
						padding={2}
						paddingX={2}
					>
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2}  alignItems='flex-start'>
								{children}
							</Grid>
						</Box>
					</Box>
					<FormFooterBottons urlListagem={toolbar?.urlListagem} isView={isView}/>
				</form>
			</div>
		</>
	);
};

export const updateForm = async (data: any, setValue:any) => {
	await Object.entries(data).
		forEach(async ([key, value]: [string, any]) => {
			await setValue(key.toString(), value);
		});
};