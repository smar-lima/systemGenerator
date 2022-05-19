import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../../../shared/components/form';
import { selectProjeto, setProjeto } from '../store/projeto.slice';
import { FormFooterBottons } from '../../../../shared/components/form-footer-bottons/formFooterBottons.component';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { getProjetoById } from '../store/projeto.request';
import { useParams } from 'react-router-dom';
import { YupResolver } from '../../../../shared/hooks/YupResolverDefault';
import { Box, Grid, Paper, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { produtoEsquemaValidate } from '../projeto.validate';

interface IPropsForm {
	onSubmit?: any;
	prefix: string;
}

export const ProjetoForm: FC<IPropsForm> = ({
	onSubmit,
	prefix
}) => {

	const theme = useTheme();

	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	const dispatch = useAppDispatch();
	const { id } = useParams();
	const isView = prefix === 'V';

	const {
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: useAppSelector(selectProjeto),
		resolver: YupResolver(produtoEsquemaValidate)
	});

	const projeto = useAppSelector(selectProjeto);

	const onChange = async (data: any) => {
		await Object.entries(data).
			forEach(async ([key, value]: [string, any]) => {
				await setValue(key.toString(), value);
			});
		await dispatch(setProjeto(data));
	};

	useEffect(() => {
		async function init() {
			if (prefix === 'E' || prefix === 'V') 
				await getProjetoById(id, dispatch);
		}
		init();
	}, []);

	return (
		<>
			
			<Box padding={2} display='flex' flexDirection='column' gap={1}>
				{
					//options?.titulo &&
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
							{'Cadastro de ' + 'Projeto'/*options?.titulo*/}
						</Typography>
					</Box>
				}
			</Box>
			<Box 
				component={Paper}
				marginLeft={2}
				marginRight={2}
				padding={2}
				paddingX={2}
			>
				<Form
					onSubmit={handleSubmit(onSubmit)}
				>
					<Box sx={{ flexGrow: 1 }}>
						<Grid container spacing={2}  alignItems='flex-start'>
							<Grid item xs={4}>
								<TextField
									name='name'
									label='Nome*'
									variant='standard'
									value={projeto.name}
									disabled={isView}
									onChange={(e) => onChange({
										...projeto,
										name:e.target.value
									})}
									error={errors.name}
									helperText={
										errors.name?.message
									}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									name='location'
									label='Endereço*'
									variant='standard'
									value={projeto.location}
									disabled={isView}
									onChange={(e) => onChange({
										...projeto,
										location:e.target.value
									})}
									error={errors.location}
									helperText={
										errors.location?.message
									}
								/>
							</Grid>
						</Grid>
					</Box>
					<FormFooterBottons />
				</Form>
			</Box>
		</>
	);
};