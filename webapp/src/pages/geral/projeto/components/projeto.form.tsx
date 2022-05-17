import { CardContent, FormControl, Grid, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import Form from '../../../../shared/components/form';
import * as Yup from 'yup';
import { FC, PropsWithChildren, useCallback, useEffect } from 'react';
import { projetoYupResolver } from '../projeto.validate';
import { useDispatch, useSelector } from 'react-redux';
import { selectProjeto, setProjeto } from '../store/projeto.slice';

export const produtoEsquema: any = Yup.object({
	nome: Yup.string().required('Campo Obrigatório'),
	endereco: Yup.string().required('Campo Obrigatório')
});

export const ProjetoForm: any = (props: any) => {

	const resolver = projetoYupResolver(produtoEsquema);

	const dispatch = useDispatch();
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({
		defaultValues: useSelector(selectProjeto),
		resolver: resolver
	});

	const projeto = useSelector(selectProjeto);

	const onChange = (data: any) => {
		dispatch(setProjeto(data));
	};

	useEffect(() => {
		console.log('props',props);
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
	};

	return (
		<>
			<h1>asdasd</h1>
			<Form
				onSubmit={handleSubmit(onSubmit)}
			>
				<Grid container item xs={12} display="flex">
					<Grid container item xs={4} display="flex">
						<FormControl >
							<Controller
								control={control}
								name="nome"
								render={({ field }) => (
									<TextField
										label="nome*"
										variant="standard"
										placeholder="nome"
										value={projeto.nome}
										onChange={(e) => onChange({
											nome:e.target.value
										})}
										InputLabelProps={{
											shrink: true,
										}}
									/>
								)}
							/>
							<p >
								{errors.nome
									? errors.nome.message
									: ''}
							</p>
						</FormControl>

						<button>Submit</button>
					</Grid>
				</Grid>

			</Form>
		</>
	);
};