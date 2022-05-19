
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../../store';
import { ProjetoForm } from '../components/projeto.form';
import { updateProjeto } from '../store/projeto.request';

export const ProjetoEdit: React.FC = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const onSubmit = (dados: any) => {
		updateProjeto(id, dados, dispatch);
	};

	return <ProjetoForm onSubmit={onSubmit} prefix='E' />;
};