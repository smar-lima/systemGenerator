import { EntidadeList } from './container/entidade.list';
import { EntidadeNew } from './container/entidade.new';
import RouteType from '../../../shared/types/route.types';
import { EntidadeEdit } from './container/entidade.edit';
import { EntidadeView } from './container/entidade.view';

export const urlBaseEntidade = '/app/geral/projeto/:idProjeto/entidade';

const routes: Array<RouteType> = [
	{
		name: 'app.geral.projeto.entidade',
		path: `${urlBaseEntidade}`,
		key: `${urlBaseEntidade}`,
		accessControl: false,
		element: <EntidadeList />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projeto' }, { text: 'Entidades' }],
	},
	{
		name: 'app.geral.projeto.entidade.add',
		path: `${urlBaseEntidade}/add`,
		key: `${urlBaseEntidade}/add`,
		accessControl: false,
		element: <EntidadeNew />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projeto' }, { text: 'Entidade' },{ text: 'Inclusão' }],
	}, 
	{
		name: 'app.geral.projeto.entidade.edit',
		path: `${urlBaseEntidade}/edit/:id`,
		key: `${urlBaseEntidade}/edit/:id`,
		accessControl: false,
		element: <EntidadeEdit />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projeto' }, { text: 'Entidade' },{ text: 'Edição' }]
	},
	{
		name: 'app.geral.projeto.entidade.view',
		path: `${urlBaseEntidade}/view/:id`,
		key: `${urlBaseEntidade}/view/:id`,
		accessControl: false,
		element: <EntidadeView />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projeto' }, { text: 'Entidade' },{ text: 'Visualização' }],
	},
];

export default routes;