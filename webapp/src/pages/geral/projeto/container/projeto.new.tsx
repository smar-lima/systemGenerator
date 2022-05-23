
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../store';
import { ProjetoForm } from '../components/projeto.form';
import { urBaseEnditade } from '../projeto.route';
import { createProjeto } from '../store/projeto.request';

export const ProjetoNew: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const onSubmit = (dados: any) => {
		createProjeto(dados, dispatch, navigate(urBaseEnditade));
	};

	return <ProjetoForm onSubmit={onSubmit} prefix='I' />;
};