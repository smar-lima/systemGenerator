import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { resetForm, selectProjeto, setProjeto } from '../store/projeto.slice';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { deleteProjeto, getProjetoById } from '../store/projeto.request';
import { useNavigate, useParams } from 'react-router-dom';
import { YupResolver } from '../../../../shared/hooks/YupResolverDefault';
import { Grid, TextField } from '@mui/material';
import { produtoEsquemaValidate } from '../projeto.validate';
import { Form } from '../../../../shared/components/form/form';
import { IFerramentasDeDetalhesProps } from '../../../../shared/types/formDados.types';

interface IPropsForm {
	onSubmit?: any;
	prefix: string;
}

export const ProjetoForm: FC<IPropsForm> = ({
	onSubmit,
	prefix
}) => {

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const projeto = useAppSelector(selectProjeto);
	const { id } = useParams();
	const isView = prefix === 'V';

	const {
		handleSubmit,
		register,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: useAppSelector(selectProjeto),
		resolver: YupResolver(produtoEsquemaValidate)
	});

	const onChange = async (data: any) => {
		await dispatch(setProjeto(data));
	};

	const toolbarForm: IFerramentasDeDetalhesProps = {
		exibeBotaoNovo: true,
		onClickNovo: () => navigate('/app/geral/projeto/add'),
		onClickExcluir: () => deleteProjeto(id),
	};
	
	useEffect(() => {
		async function init() {
			if (prefix === 'E' || prefix === 'V')
				await getProjetoById(id, dispatch);
		}
		init();
	},[]);
	/*
	useEffect(() => {
		async function updateForm() {
			console.log('projeto: ', projeto);
			await Object.entries(projeto).
				forEach(async ([key, value]: [string, any]) => {
					await setValue(key.toString(), value);
				});
		}
		updateForm();
	},[projeto]);
*/
	return (
		<>
			<Form
				onSubmit={handleSubmit(onSubmit)}
				titulo={'Projeto'}
				prefix={prefix}
				toolbar={toolbarForm}
				resetForm={resetForm}
			>
				<Grid item xs={6}>
					<TextField
						{...register('name')}
						name='name'
						label='Nome*'
						variant='standard'
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
						{...register('location')}
						name='location'
						label='Endereço*'
						variant='standard'
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
			</Form>
		</>
	);
};