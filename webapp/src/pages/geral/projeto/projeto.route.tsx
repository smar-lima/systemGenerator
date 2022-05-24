import { ProjetoList } from './container/projeto.list';
import { ProjetoNew } from './container/projeto.new';
import RouteType from '../../../shared/types/route.types';
import { ProjetoEdit } from './container/projeto.edit';
import { ProjetoView } from './container/projeto.view';

export const urBaseEnditade = '/app/geral/projeto';

const routes: Array<RouteType> = [
	{
		name: 'app.geral.projeto',
		path: `${urBaseEnditade}`,
		key: `${urBaseEnditade}`,
		accessControl: false,
		element: <ProjetoList />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projetos' }],
	},
	{
		name: 'app.geral.projeto.add',
		path: `${urBaseEnditade}/add`,
		key: `${urBaseEnditade}/add`,
		accessControl: false,
		element: <ProjetoNew />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projeto' },{ text: 'Inclusão' }],
	}, 
	{
		name: 'app.geral.projeto.edit',
		path: `${urBaseEnditade}/edit/:id`,
		key: `${urBaseEnditade}/edit/:id`,
		accessControl: false,
		element: <ProjetoEdit />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projeto' },{ text: 'Edição' }]
	},
	{
		name: 'app.geral.projeto.view',
		path: `${urBaseEnditade}/view/:id`,
		key: `${urBaseEnditade}/view/:id`,
		accessControl: false,
		element: <ProjetoView />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projeto' },{ text: 'Visualização' }],
	},
];

export default routes;