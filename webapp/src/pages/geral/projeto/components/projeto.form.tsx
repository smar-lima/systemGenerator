import { Box, CardContent, FormControl, Grid, Paper, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import Form from '../../../../shared/components/form';
import * as Yup from 'yup';
import { FC, PropsWithChildren, useCallback, useEffect } from 'react';
import { projetoYupResolver } from '../projeto.validate';
import { useDispatch, useSelector } from 'react-redux';
import { selectProjeto, setProjeto } from '../store/projeto.slice';
import { useDeepCompareEffect } from 'react-use';
import { FormFooterBottons } from '../../../../shared/components';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { createProjeto } from '../store/projeto.request';

export const produtoEsquema: any = Yup.object({
	nome: Yup.string().required('Campo Obrigatório'),
	endereco: Yup.string().required('Campo Obrigatório')
});

export const ProjetoForm: any = (props: any) => {

	const theme = useTheme();

	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	const resolver = projetoYupResolver(produtoEsquema);

	const dispatch = useAppDispatch();
	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
		control,
		watch,
	} = useForm({
		defaultValues: useAppSelector(selectProjeto),
		resolver: resolver
	});

	const projeto = useAppSelector(selectProjeto);

	const onChange = async (data: any) => {
		console.log('data',data);
		await Object.entries(data).forEach(async ([key, value]: [string, any]) => {
			console.log('key: ', key);
			console.log('value: ', value);
			await setValue(key.toString(), value);
		});
		await dispatch(setProjeto(data));
		
		console.log('projeto',projeto);
	};

	useEffect(() => {
		async function init() {
			/*const {
				match: { params },
			}: any = props;
			if (params.id) {
				console.log('params', params.id);
				//await buscarProjetoById(params.id);
			}*/
		}
		init();
	}, []);

	const onSubmit = async (dados: any) => {
		console.log('dados',dados);
		createProjeto(dados, dispatch);
		//dispatch(asyncCreate(dados));
	};

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
									name='nome'
									label='Nome*'
									variant='standard'
									value={projeto.nome}
									onChange={(e) => onChange({
										...projeto,
										nome:e.target.value
									})}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									name='endereco'
									label='Endereço*'
									variant='standard'
									value={projeto.endereco}
									onChange={(e) => onChange({
										...projeto,
										endereco:e.target.value
									})}
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