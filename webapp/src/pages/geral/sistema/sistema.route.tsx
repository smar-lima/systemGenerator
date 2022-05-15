import { SistemaGrid } from '../../../pages/geral/sistema/components/sistema.grid';
import { SistemaForm } from '../../../pages/geral/sistema/components/sistema.form';
import RouteType from '../../../shared/types/route.types';

const base = '/app/geral/sistema';

const routes: Array<RouteType> = [
	{
		name: 'app.geral.sistema',
		path: `${base}`,
		accessControl: false,
		element: <SistemaGrid />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Sistema' }],
	},
	{
		name: 'app.geral.sistema.add',
		path: `${base}/add`,
		accessControl: false,
		element: <SistemaForm />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Sistema' },{ text: 'Inclusão' }],
	}, 
	{
		name: 'app.geral.sistema.edit',
		path: `${base}/addedit/:id`,
		accessControl: false,
		element: <SistemaForm />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Sistema' },{ text: 'Edição' }]
	},
	{
		name: 'app.geral.sistema.view',
		path: `${base}/view/:id`,
		accessControl: false,
		element: <SistemaForm />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Sistema' },{ text: 'Visualização' }],
	},
];

export default routes;