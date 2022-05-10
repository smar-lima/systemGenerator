import HomeIcon from '@mui/icons-material/Home';
import CidadeIcon from '@mui/icons-material/LocationCity';
import PersonIcon from '@mui/icons-material/Person';

const base = '/app';

export const MenuList = [
	{
		id: 1,
		items: [
			{
				id: 1,
				index: 1,
				label: 'Home',
				icon: HomeIcon,
				path: `${base}/home`,
			},
		],
	},
	{
		id: 2,
		items: [
			{
				id: 1,
				index: 2,
				label: 'Geral',
				subitems: [
					{
						id: 1,
						index: 3,
						path: '/app/geral/cidade',
						icon: CidadeIcon,
						label: 'Cidade',
					},
					{
						id: 2,
						index: 4,
						path: '/app/geral/pessoa',
						icon: PersonIcon,
						label: 'Pessoa',
					},
				],
			},
		],
	},
];