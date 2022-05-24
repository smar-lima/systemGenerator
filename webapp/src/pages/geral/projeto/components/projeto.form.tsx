import { FC, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { resetForm, setProjeto } from '../store/projeto.slice';
import { useAppDispatch } from '../../../../store';
import { deleteProjeto, getProjetoById } from '../store/projeto.request';
import { useNavigate, useParams } from 'react-router-dom';
import { YupResolver } from '../../../../shared/hooks/yupResolverDefault';
import { Grid, TextField } from '@mui/material';
import { produtoEsquemaValidate } from '../projeto.validate';
import { Form, updateForm } from '../../../../shared/components/form/form.componenet';
import { IFerramentasDeDetalhesProps, IPropsForm } from '../../../../shared/types/formDados.types';
import { useSelector } from 'react-redux';
import { urBaseEnditade } from '../projeto.route';

export const ProjetoForm: FC<IPropsForm> = ({
	onSubmit,
	prefix
}) => {

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const projeto = useSelector((state: any) => state.projeto);
	const { id } = useParams();
	const isView = prefix === 'V';
	
	useEffect(() => {
		async function init() {
			if (prefix === 'E' || prefix === 'V')
				await getProjetoById(id, dispatch);
		}
		init();
	},[]);

	const {
		handleSubmit,
		formState: { errors },
		setValue
	} = useForm({
		defaultValues: useSelector((state: any) => state.projeto),
		resolver: YupResolver(produtoEsquemaValidate)
	});

	useMemo(() => {
		updateForm(projeto, setValue);
	},[projeto]);

	const onChange = async (data: any) => {
		await dispatch(setProjeto(data));
	};

	const toolbarForm: IFerramentasDeDetalhesProps = {
		exibeBotaoNovo: true,
		urlListagem: urBaseEnditade,
		onClickNovo: () => navigate(`${urBaseEnditade}/add`),
		onClickExcluir: () => deleteProjeto(id),
		onClickEditar: () =>  navigate(`${urBaseEnditade}/edit/${id}`),
	};
	
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