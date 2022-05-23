
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../../store';
import { ProjetoForm } from '../components/projeto.form';
import { urBaseEnditade } from '../projeto.route';
import { updateProjeto } from '../store/projeto.request';

export const ProjetoEdit: React.FC = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const onSubmit = (dados: any) => {
		updateProjeto(id, dados, dispatch, navigate(urBaseEnditade));
	};

	return <ProjetoForm onSubmit={onSubmit} prefix='E' />;
};