import { PessoaGrid } from '../../../pages/geral/pessoa/components/pessoa.grid';
import { PessoaForm } from '../../../pages/geral/pessoa/components/pessoa.form';
import RouteType from '../../../shared/types/route.types';

const base = '/app/geral/pessoa';

const routes: Array<RouteType> = [
	{
		name: 'app.geral.pessoa',
		path: `${base}`,
		accessControl: false,
		element: <PessoaGrid />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Pessoa' }],
	},
	{
		name: 'app.geral.pessoa.add',
		path: `${base}/add`,
		accessControl: false,
		element: <PessoaForm />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Pessoa' },{ text: 'Inclusão' }],
	}, 
	{
		name: 'app.geral.pessoa.edit',
		path: `${base}/addedit/:id`,
		accessControl: false,
		element: <PessoaForm />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Pessoa' },{ text: 'Edição' }]
	},
	{
		name: 'app.geral.pessoa.view',
		path: `${base}/view/:id`,
		accessControl: false,
		element: <PessoaForm />,
		breadCrumb: [{ text: 'Geral' }, { text: 'Pessoa' },{ text: 'Visualização' }],
	},
];

export default routes;