import { ProjetoList } from './container/projeto.list';
import { ProjetoNew } from './container/projeto.new';
import RouteType from '../../../shared/types/route.types';
import { ProjetoEdit } from './container/projeto.edit';
import { ProjetoView } from './container/projeto.view';

const base = '/app/geral/projeto';

const routes: Array<RouteType> = [
	{
		name: 'app.geral.projeto',
		path: `${base}`,
		accessControl: false,
		element: <ProjetoList />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projetos' }],
	},
	{
		name: 'app.geral.projeto.add',
		path: `${base}/add`,
		accessControl: false,
		element: <ProjetoNew />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projeto' },{ text: 'Inclusão' }],
	}, 
	{
		name: 'app.geral.projeto.edit',
		path: `${base}/edit/:id`,
		accessControl: false,
		element: <ProjetoEdit />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projeto' },{ text: 'Edição' }]
	},
	{
		name: 'app.geral.projeto.view',
		path: `${base}/view/:id`,
		accessControl: false,
		element: <ProjetoView />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projeto' },{ text: 'Visualização' }],
	},
];

export default routes;