import { FC, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { resetForm, selectProjeto, setProjeto } from '../store/projeto.slice';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { deleteProjeto, getProjetoById } from '../store/projeto.request';
import { useNavigate, useParams } from 'react-router-dom';
import { YupResolver } from '../../../../shared/hooks/yupResolverDefault';
import { Grid, TextField } from '@mui/material';
import { produtoEsquemaValidate } from '../projeto.validate';
import { Form } from '../../../../shared/components/form/form';
import { IFerramentasDeDetalhesProps } from '../../../../shared/types/formDados.types';
import { useSelector } from 'react-redux';

const urlListagem = '/app/geral/projeto';
interface IPropsForm {
	onSubmit?: any;
	prefix: string;
}

export const ProjetoForm: FC<IPropsForm> = ({
	onSubmit,
	prefix
}) => {
	
	useEffect(() => {
		async function init() {
			if (prefix === 'E' || prefix === 'V')
				await getProjetoById(id, dispatch);
		}
		init();
	},[]);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const projeto = useSelector((state: any) => state.projeto);
	const { id } = useParams();
	const isView = prefix === 'V';

	const {
		handleSubmit,
		formState: { errors },
		setValue
	} = useForm({
		defaultValues: useSelector((state: any) => state.projeto),
		resolver: YupResolver(produtoEsquemaValidate)
	});

	const onChange = async (data: any) => {
		await dispatch(setProjeto(data));
	};

	const toolbarForm: IFerramentasDeDetalhesProps = {
		exibeBotaoNovo: true,
		urlListagem: urlListagem,
		onClickNovo: () => navigate(`${urlListagem}/add`),
		onClickExcluir: () => deleteProjeto(id),
		onClickEditar: () =>  navigate(`${urlListagem}/edit/${id}`),
	};

	useMemo(() => {
		async function updateForm() {
			await Object.entries(projeto).
				forEach(async ([key, value]: [string, any]) => {
					await setValue(key.toString(), value);
				});
		}
		updateForm();
	},[projeto]);
	
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
			</Form>
		</>
	);
};