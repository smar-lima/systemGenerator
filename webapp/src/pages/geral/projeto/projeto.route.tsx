import { ProjetoGrid } from './components/projeto.grid';
import { ProjetoForm } from './components/projeto.form';
import RouteType from '../../../shared/types/route.types';

const base = '/app/geral/projeto';

const routes: Array<RouteType> = [
	{
		name: 'app.geral.projeto',
		path: `${base}`,
		accessControl: false,
		element: <ProjetoGrid />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projetos' }],
	},
	{
		name: 'app.geral.projeto.add',
		path: `${base}/add`,
		accessControl: false,
		element: <ProjetoForm />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projeto' },{ text: 'Inclusão' }],
	}, 
	{
		name: 'app.geral.projeto.edit',
		path: `${base}/addedit/:id`,
		accessControl: false,
		element: <ProjetoForm />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projeto' },{ text: 'Edição' }]
	},
	{
		name: 'app.geral.projeto.view',
		path: `${base}/view/:id`,
		accessControl: false,
		element: <ProjetoForm />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Projeto' },{ text: 'Visualização' }],
	},
];

export default routes;