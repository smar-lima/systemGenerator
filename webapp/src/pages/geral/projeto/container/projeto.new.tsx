
import { useAppDispatch } from '../../../../store';
import { ProjetoForm } from '../components/projeto.form';
import { createProjeto } from '../store/projeto.request';

export const ProjetoNew: React.FC = () => {
	const dispatch = useAppDispatch();
	const onSubmit = (dados: any) => {
		createProjeto(dados, dispatch);
	};

	return <ProjetoForm onSubmit={onSubmit} prefix='I' />;
};