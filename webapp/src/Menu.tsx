import HomeIcon from '@mui/icons-material/Home';
import ProjectIcon from '@mui/icons-material/SettingsSystemDaydream';

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
						id: 2,
						index: 4,
						path: '/app/geral/projeto',
						icon: ProjectIcon,
						label: 'Projeto',
					},
				],
			},
		],
	},
];