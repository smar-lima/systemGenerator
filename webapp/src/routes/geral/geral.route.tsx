import { CidadeRoute } from './cidade/cidade.route';
import { PessoaRoute } from './pessoa/pessoa.route';

const base = '/app/geral';

export const GeralRoute = [
	{
		path: `${base}`,
		children: CidadeRoute,
	},
	{
		path: `${base}`,
		children: PessoaRoute,
	}
];