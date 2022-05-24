
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../../store';
import { EntidadeForm } from '../components/entidade.form';
import { urlBaseEntidade } from '../entidade.route';
import { updateEntidade } from '../store/entidade.request';

export const EntidadeEdit: React.FC = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const onSubmit = (dados: any) => {
		updateEntidade(id, dados, dispatch, navigate(urlBaseEntidade));
	};

	return <EntidadeForm onSubmit={onSubmit} prefix='E' />;
};