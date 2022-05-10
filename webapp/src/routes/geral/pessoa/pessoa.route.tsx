import { PessoaGrid } from '../../../pages/geral/pessoa/components/pessoa.grid';
import { PessoaForm } from '../../../pages/geral/pessoa/components/pessoa.form';

const base = '/app/geral/pessoa';

export const PessoaRoute = [
	{
		path: base,
		children: [
			{
				path: `${base}`,
				element: <PessoaGrid />,
			},
			{
				path: `${base}/add`,
				element: <PessoaForm />,
			},
			{
				path: `${base}/edit/:id`,
				element: <PessoaForm />,
			},
			{
				path: `${base}/view/:id`,
				element: <PessoaForm />,
			},
		],
	},
];