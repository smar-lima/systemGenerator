/* eslint-disable indent */
import RouteType from '../../../shared/types/route.types';
import { CidadeGrid } from '../../../pages/geral/cidade/components/cidade.grid';
import { CidadeForm } from '../../../pages/geral/cidade/components/cidade.form';

const base = '/app/geral/cidade';

const routes: Array<RouteType> = [
	{
		name: 'app.geral.cidade',
		path: `${base}`,
		accessControl: false,
		element: <CidadeGrid />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Cidade' }],
	},
	{
		name: 'app.geral.cidade.add',
		path: `${base}/add`,
		accessControl: false,
		element: <CidadeForm />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Cidade' },{ text: 'Inclusão' }],
	}, 
	{
		name: 'app.geral.cidade.edit',
		path: `${base}/addedit/:id`,
		accessControl: false,
		element: <CidadeForm />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Cidade' },{ text: 'Edição' }]
	},
	{
		name: 'app.geral.cidade.view',
		path: `${base}/view/:id`,
		accessControl: false,
		element: <CidadeForm />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Cidade' },{ text: 'Visualização' }],
	},
];

export default routes;