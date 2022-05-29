import { FC, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { resetForm, setEntidade } from '../store/entidade.slice';
import { useAppDispatch } from '../../../../store';
import { deleteEntidade, getEntidadeById } from '../store/entidade.request';
import { useNavigate, useParams } from 'react-router-dom';
import { YupResolver } from '../../../../shared/hooks/yupResolverDefault';
import { Grid, TextField } from '@mui/material';
import { entidadeEsquemaValidate } from '../entidade.validate';
import { Form, updateForm } from '../../../../shared/components/form/form.componenet';
import { IFerramentasDeDetalhesProps, IPropsForm } from '../../../../shared/types/formDados.types';
import { useSelector } from 'react-redux';
import { urlBase } from '../entidade.route';

export const EntidadeForm: FC<IPropsForm> = ({
	onSubmit,
	prefix
}) => {

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const entidade = useSelector((state: any) => state.entidade);
	const { id } = useParams();
	const isView = prefix === 'V';
	
	useEffect(() => {
		async function init() {
			if (prefix === 'E' || prefix === 'V')
				await getEntidadeById(id, dispatch);
		}
		init();
	},[]);

	const {
		handleSubmit,
		formState: { errors },
		setValue
	} = useForm({
		defaultValues: useSelector((state: any) => state.entidade),
		resolver: YupResolver(entidadeEsquemaValidate)
	});

	useMemo(() => {
		updateForm(entidade, setValue);
	},[entidade]);

	const onChange = async (data: any) => {
		await dispatch(setEntidade(data));
	};

	const toolbarForm: IFerramentasDeDetalhesProps = {
		exibeBotaoNovo: true,
		urlListagem: urlBase,
		onClickNovo: () => navigate(`${urlBase}/add`),
		onClickExcluir: () => deleteEntidade(id),
		onClickEditar: () =>  navigate(`${urlBase}/edit/${id}`),
	};
	
	return (
		<>
			<Form
				onSubmit={handleSubmit(onSubmit)}
				titulo={'Entidade'}
				prefix={prefix}
				toolbar={toolbarForm}
				resetForm={resetForm}
			>
				<Grid item xs={6}>
					<TextField
						label='Nome*'
						variant='standard'
						value={entidade.nome}
						disabled={isView}
						onChange={(e) => onChange({
							...entidade,
							nome:e.target.value
						})}
						error={errors.nome}
						helperText={
							errors.nome?.message
						}
						
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						label='Projeto*'
						variant='standard'
						value={entidade.projeto}
						disabled={isView}
						onChange={(e) => onChange({
							...entidade,
							projeto:e.target.value
						})}
						error={errors.projeto}
						helperText={
							errors.projeto?.message
						}
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						label='Feature*'
						variant='standard'
						value={entidade.feature}
						disabled={isView}
						onChange={(e) => onChange({
							...entidade,
							feature:e.target.value
						})}
						error={errors.feature}
						helperText={
							errors.feature?.message
						}
					/>
				</Grid>
			</Form>
		</>
	);
};