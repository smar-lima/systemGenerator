import { EntidadeList } from './container/entidade.list';
import { EntidadeNew } from './container/entidade.new';
import RouteType from '../../../shared/types/route.types';
import { EntidadeEdit } from './container/entidade.edit';
import { EntidadeView } from './container/entidade.view';

export const urlBase = '/app/geral/projeto/:idProjeto/entidade';

const entidadeRoutes: Array<RouteType> = [
	{
		name: 'app.geral.projeto.entidade',
		path: `${urlBase}`,
		key: `${urlBase}`,
		accessControl: false,
		element: <EntidadeList />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projeto' }, { text: 'Entidades' }],
	},
	{
		name: 'app.geral.projeto.entidade.add',
		path: `${urlBase}/add`,
		key: `${urlBase}/add`,
		accessControl: false,
		element: <EntidadeNew />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projeto' }, { text: 'Entidade' },{ text: 'Inclusão' }],
	}, 
	{
		name: 'app.geral.projeto.entidade.edit',
		path: `${urlBase}/edit/:id`,
		key: `${urlBase}/edit/:id`,
		accessControl: false,
		element: <EntidadeEdit />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projeto' }, { text: 'Entidade' },{ text: 'Edição' }]
	},
	{
		name: 'app.geral.projeto.entidade.view',
		path: `${urlBase}/view/:id`,
		key: `${urlBase}/view/:id`,
		accessControl: false,
		element: <EntidadeView />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projeto' }, { text: 'Entidade' },{ text: 'Visualização' }],
	},
];

export default entidadeRoutes;